import {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://anandhu-a-s-portfolio-website.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
    ];
}
