import React from 'react';
import { User, GraduationCap, FolderGit, MessageSquare, Cpu, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export type TabId = 'about' | 'skills' | 'education' | 'projects' | 'contact';

interface DashboardDockProps {
  activeTab: activeTabType;
  setActiveTab: (tab: TabId) => void;
  isVisible: boolean;
}

type activeTabType = TabId;

export const DashboardDock: React.FC<DashboardDockProps> = ({ activeTab, setActiveTab, isVisible }) => {

  const navItems = [
    { id: 'about' as TabId, label: 'About', icon: <User className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'skills' as TabId, label: 'Skills', icon: <Cpu className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'education' as TabId, label: 'Education', icon: <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'projects' as TabId, label: 'Projects', icon: <FolderGit className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'contact' as TabId, label: 'Contact', icon: <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" /> },
  ];

  return (
    <motion.div
      initial={{ y: -80, x: "-50%", opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        x: "-50%", 
        opacity: isVisible ? 1 : 0 
      }}
      style={{
        pointerEvents: isVisible ? "auto" : "none"
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-6 left-1/2 z-50 flex items-center gap-1.5 sm:gap-3 backdrop-blur-xl bg-black/50 border border-white/10 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_20px_45px_rgba(0,0,0,0.85)] cursor-default select-none w-max"
    >
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`
              flex items-center gap-1.5 sm:gap-2 transition-all duration-300 
              px-3 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest cursor-pointer select-none
              ${isActive 
                ? 'text-white bg-indigo-600/80 shadow-[0_0_15px_rgba(79,70,229,0.5)] border border-indigo-400/20' 
                : 'text-[#D7E2EA]/60 hover:text-white hover:bg-white/5 border border-transparent'
              }
            `}
          >
            {item.icon}
            <span className="hidden md:inline">{item.label}</span>
          </button>
        );
      })}

      {/* Persistent Resume Download Link in Dock */}
      <a
        href="/resume.pdf"
        download="Palle_Jeshwanth_Resume.pdf"
        className="flex items-center gap-1.5 sm:gap-2 transition-all duration-300 px-3 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest cursor-pointer select-none text-emerald-400 hover:text-emerald-300 hover:bg-white/5 border border-emerald-500/25 bg-emerald-500/5 hover:border-emerald-500/50"
      >
        <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden md:inline">Resume</span>
      </a>
    </motion.div>
  );
};
