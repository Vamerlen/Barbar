
import React, { useState } from "react";
import { Scissors, TrendingUp, Sparkles, Droplet, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  icon: React.ElementType;
  popular?: boolean;
}

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      name: "Classic Haircut",
      description: "Traditional haircut with clippers or scissors including a hot towel finish.",
      price: "R180",
      icon: Scissors,
    },
    {
      id: 2,
      name: "Fade & Style",
      description: "Perfect fade with styling to suit your face shape and personal style.",
      price: "R220",
      icon: TrendingUp,
      popular: true,
    },
    {
      id: 3,
      name: "Beard Trim & Shape",
      description: "Expert beard trimming and shaping to enhance your facial features.",
      price: "R150",
      icon: Scissors,
    },
    {
      id: 4,
      name: "Luxury Shave",
      description: "Premium wet shave experience with hot towels and premium products.",
      price: "R250",
      icon: Sparkles,
    },
    {
      id: 5,
      name: "Hair Treatment",
      description: "Nourishing hair treatment to restore and revitalize your hair.",
      price: "R300",
      icon: Droplet,
    },
    {
      id: 6,
      name: "Express Service",
      description: "Quick haircut and style for the man on the go.",
      price: "R140",
      icon: Zap,
    },
  ];

  return (
    <section id="services" className="py-24 bg-pattern">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">
            We provide exceptional grooming services tailored to enhance your individual style, using premium products and techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={cn(
                "glass-card p-8 rounded-lg hover-up",
                service.popular ? "border-2 border-barber-gold" : "",
                hoveredService === service.id ? "transform -translate-y-2" : ""
              )}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-barber-gold text-white text-xs font-bold px-2 py-1 rounded-full">
                    POPULAR
                  </span>
                </div>
              )}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-barber-gold/10 rounded-full mb-4">
                  <service.icon className="h-8 w-8 text-barber-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="mt-auto">
                  <span className="text-2xl font-bold text-barber-gold">{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <a href="#booking" className="btn-primary inline-flex items-center gap-2">
            Book Your Service
            <ArrowRight size={16} />
          </a>
          <div className="mt-4">
            <Link to="/shop" className="text-barber-gold hover:underline inline-flex items-center gap-2">
              Shop our exclusive merchandise
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;