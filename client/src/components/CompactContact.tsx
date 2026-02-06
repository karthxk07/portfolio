// cleaned imports
import { useState, useEffect } from 'react';

const CompactContact = () => {
    const [highlight, setHighlight] = useState(false);

    useEffect(() => {
        const handleHighlight = () => {
            setHighlight(true);
            setTimeout(() => setHighlight(false), 1000);
        };

        window.addEventListener('highlight-contact', handleHighlight);
        return () => window.removeEventListener('highlight-contact', handleHighlight);
    }, []);

    return (
        <div id="contact-section" className={`bg-[#1e1e1e] rounded-lg border border-[#333] p-4 shadow-sm mt-4 transition-all duration-500 ${highlight ? 'ring-2 ring-blue-500 bg-[#252525]' : ''}`}>
            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">Contact Me</h3>
            <form
                className="space-y-3"
            >
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-[#2a2a2a] p-2 rounded text-sm border border-[#333] focus:outline-none focus:border-blue-500 text-gray-200"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-[#2a2a2a] p-2 rounded text-sm border border-[#333] focus:outline-none focus:border-blue-500 text-gray-200"
                />
                <textarea
                    placeholder="Message"
                    rows={3}
                    className="w-full bg-[#2a2a2a] p-2 rounded text-sm border border-[#333] focus:outline-none focus:border-blue-500 text-gray-200 resize-none"
                />
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition-colors"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default CompactContact;
