import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_NAME, AGENCY_NAME, LOCATION, PHONE_WORK, PHONE_PERSONAL } from '../constants';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f7f4ee] text-[#1f1d1a] pt-24 pb-12 border-t border-[#ddd4c7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-20">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <h2 className="text-3xl font-serif font-bold mb-6 text-[#1f1d1a]">
              {COMPANY_NAME}
            </h2>

            <p className="text-[#5f584e] mb-8 leading-relaxed font-light max-w-sm">
              Elevating the standard of real estate in Calgary.
              <br />
              We provide a bespoke experience tailored to the unique needs of every&nbsp;client.
            </p>

            <div className="text-xs font-bold text-[#8c7b5f] uppercase tracking-[0.2em] mb-6">
              {AGENCY_NAME}
            </div>

            {/* eXp Realty Logo */}
            <div className="pt-4 border-t border-[#ddd4c7]">
              <img
                src="/assets/images/exp-black.png"
                alt="eXp Realty"
                className="h-8 w-auto object-contain opacity-80"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#1f1d1a] mb-8">
              Explore
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/listings" className="text-[#5f584e] hover:text-[#8c7b5f] transition-colors text-sm">
                  Properties
                </Link>
              </li>

              <li>
                <Link to="/about" className="text-[#5f584e] hover:text-[#8c7b5f] transition-colors text-sm">
                  About
                </Link>
              </li>

              <li>
                <Link to="/market-stats" className="text-[#5f584e] hover:text-[#8c7b5f] transition-colors text-sm">
                  Market Intelligence
                </Link>
              </li>

              <li>
                <Link to="/evaluation" className="text-[#5f584e] hover:text-[#8c7b5f] transition-colors text-sm">
                  Home Valuation
                </Link>
              </li>

              <li>
                <Link to="/services" className="text-[#5f584e] hover:text-[#8c7b5f] transition-colors text-sm">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/testimonials" className="text-[#5f584e] hover:text-[#8c7b5f] transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#1f1d1a] mb-8">
              Contact
            </h3>

            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="text-[#8c7b5f] mr-4 mt-0.5 shrink-0" size={18} />
                <span className="text-[#5f584e] font-light text-sm leading-relaxed">
                  {LOCATION}
                </span>
              </li>

              <li className="flex items-start">
                <Phone className="text-[#8c7b5f] mr-4 mt-0.5 shrink-0" size={18} />
                <div className="text-[#5f584e] font-light text-sm leading-relaxed space-y-1">
                  <a
                    href={`tel:${PHONE_WORK.replace(/[^0-9]/g, '')}`}
                    className="hover:text-[#8c7b5f] transition-colors"
                  >
                    {PHONE_WORK} (Work)
                  </a>
                  <a
                    href={`tel:${PHONE_PERSONAL.replace(/[^0-9]/g, '')}`}
                    className="hover:text-[#8c7b5f] transition-colors block"
                  >
                    {PHONE_PERSONAL} (Personal)
                  </a>
                </div>
              </li>

              <li className="flex items-center">
                <Mail className="text-[#8c7b5f] mr-4 shrink-0" size={18} />
                <Link
                  to="/contact"
                  className="text-[#5f584e] font-light text-sm hover:text-[#8c7b5f] transition-colors"
                >
                  roland@soldbyrg.ca
                </Link>
              </li>

              <li className="pt-4">
                <div className="flex space-x-6">
                  <a href="https://www.facebook.com/RGRealty1/" target="_blank" rel="noreferrer" className="text-[#6f675b] hover:text-[#1f1d1a] transition">
                    <Facebook size={20} />
                  </a>

                  <a href="https://www.instagram.com/rgrealty_/" target="_blank" rel="noreferrer" className="text-[#6f675b] hover:text-[#1f1d1a] transition">
                    <Instagram size={20} />
                  </a>

                  <a href="https://www.linkedin.com/in/roland-gjelaj-5a7475300/" target="_blank" rel="noreferrer" className="text-[#6f675b] hover:text-[#1f1d1a] transition">
                    <Linkedin size={20} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#ddd4c7] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#7d7468]">
          <p>
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-[#1f1d1a] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#1f1d1a] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};