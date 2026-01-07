import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('garden');

    // Sort posts by pubDate, newest first
    const sortedPosts = posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

    return rss({
        title: 'Flipse | Mournstera',
        description:
            'A personal garden, where web development meets autistic panic and chaos-eating energy.',
        site: context.site,
        items: sortedPosts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            updated: post.data.lastUpdated || post.data.pubDate,
            description: post.data.description,
            link: `/garden/${post.id}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}
