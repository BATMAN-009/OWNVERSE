import { Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:hello@alexjohnson.com", label: "Email" },
    { icon: Phone, href: "tel:+1234567890", label: "Phone" }
  ];

  return (
    <footer className="bg-dark-bg text-dark-foreground py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Alex Johnson</h3>
            <p className="text-muted-dark-foreground mb-4">
              Growth Hacker, Educator & Speaker helping professionals unlock their potential.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button 
                    key={index}
                    variant="ghost" 
                    size="icon" 
                    className="text-muted-dark-foreground hover:text-accent hover:bg-muted-dark"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-dark-foreground">
              <li><a href="#about" className="hover:text-accent transition-colors">About Me</a></li>
              <li><a href="#speaking" className="hover:text-accent transition-colors">Speaking</a></li>
              <li><a href="#masterclass" className="hover:text-accent transition-colors">LinkedIn Masterclass</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-dark-foreground">
              <p>📧 hello@alexjohnson.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-muted-dark pt-8 text-center text-muted-dark-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              © 2024 Alex Johnson. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;