import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, TrendingUp, Award, Target, Zap, Star } from "lucide-react";
import linkedinMasterclass from "@/assets/linkedin-masterclass.jpg";

const LinkedInMasterclass = () => {
  const benefits = [
    { icon: Users, title: "Network Growth", description: "Build a powerful professional network" },
    { icon: TrendingUp, title: "Profile Optimization", description: "Stand out with a compelling profile" },
    { icon: Award, title: "Personal Branding", description: "Establish yourself as an industry leader" },
    { icon: Target, title: "Lead Generation", description: "Convert connections into opportunities" },
    { icon: Zap, title: "Content Strategy", description: "Create engaging posts that drive results" },
    { icon: Star, title: "Thought Leadership", description: "Position yourself as an expert" }
  ];

  return (
    <section className="bg-dark-bg text-dark-foreground py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
            LIMITED TIME OFFER
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            LinkedIn <span className="text-accent">Masterclass</span>
          </h2>
          <p className="text-xl text-muted-dark-foreground max-w-3xl mx-auto">
            Transform your LinkedIn presence and unlock unlimited opportunities. 
            Join 5,000+ professionals who've already transformed their careers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={linkedinMasterclass} 
              alt="LinkedIn Masterclass" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">What You'll Master:</h3>
            <div className="space-y-4">
              {[
                "Profile optimization that gets you noticed",
                "Content strategy that drives engagement",
                "Networking techniques that build relationships",
                "Personal branding that establishes authority",
                "Lead generation through strategic outreach",
                "Advanced LinkedIn algorithms and best practices"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-dark-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="bg-card-dark border-muted-dark p-6 hover:bg-muted-dark transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-dark-foreground">{benefit.title}</h4>
                </div>
                <p className="text-muted-dark-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto">
          <Card className="bg-gradient-accent text-center p-8 border-none shadow-glow">
            <div className="mb-6">
              <div className="text-4xl font-bold mb-2">$129</div>
              <div className="text-accent-foreground/80">One-time payment</div>
              <div className="text-sm text-accent-foreground/60 line-through mt-1">Regular price: $299</div>
            </div>
            
            <Button 
              size="lg" 
              className="w-full bg-background text-foreground hover:bg-muted font-semibold py-3"
            >
              Enroll Now - Save $170
            </Button>
            
            <div className="text-sm text-accent-foreground/80 mt-4">
              30-day money-back guarantee
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LinkedInMasterclass;