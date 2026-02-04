import { useState, useEffect } from 'react';
import type { BlogPost } from '../data/blogs';
import { getBlogs } from '../services/blogService';
import { FaShare, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllBlogs = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const fetchedPosts = await getBlogs();
                setPosts(fetchedPosts);
                setFilteredPosts(fetchedPosts);
            } catch (err) {
                console.error("Failed to load posts", err);
                setError("Failed to load blogs. Please check your connection or configuration.");
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    useEffect(() => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filtered = posts.filter(post =>
            post.title.toLowerCase().includes(lowerCaseQuery) ||
            post.excerpt.toLowerCase().includes(lowerCaseQuery) ||
            post.subreddit.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredPosts(filtered);
    }, [searchQuery, posts]);


    return (
        <div className="flex flex-col gap-4 pb-20">
            {/* Search Header */}
            <div className="bg-[#1e1e1e] rounded-lg border border-[#333] p-4 flex gap-3 items-center sticky top-20 z-10 shadow-md">
                <FaSearch className="text-gray-500" />
                <input
                    type="text"
                    placeholder="Search blogs..."
                    className="flex-1 bg-[#2a2a2a] border border-[#333] rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {loading ? (
                <div className="flex flex-col gap-4 animate-pulse">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="bg-[#1e1e1e] rounded-lg border border-[#333] h-40"></div>
                    ))}
                </div>
            ) : error ? (
                <div className="bg-[#1e1e1e] rounded-lg border border-red-900/30 p-8 text-center text-red-400">
                    {error}
                </div>
            ) : filteredPosts.length === 0 ? (
                <div className="bg-[#1e1e1e] rounded-lg border border-[#333] p-8 text-center text-gray-500">
                    No blogs found.
                </div>
            ) : (
                filteredPosts.map(post => (
                    <Link to={`/blog/${post.id}`} key={post.id}>
                        <div className="bg-[#1e1e1e] rounded-lg border border-[#333] overflow-hidden hover:border-[#444] transition-colors cursor-pointer group mb-4 last:mb-0">
                            <div className="flex">

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
                                        <button
                                            className="flex items-center gap-2 text-gray-500 text-xs font-bold hover:bg-[#2a2a2a] px-2 py-1 rounded transition-colors"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const url = `${window.location.origin}/blog/${post.id}`;
                                                navigator.clipboard.writeText(url);
                                                alert("Link copied to clipboard!");
                                            }}
                                        >
                                            <span className="text-sm px-1 py-0.5"><FaShare /></span>
                                            Share
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
};

export default AllBlogs;
