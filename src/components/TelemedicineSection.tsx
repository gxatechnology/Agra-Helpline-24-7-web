import React from 'react';
import { Phone, Video, Calendar, ShieldCheck, CheckCircle2, MessageSquare, Clock, Stethoscope } from 'lucide-react';
import { DoctorProfile } from '../types';

interface TelemedicineSectionProps {
  doctorProfile: DoctorProfile;
  onOpenAppointmentModal: () => void;
}

export const TelemedicineSection: React.FC<TelemedicineSectionProps> = ({ doctorProfile, onOpenAppointmentModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left space-y-10">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-teal-500/20 border border-teal-400/30 px-3.5 py-1.5 rounded-full text-teal-300 text-xs font-semibold">
              <Video className="w-4 h-4 text-teal-300" />
              <span>Telemedicine & Remote Medical Support Agra</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              24×7 Telehealth & Digital Consultation
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Connect with <strong className="text-white">{doctorProfile.name}</strong> from the comfort of your home. Consult via phone, WhatsApp care desk, or book an in-clinic OPD slot.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenAppointmentModal}
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center space-x-2 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Tele-Consultation (₹100)</span>
              </button>
              <a
                href="https://wa.me/919012429042"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center space-x-2 whitespace-nowrap"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>WhatsApp Care Desk</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden border-2 border-teal-400/30 shadow-2xl">
            <img
              src={new URL('../assets/images/telemedicine_hub_verified_1785102169280.jpg', import.meta.url).href}
              alt="Agra Helpline Telemedicine Consultation Hub - Dr. Mohit Gupta"
              className="w-full h-64 sm:h-72 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-3 bg-slate-900/90 text-center border-t border-slate-800">
              <span className="text-[11px] font-bold text-teal-300">
                Verified Branding • Telemedicine Services | Dr. Mohit Gupta | +91 90124 29042 | Agra, India
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="p-3 bg-teal-50 rounded-xl w-fit text-teal-700">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Direct Phone Tele-Triage</h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Call <strong className="text-slate-900">+91 90124 29042</strong> anytime for immediate medical guidance, emergency triage, and prescription followups.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="p-3 bg-emerald-50 rounded-xl w-fit text-emerald-700">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">WhatsApp Prescription Support</h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Send reports and symptoms over WhatsApp for verified review and quick prescription instructions.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="p-3 bg-sky-50 rounded-xl w-fit text-sky-700">
            <Calendar className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Scheduled OPD & Followup</h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Reserve your appointment slot online to minimize waiting time at our Dayalbagh, Agra clinic.
          </p>
        </div>
      </div>

      {/* Steps to Consult */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6">
        <h3 className="text-xl font-bold text-teal-400">How Telemedicine Works</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm">
          <div className="space-y-2 p-4 bg-slate-800/80 rounded-xl border border-slate-700">
            <span className="w-7 h-7 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs">1</span>
            <h4 className="font-bold text-white text-base">Book or Call</h4>
            <p className="text-slate-300">Choose your preferred consultation time or call our 24×7 hotline.</p>
          </div>
          <div className="space-y-2 p-4 bg-slate-800/80 rounded-xl border border-slate-700">
            <span className="w-7 h-7 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs">2</span>
            <h4 className="font-bold text-white text-base">Doctor Evaluation</h4>
            <p className="text-slate-300">Discuss your health history with {doctorProfile.name}.</p>
          </div>
          <div className="space-y-2 p-4 bg-slate-800/80 rounded-xl border border-slate-700">
            <span className="w-7 h-7 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs">3</span>
            <h4 className="font-bold text-white text-base">Digital Prescription</h4>
            <p className="text-slate-300">Receive digital prescription notes and advice directly via SMS/WhatsApp.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
