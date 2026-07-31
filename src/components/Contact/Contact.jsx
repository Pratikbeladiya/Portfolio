import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { profileData } from "../../data/profile";
import "./Contact.css";

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Please fill out all fields."
      });
      return;
    }

    setStatus({ submitting: true, success: false, error: false, message: "" });

    // IMPORTANT NOTE FOR USER: 
    // Please replace these placeholders with your actual EmailJS credentials.
    // Set up your EmailJS service (connected to Gmail) and template.
    const SERVICE_ID = "service_default"; // Replace with your Service ID
    const TEMPLATE_ID = "template_contact"; // Replace with your Template ID
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your Public Key

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      )
      .then(
        () => {
          setStatus({
            submitting: false,
            success: true,
            error: false,
            message: "Thank you! Your message has been sent successfully."
          });
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          
          // Provide fallback success message if keys are placeholder (for preview purposes)
          if (PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
            setStatus({
              submitting: false,
              success: true,
              error: false,
              message: "Demo Mode: Message captured! (Set your EmailJS Keys in Contact.jsx for live delivery)"
            });
            setFormData({ user_name: "", user_email: "", message: "" });
          } else {
            setStatus({
              submitting: false,
              success: false,
              error: true,
              message: "Oops! Something went wrong. Please try again later."
            });
          }
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-grid">
        {/* Left Side: Contact Information Cards */}
        <motion.div 
          className="contact-info-panel"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="contact-subtitle">Let's Connect</h3>
          <p className="contact-text">
           Interested in my profile, resume, or projects? I'm currently open to internships, entry-level software development roles, and exciting opportunities.
            Feel free to send me an email or contact me directly.
            I'd be happy to connect and discuss how I can contribute to your team.
          </p>

          <div className="info-cards-list">
            <div className="info-card-item glass-panel">
              <div className="info-item-icon">
                <FaEnvelope />
              </div>
              <div className="info-item-content">
                <h4>Email Directly</h4>
                <a href={profileData.socials.email}>{profileData.socials.rawEmail}</a>
              </div>
            </div>

            <div className="info-card-item glass-panel">
              <div className="info-item-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-item-content">
                <h4>Location</h4>
                <p>Surat, Gujarat, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form panel */}
        <motion.div 
          className="contact-form-panel glass-panel"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <div className="input-group">
              <input 
                type="text" 
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
                placeholder=" "
                id="form-name"
              />
              <label htmlFor="form-name">Your Name</label>
            </div>

            <div className="input-group">
              <input 
                type="email" 
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
                placeholder=" "
                id="form-email"
              />
              <label htmlFor="form-email">Your Email</label>
            </div>

            <div className="input-group">
              <textarea 
                name="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder=" "
                id="form-message"
              ></textarea>
              <label htmlFor="form-message">Your Message</label>
            </div>

            {/* Status alerts */}
            {status.error && (
              <div className="alert alert-error">
                <FaExclamationCircle /> <span>{status.message}</span>
              </div>
            )}
            
            {status.success && (
              <div className="alert alert-success">
                <FaCheckCircle /> <span>{status.message}</span>
              </div>
            )}

            <button 
              type="submit" 
              className="btn-primary btn-submit"
              disabled={status.submitting}
            >
              {status.submitting ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message <FaPaperPlane size={14} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
