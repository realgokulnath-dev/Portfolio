import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      // Note: User needs to replace YOUR_PUBLIC_KEY with actual EmailJS public key
      await emailjs.sendForm(
        'service_gokulnath',
        'template_contact',
        formRef.current,
        'YOUR_PUBLIC_KEY' 
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to send message",
        description: "An error occurred. Please try again later or contact directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9342486977",
      href: "tel:+919342486977"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "gokulsaravanan034@gmail.com",
      href: "mailto:gokulsaravanan034@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Salem, Tamil Nadu",
      href: null
    },
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/gokulnath1510",
      href: "https://www.linkedin.com/in/gokulnath1510"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss opportunities? Let's connect.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-display mb-6">Contact Information</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, idx) => (
                <Card key={idx} className="border-border/50 bg-card hover:shadow-md transition-all group">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <h4 className="font-bold mb-2">{info.title}</h4>
                    {info.href ? (
                      <a href={info.href} target={info.href.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors line-clamp-1 break-all">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-sm text-muted-foreground">{info.value}</span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-border/50 bg-card shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-display mb-6">Send Me a Message</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="user_name" className="text-sm font-medium">Your Name</label>
                    <Input 
                      id="user_name" 
                      name="user_name" 
                      placeholder="John Doe" 
                      required 
                      className="bg-background"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="user_email" className="text-sm font-medium">Your Email</label>
                    <Input 
                      id="user_email" 
                      name="user_email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      className="bg-background"
                      data-testid="input-email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell me about your project..." 
                      rows={5} 
                      required 
                      className="bg-background resize-none"
                      data-testid="input-message"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full rounded-full shadow-md py-6 text-base" 
                    disabled={isSubmitting}
                    data-testid="btn-submit-contact"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Note: EmailJS public key must be configured for this form to work.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
