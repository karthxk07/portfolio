import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import type { Project } from '../data/projects';
import { getBlogs } from '../services/blogService';
import type { BlogPost } from '../data/blogs';
import { FaGithub, FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectView = () => {
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [relatedBlogs, setRelatedBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjectData = async () => {
            setLoading(true);
            // Find project
            const foundProject = PROJECTS.find(p => p.id === id);
            setProject(foundProject || null);

            if (foundProject && foundProject.associatedBlogs && foundProject.associatedBlogs.length > 0) {
                try {
                    // In a real app, we might query by array-contains, but here we fetch all and filter
                    const allBlogs = await getBlogs();
                    const related = allBlogs.filter(blog => foundProject.associatedBlogs?.includes(blog.id));
                    setRelatedBlogs(related);
                } catch (error) {
                    console.error("Error fetching related blogs", error);
                }
            }
            setLoading(false);
        };

        fetchProjectData();
    }, [id]);

    if (!project && !loading) return <div className="text-center py-20 text-gray-500">Project not found</div>;

    return (
        <div className="pb-20 max-w-4xl mx-auto">
            <Link to="/projects" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 mb-8 transition-colors">
                <FaArrowLeft /> Back to Projects
            </Link>

            {loading ? (
                <div className="animate-pulse">
                    <div className="h-64 bg-[#1e1e1e] rounded-xl mb-8"></div>
                    <div className="h-10 bg-[#1e1e1e] w-1/2 rounded mb-4"></div>
                    <div className="h-4 bg-[#1e1e1e] w-full rounded mb-2"></div>
                    <div className="h-4 bg-[#1e1e1e] w-3/4 rounded"></div>
                </div>
            ) : project && (
                <>
                    {/* Header Section */}
                    <div className="mb-12">
                        {project.image && (
                            <div className="rounded-2xl overflow-hidden mb-8 shadow-xl border border-[#333]">
                                <img src={project.image} alt={project.title} className="w-full h-auto object-cover max-h-[500px]" />
                            </div>
                        )}

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <h1 className="text-4xl font-bold text-white">{project.title}</h1>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] hover:bg-[#333] text-white rounded-lg transition-colors border border-[#333]"
                            >
                                <FaGithub /> View Code <FaExternalLinkAlt size={12} className="ml-1" />
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags?.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-sm font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed">
                            <p>{project.description}</p>
                        </div>
                    </div>

                    {/* Related Blogs Section */}
                    {relatedBlogs.length > 0 && (
                        <div className="border-t border-[#333] pt-12">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                                Related Updates
                            </h2>
                            <div className="grid grid-cols-1 gap-6">
                                {relatedBlogs.map(blog => (
                                    <Link key={blog.id} to={`/blog/${blog.id}`} className="block group">
                                        <div className="bg-[#1e1e1e] p-6 rounded-xl border border-[#333] group-hover:border-[#555] transition-all">
                                            <h3 className="text-xl font-bold text-gray-200 mb-2 group-hover:text-blue-400 transition-colors">{blog.title}</h3>
                                            <p className="text-gray-400">{blog.excerpt}</p>
                                            <div className="mt-4 text-sm text-gray-600 flex items-center gap-2">
                                                <span>{blog.date}</span>
                                                <span>•</span>
                                                <span>Read Update &rarr;</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default ProjectView;
