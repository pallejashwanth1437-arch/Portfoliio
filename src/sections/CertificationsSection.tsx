import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Calendar } from 'lucide-react';

interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  badge: string;
  logoUrl: string;
  credentialId?: string;
  verifyUrl?: string;
  bullets: string[];
}

const certificationsData: CertificationItem[] = [
  {
    title: "Meta Front-End Development",
    issuer: "Coursera",
    year: "2024",
    badge: "⚛️",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    credentialId: "META-FED-2024",
    verifyUrl: "https://coursera.org/verify/meta-front-end-developer",
    bullets: [
      "Gained foundational knowledge of modern front-end web development.",
      "Learned HTML5, CSS3, JavaScript, Responsive Design, and React fundamentals.",
      "Developed skills in building interactive and user-friendly web applications."
    ]
  },
  {
    title: "100 Days of Code: Python Pro",
    issuer: "Udemy",
    year: "2024",
    badge: "🐍",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    credentialId: "UC-50ba68ce-5975-40cc-ba28",
    verifyUrl: "https://ude.my/UC-50ba68ce-5975-40cc-ba28",
    bullets: [
      "Completed 56.5 hours of hands-on Python programming training.",
      "Learned object-oriented programming, APIs, automation, and software engineering concepts.",
      "Built practical projects to strengthen problem-solving and programming skills."
    ]
  },
  {
    title: "SQL Advanced Certification",
    issuer: "HackerRank",
    year: "2024",
    badge: "📊",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    credentialId: "HR-SQL-ADV-9810",
    verifyUrl: "https://www.hackerrank.com/certificates/sql-advanced",
    bullets: [
      "Demonstrated advanced SQL querying skills.",
      "Worked with joins, subqueries, aggregate functions, views, and database optimization techniques."
    ]
  },
  {
    title: "Cyber Security Workshop",
    issuer: "JNTUH College of Eng.",
    year: "2024",
    badge: "🛡️",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    credentialId: "JNTUH-CSW-2024",
    verifyUrl: "https://jntuhceh.ac.in",
    bullets: [
      "Successfully participated in a Cyber Security Workshop organized by JNTUH College of Engineering.",
      "Gained practical exposure to cybersecurity fundamentals, ethical hacking, and network security."
    ]
  }
];

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="min-h-screen w-full bg-waves flex flex-col items-center justify-center py-20 px-5 sm:px-8 md:px-10 relative z-30">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-16">
        
        {/* Section Title */}
        <div className="w-full text-center">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase text-center"
              style={{ fontSize: 'clamp(2.5rem, 8.5vw, 110px)', lineHeight: 1 }}
            >
              Certifications
            </h2>
          </FadeIn>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {certificationsData.map((item, index) => (
            <FadeIn
              key={index}
              delay={index * 0.05}
              y={30}
              className="col-span-1"
            >
              <div className="h-full rounded-[30px] border border-white/10 bg-[#161618]/45 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between text-left gap-6 hover:border-white/20 transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.5)] group relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-[0.012] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Header: Badge */}
                <div className="flex justify-between items-center w-full z-10">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl select-none">
                    {item.badge}
                  </div>
                </div>

                {/* Info Block */}
                <div className="flex flex-col gap-2 z-10">
                  <span className="text-[10px] font-bold tracking-widest text-[#D7E2EA]/50 uppercase font-mono flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {item.issuer} &bull; {item.year}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-wide leading-snug">
                    {item.title}
                  </h4>
                  
                  {/* Bullets achievements */}
                  <ul className="flex flex-col gap-1.5 text-xs text-[#D7E2EA]/70 font-sans font-light mt-2 pl-1">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-[#818cf8] mt-1 select-none font-bold text-xs leading-none">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer details: ID */}
                {item.credentialId && (
                  <div className="flex flex-col z-10 border-t border-white/5 pt-4 mt-auto w-full">
                    <span className="text-[9px] font-bold text-[#D7E2EA]/30 uppercase font-mono">Credential ID</span>
                    <span className="text-xs font-mono text-[#D7E2EA]/75">{item.credentialId}</span>
                  </div>
                )}

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
