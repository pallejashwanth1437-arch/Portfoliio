import React, { useState } from 'react';
import { Mail, FileText, Copy, Check, Phone, ArrowUpRight, Cpu, MapPin, Briefcase, Award } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('pallejashwanth1437@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('+919063602926');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#0C0C0C] text-[#D7E2EA] pt-20 pb-0 border-t border-white/5 relative z-30 flex flex-col items-center justify-start"
    >
      {/* Background Radial Glow */}
      <div className="absolute -bottom-1/4 -right-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-indigo-500/[0.03] rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center gap-8 sm:gap-10 px-5 sm:px-8 md:px-10">
        
        {/* Header Block */}
        <div className="w-full text-center flex flex-col items-center gap-3">
          <FadeIn delay={0} y={30}>
            <span className="text-[10px] font-black tracking-[0.25em] text-[#818cf8] uppercase font-mono bg-[#818cf8]/10 px-3 py-1 border border-[#818cf8]/20">
              SECURE COMMS MODULE
            </span>
          </FadeIn>
          <FadeIn delay={0.05} y={30}>
            <h2
              className="hero-heading font-black uppercase tracking-tight text-center"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)', lineHeight: 1 }}
            >
              Get In Touch
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} y={20}>
            <p className="max-w-md text-[#D7E2EA]/50 text-xs sm:text-sm font-light leading-relaxed font-sans">
              Connect directly through the communication terminal or access professional networks below.
            </p>
          </FadeIn>
        </div>

        {/* Unified Projects-Style Card */}
        <FadeIn delay={0.15} y={40} className="w-full">
          <div className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-white/10 bg-[#0C0C0C] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 shadow-[0_25px_60px_rgba(0,0,0,0.95)] relative overflow-hidden text-left">
            
            {/* Background Accent Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/[0.01] rounded-full blur-3xl pointer-events-none" />
            
            {/* Left Column: Professional Details (45% width) */}
            <div className="w-full md:w-[45%] flex flex-col justify-between gap-8 z-10">
              
              {/* Profile Block */}
              <div className="flex flex-col gap-5 text-left">
                <div>
                  <span className="text-[9px] font-black tracking-widest text-indigo-400 font-mono block mb-1">
                    DEVELOPER PROFILE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase font-sans">
                    Palle Jeshwanth
                  </h3>
                  <span className="text-xs font-semibold text-white/50 font-mono tracking-wide">
                    Full Stack &amp; AI Developer
                  </span>
                </div>

                <div className="flex flex-col gap-3 text-xs text-[#D7E2EA]/75">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4.5 h-4.5 text-indigo-400/80" />
                    <span>Hyderabad, Telangana, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-4.5 h-4.5 text-[#818cf8]" />
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                      Active Intern Hunt
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-4.5 h-4.5 text-sky-400/80" />
                    <span>Open to Full Stack, AI &amp; Cyber Security Roles</span>
                  </div>
                </div>
              </div>

              {/* Professional Description */}
              <div className="flex flex-col gap-2.5 text-xs text-[#D7E2EA]/70 border-t border-white/5 pt-6">
                <span className="text-[9px] font-black tracking-widest text-[#D7E2EA]/40 uppercase font-mono">Summary</span>
                <p className="leading-relaxed font-sans font-light">
                  Passionate about building scalable AI-integrated web applications, secure API architectures, and computer vision classification models. Dedicated to writing clean, maintainable code.
                </p>
              </div>

            </div>

            {/* Divider line for desktop */}
            <div className="hidden md:block w-[1px] bg-white/10 self-stretch" />

            {/* Right Column: Connection Terminal Comms (55% width) */}
            <div className="w-full md:w-[55%] flex flex-col justify-between gap-8 z-10">
              
              <div className="flex flex-col gap-5">
                <span className="text-[9px] font-black tracking-widest text-[#D7E2EA]/40 uppercase font-mono flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" /> COMMS CONTROL PANEL
                </span>
                
                {/* Comms Options Rows */}
                <div className="flex flex-col gap-3.5 w-full">
                  
                  {/* Email Row */}
                  <motion.div
                    onClick={handleCopyEmail}
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.015)' }}
                    className={`border border-white/5 bg-white/[0.01] p-4 flex items-center justify-between gap-4 cursor-pointer transition-all duration-300 relative rounded-2xl ${copiedEmail ? 'border-emerald-500/20 bg-emerald-500/[0.01]' : 'hover:border-white/15'}`}
                  >
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      <div className="flex flex-col text-left">
                        <span className="text-[8px] font-bold text-white/30 uppercase font-mono">Copy Email Address</span>
                        <span className="text-xs sm:text-sm font-semibold text-white/95 truncate font-sans break-all max-w-[180px] sm:max-w-xs md:max-w-sm">
                          pallejashwanth1437@gmail.com
                        </span>
                      </div>
                    </div>
                    <div className="p-2 rounded-xl border border-white/5 text-white/60 bg-white/[0.02]">
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </div>
                  </motion.div>

                  {/* Phone Row */}
                  <motion.div
                    onClick={handleCopyPhone}
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.015)' }}
                    className={`border border-white/5 bg-white/[0.01] p-4 flex items-center justify-between gap-4 cursor-pointer transition-all duration-300 relative rounded-2xl ${copiedPhone ? 'border-emerald-500/20 bg-emerald-500/[0.01]' : 'hover:border-white/15'}`}
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                      <div className="flex flex-col text-left">
                        <span className="text-[8px] font-bold text-white/30 uppercase font-mono">Copy Phone Line</span>
                        <span className="text-xs sm:text-sm font-semibold text-white/95 font-sans">
                          +91 90636 02926
                        </span>
                      </div>
                    </div>
                    <div className="p-2 rounded-xl border border-white/5 text-white/60 bg-white/[0.02]">
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </div>
                  </motion.div>

                  {/* Resume Row */}
                  <a
                    href="/resume.pdf"
                    download="Palle_Jeshwanth_Resume.pdf"
                    className="block w-full"
                  >
                    <motion.div
                      whileHover={{ backgroundColor: 'rgba(255,255,255,0.015)' }}
                      className="border border-white/5 bg-white/[0.01] hover:border-white/15 p-4 flex items-center justify-between gap-4 cursor-pointer transition-all duration-300 relative rounded-2xl"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <div className="flex flex-col text-left">
                          <span className="text-[8px] font-bold text-white/30 uppercase font-mono">Download Document</span>
                          <span className="text-xs sm:text-sm font-semibold text-white/95 font-sans">
                            Palle_Jeshwanth_Resume.pdf
                          </span>
                        </div>
                      </div>
                      <div className="p-2 rounded-xl border border-white/5 text-white/60 bg-white/[0.02]">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </motion.div>
                  </a>

                </div>
              </div>

              {/* Footer social nodes */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-4 mt-auto">
                <div className="flex gap-4 text-[10px] font-bold uppercase tracking-wider font-mono text-left">
                  <a
                    href="https://www.linkedin.com/in/palle-jeshwanth-001946278/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#818cf8] hover:text-indigo-300 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <span className="text-white/25">&bull;</span>
                  <a
                    href="https://github.com/pallejashwanth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#818cf8] hover:text-indigo-300 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest select-none">
                  STATUS // ACTIVE-NODE
                </span>
              </div>

            </div>

          </div>
        </FadeIn>

      </div>

      {/* Refined Footer */}
      <div className="w-full border-t border-white/5 pt-10 pb-12 mt-auto flex flex-col gap-3 text-center items-center justify-center font-sans bg-[#080808]/50 backdrop-blur-sm relative z-10 px-5 sm:px-8 md:px-10">
        <FadeIn delay={0.1} y={20} className="text-[#D7E2EA]/40 text-xs sm:text-sm font-medium">
          &copy; 2026 Palle Jeshwanth &bull; Designed &amp; Developed by Jeshwanth
        </FadeIn>
        
        <FadeIn delay={0.2} y={20} className="text-[10px] sm:text-xs text-[#D7E2EA]/25 tracking-wide">
          Built with React &bull; TypeScript &bull; Tailwind CSS &bull; Framer Motion &bull; FastAPI
        </FadeIn>

        <FadeIn delay={0.3} y={20} className="text-[10px] sm:text-xs text-indigo-400/80 font-bold uppercase tracking-wider font-mono">
          Open to Full Stack, AI &amp; Cyber Security Internship Opportunities
        </FadeIn>
      </div>

    </section>
  );
};
