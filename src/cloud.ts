/**
 * The reader's Google account, and the one document their progress is mirrored
 * to. This module knows how to sign in and how to read and write a single blob
 * of text; what that text means, and which copy wins when two disagree, is
 * decided in `progress.ts`.
 *
 * The site is a static page with no server of its own, so signing in is the
 * browser-side OAuth token flow of Google Identity Services, and the store is
 * the reader's own Drive - the hidden `appDataFolder`, which only this app can
 * see and which adds no visible file to their Drive. Nothing secret ships with
 * the app: an OAuth *client id* is public by design, and the access token it
 * buys is held in memory only. It never reaches `localStorage` and it expires
 * within the hour.
 *
 * What does survive a reload is the bare fact that the reader signed in, and
 * under which address - enough to show the account straight away and to ask
 * Google for a new token without a popup. A silent request that Google refuses
 * leaves the tab signed out with the local record untouched; nothing is ever
 * lost by failing to reach the network.
 *
 * Signing out drops the token and forgets the account here. It deliberately
 * does not revoke the grant: the reader keeps their consent, so signing back in
 * is one click rather than the consent screen again, and revoking is theirs to
 * do from their Google account page.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

/** Public by design. Empty in a checkout that configured none - and then the
 *  whole feature stays out of the UI rather than offering a button that fails. */
const CLIENT_ID: string = (import.meta.env.VITE_GOOGLE_CLIENT_ID ?? '').trim();

const GIS_SRC = 'https://accounts.google.com/gsi/client';
/** `drive.appdata` is the extent of it - no access to anything the reader owns. */
const SCOPES = 'openid email profile https://www.googleapis.com/auth/drive.appdata';
const DRIVE = 'https://www.googleapis.com/drive/v3/files';
const DRIVE_UPLOAD = 'https://www.googleapis.com/upload/drive/v3/files';
const USERINFO = 'https://www.googleapis.com/oauth2/v3/userinfo';
const DOC = 'progress.json';
/** Remembers *that* the reader signed in, and as whom. Never the token. */
const KEY = 'moebius-atlas-google';

/** How long a silent token request may hang before it counts as refused. */
const SILENT_MS = 20_000;
/** The interactive one waits on a human reading a consent screen. */
const PROMPT_MS = 180_000;

// --- Google Identity Services --------------------------------------------
// Typed by hand rather than by adding @types/google.accounts: two calls are
// used, and the package would be a dependency for a dozen lines of interface.

interface TokenResponse {
  access_token?: string;
  expires_in?: number;
  error?: string;
}

interface TokenClient {
  requestAccessToken: (o?: { prompt?: string; hint?: string }) => void;
}

interface Gis {
  accounts: {
    oauth2: {
      initTokenClient: (c: {
        client_id: string;
        scope: string;
        callback: (r: TokenResponse) => void;
        error_callback?: (e: unknown) => void;
      }) => TokenClient;
    };
  };
}

declare global {
  interface Window {
    google?: Gis;
  }
}

let loading: Promise<Gis> | null = null;

/**
 * Loads the GIS script once. A failed load forgets the promise, so a later
 * attempt retries instead of inheriting the rejection for the rest of the page.
 */
function gis(): Promise<Gis> {
  loading ??= new Promise<Gis>((resolve, reject) => {
    if (window.google?.accounts?.oauth2) return resolve(window.google);
    const el = document.createElement('script');
    el.src = GIS_SRC;
    el.async = true;
    el.onload = () =>
      window.google?.accounts?.oauth2 ? resolve(window.google) : reject(new Error('google: script loaded empty'));
    el.onerror = () => reject(new Error('google: script blocked'));
    document.head.appendChild(el);
  }).catch((e: unknown) => {
    loading = null;
    throw e;
  });
  return loading;
}

let client: TokenClient | null = null;
/** Resolver of the request in flight - GIS answers every one through the same
 *  pair of callbacks, so the caller waiting on it is kept here. */
let pending: ((r: TokenResponse | null) => void) | null = null;
let token: { value: string; until: number } | null = null;

