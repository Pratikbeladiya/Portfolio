import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGitAlt, FaGithub, 
  FaNodeJs, FaDatabase, FaSitemap, FaServer, FaEdit 
} from "react-icons/fa";
import { 
  SiExpress, SiSocketdotio, SiMongodb, SiVercel, SiTailwindcss, 
  SiRender, SiJsonwebtokens 
} from "react-icons/si";
import { skillsData } from "../../data/skills";
import "./Skills.css";

// Dynamic icon mapping table
const iconMapping = {
  FaReact: <FaReact />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaJs: <FaJs />,
  FaBootstrap: <FaBootstrap />,
  FaGitAlt: <FaGitAlt />,
  FaGithub: <FaGithub />,
  FaNodeJs: <FaNodeJs />,
  FaDatabase: <FaDatabase />,
  FaSitemap: <FaSitemap />,
  FaServer: <FaServer />,
  FaEdit: <FaEdit />,
  SiExpress: <SiExpress />,
  SiSocketdotio: <SiSocketdotio />,
  SiMongodb: <SiMongodb />,
  SiVercel: <SiVercel />,
  SiTailwindcss: <SiTailwindcss />,
  SiRender: <SiRender />,
  SiJsonwebtokens: <SiJsonwebtokens />
};

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Database", "Tools & Deployment", "Concepts"];

  // Filter skills based on chosen category
  const getFilteredSkills = () => {
    if (activeCategory === "All") {
      return skillsData.flatMap(cat => cat.skills);
    }
    const matchedCategory = skillsData.find(
      cat => cat.category.toLowerCase().includes(activeCategory.toLowerCase())
    );
    return matchedCategory ? matchedCategory.skills : [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">My Tech Stack</h2>

      {/* Filter Tabs */}
      <div className="skills-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
            {activeCategory === cat && (
              <motion.div 
                className="active-indicator" 
                layoutId="activeTabIndicator"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div 
        className="skills-grid"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-card-premium glass-panel"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ 
                y: -5,
                boxShadow: `0 10px 20px rgba(var(--accent-purple-rgb), 0.15)`,
                borderColor: "rgba(139, 92, 246, 0.3)"
              }}
            >
              <div 
                className="skill-icon-wrapper" 
                style={{ 
                  backgroundColor: `${skill.color}15`, // Translucent background
                  color: skill.color 
                }}
              >
                {iconMapping[skill.icon] || <FaReact />}
              </div>
              
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <p className="skill-desc-tag">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Skills;
