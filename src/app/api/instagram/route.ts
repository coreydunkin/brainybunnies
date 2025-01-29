import { NextResponse } from 'next/server';

interface InstagramPost {
    id: string;
    code: string;
    image_versions?: {
        items?: Array<{
            url: string;
        }>;
    };
    caption?: {
        text?: string;
    };
}

export async function GET() {
    const options: RequestInit = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY || '',
            'X-RapidAPI-Host': 'instagram-scraper-20252.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(
            'https://instagram-scraper-20252.p.rapidapi.com/v1.2/posts?username_or_id_or_url=brainybunnies',
            options
        );

        const data = await response.json();

        const posts = data.data?.items?.map((item: InstagramPost) => ({
            id: item.id,
            media_url: item.image_versions?.items?.[0]?.url,
            postUrl: `https://www.instagram.com/p/${item.code}`,
            caption: item.caption?.text
        })) || [];

        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}