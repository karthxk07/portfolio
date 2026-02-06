import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import bannerImage from "../assets/bannerImage.png";

const Banner = () => {
  const fullText = "Heello, I am Karthik.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index >= fullText.length - 1) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-auto w-full flex relative overflow-hidden bg-[#121212] mb-4 rounded-xl border border-[#333]">
      {/* Horizontal gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/80 via-transparent to-transparent pointer-events-none" />

      {/* Vertical gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#333333] pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full px-8 py-12">
        {/* Text section */}
        <div className="">
          <div className="text-right mr-28 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 bg-clip-text text-transparent">
            <p className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-right">
              {displayedText}
            </p>
            <motion.p
              className="text-lg text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              I code, create websites, build circuits, make music and love
              bikes.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              className="flex justify-end space-x-4 mt-7 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
            >
              <a
                href="https://github.com/karthxk07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
              >
                <FaGithub size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/karthik-kalyanam-53571b254/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
              >
                <FaLinkedin size={26} />
              </a>
              <a
                href="https://twitter.com/kalyanammm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
              >
                <FaTwitter size={26} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Image section */}
        <div className="flex justify-center md:justify-end items-center mt-8 md:mt-0">
          <img
            src={bannerImage}
            alt="Banner"
            className="max-h-[70vh] w-auto object-contain rounded-full shadow-inner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
