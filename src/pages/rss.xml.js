import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteDescription } from '@/assets/data/site-desc';

export async function GET(context) {
    const posts = await getCollection('garden');

    // Sort posts by pubDate, newest first
    const sortedPosts = posts.sort(
        (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
    );

    return rss({
        title: 'Flipse | Mournstera',
        description: siteDescription,
        site: context.site,
        items: sortedPosts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            updated: post.data.lastUpdated || post.data.pubDate,
            description: post.data.description || '',
            content: post.body,
            link: `/garden/${post.id}/`,
        })),
        customData: `<language>en-US</language>`,
    });
}
