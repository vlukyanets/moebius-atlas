import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' makes the build relocatable — it works both at the GitHub Pages
// project path (https://user.github.io/repo/) and at a custom domain root.
export default defineConfig({
  plugins: [react()],
  base: './',
});
