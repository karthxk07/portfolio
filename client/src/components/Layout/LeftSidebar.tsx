import React from 'react';
import { FaGithub, FaHome, FaLinkedin, FaProjectDiagram, FaTwitter } from 'react-icons/fa';
import { useLocation, Link } from 'react-router-dom';
import logoimage from '../../assets/logoimage.jpeg';
import { PROJECTS } from '../../data/projects';

const LeftSidebar = () => {
    const location = useLocation();

    // Logic for active state
    const isProjectsActive = location.pathname.startsWith('/projects') || location.pathname.startsWith('/project/');
    const isHomeActive = location.pathname === '/' && !location.hash;

    const sideProjects = PROJECTS.filter(p => p.status === 'Side Project');

    const socialLinks = [
        { icon: <FaGithub />, url: "https://github.com/karthxk07" },
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/karthik-kalyanam-53571b254/" },
        { icon: <FaTwitter />, url: "https://twitter.com/kalyanammm" },

    ];


    return (
        <aside className="hidden md:flex flex-col w-full h-fit sticky top-20 p-2 gap-4">
            {/* Mini Profile Card */}
            <div className="bg-[#1e1e1e] flex flex-col rounded-lg p-4 border border-[#333] shadow-sm  hover:bg-[#252525] transition-colors cursor-pointer">
                <div className='flex gap-3 items-center' >
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-[#333]">
                        <img src={logoimage} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-gray-200">Karthik</h3>
                        <p className="text-xs text-gray-500">Fullstack Developer</p>

                    </div>
                </div>
                <div className="flex justify-center items-center space-x-6 mt-4">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 text-lg hover:text-white hover:scale-125 transition-all"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-1">
                <Link to="/"><NavItem icon={<FaHome />} label="Home" active={isHomeActive} /></Link>
                <Link to="/projects"><NavItem icon={<FaProjectDiagram />} label="Projects" active={isProjectsActive} /></Link>
            </nav>

            {/* Side Projects Section */}
            <div className="bg-[#1e1e1e] rounded-lg border border-[#333] p-4 shadow-sm mt-2">
                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">Other Projects</h3>
                <div className="flex flex-col gap-3">
                    {sideProjects.map(project => (
                        <a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <h4 className="text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors flex items-center gap-1">
                                {project.title}
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">↗</span>
                            </h4>
                            <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">{project.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    );
};

const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
    <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-[#2a2a2a] text-blue-400' : 'text-gray-300 hover:bg-[#2a2a2a]'}`}>
        <span className="text-xl">{icon}</span>
        <span className="text-sm font-medium">{label}</span>
    </div>
);

export default LeftSidebar;
