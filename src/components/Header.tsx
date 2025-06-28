import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoimage from "../assets/logoimage.jpeg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{
        width: 0,
        opacity: 0
      }}
      animate={
        mounted
          ? {
              width: isScrolled ? "60%" : "auto",
              opacity: 1,
              transition: {
                duration:0.5,
                ease: "easeInOut",
              },
            }
          : {
              width: 0,
              opacity: 0,
            }
      }
      className="fixed top-4 left-1/2 max-h-16 text-nowrap -translate-x-1/2 rounded-4xl z-50 bg-stone-400/10 backdrop-blur-md border border-white/10 shadow-lg overflow-hidden"
    >
      <div className="flex items-center justify-center px-6 py-3 h-fit mx-3 my-1 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {isScrolled ? (
            <motion.nav
              key="nav"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex items-center space-x-14 font-semibold"
            >
              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </motion.nav>
          ) : (
            <motion.div
              key="name"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex flex-row items-center justify-center"
            >
              <h1 className="text-2xl font-semibold bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 bg-clip-text text-transparent">
                <span className="bg-gradient-to-b from-red-500 to-red-400 bg-clip-text text-transparent">
                  karthik
                </span>{" "}
                kalyanam
              </h1>
              <img
                src={logoimage}
                alt=""
                width={30}
                className="object-contain ml-3"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
