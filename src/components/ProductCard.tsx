import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({ name, price, originalPrice, image, category, isNew }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group overflow-hidden border-0 shadow-coral hover:shadow-luxury transition-luxury cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover transition-luxury group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/20 transition-luxury ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded-full">
              New
            </span>
          )}
          {originalPrice && (
            <span className="bg-destructive text-destructive-foreground px-2 py-1 text-xs font-medium rounded-full">
              Sale
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-luxury ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          <Button
            variant="ghost"
            size="icon"
            className="bg-background/90 hover:bg-background"
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-primary text-primary' : ''}`} />
          </Button>
        </div>

        {/* Quick Add Button */}
        <div className={`absolute bottom-3 left-3 right-3 transition-luxury ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button variant="coral" className="w-full" size="sm">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-1">{category}</p>
        <h3 className="font-medium text-foreground mb-2 line-clamp-2">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">${price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;