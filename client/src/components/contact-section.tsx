import { Mail, Instagram, Youtube } from "lucide-react";
import { Music } from "lucide-react";

export default function ContactSection() {
  const socialLinks = [
    {
      name: "Spotify",
      icon: Music,
      url: "https://open.spotify.com/intl-pt/artist/12Ys5kuQchhjGCZVKa92L2",
      color: "text-green-500"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      color: "text-magenta"
    },
    {
      name: "TikTok",
      icon: "fab fa-tiktok",
      url: "#",
      color: "text-white",
      isFontAwesome: true
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "#",
      color: "text-red-500"
    }
  ];

  return (
    <>
      <section id="contact" className="py-20 relative">
        {/* Background image */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-primary"
            data-testid="contact-title"
          >
            Contato
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="glass-effect rounded-3xl p-8 md:p-12 text-center mb-12">
              <div className="mb-8">
                <Mail className="text-4xl text-secondary mb-4 mx-auto" />
                <p className="text-xl text-muted-foreground mb-2" data-testid="email-label">
                  Email Profissional
                </p>
                <a 
                  href="mailto:contato@sayk.com" 
                  className="text-xl md:text-2xl font-semibold text-secondary hover:text-secondary/80 transition-colors"
                  data-testid="email-link"
                >
                  contato@sayk.com
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect rounded-2xl p-6 text-center floating-card group"
                  data-testid={`social-link-${social.name.toLowerCase()}`}
                >
                  {social.isFontAwesome ? (
                    <i className={`${social.icon} text-4xl ${social.color} mb-3 group-hover:scale-110 transition-transform`} />
                  ) : (
                    <social.icon className={`text-4xl ${social.color} mb-3 group-hover:scale-110 transition-transform mx-auto`} />
                  )}
                  <p className="font-semibold">{social.name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-primary mb-2" data-testid="footer-title">
              SAYK
            </h3>
            <p className="text-muted-foreground" data-testid="footer-subtitle">
              Cantora & Compositora
            </p>
          </div>
          <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
            © 2024 SAYK. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
