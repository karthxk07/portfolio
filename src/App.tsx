import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import MainProjects from './components/MainProjects';
import OtherProjects from './components/OtherProjects';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import the new Footer component

function App() {
  return (
    <div className="bg-[#121212] text-white font-sans w-full">
      <Header />
      <main className='w-full'>
        <Banner />
        <MainProjects />
        <OtherProjects />
        <Contact />
      </main>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default App;