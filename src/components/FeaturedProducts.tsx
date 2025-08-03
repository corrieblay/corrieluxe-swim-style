import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: "1",
      name: "Coral Reef Bikini Set",
      price: 189,
      originalPrice: 220,
      image: product1,
      category: "Swimwear",
      isNew: true,
    },
    {
      id: "2",
      name: "Ocean Dreams One-Piece",
      price: 165,
      image: product2,
      category: "Swimwear",
    },
    {
      id: "3",
      name: "Sandy Shore Cover-up",
      price: 145,
      image: product3,
      category: "Cover-ups",
      isNew: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-sunset bg-clip-text text-transparent">Collection</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of luxury swimwear and clothing, 
            designed to make you feel confident and beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="ocean" size="lg" className="group">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;