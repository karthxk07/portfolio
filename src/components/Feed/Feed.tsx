import Banner from '../Banner';
import BlogList from './BlogList';
import MainProjects from '../MainProjects';

const Feed = ({ limit }: { limit?: number }) => {
    return (
        <div className="flex flex-col w-full pb-20">
            {/* Create Post Input (Visual only) */}

            {/* Intro / Banner - Only show on Home (when limit is present) or always? User said "homepage preview", implying changes. 
                Let's keep Banner on "Home" (limit set) but maybe hide on full feed? 
                Actually, simpler to keep it for now or just check limit. 
                Let's assume Feed is mostly for Home, and AllBlogs is a separate page component. 
            */}
            {limit && <Banner />}

            {/* Separator / Feed Header */}
            <div className="flex items-center justify-between mb-4 px-2" id="feed-header">
                <h3 className="text-lg font-bold text-gray-300">{limit ? 'Latest Updates' : 'All Updates'}</h3>
                <div className="flex gap-2 text-xs font-medium text-gray-500 bg-[#1e1e1e] p-1 rounded-md border border-[#333]">
                    <span className="bg-[#333] text-gray-200 px-2 py-1 rounded cursor-pointer">New</span>
                </div>
            </div>

            {/* Blog Feed */}
            <BlogList limit={limit} />

            {/* Projects Section integrated into feed - Only show on Home */}
            {limit && (
                <div className="mt-8" id="projects">
                    <div className="flex items-center gap-2 mb-4 px-2">
                        <div className="h-[1px] bg-[#333] flex-1"></div>
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Selected Works</span>
                        <div className="h-[1px] bg-[#333] flex-1"></div>
                    </div>
                    <MainProjects />
                </div>
            )}
        </div>
    );
};

export default Feed;
