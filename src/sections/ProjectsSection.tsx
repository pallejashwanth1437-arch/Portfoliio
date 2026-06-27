import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectItem {
  number: string;
  category: string;
  name: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  features: string[];
  challenges: string;
  results: string;
  metrics: { label: string; value: string }[];
  images: string[];
  liveUrl: string;
  githubUrl: string;
  docUrl: string;
  status: string;
  impact: string;
}

const projectsData: ProjectItem[] = [
  {
    number: "01",
    category: "Computer Vision AI",
    name: "FreshScan",
    overview: "An AI-powered fruit freshness detection platform featuring a Transformer-based classification pipeline.",
    problem: "Manual classification of agricultural products is subjective, slow, and prone to error, leading to food waste in supply chains.",
    solution: "Developed an automated classification pipeline using a Swin Transformer model paired with real-time FastAPI edge inference.",
    architecture: ["React UI", "FastAPI Backend", "OpenCV Preprocess", "Swin Transformer", "MongoDB Storage"],
    techStack: ["React", "FastAPI", "Python", "MongoDB", "PyTorch", "OpenCV", "Cloudinary"],
    features: [
      "Image Upload & Augmentation",
      "Real-time Classification Inference",
      "OpenCV Preprocessing Pipeline",
      "JWT-based Authentication",
      "MongoDB History Tracking"
    ],
    challenges: "Adapting high-dimensional Vision Transformer models to run with sub-200ms latency on CPU edge servers.",
    results: "Achieved high classification reliability and fast response speeds, allowing instant mobile/web batch checks.",
    metrics: [
      { label: "Accuracy Score", value: "98%" },
      { label: "Training Dataset", value: "18,495 Images" },
      { label: "Classification Model", value: "Swin Trans." },
      { label: "Inference Latency", value: "0.18 sec" }
    ],
    images: ["/freshscan-3.png", "/freshscan-2.png", "/freshscan-1.png"],
    liveUrl: "https://fresh-scan-psi.vercel.app/",
    githubUrl: "https://github.com/pallejashwanth/fresh-scan",
    docUrl: "https://github.com/pallejashwanth/fresh-scan/blob/main/README.md",
    status: "✅ Completed",
    impact: "Automated fruit freshness classification using a Swin Transformer pipeline, reducing manual inspection effort."
  },
  {
    number: "02",
    category: "RAG & LLM Study Assistant",
    name: "ExamPrep AI",
    overview: "A RAG-based study assistant enabling students to study and interact with PDF textbooks through AI-grounded chats.",
    problem: "Students struggle to navigate long reference manuals, leading to inefficient quiz prepping and manual flashcard editing.",
    solution: "Designed a semantic RAG pipeline using FAISS vector retrieval and Gemini 2.5 Flash for context-cited Q&A, MCQs, and active recall.",
    architecture: ["TypeScript UI", "FastAPI Engine", "PyPDF Text Split", "FAISS Vector DB", "Gemini 2.5 API"],
    techStack: ["TypeScript", "FastAPI", "SQLite", "FAISS DB", "LangChain", "Gemini API"],
    features: [
      "Semantic PDF Query Chat",
      "Context-cited Answering",
      "Auto MCQ/Quiz Generator",
      "Active-recall Flashcards",
      "Detailed Score Analytics"
    ],
    challenges: "Reducing hallucination in technical subjects and extracting page numbers for precise source citations.",
    results: "Delivered context-grounded citations and study aids in seconds, improving active recall retention rates.",
    metrics: [
      { label: "RAG Pipeline", value: "LangChain FAISS" },
      { label: "Answering Model", value: "Gemini 2.5 Flash" },
      { label: "Key Features", value: "Quiz & PDF Chat" },
      { label: "Database", value: "SQLite & Vectors" }
    ],
    images: ["/examprep-3.png", "/examprep-2.png", "/examprep-1.png"],
    liveUrl: "https://exam-prep-ai-dusky.vercel.app/",
    githubUrl: "https://github.com/pallejashwanth/exam-prep-ai",
    docUrl: "https://github.com/pallejashwanth/exam-prep-ai/blob/main/README.md",
    status: "🚀 Live",
    impact: "Enabled AI-powered study workflows with contextual RAG search, quizzes, summaries, and flashcards."
  },
  {
    number: "03",
    category: "Security SOAR Platform",
    name: "ThreatTrace",
    overview: "A Security SOAR platform built for automated threat orchestration, vulnerability scanning, and audit mapping.",
    problem: "Raw scanning logs from security tools are overwhelming, making security audit mapping slow for DevOps engineers.",
    solution: "Integrated Nmap & Nikto scanners, feeding findings to Gemini AI for remediation logs and mapping incidents to the MITRE ATT&CK matrix.",
    architecture: ["React Client", "Express Router", "Nmap/Nikto Script", "Gemini AI Audit", "SOAR Dashboard"],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Nmap/Nikto", "Gemini AI"],
    features: [
      "Automated Active Scan Logs",
      "Remediation Code Gen",
      "MITRE ATT&CK Mapping",
      "PDF Security Audit Reports",
      "SOAR Incident Dashboard"
    ],
    challenges: "Parsing unstructured Nmap XML logs and mapping vulnerabilities to standardized threat matrices.",
    results: "Reduced incident classification times and automated active vulnerability remediation.",
    metrics: [
      { label: "Vulnerability Tool", value: "Nmap & Nikto" },
      { label: "AI Auditor", value: "Gemini AI" },
      { label: "Incident Standard", value: "MITRE ATT&CK" },
      { label: "Log Output", value: "PDF Security Report" }
    ],
    images: ["/threattrace-3.png", "/threattrace-2.png", "/threattrace-1.png"],
    liveUrl: "https://github.com/pallejashwanth/ThreatTrace",
    githubUrl: "https://github.com/pallejashwanth/ThreatTrace",
    docUrl: "https://github.com/pallejashwanth/ThreatTrace/blob/main/README.md",
    status: "🚧 Active Dev",
    impact: "Combined automated vulnerability scanning with AI remediation and MITRE ATT&CK mapping for faster security analysis."
  }
];

