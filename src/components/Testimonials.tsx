import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      quote: "Alex's LinkedIn strategies increased our lead generation by 300%. Absolutely game-changing!"
    },
    {
      name: "Michael Rodriguez",
      role: "Founder",
      company: "GrowthLabs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      quote: "The growth hacking techniques shared in Alex's workshop transformed our startup's trajectory."
    },
    {
      name: "Emily Johnson",
      role: "VP Sales",
      company: "ScaleUp Corp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      quote: "Best speaker we've had. Practical insights that we implemented immediately with great results."
    },
    {
      name: "David Park",
      role: "Product Manager",
      company: "InnovateNow",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      quote: "Alex's personal branding masterclass helped me land my dream job. Worth every penny!"
    },
    {
      name: "Lisa Thompson",
      role: "CEO",
      company: "NextGen Solutions",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      quote: "Engaging, insightful, and actionable. Alex knows how to deliver content that sticks."
    },
    {
      name: "James Wilson",
      role: "Growth Lead",
      company: "FutureScale",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      quote: "The ROI from Alex's training was immediate. Our team's productivity increased by 40%."
    }
  ];

  return (
    <section className="bg-dark-bg text-dark-foreground py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What People Say</h2>
          <p className="text-muted-dark-foreground text-lg">
            Hear from professionals who've transformed their careers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card-dark border-muted-dark p-6 hover:bg-muted-dark transition-colors">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              
              <blockquote className="text-muted-dark-foreground mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-dark-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-dark-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-dark-foreground mb-4">
            Ready to join thousands of satisfied learners?
          </p>
          <div className="inline-flex items-center gap-2 text-accent font-semibold">
            <span>Start your transformation today</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;