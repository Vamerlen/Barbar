
import React from "react";
import { Award, Clock, MapPin, Calendar } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-barber-gold" />,
      title: "Expert Barbers",
      description: "Our team brings years of experience and passion to every haircut."
    },
    {
      icon: <Clock className="h-8 w-8 text-barber-gold" />,
      title: "Flexible Hours",
      description: "Open early and late to accommodate your busy schedule."
    },
    {
      icon: <MapPin className="h-8 w-8 text-barber-gold" />,
      title: "Prime Location",
      description: "Conveniently located in the heart of Pretoria."
    },
    {
      icon: <Calendar className="h-8 w-8 text-barber-gold" />,
      title: "Easy Booking",
      description: "Book online, by phone, or walk in for your convenience."
    }
  ];

  return (
    <section id="about" className="py-24 bg-barber-black text-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="section-title text-white mb-6">About KMD PRO BARBER</h2>
            <p className="text-lg mb-6 leading-relaxed">
              Founded in 1992, KMD PRO BARBER has established itself as one of South Africa's premier barbershops, blending traditional techniques with modern styles to deliver exceptional grooming experiences.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Our team of skilled barbers, all trained in the latest techniques and trends, are dedicated to providing quality haircuts and grooming services that boost confidence and style. We believe that a great haircut is more than just a service—it's an experience.
            </p>
            
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#gallery" className="btn-secondary">
              View Our Work
            </a>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Barber shop interior" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-barber-gold rounded-lg -z-10"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-barber-tan/30 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
