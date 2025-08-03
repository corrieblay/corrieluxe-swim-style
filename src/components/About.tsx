import { Button } from "@/components/ui/button";
import { Waves, Heart, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Waves,
      title: "Ocean Inspired",
      description: "Every piece is inspired by the beauty and elegance of ocean waves and coral reefs."
    },
    {
      icon: Heart,
      title: "Ethically Made",
      description: "Crafted with love and care, using sustainable materials and ethical production practices."
    },
    {
      icon: Sparkles,
      title: "Luxury Quality",
      description: "Premium fabrics and meticulous attention to detail ensure lasting beauty and comfort."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="bg-gradient-luxury bg-clip-text text-transparent">CorrieLuxe</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Born from a passion for ocean beauty and feminine elegance, CorrieLuxe creates 
              luxury swimwear that celebrates the modern woman. Each piece is thoughtfully 
              designed to enhance your natural beauty while providing unmatched comfort and style.
            </p>
            <p className="text-muted-foreground mb-8">
              Our commitment to quality craftsmanship and sustainable practices ensures that 
              every CorrieLuxe piece is not just beautiful, but also responsibly made for the 
              conscious consumer.
            </p>
            <Button variant="luxury" size="lg">
              Learn Our Story
            </Button>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4 p-6 bg-background rounded-lg shadow-coral">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-sunset rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;