import { Download } from "lucide-react";

export default function PortfolioSection() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "SAYK Performance 1"
    },
    {
      src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "SAYK Studio Portrait"
    },
    {
      src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "SAYK Studio Session"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "SAYK Behind the Scenes"
    },
    {
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "SAYK Music Video"
    },
    {
      src: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "SAYK Live Performance"
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-orange"
          data-testid="portfolio-title"
        >
          Portfólio
        </h2>
        
        {/* Media Kit Download */}
        <div className="text-center mb-16">
          <button 
            className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/90 transition-all duration-300"
            data-testid="download-media-kit"
          >
            <Download className="mr-3 text-xl" />
            Baixar Media Kit
          </button>
        </div>

        {/* Photo Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {photos.map((photo, index) => {
            const layouts = [
              "md:col-span-2 md:row-span-2", // Large square
              "md:col-span-1 md:row-span-1", // Small
              "md:col-span-1 md:row-span-2", // Tall
              "md:col-span-2 md:row-span-1", // Wide
              "md:col-span-1 md:row-span-1", // Small
              "md:col-span-1 md:row-span-1"  // Small
            ];
            return (
              <div 
                key={index}
                className={`overflow-hidden transition-transform duration-300 hover:scale-105 ${layouts[index % layouts.length]}`}
                data-testid={`photo-item-${index}`}
              >
                <img 
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
