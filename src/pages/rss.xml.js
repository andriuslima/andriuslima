import rss from '@astrojs/rss';
import { getCollection } from "astro:content";

export async function GET(context) {
    const posts = await getCollection("posts");
    return rss({
        title: 'Andrius’s Blog',
        description: "Software development, Scrum and anything else that is worth discussing",
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            date: post.data.date,
            description: post.data.description,
            link: `/posts/${post.id}`,
        })),
    });
}