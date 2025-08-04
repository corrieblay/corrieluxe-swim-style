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
      category: "Bikinis",
      isNew: true,
    },
    {
      id: "2",
      name: "Ocean Dreams One-Piece",
      price: 165,
      image: product2,
      category: "Bikinis",
    },
    {
      id: "3",
      name: "Sunset Palazzo Pants",
      price: 145,
      image: product3,
      category: "Palazzos",
      isNew: true,
    },
    {
      id: "4",
      name: "Evening Elegance Dress",
      price: 285,
      originalPrice: 320,
      image: product1,
      category: "Dresses",
    },
    {
      id: "5",
      name: "Coastal Breeze Jumpsuit",
      price: 225,
      image: product2,
      category: "Jumpsuits",
      isNew: true,
    },
    {
      id: "6",
      name: "Paradise Flow Palazzo",
      price: 165,
      image: product3,
      category: "Palazzos",
    },
  ];

  const categories = ["Bikinis", "Palazzos", "Dresses", "Jumpsuits"];
  
  const getProductsByCategory = (category: string) => 
    products.filter(product => product.category === category);

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

        {categories.map((category) => {
          const categoryProducts = getProductsByCategory(category);
          if (categoryProducts.length === 0) return null;
          
          return (
            <div key={category} className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-luxury bg-clip-text text-transparent">
                  {category}
                </h3>
                <div className="w-20 h-1 bg-gradient-sunset mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          );
        })}

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