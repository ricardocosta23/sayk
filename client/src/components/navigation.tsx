import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "glass-effect" : ""
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center" data-testid="logo-sayk">
            <img 
              src="/logo.png?v=1" 
              alt="SAYK Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-lg hover:text-primary transition-colors"
              data-testid="nav-home"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-lg hover:text-secondary transition-colors"
              data-testid="nav-about"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("music")}
              className="text-lg hover:text-accent transition-colors"
              data-testid="nav-music"
            >
              Músicas
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")}
              className="text-lg hover:text-primary transition-colors"
              data-testid="nav-portfolio"
            >
              Portfólio
            </button>
            <button 
              onClick={() => scrollToSection("repertoire")}
              className="text-lg hover:text-magenta transition-colors"
              data-testid="nav-repertoire"
            >
              Repertório
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-lg hover:text-secondary transition-colors"
              data-testid="nav-contact"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl text-primary"
              data-testid="menu-toggle"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass-effect rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-left text-lg hover:text-primary transition-colors"
                data-testid="mobile-nav-home"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left text-lg hover:text-secondary transition-colors"
                data-testid="mobile-nav-about"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection("music")}
                className="text-left text-lg hover:text-accent transition-colors"
                data-testid="mobile-nav-music"
              >
                Músicas
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")}
                className="text-left text-lg hover:text-primary transition-colors"
                data-testid="mobile-nav-portfolio"
              >
                Portfólio
              </button>
              <button 
                onClick={() => scrollToSection("repertoire")}
                className="text-left text-lg hover:text-magenta transition-colors"
                data-testid="mobile-nav-repertoire"
              >
                Repertório
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-left text-lg hover:text-secondary transition-colors"
                data-testid="mobile-nav-contact"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