/** One round trip to GIS. `null` means refused, blocked, or never answered. */
async function askGoogle(silent: boolean, hint?: string): Promise<TokenResponse | null> {
  const api = await gis();
  const settle = (r: TokenResponse | null) => {
    const p = pending;
    pending = null;
    p?.(r);
  };
  const tokens = (client ??= api.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: settle,
    error_callback: () => settle(null),
  }));

  return new Promise<TokenResponse | null>((resolve) => {
    // A popup closed by the window manager, or a silent request Google decides
    // not to answer at all, would otherwise leave this hanging for good.
    const timer = setTimeout(() => settle(null), silent ? SILENT_MS : PROMPT_MS);
    pending = (r) => {
      clearTimeout(timer);
      resolve(r);
    };
    tokens.requestAccessToken(silent ? { prompt: '', hint } : { prompt: 'select_account' });
  });
}

/** A valid access token, reused while it still has a minute of life left. */
async function accessToken(silent: boolean, hint?: string): Promise<string> {
  if (token && token.until - 60_000 > Date.now()) return token.value;
  const r = await askGoogle(silent, hint);
  if (!r?.access_token) throw new Error(r?.error ? `google: ${r.error}` : 'google: no token');
  token = { value: r.access_token, until: Date.now() + (r.expires_in ?? 3600) * 1000 };
  return token.value;
}

// --- Drive ----------------------------------------------------------------

class HttpError extends Error {
  constructor(readonly status: number, url: string) {
    super(`google: ${status} from ${url}`);
  }
}

async function call(url: string, tok: string, init?: RequestInit): Promise<Response> {
  const r = await fetch(url, {
    ...init,
    headers: { ...init?.headers, Authorization: `Bearer ${tok}` },
  });
  if (!r.ok) throw new HttpError(r.status, url);
  return r;
}

/** Id of the app-folder document, once found. Cleared on sign-out. */
let docId: string | null = null;

async function locate(tok: string): Promise<string | null> {
  if (docId) return docId;
  const q = encodeURIComponent(`name = '${DOC}' and trashed = false`);
  const r = await call(`${DRIVE}?spaces=appDataFolder&q=${q}&fields=files(id)&pageSize=1`, tok);
  const j = (await r.json()) as { files?: { id?: string }[] };
  docId = j.files?.[0]?.id ?? null;
  return docId;
}

/** The stored text, or `null` when this account has never saved anything. */
async function readDoc(tok: string): Promise<string | null> {
  const id = await locate(tok);
  if (!id) return null;
  return (await call(`${DRIVE}/${id}?alt=media`, tok)).text();
}

async function writeDoc(tok: string, text: string): Promise<void> {
  const id = await locate(tok);
  if (id) {
    await call(`${DRIVE_UPLOAD}/${id}?uploadType=media`, tok, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: text,
    });
    return;
  }
  // First save: metadata and content go up together, or Drive would hold an
  // empty file until a second request filled it.
  const bound = 'moebius-atlas-boundary';
  const meta = JSON.stringify({ name: DOC, parents: ['appDataFolder'] });
  const body =
    `--${bound}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${meta}\r\n` +
    `--${bound}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${text}\r\n` +
    `--${bound}--`;
  const r = await call(`${DRIVE_UPLOAD}?uploadType=multipart&fields=id`, tok, {
    method: 'POST',
    headers: { 'Content-Type': `multipart/related; boundary=${bound}` },
    body,
  });
  docId = ((await r.json()) as { id?: string }).id ?? null;
}

async function fetchAccount(tok: string): Promise<CloudAccount> {
  const j = (await (await call(USERINFO, tok)).json()) as Record<string, unknown>;
  const email = typeof j.email === 'string' ? j.email : '';
  return {
    email,
    name: typeof j.name === 'string' && j.name ? j.name : email,
    picture: typeof j.picture === 'string' ? j.picture : null,
  };
}

// --- The account, as the app sees it --------------------------------------

export interface CloudAccount {
  email: string;
  name: string;
  /** Avatar URL served by Google; absent on accounts that have none. */
  picture: string | null;
}

/**
 * `off` - nobody signed in; `connecting` - asking Google; `on` - in sync;
 * `error` - signed in as far as this tab knows, but the last call failed.
 */
export type CloudStatus = 'off' | 'connecting' | 'on' | 'error';

