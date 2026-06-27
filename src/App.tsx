import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { EducationSection } from './sections/EducationSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { ContactSection } from './sections/ContactSection';
import { DashboardDock, type TabId } from './components/DashboardDock';

// Shared instance reference for out-of-hook scrolling triggers
let lenisInstance: Lenis | null = null;

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('about');
  const [isAtTop, setIsAtTop] = useState(true);

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
    const targetId = tab === 'about' ? 'hero' : tab;
    const element = document.getElementById(targetId);
    if (element) {
      if (lenisInstance) {
        // High-performance smooth scroll to specific element via Lenis easing
        lenisInstance.scrollTo(element, { 
          offset: 0, 
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // easeOutExpo
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    // Instantiate Lenis for smooth momentum scrolling at 120Hz
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      lerp: 0.08, // Buttery smooth momentum factor
      syncTouch: true, // Smooth touch scrolling on mobile
    });

    lenisInstance = lenis;

    // Use requestAnimationFrame loop to update scroll state on every display frame
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Section scroll spy to update active dock tab
    const handleScroll = () => {
      const sections: TabId[] = ['about', 'skills', 'education', 'projects', 'contact'];
      
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        setIsAtTop(rect.top >= -50);
        if (rect.bottom > window.innerHeight / 2) {
          setActiveTab('about');
          return;
        }
      }

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    // Attach scroll handler to Lenis scroll cycle for perfectly synchronized updates
    lenis.on('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] overflow-x-clip flex flex-col relative select-none">
      <div id="hero">
        <HeroSection 
          onProjectsClick={() => handleTabChange('projects')}
          onContactClick={() => handleTabChange('contact')} 
        />
      </div>
      <AboutSection onContactClick={() => handleTabChange('contact')} />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <DashboardDock activeTab={activeTab} setActiveTab={handleTabChange} isVisible={isAtTop} />
    </div>
  );
}

export default App;
