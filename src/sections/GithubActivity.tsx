import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { motion } from 'framer-motion';
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const GithubActivity: React.FC = () => {
  return (
    <section id="github" className="w-full bg-waves flex flex-col items-center justify-center py-20 px-5 sm:px-8 md:px-10 relative z-30 overflow-hidden">

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-indigo-500/[0.02] rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto w-full flex flex-col gap-12 sm:gap-14 items-center relative z-10">

        {/* Section Heading */}
        <div className="w-full text-center flex flex-col items-center gap-3">
          <FadeIn delay={0} y={30}>
            <h2
              className="hero-heading font-black uppercase text-center tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)', lineHeight: 1 }}
            >
              GitHub Activity
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} y={20}>
            <p className="max-w-xl text-center text-[#D7E2EA]/50 font-light text-xs sm:text-sm md:text-base leading-relaxed font-sans">
              Real-time contributions, code statistics, and language distributions directly from my GitHub profile.
            </p>
          </FadeIn>
        </div>

        {/* Dashboard Layout: Stats & Languages on Top, Graph below */}
        <div className="flex flex-col gap-6 w-full">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-stretch">
            {/* Card 1: Dynamic Profile Stats */}
            <FadeIn delay={0.15} y={30} className="flex">
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.12)' }}
                className="w-full rounded-[24px] border border-white/5 bg-[#121214]/65 backdrop-blur-xl p-5 sm:p-6 flex flex-col items-center justify-center min-h-[220px] shadow-lg relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
                <span className="text-[10px] font-black tracking-widest text-[#D7E2EA]/40 uppercase font-mono mb-4 block self-start">
                  Commit &amp; Profile Stats
                </span>
                <img
                  src="https://github-readme-stats.vercel.app/api?username=pallejashwanth&show_icons=true&theme=transparent&hide_border=true&title_color=38bdf8&text_color=D7E2EA&icon_color=818cf8&bg_color=00000000"
                  alt="Jeshwanth's GitHub Stats"
                  className="w-full max-w-[400px] h-auto object-contain select-none pointer-events-none"
                  loading="lazy"
                />
              </motion.div>
            </FadeIn>

            {/* Card 2: Top Languages */}
            <FadeIn delay={0.2} y={30} className="flex">
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.12)' }}
                className="w-full rounded-[24px] border border-white/5 bg-[#121214]/65 backdrop-blur-xl p-5 sm:p-6 flex flex-col items-center justify-center min-h-[220px] shadow-lg relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
                <span className="text-[10px] font-black tracking-widest text-[#D7E2EA]/40 uppercase font-mono mb-4 block self-start">
                  Language Distribution
                </span>
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=pallejashwanth&layout=compact&theme=transparent&hide_border=true&title_color=38bdf8&text_color=D7E2EA&bg_color=00000000"
                  alt="Jeshwanth's Top Languages"
                  className="w-full max-w-[340px] h-auto object-contain select-none pointer-events-none"
                  loading="lazy"
                />
              </motion.div>
            </FadeIn>
          </div>

          {/* Card 3: Contribution Graph (Full Width) */}
          <FadeIn delay={0.25} y={30} className="w-full">
            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.12)' }}
              className="w-full rounded-[24px] border border-white/5 bg-[#121214]/65 backdrop-blur-xl p-6 sm:p-8 flex flex-col items-center justify-center shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
              <span className="text-[10px] font-black tracking-widest text-[#D7E2EA]/40 uppercase font-mono mb-6 block self-start">
                Annual Code Contributions
              </span>
              <div className="w-full overflow-x-auto py-2 flex justify-center no-scrollbar">
                <img
                  src="https://ghchart.rshah.org/4f46e5/pallejashwanth"
                  alt="Jeshwanth's Contribution Chart"
                  className="min-w-[680px] max-w-full h-auto object-contain select-none filter brightness-110 contrast-125"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </FadeIn>

        </div>

        {/* View Profile CTA */}
        <FadeIn delay={0.3} y={30}>
          <a
            href="https://github.com/pallejashwanth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white hover:bg-[#F2F2F7] text-[#0C0C0C] font-bold py-3.5 px-7 text-xs sm:text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-md font-sans border border-white/10"
          >
            <FaGithub className="w-4 h-4" />
            View GitHub Profile
            <ArrowUpRight className="w-4 h-4 text-black/50" />
          </a>
        </FadeIn>

      </div>
    </section>
  );
};
