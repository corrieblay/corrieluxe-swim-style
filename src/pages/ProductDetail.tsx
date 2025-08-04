import { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingBag, Minus, Plus, Star, Truck, RefreshCw, Shield } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [isLiked, setIsLiked] = useState(false);

  // Mock product data - in real app this would come from API
  const product = {
    id: "1",
    name: "Coral Reef Bikini Set",
    price: 189,
    originalPrice: 220,
    images: [product1, product2, product3],
    category: "Bikinis",
    isNew: true,
    description: "Dive into luxury with our Coral Reef Bikini Set. This stunning two-piece features a vibrant coral print inspired by tropical reefs, crafted from premium Italian fabric that's both comfortable and durable.",
    features: [
      "Premium Italian fabric",
      "UPF 50+ sun protection",
      "Quick-dry technology",
      "Adjustable straps",
      "Removable padding"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    rating: 4.8,
    reviewCount: 124
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 ${
                      currentImageIndex === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{product.category}</Badge>
                  {product.isNew && <Badge variant="default">New</Badge>}
                  {product.originalPrice && <Badge variant="destructive">Sale</Badge>}
                </div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-primary">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Size Selection */}
              <div>
                <label className="text-sm font-medium mb-3 block">Size</label>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedSize(size)}
                      className="w-12 h-12"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="text-sm font-medium mb-3 block">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button size="lg" className="flex-1">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? 'fill-primary text-primary' : ''}`} />
                </Button>
              </div>

              {/* Features */}
              <div className="border-t pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Truck className="h-6 w-6 text-primary" />
                    <span className="text-sm">Free Shipping</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <RefreshCw className="h-6 w-6 text-primary" />
                    <span className="text-sm">Easy Returns</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    <span className="text-sm">1 Year Warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="care">Care Instructions</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="mt-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Product Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="care" className="mt-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Care Instructions</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Hand wash in cold water</li>
                    <li>• Do not bleach or use fabric softener</li>
                    <li>• Lay flat to dry, avoid direct sunlight</li>
                    <li>• Do not iron or dry clean</li>
                    <li>• Rinse immediately after swimming in chlorinated water</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((review) => (
                      <div key={review} className="border rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="font-medium">Sarah M.</span>
                        </div>
                        <p className="text-muted-foreground">
                          Amazing quality and perfect fit! The colors are vibrant and the fabric feels luxurious.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;