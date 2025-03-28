
import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
  rating: number;
  image: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Esair Deventer",
      position: "Business Executive",
      quote: "KMD PRO BARBER is my go-to place for a perfect cut. The attention to detail and the professional service make every visit a great experience.",
      rating: 5,
      image: "https://i.pinimg.com/236x/af/b6/28/afb6285a8419dbe1029ba7ee40679b6b.jpg"
    },
    {
      id: 2,
      name: "Lesego Nithudli",
      position: "Community Leader",
      quote: "I've been a loyal customer for over 3 years. The consistency in quality and service is what keeps me coming back. Highly recommended!",
      rating: 5,
      image: "https://i.pinimg.com/474x/67/74/b5/6774b55a1dd92cc9e85068f5a47d90fc.jpg"
    },
    {
      id: 3,
      name: " van Graan",
      position: "Sports Professional",
      quote: "As someone who's always in the public eye, having a reliable barber is essential. KMD PRO BARBER delivers every time with style and professionalism.",
      rating: 5,
      image: "https://i.pinimg.com/236x/17/ed/b8/17edb85ee7b01445993f1015626dd999.jpg"
    },
    {
      id: 3,
      name: "Kim van Graan",
      position: "Sports Professional",
      quote: "As someone who's always in the public eye, having a reliable barber is essential. KMD PRO BARBER delivers every time with style and professionalism.",
      rating: 5,
      image: "https://i.pinimg.com/236x/17/ed/b8/17edb85ee7b01445993f1015626dd999.jpg"
    },    {
      id: 4,
      name: "Asha Tesfaye",
      position: "Sports Professional",
      quote: "As someone who's always in the public eye, having a reliable barber is essential. KMD PRO BARBER delivers every time with style and professionalism.",
      rating: 5,
      image: "https://i.pinimg.com/236x/17/ed/b8/17edb85ee7b01445993f1015626dd999.jpg"
    },
  ];

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section id="testimonials" className="py-24 bg-barber-black text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">What Our Clients Say</h2>
          <p className="section-subtitle text-gray-300">
            Hear from our satisfied customers about their experience at Magic Cuts.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white/5 rounded-xl p-8 md:p-10 backdrop-blur-sm border border-white/10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="md:w-1/4 flex flex-col items-center text-center">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 border-2 border-barber-gold">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.position}</p>
                        <div className="flex items-center mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              className={`h-4 w-4 ${i < testimonial.rating ? 'text-barber-gold' : 'text-gray-600'}`}
                              fill={i < testimonial.rating ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="md:w-3/4">
                        <div className="relative">
                          <svg 
                            className="absolute -top-12 -left-10 h-16 w-16 text-barber-gold opacity-20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z" />
                          </svg>
                          <p className="text-lg md:text-xl leading-relaxed mb-4">
                            {testimonial.quote}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-barber-gold text-white rounded-full p-2 shadow-lg hover:bg-barber-gold/90 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-barber-gold text-white rounded-full p-2 shadow-lg hover:bg-barber-gold/90 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex 
                    ? "w-8 bg-barber-gold" 
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