/** What the menu draws. The sync itself needs more - see `CloudCtx`. */
export interface CloudInfo {
  /** False when no client id was built in: the whole row stays hidden. */
  configured: boolean;
  status: CloudStatus;
  account: CloudAccount | null;
  /** A read or a write is in flight. */
  busy: boolean;
  signIn: () => void;
  signOut: () => void;
}

export interface CloudCtx extends CloudInfo {
  /** The stored document, `null` when the account has none yet. */
  pull: () => Promise<string | null>;
  push: (text: string) => Promise<void>;
}

function remembered(): CloudAccount | null {
  try {
    const r = JSON.parse(localStorage.getItem(KEY) ?? 'null') as Partial<CloudAccount> | null;
    if (!r || typeof r.email !== 'string' || !r.email) return null;
    return {
      email: r.email,
      name: typeof r.name === 'string' && r.name ? r.name : r.email,
      picture: typeof r.picture === 'string' ? r.picture : null,
    };
  } catch {
    return null;
  }
}

function remember(a: CloudAccount | null): void {
  try {
    if (a) localStorage.setItem(KEY, JSON.stringify(a));
    else localStorage.removeItem(KEY);
  } catch {
    /* private mode - the reader signs in again next visit */
  }
}

/** Everything a sign-out has to undo, here and in the module-level caches. */
function forget(): void {
  token = null;
  docId = null;
  remember(null);
}

/**
 * Owns the connection. Mounted once, by `useProgressStore`, which publishes the
 * narrow half of it through the progress context.
 */
export function useCloud(): CloudCtx {
  const configured = !!CLIENT_ID;
  const known = configured ? remembered() : null;
  const [account, setAccount] = useState<CloudAccount | null>(known);
  const [status, setStatus] = useState<CloudStatus>(known ? 'connecting' : 'off');
  const [busy, setBusy] = useState(false);
  /** Address the silent request asks for. A ref: changing it is not a render. */
  const hint = useRef(known?.email);

  // Loaded ahead of the click: `requestAccessToken` opens a popup, and waiting
  // on a script download first would spend the user gesture that allows it.
  useEffect(() => {
    if (configured) void gis().catch(() => {});
  }, [configured]);

  const connect = useCallback(async (silent: boolean) => {
    setStatus('connecting');
    try {
      const tok = await accessToken(silent, hint.current);
      const acc = await fetchAccount(tok);
      hint.current = acc.email;
      remember(acc);
      setAccount(acc);
      setStatus('on');
    } catch {
      // A silent attempt is a guess, so its failure is not an error to report:
      // the reader is simply signed out, and the button invites them back in.
      forget();
      hint.current = undefined;
      setAccount(null);
      setStatus(silent ? 'off' : 'error');
    }
  }, []);

  // A remembered account reconnects on its own, without a popup. StrictMode
  // mounts effects twice, so the attempt is armed once and disarmed by use.
  const armed = useRef(!!known);
  useEffect(() => {
    if (!armed.current) return;
    armed.current = false;
    void connect(true);
  }, [connect]);

  const signIn = useCallback(() => void connect(false), [connect]);

  const signOut = useCallback(() => {
    forget();
    hint.current = undefined;
    setAccount(null);
    setStatus('off');
  }, []);

  /**
   * Runs one Drive call on a fresh-enough token. A 401 means the token was
   * withdrawn early rather than expired, so it is dropped and asked for once
   * more before the call is given up on.
   */
  const withToken = useCallback(async <T>(run: (tok: string) => Promise<T>): Promise<T> => {
    setBusy(true);
    try {
      try {
        return await run(await accessToken(true, hint.current));
      } catch (e) {
        if (!(e instanceof HttpError) || e.status !== 401) throw e;
        token = null;
        return await run(await accessToken(true, hint.current));
      }
    } catch (e) {
      setStatus('error');
      throw e;
    } finally {
      setBusy(false);
    }
  }, []);

  const pull = useCallback(async (): Promise<string | null> => {
    const text = await withToken(readDoc);
    setStatus('on');
    return text;
  }, [withToken]);

  const push = useCallback(
    async (text: string): Promise<void> => {
      await withToken((tok) => writeDoc(tok, text));
      setStatus('on');
    },
    [withToken],
  );

  return useMemo(
    () => ({ configured, status, account, busy, signIn, signOut, pull, push }),
    [configured, status, account, busy, signIn, signOut, pull, push],
  );
}
