// cleaned import
import CompactContact from '../CompactContact';

const RightSidebar = () => {
    return (
        <aside className="hidden lg:flex flex-col w-full h-fit sticky top-20 p-2 gap-4">
            {/* About Widget */}
            <div className="bg-[#1e1e1e] rounded-lg border border-[#333] p-4 shadow-sm">
                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">About this Portfolio</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                    This portfolio is designed with a vintage social media aesthetic. It mimics the structure of old-school forums and feeds to present my work in a familiar yet unique way.
                </p>
                <div className="mt-4 border-t border-[#333] pt-2 flex justify-between text-xs text-gray-500">
                    <span>v2.0.0</span>
                    <span>© 2026</span>
                </div>
            </div>

            {/* Simplified Skills / Suggestions Widget */}
            <div className="bg-[#1e1e1e] rounded-lg border border-[#333] p-4 shadow-sm">
                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                    <Tag label="React" />
                    <Tag label="TypeScript" />
                    <Tag label="Tailwind" />
                    <Tag label="Vite" />
                    <Tag label="Node.js" />
                </div>
            </div>
            {/* Simple Contact Form */}
            <CompactContact />
        </aside>
    );
};

const Tag = ({ label }: { label: string }) => (
    <span className="px-2 py-1 rounded bg-[#2a2a2a] text-gray-300 text-xs border border-[#333]">
        {label}
    </span>
);

export default RightSidebar;
