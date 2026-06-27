import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';

interface HeroSectionProps {
  onProjectsClick: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onProjectsClick, onContactClick }) => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center overflow-x-clip relative bg-waves py-12 md:py-20 px-6 sm:px-10 md:px-16 lg:px-24">
      {/* Cinematic Background Light Source / Orb */}
      <div className="absolute top-[45%] left-[50%] md:left-[70%] -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[450px] md:w-[600px] h-[250px] sm:h-[450px] md:h-[600px] bg-gradient-to-tr from-indigo-600/10 to-purple-500/5 rounded-full blur-[80px] sm:blur-[130px] pointer-events-none z-0" />

      {/* Main Grid: Split Layout on Desktop */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-center z-10">
        
        {/* Left Column: Text & CTA Buttons (7 cols on desktop) */}
        <div className="col-span-1 md:col-span-7 flex flex-col items-start text-left gap-6 md:gap-8 order-2 md:order-1">
          
          {/* Availability & Tech Focus Top Badges */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Availability Badge */}
            <FadeIn delay={0.1} y={20}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Open to Full Stack &amp; AI Internships
              </div>
            </FadeIn>

            {/* Tech Focus Banner */}
            <FadeIn delay={0.15} y={20}>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium uppercase tracking-wider">
                Interested in: Full Stack • AI/ML • Cyber Security
              </div>
            </FadeIn>
          </div>

          {/* Name & Roles */}
          <div className="flex flex-col gap-2">
            <FadeIn delay={0.2} y={30}>
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm sm:text-base font-bold font-mono">
                Palle Jeshwanth
              </span>
            </FadeIn>
            
            <FadeIn delay={0.25} y={30}>
              <h1 className="hero-heading font-black uppercase tracking-tight leading-[1.05] flex flex-col gap-1 sm:gap-2">
                <span className="text-[2.2rem] sm:text-[3.2rem] md:text-[3rem] lg:text-[4.2rem]">Full Stack Developer</span>
                <span className="text-white/95 text-[2.2rem] sm:text-[3.2rem] md:text-[3rem] lg:text-[4.2rem]">AI Engineer</span>
                <span className="text-indigo-400/90 text-sm sm:text-base md:text-lg tracking-[0.2em] font-mono font-bold mt-1.5 uppercase">
                  Cyber Security Student
                </span>
              </h1>
            </FadeIn>
          </div>

          {/* Short Introduction */}
          <FadeIn delay={0.35} y={20}>
            <p className="text-[#D7E2EA]/85 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-light font-sans">
              Building AI-powered applications, scalable web platforms, and intelligent cybersecurity solutions. Passionate about machine learning, RAG systems, and secure full-stack software development.
            </p>
          </FadeIn>

          {/* Action Buttons Group */}
          <FadeIn delay={0.45} y={20} className="w-full">
            <div className="flex flex-wrap gap-3.5 w-full">
              {/* Resume Button */}
              <a
                href="/resume.pdf"
                download="Palle_Jeshwanth_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-2xl bg-white text-[#0C0C0C] font-bold tracking-tight whitespace-nowrap px-7 py-3.5 text-xs sm:text-sm transition-all duration-300 hover:scale-[1.03] hover:bg-[#F2F2F7] active:scale-[0.98] cursor-pointer select-none font-sans shadow-[0_8px_30px_rgba(255,255,255,0.12)] border border-white/20"
              >
                <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Download Resume
              </a>

              {/* View Projects */}
              <button
                onClick={onProjectsClick}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 text-white font-semibold tracking-tight whitespace-nowrap px-7 py-3.5 text-xs sm:text-sm bg-white/5 backdrop-blur-lg transition-all duration-300 hover:scale-[1.03] hover:bg-white/10 hover:border-white/25 active:scale-[0.98] cursor-pointer select-none font-sans"
              >
                <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                View Projects
              </button>

              {/* GitHub Link */}
              <a
                href="https://github.com/pallejashwanth"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 text-white font-semibold tracking-tight whitespace-nowrap px-7 py-3.5 text-xs sm:text-sm bg-white/5 backdrop-blur-lg transition-all duration-300 hover:scale-[1.03] hover:bg-white/10 hover:border-white/25 active:scale-[0.98] cursor-pointer select-none font-sans"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                GitHub
              </a>

              {/* Contact Button */}
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 rounded-2xl border border-[#4f46e5]/40 text-[#a5b4fc] font-semibold tracking-tight whitespace-nowrap px-7 py-3.5 text-xs sm:text-sm bg-[#4f46e5]/10 backdrop-blur-lg transition-all duration-300 hover:scale-[1.03] hover:bg-[#4f46e5]/20 hover:border-[#4f46e5]/60 active:scale-[0.98] cursor-pointer select-none font-sans"
              >
                <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Contact Me
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: 3D floating Portrait (5 cols on desktop) */}
        <div className="col-span-1 md:col-span-5 flex justify-center items-center order-1 md:order-2">
          <FadeIn delay={0.4} y={30} className="w-[260px] sm:w-[320px] md:w-full max-w-[460px]">
            <Magnet
              padding={100}
              strength={4}
              className="w-full cursor-grab active:cursor-grabbing"
            >
              <img
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                alt="Portrait of Jeshwanth"
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] rounded-[40px] border border-white/5"
                loading="eager"
              />
            </Magnet>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
