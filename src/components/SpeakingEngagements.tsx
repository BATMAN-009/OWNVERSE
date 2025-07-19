const SpeakingEngagements = () => {
  // Placeholder company/college logos
  const engagements = [
    { name: "Stanford University", logo: "🎓" },
    { name: "Harvard Business School", logo: "🎓" },
    { name: "Google", logo: "🔍" },
    { name: "Microsoft", logo: "🔧" },
    { name: "Meta", logo: "📘" },
    { name: "Amazon", logo: "📦" },
    { name: "Tesla", logo: "⚡" },
    { name: "Apple", logo: "🍎" },
    { name: "Netflix", logo: "🎬" },
    { name: "Spotify", logo: "🎵" },
    { name: "Airbnb", logo: "🏠" },
    { name: "Uber", logo: "🚗" }
  ];

  return (
    <section className="bg-background py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Speaking Engagements</h2>
          <p className="text-muted-foreground text-lg">
            Trusted by leading companies and universities worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {engagements.map((engagement, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-6 border rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 bg-card group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {engagement.logo}
              </div>
              <div className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                {engagement.name}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to bring inspiring content to your organization?
          </p>
          <div className="inline-flex items-center gap-2 text-accent font-semibold">
            <span>Let's discuss your next event</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingEngagements;