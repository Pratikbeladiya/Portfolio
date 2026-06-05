import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profileData } from "../../data/profile";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo and short bio */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span>Pratik</span>Beladiya
          </a>
          <p className="footer-tagline">
            Full Stack Web Developer & Software Engineer. Crafting modern solutions with robust architectures.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="footer-links">
          <h4>Navigation</h4>
          <ul className="footer-nav-list">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social connections */}
        <div className="footer-socials">
          <h4>Connect</h4>
          <div className="footer-social-icons">
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
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Pratik Beladiya. All Rights Reserved.</p>
        <p className="designed-by">Designed & Built with React & Framer Motion</p>
      </div>
    </footer>
  );
}

export default Footer;
