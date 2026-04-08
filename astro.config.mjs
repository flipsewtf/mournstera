// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
    site: 'https://mournstera.wtf',
    integrations: [sitemap(), mdx()],

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
