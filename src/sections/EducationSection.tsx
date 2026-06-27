import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { motion } from 'framer-motion';

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  tags: string[];
}

const educationData: EducationItem[] = [
  {
    degree: "B.Tech in CSE (Cyber Security)",
    institution: "Keshav Memorial College of Engineering (KMCE)",
    duration: "2023 - Present",
    description: "Focusing on computer science fundamentals, cyber security architectures, cryptography, network defense, ethical hacking, and secure full-stack software development.",
    tags: ["B.Tech Degree", "Cyber Security", "KMCE", "2023 - Present"]
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya",
    duration: "2021 - 2023",
    description: "Completed secondary board education specializing in Mathematics, Physics, and Chemistry (MPC) with high academic distinction.",
    tags: ["Board Education", "MPC", "Sri Chaitanya", "Class of 2023"]
  },
  {
    degree: "SSC Secondary School",
    institution: "Sri Chaitanya School",
    duration: "2020 - 2021",
    description: "Completed secondary education focusing on fundamental sciences, mathematics, and analytical skills.",
    tags: ["School Board", "SSC", "Sri Chaitanya", "Class of 2021"]
  }
];

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="min-h-screen w-full bg-waves text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 relative z-20 flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl w-full flex flex-col gap-16">
        
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            className="hero-heading font-black uppercase text-center"
            style={{ fontSize: 'clamp(2.5rem, 8.5vw, 110px)', lineHeight: 1 }}
          >
            Education
          </h2>
        </FadeIn>

        {/* Timeline wrapper */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 w-full flex flex-col gap-8 sm:gap-10">
          
          {/* Vertical Timeline Track Line */}
          <div className="absolute left-[13.5px] sm:left-[21.5px] md:left-[23.5px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent pointer-events-none" />

          {educationData.map((item, index) => (
            <FadeIn
              key={index}
              delay={index * 0.08}
              y={30}
              className="relative w-full"
            >
              {/* Pulsing Timeline Node */}
              <div className="absolute left-[-18.5px] sm:left-[-26.5px] md:left-[-28.5px] top-6 -translate-x-1/2 flex items-center justify-center z-10">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-indigo-500 border border-white/20 shadow-md"></span>
                </span>
              </div>

              {/* Glassmorphic card */}
              <motion.div
                whileHover={{ 
                  y: -4, 
                  scale: 1.01, 
                  borderColor: 'rgba(255,255,255,0.12)', 
                  boxShadow: '0 12px 30px rgba(0,0,0,0.55)',
                  backgroundColor: 'rgba(22, 22, 25, 0.7)' 
                }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="w-full rounded-2xl border border-white/5 bg-[#121214]/40 backdrop-blur-md p-6 sm:p-8 flex flex-col text-left transition-colors duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-white/5 pb-3 mb-4">
                  <h3 className="font-bold uppercase text-white text-base sm:text-lg md:text-xl font-sans tracking-wide">
                    {item.degree}
                  </h3>
                  <span className="text-indigo-400 text-xs sm:text-sm font-bold font-mono tracking-wider shrink-0">
                    {item.duration}
                  </span>
                </div>

                <span className="text-[#D7E2EA]/60 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 block">
                  {item.institution}
                </span>

                <p className="font-light text-[#D7E2EA]/75 leading-relaxed text-xs sm:text-sm md:text-base max-w-3xl font-sans">
                  {item.description}
                </p>

                {/* Info Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#D7E2EA]/50 border border-white/5 bg-white/[0.02] px-3 py-1 rounded-full font-semibold font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}

        </div>
      </div>
    </section>
  );
};
