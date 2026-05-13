import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stats = [
    { label: "Technologies Mastered", value: "15+" },
    { label: "Projects Completed", value: "6+" },
    { label: "Years Learning", value: "3+" },
    { label: "Startup Founded", value: "1" },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">Who Am I?</motion.h2>
            <motion.p variants={itemVariants} className="text-primary font-medium tracking-widest uppercase">GOKUL NATH S</motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow font-mono text-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                <div className="space-y-4">
                  <p className="flex items-start"><span className="text-primary mr-3">{">"}</span> <span>Motivated Full Stack Developer | MERN Stack Developer</span></p>
                  <p className="flex items-start"><span className="text-primary mr-3">{">"}</span> <span>Builds Responsive Web Applications & REST APIs</span></p>
                  <p className="flex items-start"><span className="text-primary mr-3">{">"}</span> <span>Passionate Software Engineer</span></p>
                  <p className="flex items-start"><span className="text-primary mr-3">{">"}</span> <span>Problem Solving | Analytical Thinking | Team Collaboration | Adaptability</span></p>
                  <p className="flex items-start"><span className="text-primary mr-3">{">"}</span> <span className="font-bold text-foreground">FINAL YEAR B.TECH IT</span></p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <Card key={idx} className="p-6 flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <span className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">{stat.value}</span>
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                </Card>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
