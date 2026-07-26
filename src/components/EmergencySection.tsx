import React from 'react';
import { ShieldAlert, Phone, MapPin, ExternalLink, MessageSquare, AlertTriangle, Clock, Stethoscope, HeartPulse } from 'lucide-react';

export const EmergencySection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left space-y-10 min-h-screen">
      
      {/* Prominent Safety Banner Disclaimer */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 flex items-start space-x-3 text-amber-950">
        <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm font-medium space-y-1">
          <p className="font-bold text-amber-900">Critical Medical Safety Notice:</p>
          <p className="leading-relaxed">
            This website does not replace emergency medical services. In a life-threatening emergency, contact the appropriate local emergency service or visit the nearest hospital immediately.
          </p>
        </div>
      </div>

      {/* Hero 24×7 Emergency Call Header */}
      <div className="bg-gradient-to-r from-rose-950 via-red-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-rose-800 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-rose-600/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-rose-500/40 text-rose-200">
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              <span>24×7 Emergency Triage Desk • Agra Helpline</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Urgent Medical Triage & Emergency Assistance
            </h1>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              If you or a loved one requires urgent medical guidance, emergency triage advice, or immediate OPD coordination, call our helpline directly.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Prominent Emergency Call Button */}
              <a
                href="tel:+919012429042"
                className="bg-rose-600 hover:bg-rose-500 text-white font-black text-lg sm:text-xl px-8 py-4 rounded-2xl shadow-xl flex items-center space-x-3 transition-transform hover:scale-105 shrink-0"
              >
                <Phone className="w-6 h-6 text-white" />
                <span>Call Hotline: +91 90124 29042</span>
              </a>

              {/* WhatsApp Support Button */}
              <a
                href="https://wa.me/919012429042"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base px-6 py-4 rounded-2xl shadow-lg flex items-center space-x-2.5 transition-transform hover:scale-105 shrink-0"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>WhatsApp Emergency Triage</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden border-2 border-rose-500/40 shadow-2xl">
            <img
              src={new URL('../assets/images/emergency_entrance_1785101543951.jpg', import.meta.url).href}
              alt="Agra Helpline 24x7 Emergency Entrance & Ambulance"
              className="w-full h-64 sm:h-72 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-3 bg-slate-900/90 text-center border-t border-rose-900">
              <span className="text-[11px] font-bold text-rose-300">
                24×7 Canopy Entrance & Dedicated Ambulance Facility in Dayalbagh, Agra
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Clinic Location & Emergency Guidelines */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Clinic Address & Google Maps Navigation */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Current Clinic Address</h2>
                <p className="text-xs text-slate-500">Dayalbagh, Agra Facility</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <p className="font-semibold text-slate-800 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                Nagala Budhi, Pushpanjali Bagh Road, Dayalbagh, Agra, Uttar Pradesh – 282005
              </p>

              <div className="bg-rose-50 p-4 rounded-2xl border border-rose-200 text-rose-950 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-700 block">Ambulance Availability Notice</span>
                <p className="text-xs font-bold">
                  Ambulance service availability: Please confirm through the helpline (+91 90124 29042).
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/UVvsKfHtdwmdzSQd7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-xs transition-colors flex items-center justify-center space-x-2"
              >
                <span>Navigate via Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Appointment vs Emergency Explanation */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <Stethoscope className="w-5 h-5 text-teal-600" />
              <span>OPD Appointment vs. Emergency Assistance</span>
            </h3>
            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
              <div className="p-3 bg-teal-50 rounded-xl border border-teal-200 text-teal-900">
                <strong className="block text-teal-800 font-bold mb-0.5">Routine OPD Consultation (Fee: ₹100):</strong>
                For non-urgent health consultations, fever, blood pressure reviews, or general checkups, please book an OPD appointment token in advance.
              </div>
              <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 text-rose-950">
                <strong className="block text-rose-800 font-bold mb-0.5">Urgent Emergency Triage:</strong>
                For sudden severe symptoms, chest discomfort, acute injuries, or breathing distress, call our direct helpline immediately (+91 90124 29042).
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Basic Emergency Guidance & When to seek immediate hospital care */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-xl font-black text-slate-900 flex items-center space-x-2">
              <HeartPulse className="w-6 h-6 text-rose-600" />
              <span>When to Seek Immediate Hospital Trauma Care</span>
            </h2>

            <p className="text-xs text-slate-600 leading-relaxed">
              If a patient displays any of the following critical warning signs, do not wait for an OPD appointment — call emergency medical services or reach the nearest trauma hospital immediately:
            </p>

            <ul className="space-y-3 text-xs text-slate-700">
              <li className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start space-x-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                <span><strong>Severe Chest Pain / Pressure:</strong> Radiation to arm, jaw, or neck accompanied by sweating or shortness of breath.</span>
              </li>
              <li className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start space-x-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                <span><strong>Sudden Weakness or Numbness:</strong> Slurred speech, facial drooping, or loss of balance (potential stroke symptoms).</span>
              </li>
              <li className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start space-x-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                <span><strong>Severe Respiratory Distress:</strong> Extreme difficulty breathing or persistent blue discoloration of lips.</span>
              </li>
              <li className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start space-x-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                <span><strong>Major Trauma or Uncontrolled Bleeding:</strong> Deep lacerations, head injuries with loss of consciousness, or fractures.</span>
              </li>
            </ul>

            <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-2 text-xs">
              <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider block">Agra Helpline Advice</span>
              <p className="text-slate-300 leading-relaxed">
                Stay calm, keep the patient comfortable in a well-ventilated position, and speak to our hotline operator at <strong className="text-white underline">+91 90124 29042</strong> for guidance while arranging transport.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
