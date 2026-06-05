import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

// UI Helpers
import Loader from "./components/UI/Loader";
import BackToTop from "./components/UI/BackToTop";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Preloader Animation */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" finishLoading={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Portfolio Layout */}
      {!isLoading && (
        <>
          {/* Global Background Elements */}
          <div className="bg-blobs">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>
          </div>
          <div className="bg-dots"></div>

          {/* Core Sections */}
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />

          {/* Floating UI Helper */}
          <BackToTop />
        </>
      )}
    </>
  );
}

export default App;
