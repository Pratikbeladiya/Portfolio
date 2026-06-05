import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Loader.css";

function Loader({ finishLoading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            finishLoading();
          }, 400); // Small delay before fading loader out
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 4; // Randomized progress speed
      });
    }, 100);

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <div className="loader-container">
      <motion.div
        className="loader-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Glowing Logo Name */}
        <h1 className="loader-logo">
          <span>Pratik</span>Beladiya
        </h1>
        
        {/* Loading Progress Bar */}
        <div className="loader-progress-track">
          <div 
            className="loader-progress-bar" 
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>

        {/* Text Details */}
        <div className="loader-status">
          <span>Initializing Portfolio...</span>
          <span>{Math.min(progress, 100)}%</span>
        </div>
      </motion.div>
    </div>
  );
}

export default Loader;
