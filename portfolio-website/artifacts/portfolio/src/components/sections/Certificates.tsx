import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Award, FileText } from "lucide-react";

const certificates = [
  {
    title: "Diploma in Computer Application (DCA)",
    desc: "Foundation certificate in computer applications and software tools."
  },
  {
    title: "SJ Publication Certificate",
    desc: "Published research/academic work through SJ Publications."
  },
  {
    title: "Corizo Edutech Web Development",
    desc: "Completed web development program at Corizo Edutech internship."
  },
  {
    title: "INTERNATIONAL CONFERENCE on Advanced Innovation in Technology",
    desc: "Presented research at an international academic conference."
  },
  {
    title: "INTERNATIONAL CONFERENCE on Interactive Educational Technology",
    desc: "Participated and presented at an international educational technology conference."
  }
];

export default function Certificates() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section id="certificates" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4"
          >
            Certificates
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Professional certifications and academic achievements.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {certificates.map((cert, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group">
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                    {idx < 2 ? <FileText className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                  </div>
                  <CardTitle className="text-lg font-bold leading-snug">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-muted-foreground text-sm">
                  {cert.desc}
                </CardContent>
                <CardFooter className="pt-4 border-t border-border/30">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span tabIndex={0} className="w-full">
                        <Button variant="ghost" disabled className="w-full justify-between group-hover:bg-primary/5">
                          View Certificate
                          <svg className="w-4 h-4 ml-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Button>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Coming Soon</p>
                    </TooltipContent>
                  </Tooltip>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