interface CardProps extends ProjectItem {
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<CardProps> = ({
  index,
  number,
  category,
  name,
  overview,
  problem,
  solution,
  architecture,
  techStack,
  features,
  metrics,
  images,
  liveUrl,
  githubUrl,
  totalCards,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  const handleCarouselScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    if (width > 0) {
      const index = Math.round(scrollLeft / width);
      setActiveImgIdx(index);
    }
  };

  // Track the scroll of this specific card wrapper relative to viewport top
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  // Calculate target scale: scales down slightly as it's stacked over
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="w-full h-auto md:h-[88vh] flex items-start md:items-center justify-center md:sticky"
      style={{
        // Offset by card index
        top: `calc(clamp(88px, 10vw, 110px) + ${index * 24}px)`,
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{
          scale,
          willChange: 'transform',
        }}
        className="w-full rounded-[24px] sm:rounded-[30px] md:rounded-[50px] border border-white/10 bg-[#0C0C0C] p-4 sm:p-6 md:p-9 flex flex-col md:flex-row gap-4 md:gap-8 h-auto md:h-[82vh] shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
      >
        {/* Left Column - Project Info (Scrollable detailed overview) */}
        <div className="flex flex-col justify-start w-full md:w-[48%] h-auto md:h-full text-left gap-4 md:overflow-y-auto pr-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">

          {/* Header block */}
          <div className="flex items-start gap-4 flex-shrink-0">
            <span className="font-black text-[#D7E2EA]/10 uppercase leading-none select-none text-[2.5rem] sm:text-[3.5rem] md:text-[4rem]">
              {number}
            </span>
            <div className="flex flex-col text-left justify-center min-h-[40px] flex-grow">
              <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-[9px] sm:text-xs font-light font-mono">
                {category}
              </span>
              <h3 className="text-[#D7E2EA] uppercase font-bold tracking-wide text-lg sm:text-2xl mt-0.5">
                {name}
              </h3>
            </div>
          </div>

          {/* Action CTAs: Live Demo & GitHub Code */}
          <div className="flex flex-wrap items-center gap-2.5 flex-shrink-0 w-full font-sans border-b border-white/5 pb-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-2xl bg-white hover:bg-[#F2F2F7] text-[#0C0C0C] font-bold py-2 px-4 text-xs transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md border border-white/10 font-sans"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-2xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold py-2 px-4 text-xs transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm font-sans"
            >
              <FaGithub className="w-3.5 h-3.5" />
              GitHub Code
            </a>
          </div>

          {/* Core Metrics Grid */}
          <div className="grid grid-cols-2 gap-2 flex-shrink-0">
            {metrics.map((m, idx) => (
              <div key={idx} className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5 flex flex-col text-left">
                <span className="text-[10px] text-[#D7E2EA]/40 font-mono font-bold uppercase">{m.label}</span>
                <span className="text-sm font-bold text-white mt-0.5">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="flex flex-col gap-1 flex-shrink-0">
            <span className="text-[9px] font-black tracking-widest text-[#D7E2EA]/40 uppercase font-mono">Overview</span>
            <p className="text-[#D7E2EA]/75 font-sans text-xs sm:text-sm leading-relaxed">{overview}</p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-shrink-0">
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-black tracking-widest text-rose-400/60 uppercase font-mono">The Problem</span>
              <p className="text-[#D7E2EA]/70 font-sans text-[11px] sm:text-xs leading-relaxed">{problem}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-black tracking-widest text-emerald-400/60 uppercase font-mono">The Solution</span>
              <p className="text-[#D7E2EA]/70 font-sans text-[11px] sm:text-xs leading-relaxed">{solution}</p>
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="flex flex-col gap-1.5 flex-shrink-0">
            <span className="text-[9px] font-black tracking-widest text-[#D7E2EA]/40 uppercase font-mono">Architecture Flow</span>
            <div className="flex flex-wrap items-center gap-1.5 py-1 text-[9px] font-mono text-[#D7E2EA]/50 font-semibold bg-[#161618]/50 border border-white/5 px-2.5 py-1.5 rounded-xl max-w-max">
              {architecture.map((node, nIdx) => (
                <React.Fragment key={nIdx}>
                  {nIdx > 0 && <span className="text-indigo-400/80">➔</span>}
                  <span className="bg-white/5 px-2 py-0.5 rounded border border-white/5 text-white/80">{node}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="flex flex-col gap-1.5 flex-shrink-0">
            <span className="text-[9px] font-black tracking-widest text-[#D7E2EA]/40 uppercase font-mono">Key Features</span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] sm:text-xs text-[#D7E2EA]/75 font-sans font-light">
              {features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold leading-none">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 flex-shrink-0 mt-1">
            {techStack.map((tag) => (
              <span
                key={tag}
                className="text-[8px] sm:text-[9px] uppercase tracking-wider text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 font-semibold font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Unified Action CTAs: Live Demo -> GitHub */}
        </div>

        {/* Right Column - Swipable Screenshot Gallery (52% width) */}
        <div className="w-full md:w-[52%] h-[200px] md:h-full flex-grow md:flex-grow-0 relative group">

          {/* Scrollable container snap align */}
          <div
            onScroll={handleCarouselScroll}
            className="w-full h-full flex overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth scrollbar-none rounded-2xl sm:rounded-3xl border border-white/10 bg-black/40"
          >
            {images.map((img, imgIdx) => (
              <div key={imgIdx} className="w-full h-full flex-shrink-0 snap-align-start snap-always relative">
                <img
                  src={img}
                  alt={`${name} preview ${imgIdx + 1}`}
                  className="w-full h-full object-cover object-top select-none pointer-events-none rounded-2xl sm:rounded-3xl"
                  loading="lazy"
                />

                {/* Overlay label denoting feature */}
                <span className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {imgIdx === 0 ? "Main Feature" : imgIdx === 1 ? "Dashboard" : "Landing Page"}
                </span>
              </div>
            ))}
          </div>

          {/* Page Indicator Overlay */}
          <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md text-[9px] font-mono font-bold text-white/90 px-3.5 py-1.5 rounded-full uppercase tracking-widest pointer-events-none select-none border border-white/10 flex items-center gap-1.5 z-20">
            <span>{activeImgIdx + 1} / {images.length}</span>
            <span className="opacity-50 font-sans">&bull;</span>
            <span className="text-[#38bdf8] animate-pulse">Swipe ➔</span>
          </div>

        </div>

      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-[#0C0C0C] text-[#D7E2EA] py-24 sm:py-28 md:py-32 relative z-30 overflow-visible flex flex-col items-center border-t border-white/5"
    >

      {/* Title */}
      <div className="w-full text-center py-10 sm:py-16 md:py-20">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center"
            style={{ fontSize: 'clamp(2.5rem, 8.5vw, 110px)', lineHeight: 1 }}
          >
            Projects
          </h2>
        </FadeIn>
      </div>

      {/* Sticky Stacking Cards Container */}
      <div className="max-w-6xl w-full mx-auto relative flex flex-col">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.number}
            index={index}
            {...project}
            totalCards={projectsData.length}
          />
        ))}
      </div>
    </section>
  );
};
