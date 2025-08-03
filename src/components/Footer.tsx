import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-sunset bg-clip-text text-transparent">
              CorrieLuxe
            </h3>
            <p className="text-background/80 mb-6 max-w-md">
              Luxury swimwear and clothing for the modern woman. 
              Discover elegance, comfort, and style in every piece.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Shop</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#swimwear" className="hover:text-primary transition-smooth">Swimwear</a></li>
              <li><a href="#clothing" className="hover:text-primary transition-smooth">Clothing</a></li>
              <li><a href="#accessories" className="hover:text-primary transition-smooth">Accessories</a></li>
              <li><a href="#sale" className="hover:text-primary transition-smooth">Sale</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Support</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#size-guide" className="hover:text-primary transition-smooth">Size Guide</a></li>
              <li><a href="#shipping" className="hover:text-primary transition-smooth">Shipping Info</a></li>
              <li><a href="#returns" className="hover:text-primary transition-smooth">Returns</a></li>
              <li><a href="#contact" className="hover:text-primary transition-smooth">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm mb-4 md:mb-0">
            © 2024 CorrieLuxe. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-background/60">
            <a href="#privacy" className="hover:text-primary transition-smooth">Privacy Policy</a>
            <a href="#terms" className="hover:text-primary transition-smooth">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;