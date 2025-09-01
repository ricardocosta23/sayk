import { Music } from "lucide-react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Atmospheric background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-background to-blue-900/40"></div>
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "url('/singer-stage-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
        <div 
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full animate-float opacity-80"
          style={{ animationDelay: "1s" }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent rounded-full animate-float opacity-40"
          style={{ animationDelay: "2s" }}
        ></div>
        <div 
          className="absolute top-2/3 right-1/4 w-1 h-1 bg-orange rounded-full animate-float opacity-70"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center animate-fade-in">

        {/* Logo */}
        <div 
          className="mb-4 animate-slide-up flex justify-center"
          data-testid="hero-logo"
        >
          <img 
            src="/logo.png?v=1" 
            alt="SAYK Logo" 
            className="h-32 md:h-48 lg:h-56 w-auto max-w-lg mx-auto"
          />
        </div>
        <p 
          className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-secondary animate-slide-up font-sans tracking-wider"
          style={{ animationDelay: "0.2s" }}
          data-testid="hero-subtitle"
        >
          Cantora & Compositora
        </p>
        
        {/* CTA Button */}
        <a 
          href="https://open.spotify.com/intl-pt/artist/12Ys5kuQchhjGCZVKa92L2" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
          data-testid="hero-spotify-button"
        >
          <Music className="mr-3 text-xl" />
          Ouça no Spotify
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-2xl text-muted-foreground" data-testid="scroll-indicator" />
      </div>
    </section>
  );
}
