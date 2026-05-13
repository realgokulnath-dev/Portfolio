import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  SiJavascript, SiPython, SiCplusplus, SiC,
  SiReact, SiHtml5, SiCss, SiBootstrap,
  SiNodedotjs, SiExpress, SiSpringboot,
  SiMongodb, SiMysql,
  SiGit, SiGithub, SiLinux, SiFlutter
} from "react-icons/si";
import { Code2, Server, Database, Wrench, Layers, Terminal, Coffee } from "lucide-react";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-5 h-5" />,
      skills: [
        { name: "C", icon: SiC, color: "#A8B9CC" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Java", icon: Coffee, color: "#007396" },
      ]
    },
    {
      title: "Frontend",
      icon: <Layers className="w-5 h-5" />,
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss, color: "#1572B6" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      ]
    },
    {
      title: "Database",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      ]
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="w-5 h-5" />,
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#181717" },
        { name: "VS Code", icon: Terminal, color: "#007ACC" },
        { name: "Linux", icon: SiLinux, color: "#FCC624" },
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      ],
      others: ["OOP Concepts", "DSA", "REST APIs"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">Technical Skills</motion.h2>
            <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl mx-auto">Technologies and tools I use to build robust applications.</motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="h-full border-border/50 hover:shadow-md transition-shadow overflow-hidden bg-card/50 backdrop-blur-sm">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                      <div className="p-2 rounded-md bg-primary/10 text-primary">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold font-display">{category.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      {category.skills.map((skill, sIdx) => {
                        const Icon = skill.icon;
                        return (
                          <div 
                            key={sIdx} 
                            className="flex flex-col items-center justify-center p-3 w-[80px] h-[80px] rounded-xl bg-background border border-border/50 hover:border-primary/50 hover:-translate-y-1 hover:shadow-sm transition-all group"
                          >
                            <Icon className="w-8 h-8 mb-2 opacity-80 group-hover:opacity-100 transition-opacity" style={{ color: skill.color }} />
                            <span className="text-[10px] font-medium text-center text-muted-foreground group-hover:text-foreground line-clamp-1">{skill.name}</span>
                          </div>
                        );
                      })}
                      
                      {category.others && (
                        <div className="w-full mt-4 flex flex-wrap gap-2">
                          {category.others.map((item, i) => (
                            <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
