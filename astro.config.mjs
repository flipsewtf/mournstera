// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://mournstera.me',
    integrations: [sitemap()],
    markdown: {
        syntaxHighlight: false,
    },
});
