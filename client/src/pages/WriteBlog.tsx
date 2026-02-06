import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

const WriteBlog = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const key = searchParams.get('key');
    const ADMIN_KEY = import.meta.env.VITE_ADMIN_KEY;

    const [title, setTitle] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    // Simple access control
    if (!ADMIN_KEY || key !== ADMIN_KEY) {
        return (
            <div className="flex h-screen items-center justify-center text-red-500 font-bold text-xl">
                Access Denied
            </div>
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await addDoc(collection(db, "posts"), {
                title,
                excerpt,
                content,
                date: new Date().toISOString(), // Or formatted string
                subreddit: 'r/personal', // Default or add field
                author: 'u/karthik', // Hardcoded for now
                upvotes: 0,
                commentCount: 0,
                createdAt: new Date()
            });
            alert("Blog posted successfully!");
            navigate('/blogs');
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Error posting blog");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-[#1e1e1e] rounded-lg border border-[#333] my-10 text-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-center">Write a New Blog</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full bg-[#2a2a2a] border border-[#333] rounded p-2 focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Excerpt</label>
                    <textarea
                        required
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        className="w-full bg-[#2a2a2a] border border-[#333] rounded p-2 focus:outline-none focus:border-blue-500 h-24"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Content</label>
                    <textarea
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full bg-[#2a2a2a] border border-[#333] rounded p-2 focus:outline-none focus:border-blue-500 h-64"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50"
                >
                    {loading ? 'Publishing...' : 'Publish Blog'}
                </button>
            </form>
        </div>
    );
};

export default WriteBlog;
