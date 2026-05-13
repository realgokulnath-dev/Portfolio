import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    q: "What technologies do you work with?",
    a: "I specialize in the MERN stack (MongoDB, Express.js, React, Node.js), plus Java, Spring Boot, Python, and more."
  },
  {
    q: "Are you available for freelance projects?",
    a: "Yes! I'm available for freelance web development through FREELAUNCHER. Visit the FREELAUNCHER section or contact me directly."
  },
  {
    q: "What kind of projects do you build?",
    a: "I build full-stack web apps, e-commerce platforms, management systems, REST APIs, and responsive UI/UX designs."
  },
  {
    q: "What is FREELAUNCHER?",
    a: "FREELAUNCHER is my freelance service brand where I deliver professional web development projects with a structured 5-step deployment process."
  },
  {
    q: "What is StackVern?",
    a: "StackVern is my tech startup focused on delivering innovative software solutions. Visit www.stackvern.github.io for more."
  },
  {
    q: "What is your educational background?",
    a: "I'm a Final Year B.Tech Information Technology student at Adithya Institute of Technology, Salem."
  },
  {
    q: "How long does it take to complete a project?",
    a: "It depends on complexity. Simple projects take 1-2 weeks; full-stack applications typically take 3-6 weeks with full testing and deployment."
  },
  {
    q: "How can I contact you?",
    a: "You can email me at gokulsaravanan034@gmail.com, connect on LinkedIn at linkedin.com/in/gokulnath1510, or use the Contact section of this portfolio."
  },
  {
    q: "Do you have internship experience?",
    a: "Yes! I completed a Web Development Internship at Corizo Edutech, where I built a full e-commerce website with cart, wishlist, and payment features."
  },
  {
    q: "What are your achievements?",
    a: "I was a Finalist in My Bharat Budget Quest 2026, competing in quiz and essay competitions at a national level."
  }
];

type Message = {
  id: string;
  type: 'bot' | 'user';
  text: string;
  isFaqList?: boolean;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      type: 'bot',
      text: "Hi there! I'm Gokul's virtual assistant. How can I help you today? You can select a question below or type your own."
    },
    {
      id: 'faqs',
      type: 'bot',
      text: "",
      isFaqList: true
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFaqClick = (faq: typeof faqs[0]) => {
    // Add user question
    setMessages(prev => [...prev, { id: Date.now().toString(), type: 'user', text: faq.q }]);
    
    // Add bot answer after small delay
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now().toString(), type: 'bot', text: faq.a }]);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    setInputValue("");
    
    // Add user message
    setMessages(prev => [...prev, { id: Date.now().toString(), type: 'user', text: userText }]);

    // Try to find a matching FAQ, otherwise fallback
    setTimeout(() => {
      const lowerInput = userText.toLowerCase();
      let response = "Thanks for your message! If you need a specific answer, please check the FAQ options above or use the Contact form to email Gokul directly.";
      
      for (const faq of faqs) {
        if (lowerInput.includes("freelauncher") && faq.q.includes("FREELAUNCHER")) {
          response = faq.a; break;
        }
        if (lowerInput.includes("stackvern") && faq.q.includes("StackVern")) {
          response = faq.a; break;
        }
        if ((lowerInput.includes("tech") || lowerInput.includes("stack") || lowerInput.includes("skill")) && faq.q.includes("technologies")) {
          response = faq.a; break;
        }
        if (lowerInput.includes("contact") && faq.q.includes("contact")) {
          response = faq.a; break;
        }
      }

      setMessages(prev => [...prev, { id: Date.now().toString(), type: 'bot', text: response }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              size="icon"
              className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsOpen(true)}
              data-testid="btn-open-chat"
            >
              <MessageSquare className="w-6 h-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] max-w-[calc(100vw-48px)] shadow-2xl rounded-2xl overflow-hidden flex flex-col bg-card border border-border"
          >
            {/* Header */}
            <div className="bg-primary p-4 text-primary-foreground flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Gokul's Assistant</h3>
                  <p className="text-[10px] text-primary-foreground/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Online
                  </p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-primary-foreground hover:bg-white/20 h-8 w-8 rounded-full"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto min-h-[300px] max-h-[400px] bg-secondary/30 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                  {!msg.isFaqList && (
                    <div 
                      className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                        msg.type === 'user' 
                          ? 'bg-primary text-primary-foreground rounded-tr-sm' 
                          : 'bg-card border border-border text-card-foreground rounded-tl-sm shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  )}
                  
                  {msg.isFaqList && (
                    <div className="w-full space-y-2 mt-2">
                      {faqs.slice(0, 4).map((faq, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleFaqClick(faq)}
                          className="block w-full text-left p-2.5 text-xs border border-primary/30 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors bg-card text-primary shadow-sm"
                        >
                          {faq.q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-card border-t border-border">
              <form onSubmit={handleSubmit} className="flex gap-2 relative">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="rounded-full pr-10 bg-secondary/50 focus-visible:ring-primary/30 border-transparent focus-visible:border-primary/50"
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  disabled={!inputValue.trim()}
                  className="absolute right-1 top-1 h-8 w-8 rounded-full"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
