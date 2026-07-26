import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe, ExternalLink, MessageSquare, Clock, ShieldCheck, Stethoscope, Send, CheckCircle2, AlertTriangle } from 'lucide-react';
import { DoctorProfile } from '../types';

interface ContactSectionProps {
  doctorProfile: DoctorProfile;
  onOpenAppointmentModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ doctorProfile, onOpenAppointmentModal }) => {
  // Contact Form State
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !mobileNumber || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedMessage("Thank you. Your message has been received. The Agra Helpline 24×7 team will contact you shortly.");
      // Reset form
      setFullName('');
      setMobileNumber('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left space-y-10 min-h-screen">
      
      {/* Page Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
          Verified Clinic Location & 24×7 Helpline
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
          Contact Agra Helpline <span className="text-teal-600">24×7</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
          Visit our clinic in Dayalbagh, Agra, or reach out to our round-the-clock emergency desk for OPD bookings, medical inquiries, and telehealth support.
        </p>
      </div>

      {/* Top 4 Essential Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Call Now Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-rose-400 transition-all space-y-3">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">24×7 Emergency Hotline</span>
            <a href="tel:+919012429042" className="block text-lg font-black text-rose-700 hover:underline mt-0.5">
              +91 90124 29042
            </a>
          </div>
          <p className="text-xs text-slate-500 leading-tight">Instant doctor triage & ambulance dispatch assistance.</p>
        </div>

        {/* WhatsApp Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-400 transition-all space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">WhatsApp Care Desk</span>
            <a 
              href="https://wa.me/919012429042" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-base font-extrabold text-emerald-700 hover:underline mt-0.5"
            >
              +91 90124 29042
            </a>
          </div>
          <p className="text-xs text-slate-500 leading-tight">Fast appointment confirmation & prescription consultation.</p>
        </div>

        {/* Email Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-teal-400 transition-all space-y-3">
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Official Email</span>
            <span className="block text-xs font-bold text-slate-800 select-all mt-0.5 truncate">
              agrahelpline24.7@gmail.com
            </span>
          </div>
          <p className="text-xs text-slate-500 leading-tight">Official patient inquiries & health records coordination.</p>
        </div>

        {/* Clinic Address Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-amber-400 transition-all space-y-3">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Verified Location</span>
            <p className="text-xs font-bold text-slate-900 mt-0.5 leading-snug">
              Dayalbagh, Agra (282005)
            </p>
          </div>
          <a
            href="https://maps.app.goo.gl/UVvsKfHtdwmdzSQd7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-teal-600 text-xs font-bold hover:underline"
          >
            <span>Google Maps Pin</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left 7 Columns: Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-extrabold uppercase text-teal-600 tracking-wider">Direct Message</span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">Send Inquiry to Agra Helpline 24×7</h2>
            <p className="text-xs text-slate-500 mt-1">Fill in your details below. Our team responds promptly during active care hours.</p>
          </div>

          {submittedMessage ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3 animate-in fade-in">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="font-extrabold text-emerald-900 text-lg">Message Submitted</h3>
              <p className="text-xs sm:text-sm font-medium text-emerald-800 max-w-md mx-auto">{submittedMessage}</p>
              <button
                onClick={() => setSubmittedMessage(null)}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ramesh Sharma"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address (Optional)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. patient@gmail.com"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. OPD Consultation Inquiry"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Message *</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your health question or appointment request..."
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm rounded-xl shadow-xs transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending Message...' : 'Submit Inquiry'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Right 5 Columns: Map Navigation & Social Media */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Highway Location Direction Billboard Card */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs space-y-3 p-4">
            <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
              <img
                src={new URL('../assets/images/highway_billboard_1785101524107.jpg', import.meta.url).href}
                alt="Agra Highway Directional Billboard Signboard"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-teal-600 uppercase tracking-wider block">Highway Wayfinding Signboard</span>
              <p className="text-xs font-bold text-slate-900">
                Look for our official Agra Highway Directional Sign when travelling to Nagala Budhi, Dayalbagh.
              </p>
            </div>
          </div>

          {/* OPD Hours & Doctor Card */}
          <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-4 shadow-md">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase text-teal-400">Lead Physician</span>
                <h3 className="text-lg font-bold">{doctorProfile.name}</h3>
              </div>
              <Stethoscope className="w-7 h-7 text-teal-400" />
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex justify-between items-center">
                <span className="flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-teal-400" />
                  <span>OPD Schedule:</span>
                </span>
                <span className="font-bold text-teal-300">{doctorProfile.opdTimings}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-slate-800">
                <span>Standard Consultation Fee:</span>
                <span className="text-base font-black text-teal-300">₹{doctorProfile.consultationFee}</span>
              </div>
            </div>

            <button
              onClick={onOpenAppointmentModal}
              className="w-full py-2.5 bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Book OPD Appointment Now
            </button>
          </div>

          {/* Social Media Links */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3">
            <h3 className="text-xs font-bold uppercase text-slate-700 tracking-wider">Official Social Media Profiles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://www.facebook.com/AgraHelpline247"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-500 transition-colors text-xs font-bold text-slate-800"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <span>Facebook Page</span>
              </a>

              <a
                href="https://www.instagram.com/agrahelpline24.7/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-pink-500 transition-colors text-xs font-bold text-slate-800"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <span>Instagram Feed</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
