import React from 'react';
import { Phone, Calendar, Bot, Stethoscope, MessageSquare, ShieldAlert, CheckCircle2, Clock, MapPin, Video } from 'lucide-react';
import { DoctorProfile } from '../types';
import { BrandLogo } from './BrandLogo';

interface HeroSectionProps {
  doctorProfile: DoctorProfile;
  onOpenAppointmentModal: () => void;
  setActiveTab: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ doctorProfile, onOpenAppointmentModal, setActiveTab }) => {
  return (
    <div className="relative bg-gradient-to-b from-teal-50/70 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
      {/* Background Decorative Graphic */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 bg-rose-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-teal-100/80 border border-teal-200 px-3.5 py-1.5 rounded-full text-teal-800 text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-ping inline-block" />
              <span>Agra’s 24×7 Healthcare & Emergency Helpline</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <BrandLogo size="lg" />
              <div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Agra Helpline <span className="text-teal-600">24×7</span>
                </h1>
                <p className="text-xl sm:text-2xl font-bold text-teal-700 mt-1">
                  Care • Connect • Comfort
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              Connecting patients across Agra with OPD consultation with{' '}
              <strong className="text-slate-900 font-bold">{doctorProfile.name}</strong> (Fee: ₹{doctorProfile.consultationFee}), 24×7 emergency triage, and telehealth guidance.
            </p>

            <div className="p-4 bg-teal-50/70 border border-teal-200 rounded-2xl space-y-2 text-xs sm:text-sm">
              <div className="flex items-start space-x-2 text-slate-800">
                <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span><strong>Clinic Address:</strong> {doctorProfile.address}</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenAppointmentModal}
                className="flex items-center space-x-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-5 h-5 shrink-0" />
                <span>Book OPD (₹100)</span>
              </button>

              <a
                href="https://wa.me/919012429042"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl shadow-md transition-all whitespace-nowrap"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>WhatsApp Care</span>
              </a>

              <a
                href="tel:+919012429042"
                className="flex items-center space-x-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl shadow-md transition-all whitespace-nowrap"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span className="whitespace-nowrap">+91 90124 29042</span>
              </a>
            </div>

            {/* Trust Markers */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200/80">
              <div className="flex items-center space-x-2 text-slate-700 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Consultation Fee: ₹100</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>24×7 Call Helpline</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Verified Agra Centre</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Doctor Feature Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden relative group">
              <div className="bg-gradient-to-r from-teal-700 to-emerald-800 p-5 text-white flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-teal-200 font-semibold">Lead Practitioner</span>
                  <h3 className="text-xl font-bold">{doctorProfile.name}</h3>
                  <p className="text-xs text-teal-100">{doctorProfile.title}</p>
                </div>
                <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-xs">
                  <Stethoscope className="w-7 h-7 text-white" />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-teal-100 border-2 border-teal-500 flex items-center justify-center text-teal-800 shrink-0">
                    <Stethoscope className="w-8 h-8" />
                  </div>
                  <div className="space-y-1 text-left">
                    <p className="text-sm font-semibold text-slate-800">
                      Qualification: <span className="text-slate-600 font-normal">{doctorProfile.qualification}</span>
                    </p>
                    <p className="text-xs text-slate-600">
                      Experience: <span className="font-semibold text-slate-900">{doctorProfile.experienceYears}</span>
                    </p>
                    <p className="text-xs text-slate-500">
                      Registration: <span className="font-mono text-slate-700">{doctorProfile.registrationNumber}</span>
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 text-xs text-slate-600 space-y-2 text-left">
                  <div className="flex items-center justify-between text-slate-700 font-medium">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-teal-600 inline shrink-0" />
                      <span>OPD Timings:</span>
                    </span>
                    <span className="text-teal-800 font-bold text-[11px]">{doctorProfile.opdTimings}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-200/60">
                    <span>Consultation Fee:</span>
                    <span className="text-teal-700 font-extrabold text-sm">₹{doctorProfile.consultationFee}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => setActiveTab('doctor')}
                    className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Doctor Info
                  </button>
                  <button
                    onClick={onOpenAppointmentModal}
                    className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    Book OPD Slot
                  </button>
                </div>
              </div>

              <div className="bg-rose-50 px-5 py-3 border-t border-rose-100 flex items-center justify-between text-xs text-rose-800">
                <span className="flex items-center space-x-1.5 font-medium">
                  <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>24×7 Emergency Hotline</span>
                </span>
                <a href="tel:+919012429042" className="font-extrabold underline hover:text-rose-900 whitespace-nowrap">
                  +91 90124 29042
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Cards Matrix */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div 
            onClick={onOpenAppointmentModal}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group hover:-translate-y-0.5 text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <Calendar className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-1">OPD Booking</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              In-clinic doctor consultations in Agra. Pick preferred date & time slots.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('services')}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group hover:-translate-y-0.5 text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Video className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-1">Telemedicine</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Video consultations with qualified doctors & digital prescription delivery.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('ai-triage')}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group hover:-translate-y-0.5 text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Bot className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-1">AI Health Advisor</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Instant AI symptom evaluation, first aid guidance, and triage advice.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('emergency')}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group hover:-translate-y-0.5 text-left border-l-4 border-l-rose-500"
          >
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-1">24×7 Emergency</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Instant helpline call dispatch: <strong className="text-rose-700">+91 90124 29042</strong>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
