import Header from './components/Header';
import LeftSidebar from './components/Layout/LeftSidebar';
import RightSidebar from './components/Layout/RightSidebar';
import Footer from './components/Footer';
import LoadingScreen from "./components/LoadingScreen";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

// Pages
import Home from './pages/Home';
import AllBlogs from './pages/AllBlogs';
import BlogPostPage from './pages/BlogPost';
import WriteBlog from './pages/WriteBlog';
import AllProjects from './pages/AllProjects';
import ProjectView from './pages/ProjectView';

// Import your assets
import bannerImage from "./assets/bannerImage.png";
import mainProjectImage from "./assets/mainProjectImage.png";
import smallProject1Image from "./assets/smallProject1Image.png";
import smallProject2Image from "./assets/smallProject2Image.png";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const imagesToPreload = [bannerImage, mainProjectImage, smallProject1Image, smallProject2Image];

  const preloadImage = (src: any) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  };

  useEffect(() => {
    Promise.all(imagesToPreload.map(preloadImage))
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error("Error preloading images", err);
        setIsLoading(false); // Even if some fail, hide loader
      });
  }, []);

  return (
    <Router>
      <div className="bg-[#121212] text-white font-sans w-full min-h-screen">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loader" />
          ) : (
            <div>
              <Header />
              <main className='w-full max-w-[1600px] mx-auto pt-20 px-2 md:px-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                <LeftSidebar />
                <div className="md:col-span-3 lg:col-span-3">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs" element={<AllBlogs />} />
                    <Route path="/blog/:id" element={<BlogPostPage />} />
                    <Route path="/write-blog" element={<WriteBlog />} />
                    <Route path="/projects" element={<AllProjects />} />
                    <Route path="/project/:id" element={<ProjectView />} />
                  </Routes>
                </div>
                <RightSidebar />
              </main>
              {/* Footer */}
              <Footer />
            </div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
