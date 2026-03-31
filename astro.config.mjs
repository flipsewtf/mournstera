// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://mournstera.wtf',
    integrations: [sitemap()],

    markdown: {
        syntaxHighlight: false,
    },

    vite: {
        resolve: {
            alias: {
                '@': '/src',
            },
        },
        server: {
            watch: {
                usePolling: true,
                interval: 100,
            },
        },
    },
});
