import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronRight, FaFileDownload } from "react-icons/fa";
import { profileData } from "../../data/profile";
import "./Hero.css";

const ROLES = [
  "Full Stack Web Developer",
  "Specially In MERN Stack ",
  "Goal Is To Become A Software Engineer",
  
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000); // Cycle every 3 seconds

    return () => clearInterval(roleTimer);
  }, []);

  return (
    <section className="hero-section" id="home">
      {/* Decorative Blur Blobs specifically for Hero */}
      <div className="hero-glow-blob blob-blue"></div>
      <div className="hero-glow-blob blob-purple"></div>

      <div className="hero-grid">
        {/* Left Side: Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-greeting">👋 Hello, I'm</span>
          
          <h1 className="hero-name-heading">
            {profileData.name}
          </h1>

          {/* Role Cycler */}
          <div className="hero-role-wrapper">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                className="hero-role-text"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {ROLES[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className="hero-summary">
            Every project is an opportunity to learn, improve, and create something meaningful.
             I focus on building scalable web applications with
             modern technologies while continuously exploring AI and real-world software solutions.
          </p>

          {/* Social Links */}
          <div className="hero-socials">
            <a href={profileData.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profileData.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={profileData.socials.email} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>

          {/* Call to Actions */}
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">
              View Projects <FaChevronRight size={14} />
            </a>
            <a 
              href={profileData.resumeUrl} 
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Download Resume <FaFileDownload size={14} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Profile Photo Card */}
        <motion.div
          className="hero-profile-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="hero-profile-card glass-panel">
            <div className="profile-image-wrapper">
              <img 
                src="/profile.png" 
                alt="Pratik Beladiya Profile" 
                className="profile-img"
              />
            </div>
            
            {/* Tech Badges inside Card */}
            <div className="profile-card-badge">
              <span className="badge-dot"></span>
              <span>Available for Hire</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;