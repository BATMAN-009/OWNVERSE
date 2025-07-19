import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroSpeaker from "@/assets/hero-speaker.jpg";
import speakerPhoto1 from "@/assets/speaker-photo-1.jpg";
import speakerPhoto2 from "@/assets/speaker-photo-2.jpg";
import speakerPhoto3 from "@/assets/speaker-photo-3.jpg";

const Speaking = () => {
  const stats = [
    { number: "40+", label: "Workshops" },
    { number: "23", label: "Talks" },
    { number: "40,000+", label: "Attendees" },
    { number: "4.8", label: "Avg Rating" }
  ];

  return (
    <section className="bg-dark-bg text-dark-foreground py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Let's light up your conference<br />
            <span className="text-accent">with me as the keynote speaker</span>
          </h2>
          <Button size="lg" className="bg-accent hover:bg-accent-glow text-accent-foreground font-semibold px-8 py-3">
            Book a Date
          </Button>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <img 
            src={heroSpeaker} 
            alt="Conference Speaking" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Speaker Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <img 
            src={speakerPhoto1} 
            alt="Professional Headshot" 
            className="w-full aspect-square object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img 
            src={speakerPhoto2} 
            alt="Conference Speaking" 
            className="w-full aspect-square object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img 
            src={speakerPhoto3} 
            alt="Workshop Facilitation" 
            className="w-full aspect-square object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card-dark border-muted-dark p-6 text-center hover:bg-muted-dark transition-colors">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-muted-dark-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speaking;