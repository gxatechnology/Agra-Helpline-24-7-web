import React from 'react';
import { medicalServices } from '../data/initialData';
import { Ambulance, Video, Calendar, Bot, Activity, HeartHandshake, ArrowRight, ShieldCheck } from 'lucide-react';

import emergencyImg from '../assets/images/emergency_entrance_1785101543951.jpg';
import telemedicineImg from '../assets/images/telemedicine_hub_verified_1785102169280.jpg';
import receptionImg from '../assets/images/reception_desk_1785101567427.jpg';
import diagnosticImg from '../assets/images/diagnostic_area_collection_1785099690738.jpg';
import pharmacyImg from '../assets/images/pharmacy_store_1785101602233.jpg';

interface ServicesGridProps {
  onOpenAppointmentModal: () => void;
  setActiveTab: (tab: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenAppointmentModal, setActiveTab }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Ambulance':
        return Ambulance;
      case 'Video':
        return Video;
      case 'Calendar':
        return Calendar;
      case 'Bot':
        return Bot;
      case 'Activity':
        return Activity;
      default:
        return HeartHandshake;
    }
  };

  const getServiceImage = (id: string) => {
    switch (id) {
      case 'emergency-care':
        return emergencyImg;
      case 'telemedicine':
        return telemedicineImg;
      case 'opd-consultation':
        return receptionImg;
      case 'diagnostics-labs':
        return diagnosticImg;
      case 'home-care':
        return pharmacyImg;
      default:
        return undefined;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
          Medical Specialties & OPD Facilities
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900">
          Agra Helpline Healthcare Services
        </h2>
        <p className="text-slate-600 text-sm">
          From 24×7 emergency triage to OPD consultations with Dr. Mohit Gupta and home diagnostics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {medicalServices.map((service) => {
          const IconComponent = getIcon(service.iconName);
          const serviceImg = getServiceImage(service.id);

          return (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left group"
            >
              {serviceImg && (
                <div className="relative aspect-video bg-slate-100 overflow-hidden border-b border-slate-100">
                  <img
                    src={serviceImg}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {service.emergencySupport && (
                    <span className="absolute top-3 right-3 text-[10px] font-extrabold text-white bg-rose-600 shadow-xs px-2.5 py-1 rounded-full border border-rose-400">
                      24×7 LIVE
                    </span>
                  )}
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  {!serviceImg && service.emergencySupport && (
                    <span className="text-[10px] font-extrabold text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-full">
                      24×7 LIVE
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{service.fullDesc}</p>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    if (service.id === 'ai-health-triage') {
                      setActiveTab('ai-triage');
                    } else if (service.id === 'emergency-care') {
                      setActiveTab('emergency');
                    } else if (service.id === 'telemedicine') {
                      setActiveTab('telemedicine');
                    } else {
                      onOpenAppointmentModal();
                    }
                  }}
                  className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center space-x-1 cursor-pointer"
                >
                  <span>Select & Book</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <ShieldCheck className="w-4 h-4 text-slate-300" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
