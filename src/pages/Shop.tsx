import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allProducts = [
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
    {
      id: "7",
      name: "Tropical Sunset Bikini",
      price: 195,
      image: product1,
      category: "Bikinis",
    },
    {
      id: "8",
      name: "Midnight Navy Dress",
      price: 245,
      originalPrice: 280,
      image: product2,
      category: "Dresses",
    },
  ];

  const categories = ["All", "Bikinis", "Palazzos", "Dresses", "Jumpsuits"];

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-luxury">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Shop Collection
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover our complete collection of luxury swimwear and clothing
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-[250px]"
                />
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              {filteredProducts.length} products found
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;