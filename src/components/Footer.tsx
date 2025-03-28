
import React from "react";
import { Scissors } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-barber-black text-white pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Scissors className="h-8 w-8 text-barber-gold" />
              <span className="text-xl font-serif font-bold">
                <span className="text-white">KMD PRO</span>
                <span className="text-barber-gold">BARBER</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium barbering services in South Africa, delivering exceptional cuts and styling since 1992.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-barber-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-barber-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-barber-gold transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-barber-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-barber-gold transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-barber-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-barber-gold transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-barber-gold transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-barber-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-barber-gold transition-colors">Classic Haircut</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-barber-gold transition-colors">Fade & Style</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-barber-gold transition-colors">Beard Trim & Shape</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-barber-gold transition-colors">Luxury Shave</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-barber-gold transition-colors">Hair Treatment</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-barber-gold transition-colors">Express Service</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 flex justify-between">
                <span>Tuesday - Friday</span>
                <span>07:00 - 18:00</span>
              </li>
              <li className="text-gray-400 flex justify-between">
                <span>Saturday-Sunday</span>
                <span>09:00 - 14:00</span>
              </li>
              <li className="text-gray-400 flex justify-between">
                <span>Monday</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href="#booking" 
                className="btn-secondary text-sm"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} KMD PRO BARBER. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-barber-gold text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-barber-gold text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-barber-gold text-sm">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
