import React from 'react';
import { Phone, Mail, MapPin, Globe, ExternalLink, MessageSquare, ShieldAlert, FileText, HelpCircle, ShieldCheck } from 'lucide-react';
import { DoctorProfile } from '../types';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  doctorProfile: DoctorProfile;
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ doctorProfile, setActiveTab }) => {
  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 relative z-[10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <BrandLogo size="md" />
              <div>
                <span className="text-lg font-extrabold tracking-tight text-white block group-hover:text-teal-300 transition-colors">
                  Agra Helpline <span className="text-teal-400">24×7</span>
                </span>
                <p className="text-[11px] font-bold text-teal-400 uppercase tracking-wide mt-0.5">
                  Care • Connect • Comfort
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Agra’s trusted 24×7 healthcare helpline, emergency triage, and OPD booking portal. Standard consultation fee: ₹100.
            </p>

            {/* Official Social Links */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider block">Official Channels</span>
              <div className="flex items-center space-x-3">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/AgraHelpline247"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Agra Helpline on Facebook"
                  className="w-9 h-9 bg-[#1877F2] hover:bg-[#166fe5] rounded-xl text-white flex items-center justify-center transition-all transform hover:-translate-y-0.5 hover:scale-105 shadow-sm focus:outline-hidden focus:ring-2 focus:ring-blue-400"
                  title="Official Facebook Page"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/agrahelpline24.7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Agra Helpline on Instagram"
                  className="w-9 h-9 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 rounded-xl text-white flex items-center justify-center transition-all transform hover:-translate-y-0.5 hover:scale-105 shadow-sm focus:outline-hidden focus:ring-2 focus:ring-pink-400"
                  title="Official Instagram Feed"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Google Maps */}
                <a
                  href="https://maps.app.goo.gl/UVvsKfHtdwmdzSQd7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Agra Helpline location in Google Maps"
                  className="w-9 h-9 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-white flex items-center justify-center transition-all transform hover:-translate-y-0.5 hover:scale-105 shadow-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-400"
                  title="Google Maps Navigation"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-teal-300 transition-colors cursor-pointer">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-teal-300 transition-colors cursor-pointer">
                  About Dr. Mohit Gupta Profile
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-teal-300 transition-colors cursor-pointer">
                  Services & OPD (Fee: ₹100)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('doctors')} className="hover:text-teal-300 transition-colors cursor-pointer">
                  Doctor Profile
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('telemedicine')} className="hover:text-teal-300 transition-colors cursor-pointer">
                  Telemedicine Care
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('gallery')} className="hover:text-teal-300 transition-colors cursor-pointer">
                  Clinic Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-teal-300 transition-colors cursor-pointer">
                  Contact & Location
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('faq')} className="hover:text-teal-300 transition-colors cursor-pointer">
                  FAQs & Patient Guide
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('emergency')} className="hover:text-rose-400 transition-colors cursor-pointer">
                  Emergency Help 24×7
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('privacy')} className="hover:text-teal-300 transition-colors cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('terms')} className="hover:text-teal-300 transition-colors cursor-pointer">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Official Helpline Contacts */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-rose-400 uppercase tracking-wider">24×7 Emergency Desk</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 bg-rose-950 text-rose-400 rounded-lg shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+919012429042" className="text-sm font-black text-white underline hover:text-teal-300 whitespace-nowrap">
                  +91 90124 29042
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 bg-emerald-950 text-emerald-400 rounded-lg shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <a 
                  href="https://wa.me/919012429042" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-400 underline hover:text-emerald-300 font-bold whitespace-nowrap"
                >
                  WhatsApp: +91 90124 29042
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 bg-teal-950 text-teal-400 rounded-lg shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="select-all text-slate-200">agrahelpline24.7@gmail.com</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 bg-sky-950 text-sky-400 rounded-lg shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <a 
                  href="https://papaya-souffle-43ae6a.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline text-sky-300 truncate"
                >
                  papaya-souffle-43ae6a.netlify.app
                </a>
              </div>
            </div>
          </div>

          {/* Official Location & Lead Practitioner */}
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3.5 text-xs">
            <div>
              <span className="text-[10px] font-bold uppercase text-teal-400 tracking-wider">Lead Practitioner</span>
              <p className="text-sm font-extrabold text-white mt-0.5">{doctorProfile.name}</p>
              <p className="text-slate-400 text-xs mt-0.5">OPD Fee: <span className="text-teal-300 font-bold">₹{doctorProfile.consultationFee}</span></p>
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-1.5">
              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Verified Clinic Address</span>
              <p className="text-slate-300 leading-relaxed">
                Nagala Budhi, Pushpanjali Bagh Road, Dayalbagh, Agra, Uttar Pradesh – 282005
              </p>
              <a
                href="https://maps.app.goo.gl/UVvsKfHtdwmdzSQd7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-teal-400 hover:text-teal-300 hover:underline pt-1 text-[11px] font-bold"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open Google Maps Pin</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Disclaimer & Rights */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500 space-y-2">
          <p>© {new Date().getFullYear()} Agra Helpline 24×7. All Rights Reserved. Tagline: Care • Connect • Comfort.</p>
          <p className="text-[10px] text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Medical Triage Disclaimer: Information provided on this web platform is intended for OPD appointment scheduling, medical guidance, and helpline support. In acute life-threatening medical emergencies, call +91 90124 29042 or visit the nearest hospital immediately.
          </p>
        </div>
      </div>
    </footer>
  );
};
