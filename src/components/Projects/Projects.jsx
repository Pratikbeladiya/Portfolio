import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "../../data/projects";
import "./Projects.css";

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {projectsData.map((project) => (
          <motion.div 
            key={project.id} 
            className="project-card glass-panel"
            variants={cardVariants}
            whileHover={{ y: -10 }}
          >
            {/* Project Mockup Container */}
            <div className="project-image-box">
              <img 
                src={project.image} 
                alt={`${project.title} Screenshot`} 
                className="project-image"
              />
              <div className="project-image-overlay">
                <div className="overlay-buttons">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>

            {/* Project Info details */}
            <div className="project-details">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-subtitle">{project.subtitle}</span>
              </div>

              <p className="project-desc">
                {project.description}
              </p>

              {/* Extended Details */}
              <p className="project-extended-desc">
                {project.extendedDetails}
              </p>

              {/* Tech Badges */}
              <div className="project-tech-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons for Mobile/Tablet */}
              <div className="project-actions">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-secondary btn-card-action"
                >
                  <FaGithub size={14} /> GitHub
                </a>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary btn-card-action"
                >
                  <FaExternalLinkAlt size={12} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
