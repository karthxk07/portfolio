import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import type { BlogPost } from '../data/blogs';
import { getBlogById } from '../services/blogService';
import { FaArrowLeft, FaShare } from 'react-icons/fa';

const BlogPostPage = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            if (!id) return;
            setLoading(true);
            try {
                const fetchedPost = await getBlogById(id);
                if (fetchedPost) {
                    setPost(fetchedPost);
                } else {
                    setError("Blog post not found.");
                }
            } catch (err) {
                console.error("Failed to load post", err);
                setError("Failed to load blog post.");
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    if (loading) return <div className="text-center py-20 animate-pulse text-gray-500">Loading post...</div>;

    if (error || !post) return (
        <div className="text-center py-20">
            <p className="text-red-400 mb-4">{error || "Post not found"}</p>
            <Link to="/" className="text-blue-500 hover:underline">Return Home</Link>
        </div>
    );

    return (
        <div className="pb-20">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 mb-6 transition-colors">
                <FaArrowLeft /> Back to Feed
            </Link>

            <div className="bg-[#1e1e1e] rounded-lg border border-[#333] overflow-hidden">
                <div className="flex">

                    <div className="flex-1 p-6 md:p-8">
                        <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                            <span className="font-bold text-gray-300 bg-[#2a2a2a] px-2 py-0.5 rounded text-xs">{post.subreddit}</span>
                            <span>•</span>
                            <span>Posted by {post.author}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6 leading-tight">{post.title}</h1>

                        <div className="prose prose-invert max-w-none text-gray-300 mb-8 whitespace-pre-wrap">
                            <ReactMarkdown>
                                {post.content}
                            </ReactMarkdown>
                        </div>

                        <div className="flex gap-4 border-t border-[#333] pt-4">
                            <button
                                className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
                                onClick={() => {
                                    const url = `${window.location.origin}/blog/${post.id}`;
                                    navigator.clipboard.writeText(url);
                                    alert("Link copied to clipboard!");
                                }}
                            >
                                <FaShare /> Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;
