import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const projects = [
  {
    title: "Library Management Website",
    description: "A comprehensive library management system enabling efficient book tracking, search, and user interactions through a clean web interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: "Book tracking, Search functionality, User interaction"
  },
  {
    title: "Maize Business App",
    description: "A full-stack MERN marketplace connecting farmers and traders with real-time pricing, order management, and product listings.",
    tech: ["React", "MongoDB", "Node.js", "Express.js"],
    features: "Product listings, Orders, Pricing, Farmer/trader connectivity"
  },
  {
    title: "Smart Expense Tracker",
    description: "A cross-platform expense tracking application with analytics dashboards and category-based financial reporting.",
    tech: ["Java", "React", "MySQL"]
  },
  {
    title: "Student Portal",
    description: "A comprehensive student management portal for tracking attendance, grades, and academic performance with role-based access.",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Weather Dashboard",
    description: "A real-time weather application with location-based forecasts, interactive maps, and beautiful weather visualizations.",
    tech: ["React", "JavaScript", "REST APIs"]
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management tool with drag-and-drop, team collaboration, and deadline tracking features.",
    tech: ["React", "Express.js", "MySQL"]
  }
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A selection of my recent development work.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border-border/50 group overflow-hidden bg-card/50 backdrop-blur-sm">
                  <div className="h-2 w-full bg-gradient-to-r from-primary to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-display group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map(t => (
                        <Badge key={t} variant="secondary" className="font-mono text-xs font-normal">{t}</Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <CardDescription className="text-base text-foreground/80 leading-relaxed">
                      {project.description}
                    </CardDescription>
                    {project.features && (
                      <div className="text-sm text-muted-foreground bg-secondary/50 p-3 rounded-md border border-border/30">
                        <strong className="text-foreground">Key Features:</strong> {project.features}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="pt-4 border-t border-border/50 gap-3">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span tabIndex={0} className="flex-1">
                          <Button disabled className="w-full rounded-full" data-testid={`btn-view-${idx}`}>View Project</Button>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Coming Soon</p>
                      </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span tabIndex={0} className="flex-1">
                          <Button variant="outline" disabled className="w-full rounded-full bg-background" data-testid={`btn-details-${idx}`}>Project Details</Button>
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
          </AnimatePresence>
        </motion.div>

        {!showAll && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => setShowAll(true)}
              className="rounded-full px-8 py-6 text-base font-medium shadow-sm hover:shadow-md transition-all"
              data-testid="btn-see-all-projects"
            >
              See All Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
