export default function MusicSection() {
  const songs = [
    {
      title: "(A)mazon/Tacama",
      url: "https://open.spotify.com/embed/track/6lWwPTXvt8i8t9g2LW8Zd6?utm_source=generator&theme=0",
      color: "text-primary"
    },
    {
      title: "Xeque-Mate",
      url: "https://open.spotify.com/embed/track/0pssMQyWY6nns1rEA4wYWJ?utm_source=generator&theme=0",
      color: "text-secondary"
    },
    {
      title: "Dindin",
      url: "https://open.spotify.com/embed/track/6wITkbwjZrPU4h6NNC4yjS?utm_source=generator&theme=0",
      color: "text-accent"
    }
  ];

  return (
    <section id="music" className="py-20 relative">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-accent"
          data-testid="music-title"
        >
          Músicas
        </h2>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {songs.map((song, index) => (
            <div 
              key={song.title}
              className="glass-effect rounded-3xl p-6 floating-card"
              style={{ animationDelay: `${index * 0.2}s` }}
              data-testid={`song-card-${index}`}
            >
              <h3 
                className={`text-xl md:text-2xl font-bold mb-4 ${song.color}`}
                data-testid={`song-title-${index}`}
              >
                {song.title}
              </h3>
              <div className="spotify-embed">
                <iframe 
                  src={song.url}
                  width="100%" 
                  height="352" 
                  frameBorder="0" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  title={`Spotify player for ${song.title}`}
                  data-testid={`spotify-embed-${index}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
