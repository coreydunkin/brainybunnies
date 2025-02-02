'use client';
import Image from 'next/image';
import { useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import "swiper/css";
import Link from "next/link";

const STORAGE_KEY = 'instagram_posts';
const EXPIRY_KEY = 'instagram_expiry';
const EXPIRY_DAYS = 14;

interface InstagramPost {
    post: Post;
}

interface Post {
    id: string;
    caption: string;
    media_url: string;
    postUrl: string;
}

export default function Gallery() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [retryCount, setRetryCount] = useState(0);

    const isStorageExpired = () => {
        const expiryDate = localStorage.getItem(EXPIRY_KEY);
        return !expiryDate || new Date() > new Date(expiryDate);
    };

    const clearCache = useCallback(() => {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(EXPIRY_KEY);
    }, []);

    const fetchPosts = useCallback(async () => {
        try {
            const storedPosts = localStorage.getItem(STORAGE_KEY);

            if (storedPosts && !isStorageExpired()) {
                setPosts(JSON.parse(storedPosts));
                setLoading(false);
                return;
            }

            const response = await fetch('/api/instagram');
            const data = await response.json();
            const filteredPosts = data.slice(0, 9);

            localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredPosts));
            localStorage.setItem(EXPIRY_KEY, new Date(Date.now() + EXPIRY_DAYS * 24 * 60 * 60 * 1000).toISOString());

            setPosts(filteredPosts);
        } catch (error) {
            console.error('Error fetching posts:', error);
            const storedPosts = localStorage.getItem(STORAGE_KEY);
            if (storedPosts) {
                setPosts(JSON.parse(storedPosts));
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts, retryCount]);

    const handleImageError = useCallback(() => {
        // Only retry once to prevent infinite loops
        if (retryCount === 0) {
            console.log('Image load failed, clearing cache and retrying fetch');
            clearCache();
            setRetryCount(prev => prev + 1);
            setLoading(true);
        }
    }, [clearCache, retryCount]);

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    const InstagramPost = ({ post }: InstagramPost) => (
        <Link
            href={post.postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square relative overflow-hidden rounded-lg bg-orange-500 group text-center"
        >
            <Image
                src={`//wsrv.nl/?url=${encodeURIComponent(post.media_url)}&w=234&h=234`}
                alt={post.caption || 'Instagram post'}
                unoptimized={true}
                className="object-cover hover:opacity-70 transition-opacity min-[430px]:max-h-[100px] min-[350px]:max-h-[90px] min-[640px]:max-h-[234px]"
                height={234}
                width={234}
                onError={handleImageError}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-orange-500/90 rounded-full pt-3.5 pb-3 px-4">
                    <i className="fab fa-instagram text-3xl text-white"></i>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-orange-500/80 p-1">
                <p className="text-white text-sm truncate">
                    {post.caption?.slice(0, 12)}
                    {post.caption?.length > 12 && '... '}
                    <span className="font-semibold">view post</span>
                </p>
            </div>
        </Link>
    );

    return (
        <>
            <div className="sm:hidden max-[349px]:hidden max-w-[500px] min-[350px]:max-w-[300px] min-[430px]:max-w-[350px] overflow-hidden mx-auto">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        350: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        }
                    }}
                >
                    {posts.map((post) => (
                        <SwiperSlide key={post.id}>
                            <InstagramPost post={post} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="hidden sm:grid grid-cols-3 gap-4 max-w-3xl mx-auto">
                {posts.map((post) => (
                    <InstagramPost key={post.id} post={post} />
                ))}
            </div>
        </>
    );
}