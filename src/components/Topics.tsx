import { TrendingUp, Target, Lightbulb, Palette, Shield, Code, Users, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Topics = () => {
  const topics = [
    { name: "Growth Hacking", icon: TrendingUp, color: "bg-accent/10 text-accent" },
    { name: "Growth Marketing", icon: Target, color: "bg-accent/10 text-accent" },
    { name: "Startups", icon: Lightbulb, color: "bg-accent/10 text-accent" },
    { name: "UI/UX Design", icon: Palette, color: "bg-accent/10 text-accent" },
    { name: "Branding", icon: Users, color: "bg-accent/10 text-accent" },
    { name: "Ethical Hacking", icon: Shield, color: "bg-accent/10 text-accent" },
    { name: "Product Development", icon: Code, color: "bg-accent/10 text-accent" },
    { name: "Data Analytics", icon: BarChart3, color: "bg-accent/10 text-accent" }
  ];

  return (
    <section className="bg-background py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Topics I Talk About</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From growth strategies to technical insights, I cover a wide range of topics 
            that help businesses and individuals scale effectively.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <div 
                key={index}
                className="group p-6 border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-card"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className={`p-3 rounded-full ${topic.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-sm lg:text-base">{topic.name}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">And many more topics tailored to your audience's needs</p>
          <Badge variant="secondary" className="px-4 py-2">
            Custom Topics Available
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Topics;