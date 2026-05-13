import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, Image as ImageIcon } from "lucide-react";
import ProjectDetailsModal from "@/components/ProjectDetailsModal";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  features: string[];
  images?: string[];
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Library Management Website",
    description: "A comprehensive library management system enabling efficient book tracking, search, and user interactions through a clean web interface.",
    fullDescription: "A comprehensive library management system enabling efficient book tracking, search, and user interactions through a clean web interface. Features real-time inventory management, advanced search capabilities, and seamless user interactions.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Book tracking", "Search functionality", "User interaction", "Inventory management", "Real-time updates"],
    images: [
      "https://via.placeholder.com/400x300?text=Library+Project+1",
      "https://via.placeholder.com/400x300?text=Library+Project+2",
      "https://via.placeholder.com/400x300?text=Library+Project+3",
      "https://via.placeholder.com/400x300?text=Library+Project+4",
      "https://via.placeholder.com/400x300?text=Library+Project+5",
      "https://via.placeholder.com/400x300?text=Library+Project+6",
    ]
  },
  {
    id: 2,
    title: "Maize Business App",
    description: "A full-stack MERN marketplace connecting farmers and traders with real-time pricing, order management, and product listings.",
    fullDescription: "A full-stack MERN marketplace connecting farmers and traders with real-time pricing, order management, and product listings. Built with modern technologies for scalability and performance.",
    tech: ["React", "MongoDB", "Node.js", "Express.js"],
    features: ["Product listings", "Orders management", "Real-time pricing", "Farmer/trader connectivity", "Payment integration"],
    images: [
      "https://via.placeholder.com/400x300?text=Maize+Project+1",
      "https://via.placeholder.com/400x300?text=Maize+Project+2",
      "https://via.placeholder.com/400x300?text=Maize+Project+3",
      "https://via.placeholder.com/400x300?text=Maize+Project+4",
      "https://via.placeholder.com/400x300?text=Maize+Project+5",
      "https://via.placeholder.com/400x300?text=Maize+Project+6",
    ]
  },
  {
    id: 3,
    title: "Smart Expense Tracker",
    description: "A cross-platform expense tracking application with analytics dashboards and category-based financial reporting.",
    fullDescription: "A cross-platform expense tracking application with analytics dashboards and category-based financial reporting. Includes advanced analytics, budget planning, and spending insights.",
    tech: ["Java", "React", "MySQL"],
    features: ["Analytics dashboard", "Category-based reporting", "Budget planning", "Spending insights", "Cross-platform support"],
    images: [
      "https://via.placeholder.com/400x300?text=Expense+Project+1",
      "https://via.placeholder.com/400x300?text=Expense+Project+2",
      "https://via.placeholder.com/400x300?text=Expense+Project+3",
      "https://via.placeholder.com/400x300?text=Expense+Project+4",
      "https://via.placeholder.com/400x300?text=Expense+Project+5",
      "https://via.placeholder.com/400x300?text=Expense+Project+6",
    ]
  },
  {
    id: 4,
    title: "AI ChatBot & GenAI Assistant",
    description: "An advanced AI-powered chatbot application built using modern Generative AI technologies. Features include real-time conversational AI, intelligent responses, context understanding, prompt handling, and API integration with LLM models. Designed with a modern responsive UI and optimized backend architecture for scalable AI interactions.",
    fullDescription: "An advanced AI-powered chatbot application built using modern Generative AI technologies. Features include real-time conversational AI, intelligent responses, context understanding, prompt handling, and API integration with LLM models. Designed with a modern responsive UI and optimized backend architecture for scalable AI interactions.",
    tech: ["React", "Node.js", "OpenAI API", "Python", "FastAPI", "PostgreSQL"],
    features: ["Real-time AI conversation", "Context-aware responses", "Modern chatbot UI", "API-based AI integration", "Secure authentication", "Responsive design"],
    images: [
      "https://via.placeholder.com/400x300?text=AI+ChatBot+1",
      "https://via.placeholder.com/400x300?text=AI+ChatBot+2",
      "https://via.placeholder.com/400x300?text=AI+ChatBot+3",
      "https://via.placeholder.com/400x300?text=AI+ChatBot+4",
      "https://via.placeholder.com/400x300?text=AI+ChatBot+5",
      "https://via.placeholder.com/400x300?text=AI+ChatBot+6",
    ],
    github: "https://github.com/realgokulnath-dev"
  },
  {
    id: 5,
    title: "E-Commerce Platform with Secure Checkout",
    description: "A complete modern e-commerce platform with product browsing, shopping cart, wishlist, secure checkout flow, payment integration, and order management system. Designed with scalable architecture and responsive UI for real-world production usage.",
    fullDescription: "A complete modern e-commerce platform with product browsing, shopping cart, wishlist, secure checkout flow, payment integration, and order management system. Designed with scalable architecture and responsive UI for real-world production usage.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "TailwindCSS"],
    features: ["Shopping cart system", "Secure checkout process", "Product filtering and search", "Payment gateway integration", "User authentication", "Order tracking dashboard"],
    images: [
      "https://via.placeholder.com/400x300?text=E-Commerce+1",
      "https://via.placeholder.com/400x300?text=E-Commerce+2",
      "https://via.placeholder.com/400x300?text=E-Commerce+3",
      "https://via.placeholder.com/400x300?text=E-Commerce+4",
      "https://via.placeholder.com/400x300?text=E-Commerce+5",
      "https://via.placeholder.com/400x300?text=E-Commerce+6",
    ],
    github: "https://github.com/realgokulnath-dev"
  },
  {
    id: 6,
    title: "CareShare – Patient Experience Sharing App",
    description: "CareShare is a healthcare community platform where patients can share their treatment experiences, recovery journey, hospital reviews, doctor feedback, and emotional support stories. The platform focuses on helping others make informed healthcare decisions through real user experiences.",
    fullDescription: "CareShare is a healthcare community platform where patients can share their treatment experiences, recovery journey, hospital reviews, doctor feedback, and emotional support stories. The platform focuses on helping others make informed healthcare decisions through real user experiences.",
    tech: ["React", "Node.js", "MongoDB", "Firebase", "Socket.io", "Material-UI"],
    features: ["Patient story sharing", "Community support system", "Hospital & treatment reviews", "Secure user profiles", "Responsive mobile-friendly UI", "Real-time interaction system"],
    images: [
      "https://via.placeholder.com/400x300?text=CareShare+1",
      "https://via.placeholder.com/400x300?text=CareShare+2",
      "https://via.placeholder.com/400x300?text=CareShare+3",
      "https://via.placeholder.com/400x300?text=CareShare+4",
      "https://via.placeholder.com/400x300?text=CareShare+5",
      "https://via.placeholder.com/400x300?text=CareShare+6",
    ],
    github: "https://github.com/realgokulnath-dev"
  }
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
                key={project.id}
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
                    <div className="text-sm text-muted-foreground bg-secondary/50 p-3 rounded-md border border-border/30">
                      <strong className="text-foreground">Key Features:</strong> {project.features.slice(0, 3).join(", ")}...
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 border-t border-border/50 gap-2 flex-col">
                    <div className="flex gap-2 w-full">
                      <Button 
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 rounded-full"
                        data-testid={`btn-view-${idx}`}
                      >
                        View Details
                      </Button>
                      {project.github && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button 
                              variant="outline" 
                              size="icon"
                              className="rounded-full"
                              onClick={() => window.open(project.github, '_blank')}
                            >
                              <Github className="w-4 h-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View on GitHub</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
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

      <ProjectDetailsModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
