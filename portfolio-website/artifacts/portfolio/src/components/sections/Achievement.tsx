import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Trophy } from "lucide-react";

export default function Achievement() {
  return (
    <section id="achievement" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">Achievement</h2>
          </div>

          <Card className="hover:shadow-xl transition-all duration-500 border-border/50 bg-card overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-amber-500/10 p-8 md:p-12 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-500 mb-6 ring-8 ring-amber-500/10">
                <Trophy className="w-10 h-10" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">Finalist in My Bharat Budget Quest 2026</h3>
              
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
                Achieved finalist position by excelling in quiz and essay competitions, demonstrating strong analytical thinking and communication skills at a national level.
              </p>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <span tabIndex={0}>
                    <Button variant="default" disabled className="rounded-full px-8 shadow-md" data-testid="btn-view-achievement-cert">
                      View Certificate
                    </Button>
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Coming Soon</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
