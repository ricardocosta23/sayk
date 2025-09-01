import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import MusicSection from "@/components/music-section";
import PortfolioSection from "@/components/portfolio-section";
import RepertoireSection from "@/components/repertoire-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.animationPlayState = 'running';
        }
      });
    }, observerOptions);

    // Observe elements with animations
    const elementsToObserve = document.querySelectorAll('.floating-card, .photo-item');
    elementsToObserve.forEach(el => observer.observe(el));

    // Parallax effect for background elements
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      
      parallaxElements.forEach(element => {
        const speed = 0.5;
        (element as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <PortfolioSection />
      <RepertoireSection />
      <ContactSection />
    </div>
  );
}
