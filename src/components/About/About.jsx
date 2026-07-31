import { motion } from "framer-motion";
import { FaGraduationCap, FaCompass, FaRegLightbulb } from "react-icons/fa";
import { profileData } from "../../data/profile";
import "./About.css";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About Me</h2>

      <motion.div
        className="about-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Side: Bio and Personal Statement */}
        <motion.div className="about-bio-container" variants={itemVariants}>
          <h3 className="about-subtitle">Who I Am</h3>

          <p className="about-para">
            {profileData.description}
          </p>

          <p className="about-para">
            Driven by curiosity and continuous learning, I build modern web applications that are scalable, reliable, and user-focused.
          </p>

          <div className="objective-panel glass-panel">
            <div className="objective-icon">
              <FaCompass />
            </div>
            <div className="objective-content">
              <h4>Career Objective</h4>
              <p>{profileData.objective}</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Key Highlights & Education */}
        <motion.div className="about-cards-container" variants={itemVariants}>
          {/* Education Highlight Card */}
          <div className="about-highlight-card glass-panel">
            <div className="card-header-icon color-blue">
              <FaGraduationCap />
            </div>
            <div className="card-body">
              <h4>Education Credentials</h4>
              {profileData.education.map((edu, idx) => (
                <div key={idx} className="education-detail">
                  <h5>{edu.degree}</h5>
                  <p className="edu-inst">{edu.institution}</p>
                  <p className="edu-aff">{edu.affiliation}</p>
                  <div className="edu-meta">
                    <span className="edu-dur">{edu.duration}</span>
                    <span className="edu-grade">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Metrics Card */}
          <div className="about-highlight-card glass-panel">
            <div className="card-header-icon color-purple">
              <FaRegLightbulb />
            </div>
            <div className="card-body">
              <h4>Development Focus</h4>
              <ul className="focus-list">
                <li>
                  <strong>MERN Stack:</strong> Developing scalable full-stack applications with React, Node.js, Express.js, and MongoDB.
                </li>

                <li>
                  <strong>Backend Engineering:</strong> Designing secure REST APIs, authentication, and role-based systems using modern architecture.
                </li>

                <li>
                  <strong>Continuous Learning:</strong> Exploring Generative AI, cloud-ready development, and building impactful software solutions.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;