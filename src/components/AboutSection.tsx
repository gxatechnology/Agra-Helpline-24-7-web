import React from 'react';
import { ShieldCheck, HeartPulse, Clock, MapPin, Award, Users, Stethoscope, PhoneCall, Calendar } from 'lucide-react';
import { DoctorProfile } from '../types';

interface AboutSectionProps {
  doctorProfile: DoctorProfile;
  onOpenAppointmentModal: () => void;
  setActiveTab: (tab: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ doctorProfile, onOpenAppointmentModal, setActiveTab }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left space-y-12">
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-6 max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-teal-500/20 border border-teal-400/30 px-3.5 py-1.5 rounded-full text-teal-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Agra’s Premiere 24×7 Emergency & Healthcare Centre</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            About <span className="text-teal-400">Agra Helpline 24×7</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Established with a vision to make quality medical care, round-the-clock emergency assistance, and affordable OPD consultations accessible to every family in Agra and surrounding districts.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onOpenAppointmentModal}
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center space-x-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book OPD Consultation (₹100)</span>
            </button>
            <a
              href="tel:+919012429042"
              className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center space-x-2 whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Emergency: +91 90124 29042</span>
            </a>
          </div>
        </div>
      </div>

      {/* Core Values & Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">24×7 Uninterrupted Helpline</h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Our dedicated dispatch desk operates 24 hours a day, 7 days a week to handle medical inquiries, OPD slot allocations, and critical ambulance dispatch.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Affordable Quality Care</h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            We believe healthcare is a fundamental right. Standard OPD consultation with experienced specialists is kept at a nominal fee of ₹100.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Patient-Centric Comfort</h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            From seamless digital appointment booking to in-clinic consultations and tele-followups, patient dignity and comfort are at the heart of our mission.
          </p>
        </div>
      </div>

      {/* Lead Practitioner Focus */}
      <div className="bg-teal-50/70 rounded-3xl border border-teal-200 p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3 py-1 rounded-full">
            Lead Practitioner
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {doctorProfile.name}
          </h2>
          <p className="text-sm font-semibold text-teal-700">{doctorProfile.title}</p>
          <p className="text-slate-600 text-sm leading-relaxed">
            {doctorProfile.bio}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-3 bg-white rounded-xl border border-teal-100">
              <span className="text-slate-500 block">Qualification</span>
              <span className="font-bold text-slate-900">{doctorProfile.qualification}</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-teal-100">
              <span className="text-slate-500 block">Experience</span>
              <span className="font-bold text-slate-900">{doctorProfile.experienceYears}</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-teal-100">
              <span className="text-slate-500 block">OPD Fee</span>
              <span className="font-bold text-teal-700">₹{doctorProfile.consultationFee}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-center items-center p-6 bg-white rounded-2xl border border-teal-200 shadow-sm text-center space-y-4">
          <div className="w-20 h-20 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center">
            <Stethoscope className="w-10 h-10" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-base">{doctorProfile.name}</h4>
            <p className="text-xs text-slate-500">{doctorProfile.specialization}</p>
          </div>
          <button
            onClick={() => setActiveTab('doctors')}
            className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
          >
            View Doctor Profile
          </button>
        </div>
      </div>

      {/* Facility & Infrastructure Showcase */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Infrastructure & Facilities</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our Modern Healthcare Facility in Agra
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('gallery')}
            className="text-xs font-bold text-teal-700 hover:text-teal-800 underline shrink-0 cursor-pointer"
          >
            Explore Complete Photo Gallery &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs group">
            <div className="aspect-video bg-slate-100 overflow-hidden">
              <img
                src={new URL('../assets/images/reception_desk_1785101567427.jpg', import.meta.url).href}
                alt="Agra Helpline 24x7 Reception Desk"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold text-teal-600 uppercase">Reception</span>
              <h4 className="text-sm font-bold text-slate-900">Digital Queue & Token Desk</h4>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs group">
            <div className="aspect-video bg-slate-100 overflow-hidden">
              <img
                src={new URL('../assets/images/waiting_lounge_1785101622720.jpg', import.meta.url).href}
                alt="Agra Helpline 24x7 Waiting Lounge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold text-teal-600 uppercase">Waiting Area</span>
              <h4 className="text-sm font-bold text-slate-900">Patient Lounge & TV Token Display</h4>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs group">
            <div className="aspect-video bg-slate-100 overflow-hidden">
              <img
                src={new URL('../assets/images/department_signage_1785101585749.jpg', import.meta.url).href}
                alt="Agra Helpline 24x7 Department Signage"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold text-teal-600 uppercase">Signage & Directory</span>
              <h4 className="text-sm font-bold text-slate-900">Bilingual Floor Directory</h4>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs group">
            <div className="aspect-video bg-slate-100 overflow-hidden">
              <img
                src={new URL('../assets/images/highway_billboard_1785101524107.jpg', import.meta.url).href}
                alt="Agra Helpline 24x7 Highway Directional Sign"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold text-teal-600 uppercase">Location</span>
              <h4 className="text-sm font-bold text-slate-900">Agra Highway Direction Board</h4>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
