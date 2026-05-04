import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// EDIT: change base to '/your-repo-name/' for GitHub Pages, or '/' for Vercel
export default defineConfig({
  plugins: [react()],
  base: '/',
});
