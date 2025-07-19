import { Calendar, GraduationCap, Briefcase, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const Journey = () => {
  const milestones = [
    {
      year: "2010",
      title: "The Beginning",
      description: "Started my journey in a small town with big dreams",
      icon: Calendar,
      side: "left"
    },
    {
      year: "2014",
      title: "Engineering Graduate",
      description: "Graduated with Computer Science degree, top 5% of class",
      icon: GraduationCap,
      side: "right"
    },
    {
      year: "2016",
      title: "First Startup",
      description: "Co-founded my first tech startup, learned the ropes of entrepreneurship",
      icon: Briefcase,
      side: "left"
    },
    {
      year: "2018",
      title: "Growth Hacker",
      description: "Pivoted to growth marketing, helped scale 3 companies to 7-figures",
      icon: TrendingUp,
      side: "right"
    },
    {
      year: "2020",
      title: "Educator & Speaker",
      description: "Started speaking and teaching, reaching thousands globally",
      icon: TrendingUp,
      side: "left"
    }
  ];

  return (
    <section className="bg-background py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">My Journey</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent hidden lg:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div key={index} className={`flex items-center ${milestone.side === 'right' ? 'lg:flex-row-reverse' : ''} lg:justify-center`}>
                  <div className={`w-full lg:w-5/12 ${milestone.side === 'right' ? 'lg:text-right lg:pr-8' : 'lg:pl-8'}`}>
                    <Card className="p-6 bg-card hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-accent/10 rounded-full">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <div className="text-accent font-semibold text-lg">{milestone.year}</div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;