export default function RepertoireSection() {
  return (
    <section id="repertoire" className="py-20 relative">
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
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-magenta font-serif"
            data-testid="repertoire-title"
          >
            Repertório para Shows
          </h2>
          
          <div className="glass-effect rounded-3xl p-8 md:p-12 floating-card">
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6" data-testid="repertoire-description">
                O repertório de <span className="text-primary font-semibold">SAYK</span> é uma celebração da música brasileira em toda a sua diversidade. Do lirismo da bossa nova de <span className="text-accent font-medium">Tom Jobim</span> e <span className="text-accent font-medium">João Gilberto</span> à intensidade poética de <span className="text-secondary font-medium">Elis Regina</span>, <span className="text-secondary font-medium">Caetano Veloso</span> e <span className="text-secondary font-medium">Chico Buarque</span>, passando pelos sambas de <span className="text-primary font-semibold">Adoniran</span> e <span className="text-primary font-semibold">Clara Nunes</span> e pelos clássicos do rock nacional de <span className="text-orange font-medium">Rita Lee</span> e <span className="text-orange font-medium">Ney Matogrosso</span>, cada interpretação revela sua versatilidade e sensibilidade artística.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground" data-testid="repertoire-venues">
                Essa mistura equilibrada entre sofisticação, emoção e leveza torna sua performance perfeita para bares, restaurantes e eventos culturais, envolvendo o público em uma experiência musical que é, ao mesmo tempo, intimista e vibrante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}