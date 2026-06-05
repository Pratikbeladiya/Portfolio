import { motion } from "framer-motion";
import { FaCertificate, FaAward, FaMedal, FaExternalLinkAlt } from "react-icons/fa";
import "./Experience.css";

function Experience() {
  const certificatesData = [
    {
      id: 1,
      year: "2024",
      title: "Full Stack Web Development Certificate",
      issuer: "Udemy Academy & Online Bootcamps",
      description: "Comprehensive training covering modern full-stack web applications. Verified expertise in building applications using React, Node.js, Express, databases, and continuous integration flows.",
      icon: <FaAward />,
      color: "var(--accent-blue)",
      credentialUrl: "#" // Can link to a pdf or verification URL
    },
    {
      id: 2,
      year: "2024",
      title: "MongoDB Developer Associate",
      issuer: "MongoDB University",
      description: "Certified proficiency in MongoDB document data modeling, CRUD queries, indexing strategies, aggregate pipelines, and securing database access.",
      icon: <FaCertificate />,
      color: "var(--accent-purple)",
      credentialUrl: "#"
    },
    {
      id: 3,
      year: "2023",
      title: "React JS Core Developer Certification",
      issuer: "HackerRank & Great Learning Academy",
      description: "Verified assessment in React state management, hooks lifecycle, custom hooks, context architectures, virtual DOM reconciliation, and responsive styling systems.",
      icon: <FaMedal />,
      color: "var(--accent-blue)",
      credentialUrl: "#"
    },
    {
      id: 4,
      year: "2024",
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman Academy",
      description: "Mastered REST API integration, query structure, variables parameters, environment config setups, automated test assertions, and collections execution runs.",
      icon: <FaCertificate />,
      color: "var(--accent-purple)",
      credentialUrl: "#"
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Certifications</h2>
      
      <div className="timeline-container">
        {/* Central vertical track */}
        <div className="timeline-line"></div>

        {certificatesData.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={item.id} className={`timeline-item ${isEven ? "left-item" : "right-item"}`}>
              {/* Floating Timeline Icon */}
              <motion.div 
                className="timeline-icon-box"
                style={{ 
                  backgroundColor: "var(--bg-secondary)", 
                  borderColor: item.color,
                  boxShadow: `0 0 10px ${item.color}50` 
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              >
                <div style={{ color: item.color }} className="timeline-react-icon">
                  {item.icon}
                </div>
              </motion.div>

              {/* Timeline Card Content */}
              <motion.div 
                className="timeline-content-card glass-panel"
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              >
                <div className="certificate-card-header">
                  <span className="timeline-year" style={{ color: item.color }}>
                    {item.year}
                  </span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-subtitle">{item.issuer}</h4>
                <p className="timeline-desc">{item.description}</p>
                
                {/* Certificate link */}
                <a 
                  href={item.credentialUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="certificate-link"
                  style={{ color: item.color }}
                >
                  Verify Certificate <FaExternalLinkAlt size={11} />
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
