
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>();
  const [service, setService] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  ];

  const services = [
    "Buzzcut", "Fade", "Beard Shave & Bald Haircut",
    "Crew Cut ", "  Line Design + Haircut", "Beard Shave", "Hair Dye(All Colors) + Haircut",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Booking Confirmed",
        description: `Your appointment has been scheduled for ${format(date as Date, "EEEE, MMMM dd, yyyy")} at ${time}.`,
      });
      
      // Reset form
      setDate(undefined);
      setTime("");
      setService("");
      setName("");
      setEmail("");
      setPhone("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-barber-cream/20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Book Your Appointment</h2>
            <p className="section-subtitle">
              Schedule your next grooming session with our expert barbers and experience premium service.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div 
                className="md:w-1/3 bg-barber-black p-8 text-white flex items-center justify-center"
                style={{
                  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1634385030278-2e52b8e67521?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                  <div className="space-y-2 mb-6">
                    <p className="flex justify-between">
                      <span>Tuesday - Friday:</span>
                      <span>7:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday & Sunday:</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Monday:</span>
                      <span>Closed</span>
                    </p>
                  </div>
                  <div className="w-16 h-1 bg-barber-gold mx-auto mb-6"></div>
                  <p className="text-sm opacity-80">
                    Book your appointment today or walk in during business hours.
                  </p>
                </div>
              </div>

              <div className="md:w-2/3 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="service">Service</Label>
                      <Select
                        value={service}
                        onValueChange={setService}
                        required
                      >
                        <SelectTrigger id="service" className="w-full">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((svc) => (
                            <SelectItem key={svc} value={svc}>
                              {svc}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="date"
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => 
                              date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                              date.getDay() === 0 // Disable Sundays
                            }
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <Select
                        value={time}
                        onValueChange={setTime}
                        required
                        disabled={!date}
                      >
                        <SelectTrigger id="time" className="w-full">
                          <SelectValue placeholder="Select time">
                            {time ? (
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4" />
                                {time}
                              </div>
                            ) : (
                              "Select time"
                            )}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        placeholder="+27 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-barber-gold hover:bg-barber-gold/90 text-white py-6 text-base transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Booking..." : "Book Appointment"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
