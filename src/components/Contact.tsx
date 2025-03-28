
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-barber-gold" />,
      title: "Our Location",
      details: "599 Caterina Street, Pretoria, 0084",
      link: "https://maps.app.goo.gl/tjdKC8eyj3e35cJE7",
      linkText: "View on Map"
    },
    {
      icon: <Phone className="h-5 w-5 text-barber-gold" />,
      title: "Phone Number",
      details: "+27 78 824 6963",
      link: "tel:+27788246963",
      linkText: "Call Us"
    },
    {
      icon: <Mail className="h-5 w-5 text-barber-gold" />,
      title: "Email Address",
      details: "kdmprobarber@outlook.com",
      link: "mailto:kdmprobarber@outlook.com",
      linkText: "Send Email"
    },
    {
      icon: <Clock className="h-5 w-5 text-barber-gold" />,
      title: "Working Hours",
      details: "Tuesday-Friday: 7AM-6PM, Sat-Sun: 9AM-2PM",
      link: "#booking",
      linkText: "Book Now"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions or need to schedule an appointment? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4 hover-up p-4 rounded-lg glass-card">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-barber-gold/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">{item.title}</h4>
                    <p className="text-muted-foreground mb-2">{item.details}</p>
                    <a 
                      href={item.link} 
                      className="text-sm text-barber-gold hover:text-barber-gold/80 flex items-center gap-1"
                    >
                      {item.linkText}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-3 w-3" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="glass-card p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="John Doe"
                      className="border-barber-gold/20 focus:border-barber-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="john@example.com"
                      className="border-barber-gold/20 focus:border-barber-gold"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="How can we help you?"
                    rows={5}
                    className="border-barber-gold/20 focus:border-barber-gold"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-barber-gold hover:bg-barber-gold/90 text-white flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : (
                    <>
                      Send Message <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 w-full h-96 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114614.83576245284!2d28.04005857802582!3d-26.171671425258756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1710242700787!5m2!1sen!2sus"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="KMD PRO BAR location"
        ></iframe>

        <div className="absolute top-10 left-10 max-w-xs bg-white p-6 rounded-xl shadow-xl md:block hidden">
          <h4 className="font-bold text-xl mb-2">Visit Our Shop</h4>
          <p className="text-muted-foreground mb-4">Experience the premium barbering service you deserve at our stylish location.</p>
          <a 
            href="#booking" 
            className="btn-primary inline-block text-sm"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
