import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-dark-bg text-dark-foreground py-6 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Alex Johnson</h1>
          <p className="text-muted-dark-foreground text-sm lg:text-base mt-1">
            Growth Hacker | Educator | Speaker
          </p>
        </div>
        
        <Button variant="ghost" size="icon" className="text-dark-foreground hover:bg-muted-dark">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* YouTube Video Embed */}
      <div className="max-w-7xl mx-auto mt-8">
        <div className="aspect-video max-w-4xl mx-auto">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </header>
  );
};

export default Header;