
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { toast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  popular?: boolean;
}

const Shop = () => {
  const [cart, setCart] = useState<(Product & { quantity: number })[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  
  const products: Product[] = [
    {
      id: 1,
      name: "Premium Hair Pomade",
      description: "High-hold, matte finish pomade for all hair types.",
      price: 180,
      category: "styling",
      image: "/placeholder.svg",
      stock: 25,
      popular: true,
    },
    {
      id: 2,
      name: "Beard Oil",
      description: "Nourishing oil to soften and condition your beard.",
      price: 150,
      category: "grooming",
      image: "/placeholder.svg",
      stock: 18,
    },
    {
      id: 3,
      name: "Styling Comb",
      description: "Professional quality comb for precise styling.",
      price: 120,
      category: "accessories",
      image: "/placeholder.svg",
      stock: 30,
    },
    {
      id: 4,
      name: "Aftershave Balm",
      description: "Soothing balm to reduce irritation after shaving.",
      price: 200,
      category: "grooming",
      image: "/placeholder.svg",
      stock: 15,
      popular: true,
    },
    {
      id: 5,
      name: "Barber T-Shirt",
      description: "Premium cotton t-shirt with our logo.",
      price: 250,
      category: "merchandise",
      image: "/placeholder.svg",
      stock: 10,
    },
    {
      id: 6,
      name: "Beard Brush",
      description: "Boar bristle brush for beard maintenance.",
      price: 180,
      category: "accessories",
      image: "/placeholder.svg",
      stock: 20,
    },
  ];

  const categories = [...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart((prevCart) => {
      return prevCart.map((item) => 
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };

  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <section id="shop" className="py-24 bg-pattern">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Browse our premium barbershop products, from styling tools to grooming essentials
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input 
              type="text"
              placeholder="Search products..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={categoryFilter === null ? "default" : "outline"} 
              size="sm"
              onClick={() => setCategoryFilter(null)}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={categoryFilter === category ? "default" : "outline"} 
                size="sm"
                onClick={() => setCategoryFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover-up overflow-hidden">
              {product.popular && (
                <Badge className="absolute top-4 right-4 z-10 bg-barber-gold text-white border-none">
                  Popular
                </Badge>
              )}
              <div className="h-48 bg-muted flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-32 w-32 object-contain"
                />
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-barber-gold">R{product.price}</p>
                  <p className="text-sm text-muted-foreground">
                    {product.stock > 10 ? "In stock" : product.stock > 0 ? `Only ${product.stock} left` : "Out of stock"}
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full"
                  onClick={() => addToCart(product)}
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Drawer>
          <DrawerTrigger asChild>
            <Button 
              className="fixed bottom-6 right-6 rounded-full p-4 shadow-lg"
              variant="default"
            >
              <ShoppingCart className="h-6 w-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-lg">
              <DrawerHeader>
                <DrawerTitle>Your Cart</DrawerTitle>
                <DrawerDescription>
                  {cart.length === 0 ? (
                    "Your cart is empty"
                  ) : (
                    `${cart.reduce((total, item) => total + item.quantity, 0)} items in your cart`
                  )}
                </DrawerDescription>
              </DrawerHeader>
              {cart.length > 0 ? (
                <div className="p-6">
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center border-b pb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-muted flex items-center justify-center rounded">
                            <img src={item.image} alt={item.name} className="h-12 w-12 object-contain" />
                          </div>
                          <div>
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">R{item.price}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span>{item.quantity}</span>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>R{totalAmount}</span>
                    </div>
                    <Button className="w-full">Checkout</Button>
                  </div>
                </div>
              ) : (
                <div className="p-6 text-center">
                  <p className="mb-4">Start shopping to add items to your cart</p>
                  <DrawerTrigger asChild>
                    <Button>Continue Shopping</Button>
                  </DrawerTrigger>
                </div>
              )}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
};

export default Shop;
