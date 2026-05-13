import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle2, Rocket, Briefcase, Code, Zap, Shield } from "lucide-react";

const reviews = [
  {
    client: "SUBAKEERTHI R",
    project: "Personal Portfolio",
    rating: 4.7,
    review: "Working with Gokul was a fantastic experience. He delivered a stunning, responsive portfolio that exceeded all my expectations. The attention to detail, smooth animations, and clean code make it stand out. Highly recommended!"
  },
  {
    client: "PRAVEEN K",
    project: "Lost and Found Campus Project",
    rating: 4.8,
    review: "Gokul's technical expertise and problem-solving skills are top-notch. He built our Lost and Found Campus Project with excellent UI/UX and robust backend functionality. Delivered on time with professional quality!"
  }
];

const deploymentProcess = [
  {
    title: "Requirement Planning",
    desc: "Discuss and document client requirements completely"
  },
  {
    title: "UI/UX Designing",
    desc: "Create designs, share with client, modify based on feedback"
  },
  {
    title: "Coding Process",
    desc: "Use best technologies or client preferred stack"
  },
  {
    title: "Testing Process",
    desc: "Unit, Security, SEO, Performance, and Validation testing"
  },
  {
    title: "Deployment Process",
    desc: "Cloud hosting, domain setup, full deployment, final delivery"
  }
];

const services = [
  {
    title: "Mobile App Development",
    description: "Native Android and Cross-platform Flutter apps with Play Store deployment, AdMob integration, and monetization strategies. Published multiple production apps with real-world user base.",
    features: ["Cross-platform", "Native Performance", "App/Play Store ready"],
    icon: Code
  },
  {
    title: "Full-Stack Web Development",
    description: "Modern web applications using React.js, Next.js, Node.js with responsive UI, SEO optimization, and scalable architecture. Experience with MERN stack and enterprise solutions.",
    features: ["React & Next.js", "Node.js backends", "Responsive design"],
    icon: Zap
  },
  {
    title: "API Development & Backend Services",
    description: "RESTful APIs, Firebase Functions, Supabase Edge Functions with secure authentication, real-time databases, and cloud deployment. Expertise in scalable backend architecture.",
    features: ["Custom solution", "Professional quality", "Full support"],
    icon: Shield
  }
];

export default function FreeLauncher() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="freelauncher" className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6 border border-primary/20"
            >
              <Rocket className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">Freelance Services</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-4"
            >
              FREELAUNCHER
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center space-x-2 text-xl md:text-2xl font-medium text-muted-foreground"
            >
              <span>Overall Rating: 4.75 / 5</span>
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 max-w-7xl mx-auto">
            {/* Reviews Column */}
            <motion.div 
              className="lg:col-span-7 space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-bold font-display mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full"></span>
                Client Reviews
              </h3>
              
              {reviews.map((review, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="border-border/50 bg-card hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10"></div>
                    <CardContent className="p-6 md:p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-bold text-lg">{review.client}</h4>
                          <p className="text-sm text-primary">{review.project}</p>
                        </div>
                        <div className="flex items-center bg-amber-500/10 px-2 py-1 rounded text-amber-600 font-medium text-sm border border-amber-500/20">
                          <Star className="w-3.5 h-3.5 fill-current mr-1" />
                          {review.rating}/5
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed italic">
                        "{review.review}"
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="pt-4">
                <Button size="lg" onClick={scrollToContact} className="rounded-full shadow-md hover:shadow-lg transition-all w-full sm:w-auto text-base px-8 py-6 group" data-testid="btn-book-service">
                  <Briefcase className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Book a Service / Hire Me
                </Button>
              </motion.div>
            </motion.div>

            {/* Process Column */}
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-border/50 bg-secondary/30 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <h3 className="text-2xl font-bold font-display flex items-center gap-2">
                    5-Step Deployment Process
                  </h3>
                  <p className="text-sm text-muted-foreground">Structured workflow for premium delivery</p>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:ml-[1.125rem] before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary before:to-transparent">
                    {deploymentProcess.map((step, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.3 }}
                        className="relative flex items-start gap-4 md:gap-6"
                      >
                        <div className="absolute left-0 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow ring-4 ring-background">
                          <span className="text-sm font-bold">{idx + 1}</span>
                        </div>
                        <div className="pl-12">
                          <h4 className="font-bold text-lg text-foreground flex items-center">
                            {step.title}
                            {idx === deploymentProcess.length - 1 && <CheckCircle2 className="w-4 h-4 ml-2 text-green-500" />}
                          </h4>
                          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-tr-full blur-[100px] opacity-50 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4"
            >
              Services I Offer
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
            >
              Premium Development Services
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-muted-foreground max-w-3xl mx-auto"
            >
              Professional development services specializing in modern web and mobile applications, AI/ML solutions, and comprehensive technical consulting.
            </motion.div>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-border/50 group bg-card/50 backdrop-blur-sm overflow-hidden">
                    <div className="h-1 w-full bg-gradient-to-r from-primary to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">{service.title}</h3>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-center gap-2">
                            <span className="text-primary text-xs">✓</span>
                            <span className="text-sm text-foreground/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <div className="p-6 pt-4 border-t border-border/30">
                      <Button 
                        onClick={scrollToContact}
                        className="w-full rounded-full group-hover:shadow-md transition-all"
                      >
                        Get Started
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
