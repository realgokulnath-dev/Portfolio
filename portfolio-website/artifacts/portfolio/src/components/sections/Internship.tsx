import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Briefcase } from "lucide-react";

export default function Internship() {
  return (
    <section id="internship" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">Internship</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Professional industry experience.</p>
          </div>

          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-8 pl-8 md:pl-12">
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/30 text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <Card className="hover:shadow-md transition-all duration-300 border-border/50 overflow-hidden group">
                <div className="h-1 w-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 md:p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold font-display">CORIZO EDUTECH</h3>
                    <p className="text-lg text-primary mt-1 font-medium">Web Development Internship</p>
                  </div>
                  
                  <div className="bg-secondary/50 rounded-lg p-5 border border-border/30">
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      Developed a full e-commerce website featuring comprehensive functionality:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground font-medium">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Login & Authentication</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> User Account Dashboard</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Add-to-cart System</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Wishlist Functionality</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Order Management</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Payment Integration</li>
                    </ul>
                  </div>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span tabIndex={0} className="inline-block">
                        <Button variant="outline" disabled className="rounded-full bg-background" data-testid="btn-view-internship-cert">
                          View Certificate
                        </Button>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Coming Soon</p>
                    </TooltipContent>
                  </Tooltip>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
