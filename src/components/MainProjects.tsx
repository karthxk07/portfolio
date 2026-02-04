// cleaned imports
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { FaGithub } from 'react-icons/fa';

const MainProjects = () => {
  const mainProjects = PROJECTS.filter(p => p.status === 'Main Project');
  // Separate the first one as "Feature" and rest as grid if desired, or just grid all.
  // Original layout had one big featured and then grid.
  // Let's assume the first one is featured.
  const featured = mainProjects[0];
  const others = mainProjects.slice(1);

  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Project Feature */}
        {featured && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20 bg-[#1e1e1e]/50 p-6 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
            <Link to={`/project/${featured.id}`} className="block relative group overflow-hidden rounded-2xl">
              {featured.image && (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </Link>

            <div>
              <Link to={`/project/${featured.id}`} className="hover:underline decoration-blue-500 underline-offset-4">
                <h2 className="text-4xl font-bold mb-4 text-white">
                  {featured.title}
                </h2>
              </Link>
              <p className="text-gray-300 leading-relaxed mb-6 line-clamp-4">
                {featured.description}
              </p>
              <div className="flex items-center gap-4">
                <Link
                  to={`/project/${featured.id}`}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  View Details
                </Link>
                <a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaGithub /> Source
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Other Main Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {others.map(project => (
            <div key={project.id} className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all group">
              <Link to={`/project/${project.id}`} className="block mb-4 overflow-hidden rounded-xl">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </Link>
              <Link to={`/project/${project.id}`}>
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
              </Link>
              <p className="text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>
              <Link to={`/project/${project.id}`} className="text-[#007AFF] hover:underline font-medium">
                View Project &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainProjects;
