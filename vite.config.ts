import fs from 'fs';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

function copyRootImagesPlugin(): Plugin {
  return {
    name: 'copy-root-images',
    closeBundle() {
      const srcDir = path.resolve(__dirname, 'images');
      const destDir = path.resolve(__dirname, 'dist/images');
      if (fs.existsSync(srcDir)) {
        fs.mkdirSync(destDir, { recursive: true });
        fs.cpSync(srcDir, destDir, { recursive: true, force: true });
      }
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [copyRootImagesPlugin()],
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          projects: path.resolve(__dirname, 'projects.html'),
          skills: path.resolve(__dirname, 'skills.html'),
          funFacts: path.resolve(__dirname, 'fun-facts.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          notFound: path.resolve(__dirname, '404.html'),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
