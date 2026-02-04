import { useState, useEffect } from 'react';
import type { BlogPost } from '../../data/blogs';
import { getBlogs } from '../../services/blogService';
import { FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface BlogListProps {
    limit?: number;
}

const BlogList = ({ limit }: BlogListProps) => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            setError(null);
            try {
                const fetchedPosts = await getBlogs();
                setPosts(fetchedPosts);
            } catch (err) {
                console.error("Failed to load posts", err);
                setError("Failed to load updates. Please check your connection or configuration.");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col gap-4 animate-pulse">
                {[1, 2, 3].map(i => (
                    <div key={i} className="bg-[#1e1e1e] rounded-lg border border-[#333] h-40"></div>
                ))}
            </div>
        )
    }

    if (error) {
        return (
            <div className="bg-[#1e1e1e] rounded-lg border border-red-900/30 p-8 text-center">
                <p className="text-red-400 font-medium mb-2">Error</p>
                <p className="text-gray-400 text-sm">{error}</p>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="bg-[#1e1e1e] rounded-lg border border-[#333] p-8 text-center text-gray-500">
                No updates available.
            </div>
        )
    }

    const displayedPosts = limit ? posts.slice(0, limit) : posts;

    return (
        <div className="flex flex-col gap-4">
            {/* Create Post Input Mock (Only on full feed or main view? Keeping it visual for now) */}
            {!limit && (
                <div className="bg-[#1e1e1e] rounded-lg border border-[#333] p-4 flex gap-3 items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex-shrink-0"></div>
                    <input
                        type="text"
                        placeholder="What's on your mind?"
                        className="flex-1 bg-[#2a2a2a] border border-[#333] rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                        readOnly
                    />
                </div>
            )}

            {displayedPosts.map(post => (
                <Link to={`/blog/${post.id}`} key={post.id}>
                    <div className="bg-[#1e1e1e] rounded-lg border border-[#333] overflow-hidden hover:border-[#444] transition-colors cursor-pointer group mb-4 last:mb-0">
                        <div className="flex">
                            {/* Vote Column */}

                            {/* Content */}
                            <div className="flex-1 p-3">
                                <div className="flex items-center gap-2 mb-1 text-xs text-gray-500">
                                    <span className="font-bold text-gray-300">{post.subreddit}</span>
                                    <span>•</span>
                                    <span>Posted by {post.author}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                </div>
                                <h2 className="text-lg font-medium text-gray-100 mb-2 group-hover:underline decoration-gray-500 underline-offset-2">{post.title}</h2>
                                <p className="text-sm text-gray-400 mb-4">{post.excerpt}</p>

                                <div className="flex gap-4">
                                    {/* Comment removed as requested */}
                                    <ActionButton
                                        icon={<FaShare />}
                                        label="Share"
                                        postId={post.id}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const url = `${window.location.origin}/blog/${post.id}`;
                                            navigator.clipboard.writeText(url);
                                            alert("Link copied to clipboard!");
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}

            {limit && posts.length > limit && (
                <Link to="/blogs" className="block w-full py-3 bg-[#1e1e1e] border border-[#333] text-center text-blue-400 font-medium rounded-lg hover:bg-[#252525] transition-colors">
                    View More Updates
                </Link>
            )}
        </div>
    );
};

const ActionButton = ({ icon, label, onClick }: { icon: any, label: string, onClick?: (e: any) => void }) => (
    <button onClick={onClick} className="flex items-center gap-2 text-gray-500 text-xs font-bold hover:bg-[#2a2a2a] px-2 py-1 rounded transition-colors">
        <span className="text-sm">{icon}</span>
        {label}
    </button>
)

export default BlogList;
