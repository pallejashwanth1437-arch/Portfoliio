import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/Buttons';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll position of this section relative to viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Calculate floating 3D parallax drifts for corner graphics
  const moonY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const crystalY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const legoY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const clusterY = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen w-full relative flex flex-col items-center justify-center bg-waves px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Decorative 3D Corner Graphics with Parallax Scroll */}
      
      {/* Top-left: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none select-none opacity-25 sm:opacity-40"
      >
        <motion.div style={{ y: moonY }} className="will-change-transform">
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      </FadeIn>

      {/* Bottom-left: 3D crystal */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none select-none opacity-20 sm:opacity-35"
      >
        <motion.div style={{ y: crystalY }} className="will-change-transform">
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Crystal Object"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      </FadeIn>

      {/* Top-right: Lego icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none select-none opacity-25 sm:opacity-40"
      >
        <motion.div style={{ y: legoY }} className="will-change-transform">
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Block"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      </FadeIn>

      {/* Bottom-right: 3D pointer */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none select-none opacity-20 sm:opacity-35"
      >
        <motion.div style={{ y: clusterY }} className="will-change-transform">
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Objects Cluster"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      </FadeIn>

      {/* Text block */}
      <div className="flex flex-col items-center justify-center z-10 text-center gap-10 sm:gap-14 md:gap-16 max-w-4xl px-4">
        {/* Title */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Scroll-reveal bio and What I Enjoy Building */}
        <div className="flex flex-col items-center gap-10 sm:gap-14 w-full">
          {/* Tech Focus Summary Card */}
          <FadeIn delay={0.1} y={30} className="w-full max-w-lg">
            <div className="rounded-2xl border border-white/5 bg-[#121214]/65 backdrop-blur-md px-6 py-4 flex flex-col items-center gap-2 text-center shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
              <span className="text-[10px] font-black tracking-widest text-indigo-400 uppercase font-mono">
                Primary Tech Focus
              </span>
              <div className="flex flex-wrap justify-center gap-x-3.5 gap-y-1.5 text-[11px] sm:text-xs text-white/90 font-bold font-sans">
                <span>Full Stack Development</span>
                <span className="text-white/20">&bull;</span>
                <span>Artificial Intelligence</span>
                <span className="text-white/20">&bull;</span>
                <span>RAG Systems</span>
                <span className="text-white/20">&bull;</span>
                <span>Computer Vision</span>
                <span className="text-white/20">&bull;</span>
                <span>Cyber Security</span>
              </div>
            </div>
          </FadeIn>

          <AnimatedText
            text="I'm a Full Stack Developer and Cyber Security undergraduate passionate about Artificial Intelligence, Machine Learning, RAG architectures, and scalable web applications. I enjoy building intelligent products that solve real-world problems—from computer vision systems like FreshScan to AI-powered learning platforms and cybersecurity automation tools. I'm currently looking for Software Engineering, Full Stack, AI, and Cyber Security internship opportunities."
            className="text-[#D7E2EA] font-medium leading-relaxed max-w-[620px] text-[clamp(1rem,1.8vw,1.3rem)] font-sans"
          />

          {/* What I Enjoy Building Tags */}
          <FadeIn delay={0.2} y={30} className="w-full flex flex-col items-center gap-3">
            <span className="text-[10px] font-black tracking-widest text-[#D7E2EA]/40 uppercase font-mono">
              What I Enjoy Building
            </span>
            <div className="flex flex-wrap justify-center gap-2 max-w-xl">
              {[
                "AI Applications 🤖",
                "Full Stack Web Apps 🖥",
                "Machine Learning Systems 🧠",
                "Computer Vision 👁",
                "Cyber Security Automation 🔐",
                "RAG Applications 📚"
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs sm:text-sm font-semibold text-white/80 px-4 py-2 rounded-full border border-white/5 bg-[#161618]/65 shadow-md cursor-default hover:border-white/10 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3} y={30}>
            <ContactButton onClick={onContactClick} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
