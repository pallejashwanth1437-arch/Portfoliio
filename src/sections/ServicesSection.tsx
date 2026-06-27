import React from 'react';
import { FadeIn } from '../components/FadeIn';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "Full Stack Development",
    description: "Creation of secure, modular, and highly scalable frontend and backend architectures with React.js, FastAPI, Node.js, and modern REST APIs.",
    tags: ["React.js", "FastAPI", "Node.js", "REST APIs"]
  },
  {
    number: "02",
    title: "Security Engineering",
    description: "Building SOC workflows, implementing vulnerability scanning engines (Nmap, Nikto), and designing automated threat correlation pipelines.",
    tags: ["SOC Automation", "Nmap/Nikto", "SOAR Pipelines", "Incident Timelines"]
  },
  {
    number: "03",
    title: "AI & RAG Solutions",
    description: "Integrating advanced Language Models, designing semantic retrieval pipelines using vector databases (FAISS), and building deep learning pipelines.",
    tags: ["LLMs / Gemini", "FAISS Vector DB", "LangChain", "Swin Transformer"]
  },
  {
    number: "04",
    title: "Database Systems",
    description: "Designing and optimizing robust relational and document database systems using MongoDB, MySQL, SQLite, and custom SQLAlchemy layers.",
    tags: ["MongoDB", "MySQL", "SQLite", "SQLAlchemy"]
  },
  {
    number: "05",
    title: "UI/UX & Interaction",
    description: "Creating visually premium, responsive interface layouts with smooth web micro-interactions, dark modes, and modular styling.",
    tags: ["Framer Motion", "Tailwind CSS", "Micro-interactions", "Responsive Layouts"]
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-white text-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20"
    >
      {/* SVG Wave Transition at Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden line-height-0 -translate-y-[99%] z-20 pointer-events-none">
        <svg className="relative block w-full" style={{ height: 'clamp(40px, 8vw, 100px)' }} viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,10 C300,110 900,110 1200,10 L1200,120 L0,120 Z" fill="#FFFFFF"></path>
        </svg>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Services Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)', lineHeight: 1 }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Service List */}
        <div className="border-t border-[rgba(12,12,12,0.15)] w-full">
          {servicesData.map((item, index) => (
            <FadeIn
              key={index}
              delay={index * 0.08}
              y={30}
              className="group border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 flex items-center w-full transition-all duration-300 hover:pl-6 hover:bg-[#0c0c0c]/[0.01] cursor-default"
            >
              {/* Left: Huge Number */}
              <div
                className="font-black text-[#0C0C0C] mr-6 sm:mr-10 md:mr-16 flex-shrink-0 select-none w-[70px] sm:w-[120px] md:w-[160px] transition-transform duration-300 group-hover:scale-105"
                style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)', lineHeight: 1 }}
              >
                {item.number}
              </div>

              {/* Right: Stacked Title & Description */}
              <div className="flex flex-col text-left flex-grow">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] mb-2 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)', lineHeight: 1.2 }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-light text-[#0C0C0C] leading-relaxed max-w-2xl opacity-65 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {item.description}
                </p>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4 transition-transform duration-300 group-hover:translate-x-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-xs uppercase tracking-widest text-[#0C0C0C]/50 border border-[#0C0C0C]/10 bg-[#0C0C0C]/5 px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
