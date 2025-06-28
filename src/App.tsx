
import Header from './components/Header';
import Banner from './components/Banner';
import MainProjects from './components/MainProjects';
import OtherProjects from './components/OtherProjects';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import the new Footer component
import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";


// Import your assets
import bannerImage from "./assets/bannerImage.png";
import mainProjectImage from "./assets/mainProjectImage.png"; // **Add your image**
import smallProject1Image from "./assets/smallProject1Image.png"; // **Add your image**
import smallProject2Image from "./assets/smallProject2Image.png";


import { AnimatePresence } from "framer-motion";



function App() {
  const [isLoading, setIsLoading] = useState(true);

  const imagesToPreload = [bannerImage,mainProjectImage,smallProject1Image,smallProject2Image];

  const preloadImage = (src:any) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  



  return (
    <div className="bg-[#121212] text-white font-sans w-full">
      <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loader" />
      ) : <div>
        
        <Header />
        <main className='w-full'>
          <Banner />
          <MainProjects />
          <OtherProjects />
          <Contact />
        </main>
        <Footer />
      </div> }
    </AnimatePresence>
    </div>
  );
}

export default App;