const FeaturedIn = () => {
  const publications = [
    { name: "YourStory", logo: "📰" },
    { name: "Business Insider", logo: "💼" },
    { name: "The Hindu", logo: "📰" },
    { name: "TechCrunch", logo: "🚀" },
    { name: "Forbes", logo: "💰" },
    { name: "Harvard Business Review", logo: "🎓" },
    { name: "Entrepreneur", logo: "💡" },
    { name: "Fast Company", logo: "⚡" }
  ];

  return (
    <section className="bg-muted py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured In</h2>
          <p className="text-muted-foreground text-lg">
            Recognized by leading publications and media outlets
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {publications.map((publication, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <div className="text-3xl mb-2">{publication.logo}</div>
              <div className="text-xs font-medium text-center text-muted-foreground">
                {publication.name}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Want to feature our story? <span className="text-accent font-semibold cursor-pointer hover:underline">Get in touch</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;