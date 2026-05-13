import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "UI/UX Designer",
  "App Developer",
  "MERN Stack Developer"
];

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[currentRoleIndex];
      
      if (!isDeleting) {
        setTypingText(currentRole.substring(0, typingText.length + 1));
        if (typingText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setTypingText(currentRole.substring(0, typingText.length - 1));
        if (typingText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typingText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-primary tracking-wide">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
              GOKUL NATH S
            </h1>
            <div className="h-8 md:h-10 mt-2">
              <span className="text-xl md:text-3xl font-medium text-muted-foreground">
                {typingText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          <motion.div 
            className="bg-card border border-border rounded-xl p-4 font-mono text-sm shadow-lg shadow-primary/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-3 border-b border-border pb-2">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-muted-foreground ml-2">developer.sh</span>
            </div>
            <div className="text-muted-foreground space-y-1">
              <p><span className="text-primary">const</span> <span className="text-foreground">developer</span> = {"{"}</p>
              <p className="pl-4">name: <span className="text-green-600 dark:text-green-400">"Gokul Nath S"</span>,</p>
              <p className="pl-4">role: <span className="text-green-600 dark:text-green-400">"Full Stack Engineer"</span>,</p>
              <p className="pl-4">location: <span className="text-green-600 dark:text-green-400">"Salem, India"</span>,</p>
              <p className="pl-4">passion: <span className="text-green-600 dark:text-green-400">"Building world-class products"</span></p>
              <p>{"}"};</p>
            </div>
          </motion.div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="rounded-full shadow-md hover:shadow-lg transition-all" asChild>
              <a href="/GOKUL_NATH_RESUME.pdf" download data-testid="button-download-resume">Download Resume</a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full bg-background hover:bg-secondary" asChild>
              <a href="/GOKUL_NATH_RESUME.pdf" target="_blank" rel="noreferrer" data-testid="button-view-resume">View Resume</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center justify-center space-y-8"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary via-blue-400 to-indigo-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Profile Frame */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-full h-full rounded-full p-2 bg-gradient-to-b from-border to-background shadow-2xl"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-sidebar to-muted flex items-center justify-center border-4 border-background">
                {/* Abstract avatar replacement */}
                <div className="w-full h-full bg-gradient-to-tr from-primary/80 to-indigo-600/80 flex items-center justify-center text-white/50">
                   <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 20a6 6 0 0 0-12 0"/>
                    <circle cx="12" cy="10" r="4"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/gokulnath" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-3 bg-secondary rounded-full hover:shadow-md" data-testid="link-github">
              <FiGithub className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/gokulnath1510" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#0A66C2] transition-colors p-3 bg-secondary rounded-full hover:shadow-md" data-testid="link-linkedin">
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/gokulnath.dev" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#E1306C] transition-colors p-3 bg-secondary rounded-full hover:shadow-md" data-testid="link-instagram">
              <FiInstagram className="w-6 h-6" />
            </a>
            <a href="mailto:gokulsaravanan034@gmail.com" className="text-muted-foreground hover:text-destructive transition-colors p-3 bg-secondary rounded-full hover:shadow-md" data-testid="link-email">
              <FiMail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
