import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">Education</motion.h2>
            <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl mx-auto">My academic journey and qualifications.</motion.p>
          </div>

          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/30 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <Card className="hover:shadow-md transition-all duration-300 border-border/50">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">B.Tech Information Technology</h3>
                      <p className="text-lg text-primary mt-1">Adithya Institute of Technology</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-sm font-medium px-3 py-1 bg-secondary rounded-full text-muted-foreground self-start">
                      Currently Final Year
                    </div>
                  </div>
                  <p className="text-muted-foreground font-mono bg-muted/50 p-3 rounded-md inline-block">CGPA: 7.02</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/30 text-primary">
                <Award className="w-6 h-6" />
              </div>
              <Card className="hover:shadow-md transition-all duration-300 border-border/50">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold">HSC</h3>
                  <p className="text-lg text-primary mt-1 mb-4">Saraswathi Matric Higher Secondary School</p>
                  <p className="text-muted-foreground font-mono bg-muted/50 p-3 rounded-md inline-block">Percentage: 79.33%</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
