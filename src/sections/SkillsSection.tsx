import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database, Server, Lock, Monitor, Brain, Eye,
  Cloud, Play, Settings, TableProperties, Cpu
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface TechItem {
  name: string;
  logoUrl?: string;
  icon?: React.ReactNode;
  description: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  colorClass: string;
  glowColor: string;
  items: TechItem[];
}

const skillsData: SkillCategory[] = [
  {
    id: "prog",
    title: "Programming & Development",
    icon: "💻",
    colorClass: "from-sky-400 to-blue-500",
    glowColor: "rgba(56, 189, 248, 0.2)",
    items: [
      { name: "Python", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", description: "AI • Backend • Automation" },
      { name: "Java", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", description: "OOP • Software Architecture" },
      { name: "JavaScript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", description: "Web Scripting • Dynamic UI" },
      { name: "Flask", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", description: "Backend Web Microframework" },
      { name: "React.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "Frontend • Component UI" },
      { name: "Node.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", description: "JavaScript Runtime" },
      { name: "Express.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", description: "API Server Framework" },
      { name: "SQL", icon: <Database className="w-5 h-5 text-sky-400" />, description: "Relational Query Languages" },
      { name: "MongoDB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", description: "Document NoSQL Database" },
      { name: "RESTful APIs", icon: <Server className="w-5 h-5 text-sky-400" />, description: "Client-Server Standards" }
    ]
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    icon: "☁️",
    colorClass: "from-indigo-400 to-purple-500",
    glowColor: "rgba(129, 140, 248, 0.2)",
    items: [
      { name: "Docker", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", description: "Containerization & Isolation" },
      { name: "AWS", icon: <Cloud className="w-5 h-5 text-indigo-400" />, description: "Cloud Hosting & Deployments" },
      { name: "CI/CD", icon: <Settings className="w-5 h-5 text-indigo-400" />, description: "Pipeline Automation" },
      { name: "GitHub Actions", icon: <Play className="w-5 h-5 text-indigo-400" />, description: "Workflow Automation" },
      { name: "Deployment & Hosting", icon: <Cloud className="w-5 h-5 text-indigo-400" />, description: "Vercel • Render • Netlify" }
    ]
  },
  {
    id: "db",
    title: "Database Management",
    icon: "🗄️",
    colorClass: "from-emerald-400 to-teal-500",
    glowColor: "rgba(52, 211, 153, 0.2)",
    items: [
      { name: "MySQL", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", description: "Relational DB Management" },
      { name: "MongoDB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", description: "Document NoSQL Database" },
      { name: "Database Design", icon: <TableProperties className="w-5 h-5 text-emerald-400" />, description: "Schema & Relation Design" },
      { name: "Query Optimization", icon: <Cpu className="w-5 h-5 text-emerald-400" />, description: "Performance Tuning" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend & Backend",
    icon: "🎨",
    colorClass: "from-pink-400 to-rose-500",
    glowColor: "rgba(244, 114, 182, 0.2)",
    items: [
      { name: "HTML5 & CSS3", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", description: "Core Web Layout & Styles" },
      { name: "Tailwind CSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", description: "Responsive Utility Styles" },
      { name: "Responsive Web Design", icon: <Monitor className="w-5 h-5 text-pink-400" />, description: "Cross-Device Layouts" },
      { name: "REST API Development", icon: <Server className="w-5 h-5 text-pink-400" />, description: "Backend Route Design" },
      { name: "Authentication", icon: <Lock className="w-5 h-5 text-pink-400" />, description: "JWT & Route Protection" }
    ]
  },
  {
    id: "ml",
    title: "Machine Learning & AI",
    icon: "🧠",
    colorClass: "from-purple-400 to-fuchsia-500",
    glowColor: "rgba(167, 139, 250, 0.2)",
    items: [
      { name: "ML Fundamentals", icon: <Brain className="w-5 h-5 text-purple-400" />, description: "Regression • SVMs • Trees" },
      { name: "Deep Learning", icon: <Brain className="w-5 h-5 text-purple-400" />, description: "Swin • Neural Networks" },
      { name: "Model Deployment", icon: <Cpu className="w-5 h-5 text-purple-400" />, description: "FastAPI AI Inference" },
      { name: "Computer Vision", icon: <Eye className="w-5 h-5 text-purple-400" />, description: "OpenCV Image Processing" }
    ]
  },
  {
    id: "version",
    title: "Version Control & Tools",
    icon: "🛠️",
    colorClass: "from-amber-400 to-orange-500",
    glowColor: "rgba(251, 191, 36, 0.2)",
    items: [
      { name: "Git", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", description: "Distributed Version Control" },
      { name: "GitHub", icon: <FaGithub className="w-5 h-5 text-amber-500" />, description: "Collaboration & Hosting" }
    ]
  },
  {
    id: "learning",
    title: "Currently Learning",
    icon: "📚",
    colorClass: "from-red-400 to-orange-500",
    glowColor: "rgba(248, 113, 113, 0.2)",
    items: [
      { name: "Next.js", icon: <Server className="w-5 h-5 text-red-400" />, description: "App Routing & SSR" },
      { name: "Docker", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", description: "Advanced Orchestration" },
      { name: "Kubernetes", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", description: "Container Orchestration" },
      { name: "AWS", icon: <Cloud className="w-5 h-5 text-red-400" />, description: "Cloud Architecture" },
      { name: "System Design", icon: <TableProperties className="w-5 h-5 text-red-400" />, description: "Scalable Architectures" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 400, damping: 25 }
  }
};

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("prog");
  const activeCategory = skillsData.find(cat => cat.id === activeTab) || skillsData[0];

  return (
    <section id="skills" className="min-h-screen w-full bg-[#0C0C0C] flex flex-col items-center justify-center py-20 px-5 sm:px-8 md:px-10 border-t border-white/5 relative z-30 overflow-hidden">

      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-indigo-500/[0.03] rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Blueprint Grid Mesh overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0 opacity-40" />

      <div className="max-w-5xl mx-auto w-full flex flex-col gap-12 sm:gap-14 items-center relative z-10">

        {/* Section Heading */}
        <div className="w-full text-center flex flex-col items-center gap-3">
          <FadeIn delay={0} y={30}>
            <h2
              className="hero-heading font-black uppercase text-center tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)', lineHeight: 1 }}
            >
              Technical Skills
            </h2>
          </FadeIn>
        </div>

        {/* Dashboard Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 w-full items-stretch">

          {/* Left Category Selection Panel (4 cols on desktop) */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-2.5 flex-shrink-0">
            {skillsData.map((category) => {
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`
                    flex items-center gap-2 px-3 py-3 rounded-2xl border text-left
                    transition-all duration-300 font-mono text-[10px] uppercase tracking-wider cursor-pointer select-none
                    ${isActive
                      ? 'bg-indigo-600/10 border-indigo-500/25 text-indigo-400 font-bold shadow-[inset_0_0_12px_rgba(99,102,241,0.08)] scale-[1.02]'
                      : 'bg-[#121214]/50 border-white/5 text-[#D7E2EA]/50 hover:bg-[#161619]/80 hover:text-white hover:border-white/10'
                    }
                  `}
                >
                  <span className="text-base select-none">{category.icon}</span>
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right Skills Grid Viewport (8 cols on desktop) */}
          <div className="lg:col-span-8 flex">
            <div className="w-full rounded-[28px] border border-white/5 bg-[#121214]/65 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-center min-h-[360px] relative overflow-hidden shadow-xl">

              {/* Dynamic Glow background matching category color */}
              <div
                className="absolute -right-20 -bottom-20 w-[250px] h-[250px] rounded-full blur-[90px] pointer-events-none transition-all duration-700"
                style={{ backgroundColor: activeCategory.glowColor }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10"
                >
                  {activeCategory.items.map((item, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      variants={itemVariants}
                      whileHover={{
                        x: 6,
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        borderColor: 'rgba(255, 255, 255, 0.12)'
                      }}
                      className="flex items-center gap-4 p-3.5 rounded-xl border border-white/5 bg-[#161619]/40 backdrop-blur-md cursor-pointer select-none transition-all duration-200"
                    >
                      {item.icon ? (
                        <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/[0.02] border border-white/5 transition-all duration-200">
                          {item.icon}
                        </div>
                      ) : (
                        <div className="relative p-1 rounded-lg bg-white/[0.02] border border-white/5">
                          <img
                            src={item.logoUrl}
                            alt={`${item.name} logo`}
                            className="h-7 w-7 object-contain filter brightness-95 opacity-80"
                            loading="lazy"
                          />
                        </div>
                      )}

                      <div className="flex flex-col text-left">
                        <span className="text-xs sm:text-sm font-bold text-[#D7E2EA] transition-colors duration-200">
                          {item.name}
                        </span>
                        <span className="text-[10px] sm:text-xs text-[#D7E2EA]/45 font-mono mt-0.5 font-medium leading-none">
                          {item.description}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
