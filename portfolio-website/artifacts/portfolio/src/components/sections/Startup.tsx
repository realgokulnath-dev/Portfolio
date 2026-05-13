import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Globe, Instagram, Mail, Building2 } from "lucide-react";

export default function Startup() {
  return (
    <section id="startup" className="py-24 bg-gradient-to-b from-background to-secondary/20 relative border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 transform rotate-12 hover:rotate-0 transition-transform duration-300 border border-primary/20 shadow-lg shadow-primary/5"
            >
              <Building2 className="w-8 h-8 text-primary -rotate-12 group-hover:rotate-0" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4 uppercase tracking-widest text-primary">MY STARTUP</h2>
          </div>

          <Card className="border-border/50 bg-card overflow-hidden hover:shadow-2xl transition-shadow duration-500">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center bg-secondary/30 relative">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <Building2 className="w-48 h-48" />
                </div>
                <h3 className="text-3xl font-bold font-display mb-2">StackVern</h3>
                <p className="text-muted-foreground mb-8 text-lg">Innovative software solutions for modern challenges.</p>
                
                <div className="space-y-6">
                  <a href="https://www.stackvern.github.io" target="_blank" rel="noreferrer" className="flex items-center group text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/10">
                    <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center mr-4 shadow-sm group-hover:shadow group-hover:border-primary/30 transition-all">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-0.5">CEO OF</p>
                      <p className="font-medium text-foreground group-hover:text-primary">www.stackvern.github.io</p>
                    </div>
                  </a>
                  
                  <a href="https://instagram.com/stackvern_" target="_blank" rel="noreferrer" className="flex items-center group text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/10">
                    <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center mr-4 shadow-sm group-hover:shadow group-hover:border-primary/30 transition-all">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-0.5">INSTAGRAM</p>
                      <p className="font-medium text-foreground group-hover:text-primary">@stackvern_</p>
                    </div>
                  </a>

                  <a href="mailto:stackverntech@gmail.com" className="flex items-center group text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/10">
                    <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center mr-4 shadow-sm group-hover:shadow group-hover:border-primary/30 transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-0.5">EMAIL</p>
                      <p className="font-medium text-foreground group-hover:text-primary">stackverntech@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary to-indigo-600 p-8 flex items-center justify-center min-h-[300px] relative overflow-hidden">
                {/* Abstract logo graphic */}
                <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 border-4 border-white/20 rounded-2xl rotate-12 flex items-center justify-center backdrop-blur-sm bg-white/5 shadow-2xl">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-inner animate-pulse"></div>
                  <div className="absolute inset-0 border-4 border-white/40 rounded-2xl -rotate-12 scale-110"></div>
                </div>
                
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl mix-blend-overlay"></div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
