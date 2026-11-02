import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        projects: resolve(__dirname, 'projects.html'),
        invesmart: resolve(__dirname, 'invesmart.html'),
        nriDesk: resolve(__dirname, 'nri-desk.html'),
        blog: resolve(__dirname, 'blog.html'),
        contact: resolve(__dirname, 'contact.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        palmValley: resolve(__dirname, 'palm-valley.html'),
        teakVillage: resolve(__dirname, 'teak-village.html'),
        vistaraValley: resolve(__dirname, 'vistara-valley.html'),
        landing: resolve(__dirname, 'landing.html'),
        thankYou: resolve(__dirname, 'thank-you.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy.html'),
        termsDisclaimer: resolve(__dirname, 'terms-disclaimer.html'),
        careers: resolve(__dirname, 'careers.html'),
        logoThemes: resolve(__dirname, 'logo-themes.html'),
        notFound: resolve(__dirname, '404.html'),
      },
    },
  },
});
