import React from 'react';
import { Home, PhoneCall, Calendar, AlertCircle, ArrowLeft } from 'lucide-react';

interface NotFoundSectionProps {
  setActiveTab: (tab: string) => void;
  onOpenAppointmentModal: () => void;
}

export const NotFoundSection: React.FC<NotFoundSectionProps> = ({ setActiveTab, onOpenAppointmentModal }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8 min-h-[70vh] flex flex-col items-center justify-center">
      
      {/* 404 Badge & Icon */}
      <div className="w-20 h-20 bg-rose-50 rounded-3xl border border-rose-200 flex items-center justify-center text-rose-600 shadow-xs">
        <AlertCircle className="w-10 h-10" />
      </div>

      <div className="space-y-3 max-w-lg">
        <span className="text-xs font-black uppercase tracking-widest text-rose-600 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200">
          Error 404 • Page Not Found
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Requested Medical Page Not Found
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          The link or route you opened does not exist or may have been relocated. You can return to our home page or contact our 24×7 Agra helpline desk directly.
        </p>
      </div>

      {/* Action CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <button
          onClick={() => setActiveTab('home')}
          className="px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-md transition-all flex items-center space-x-2 cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </button>

        <button
          onClick={() => setActiveTab('emergency')}
          className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-md transition-all flex items-center space-x-2 cursor-pointer"
        >
          <PhoneCall className="w-4 h-4 text-rose-400" />
          <span>24×7 Emergency Helpline</span>
        </button>

        <button
          onClick={onOpenAppointmentModal}
          className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm rounded-2xl border border-slate-300 transition-all flex items-center space-x-2 cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-teal-600" />
          <span>Book OPD Token (Fee: ₹100)</span>
        </button>
      </div>

      <div className="pt-8 border-t border-slate-200 text-xs text-slate-500 max-w-md">
        Direct Assistance: Call <a href="tel:+919012429042" className="font-bold text-slate-900 underline">+91 90124 29042</a> or email <span className="font-bold text-slate-900">agrahelpline24.7@gmail.com</span>.
      </div>

    </div>
  );
};
