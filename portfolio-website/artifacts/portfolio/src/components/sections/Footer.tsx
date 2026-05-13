import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  // Using 2026 as per requirements, but calculating dynamically is better practice
  const year = 2026;

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left flex flex-col">
            <a href="#home" className="font-display font-bold text-2xl tracking-tight mb-2 inline-block">
              GN.
            </a>
            <p className="text-muted-foreground text-sm">
              Copyright © {year} | Developed by GOKUL NATH
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/gokulnath" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/gokulnath1510" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/gokulnath.dev" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-[#E1306C] hover:text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <FiInstagram className="w-5 h-5" />
            </a>
            <a 
              href="mailto:gokulsaravanan034@gmail.com" 
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-all duration-300"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
