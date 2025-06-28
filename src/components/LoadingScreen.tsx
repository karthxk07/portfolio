import { motion } from "framer-motion";
import logoImage from '../assets/logoimage.jpeg'
const LoadingScreen = () => {
  return (
    <div
      
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212] backdrop-blur-lg border border-white/10"
    >
      <div className="relative w-12 h-12 items-center space-y-4">
    
        <motion.div
          className="absolute w-full h-full rounded-full overflow-hidden border-4 border-t-red-400 border-gray-300 animate-spin"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        >
        </motion.div>
        <img src={logoImage}  className=" -z-10 absolute  w-full h-full rounded-full" />
      </div>
    </div>
  );
};

export default LoadingScreen;
