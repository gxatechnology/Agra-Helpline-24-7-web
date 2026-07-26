import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenAppointmentModal: () => void;
  isModalOpen: boolean;
  isMenuOpen?: boolean;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onOpenAppointmentModal,
  isModalOpen,
  isMenuOpen = false,
}) => {
  // Hide sticky bar when appointment modal or mobile navigation drawer is active
  if (isModalOpen || isMenuOpen) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[9990] bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-3 py-2 pb-[max(8px,env(safe-area-inset-bottom))]">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 items-center h-[56px]">
        
        {/* Call Hotline */}
        <a
          href="tel:+919012429042"
          className="h-full bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer shadow-xs active:scale-[0.98]"
          title="Call Emergency Hotline: +91 90124 29042"
        >
          <Phone className="w-5 h-5 mb-0.5 shrink-0" />
          <span className="text-[12px] font-bold leading-tight tracking-tight">Call</span>
        </a>

        {/* WhatsApp Support */}
        <a
          href="https://wa.me/919012429042"
          target="_blank"
          rel="noopener noreferrer"
          className="h-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer shadow-xs active:scale-[0.98]"
          title="Chat on WhatsApp: +91 90124 29042"
        >
          <MessageSquare className="w-5 h-5 mb-0.5 shrink-0" />
          <span className="text-[12px] font-bold leading-tight tracking-tight">WhatsApp</span>
        </a>

        {/* Book OPD Appointment */}
        <button
          type="button"
          onClick={onOpenAppointmentModal}
          className="h-full bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer shadow-xs active:scale-[0.98]"
          title="Book Appointment (₹100)"
        >
          <Calendar className="w-5 h-5 mb-0.5 shrink-0" />
          <span className="text-[12px] font-bold leading-tight tracking-tight">Book</span>
        </button>

      </div>
    </div>
  );
};
