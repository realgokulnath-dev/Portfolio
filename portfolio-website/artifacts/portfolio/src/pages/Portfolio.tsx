import { useState, useEffect } from "react";
import LoadingScreen from "@/components/sections/LoadingScreen";
import Navbar from "@/components/sections/Navbar";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import Internship from "@/components/sections/Internship";
import Achievement from "@/components/sections/Achievement";
import FreeLauncher from "@/components/sections/FreeLauncher";
import Startup from "@/components/sections/Startup";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Chatbot from "@/components/Chatbot";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground transition-colors duration-300">
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="animate-in fade-in duration-1000">
          <Navbar />
          <main>
            <Home />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Certificates />
            <Internship />
            <Achievement />
            <FreeLauncher />
            <Startup />
            <Contact />
          </main>
          <Footer />
          <Chatbot />
        </div>
      )}
    </div>
  );
}
