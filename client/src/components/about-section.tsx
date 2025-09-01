export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-secondary"
            data-testid="about-title"
          >
            Sobre
          </h2>
          
          <div className="glass-effect rounded-3xl p-8 md:p-12 floating-card">
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg md:text-xl leading-relaxed mb-6" data-testid="about-intro">
                <span className="text-accent font-semibold">SAYK</span> — <em>psychology, psyche, psycho</em> —, uma jovem cantora e compositora brasileira de apenas 17 anos, busca transmitir a complexidade e a dualidade do ser humano através de letras enigmáticas e melodias coloridas, sempre trazendo consigo temáticas sociais e pessoais relevantes.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed mb-6 text-muted-foreground" data-testid="about-description">
                Sua música é caracterizada pela alternância entre o inglês e o português, fato que se explica pela sua fluência em ambos os idiomas e pela sensação de não estar nem lá nem cá, dado aos anos que morou fora do Brasil. Sendo uma grande apreciadora das artes e dos inúmeros ritmos mundiais, SAYK incorpora em seus projetos uma variedade de gêneros musicais, que vão desde o samba ao trap, do funk ao pop, todas essas batidas viciantes entrelaçadas para criar seu estilo único.
              </p>
              
              <blockquote 
                className="border-l-4 border-primary pl-6 my-8 text-lg md:text-xl italic text-primary"
                data-testid="about-quote"
              >
                "Estou muito feliz de finalmente poder compartilhar a minha arte com o mundo. Que assim eu consiga espalhar cor."
              </blockquote>
              
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground" data-testid="about-future">
                Em breve, SAYK transportará os seus ouvintes para o mundo da lua com o seu álbum de estréia, <span className="text-accent font-semibold">APOLLO</span>, que será lançado aos poucos no decorrer de 2024 e 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
