import logoimage from "../assets/logoimage.jpeg";
import { Link } from 'react-router-dom';

const Header = () => {
  // Header logic cleaned

  return (
    <header className="fixed top-0 left-0 w-full h-14 bg-[#1e1e1e] border-b border-[#333] z-50 flex items-center justify-between px-4 md:px-8 shadow-md">
      {/* Logo Area */}
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[#333]">
            <img src={logoimage} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent hidden md:block">
            karthik
          </h1>
        </Link>
      </div>

      {/* Navigation Icons (Center/Right) */}
      <nav className="flex items-center gap-1 md:gap-6">
        <Link to="/" className="p-2 rounded-lg hover:bg-[#2a2a2a] text-blue-500 relative transition-transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
        <Link to="/blogs" className="p-2 rounded-lg hover:bg-[#2a2a2a] text-gray-400 hover:text-gray-200 relative group transition-transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Blogs</span>
        </Link>
        <Link to="/projects" className="p-2 rounded-lg hover:bg-[#2a2a2a] text-gray-400 hover:text-gray-200 relative group transition-transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Projects</span>
        </Link>
        <a
          href="#contact"
          onClick={() => window.dispatchEvent(new CustomEvent('highlight-contact'))}
          className="p-2 rounded-lg hover:bg-[#2a2a2a] text-gray-400 hover:text-gray-200 relative group transition-transform hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Contact</span>
        </a>
      </nav>

      {/* Profile/Menu (Right) - Can essentially duplicate the left side or keep just profile */}
      <div className="flex items-center gap-3">
        {/* Optional: Add notification bell or similar if desired, but keeping clean as requested */}
      </div>
    </header>
  );
};

export default Header;
