import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { FaExternalLinkAlt } from 'react-icons/fa';

const AllProjects = () => {
    return (
        <div className="pb-20">
            <h1 className="text-3xl font-bold mb-8 text-gray-100">All Projects</h1>

            <div className="columns-1 md:columns-2 gap-6 space-y-6">
                {PROJECTS.map(project => (
                    <div key={project.id} className="break-inside-avoid bg-[#1e1e1e] rounded-xl border border-[#333] overflow-hidden hover:border-[#444] transition-all hover:shadow-lg group mb-6">
                        {project.image && (
                            <div className="w-full relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                        )}

                        <div className="p-6">
                            <div className="flex items-start justify-between mb-3">
                                <Link to={`/project/${project.id}`} className="hover:underline">
                                    <h2 className="text-xl font-bold text-gray-100">{project.title}</h2>
                                </Link>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400">
                                    <FaExternalLinkAlt size={14} />
                                </a>
                            </div>

                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags?.map(tag => (
                                    <span key={tag} className="text-xs font-medium px-2 py-1 bg-[#2a2a2a] text-gray-300 rounded-md border border-[#333]">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                                <Link
                                    to={`/project/${project.id}`}
                                    className="text-sm font-bold text-blue-500 hover:text-blue-400 flex items-center gap-1"
                                >
                                    View Details &rarr;
                                </Link>
                                {project.status && (
                                    <span className="text-xs text-gray-600 uppercase tracking-widest font-bold">{project.status}</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllProjects;
