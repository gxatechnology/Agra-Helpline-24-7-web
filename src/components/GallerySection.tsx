import React, { useState, useEffect } from 'react';
import { Camera, Stethoscope, ShieldAlert, HeartPulse, Building2, MapPin, X, ChevronLeft, ChevronRight, Image as ImageIcon, Filter, CheckCircle } from 'lucide-react';
import officialLogo from '../assets/images/agra_helpline_logo_1785091129293.jpg';

import clinicExteriorImg from '../assets/images/clinic_front_exterior_1785099607536.jpg';
import receptionImg from '../assets/images/reception_desk_1785101567427.jpg';
import consultationImg from '../assets/images/doctor_consultation_room_1785099635716.jpg';
import telemedicineImg from '../assets/images/telemedicine_hub_verified_1785102169280.jpg';
import pharmacyImg from '../assets/images/pharmacy_store_1785101602233.jpg';
import doctorTeamImg from '../assets/images/indian_doctor_team_1785099675016.jpg';
import diagnosticImg from '../assets/images/diagnostic_area_collection_1785099690738.jpg';
import emergencyImg from '../assets/images/emergency_care_room_1785099701705.jpg';
import emergencyEntranceImg from '../assets/images/emergency_entrance_1785101543951.jpg';
import departmentSignageImg from '../assets/images/department_signage_1785101585749.jpg';
import waitingLoungeImg from '../assets/images/waiting_lounge_1785101622720.jpg';
import highwayBillboardImg from '../assets/images/highway_billboard_1785101524107.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Clinical' | 'Infrastructure' | 'Emergency' | 'Community';
  sectionName: string;
  description: string;
  imageSrc?: string;
  isPlaceholder?: boolean;
}

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Simulate skeleton loading on view
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const items: GalleryItem[] = [
    {
      id: 'reception-area',
      title: 'Reception & Digital Token Registration Desk',
      category: 'Infrastructure',
      sectionName: 'Reception Desk',
      description: 'Backlit illuminated 3D logo wall, marble counter, real-time queue token LED screen, and OPD registration desk.',
      imageSrc: receptionImg,
      isPlaceholder: false,
    },
    {
      id: 'emergency-entrance',
      title: '24×7 Emergency Canopy Entrance & Ambulance',
      category: 'Emergency',
      sectionName: 'Emergency Entrance',
      description: 'Glowing red Emergency 24×7 canopy, automatic sliding doors, wheelchair ramp, and custom Agra Helpline ambulance.',
      imageSrc: emergencyEntranceImg,
      isPlaceholder: false,
    },
    {
      id: 'pharmacy-store',
      title: 'Agra Helpline 24×7 Medical Store',
      category: 'Clinical',
      sectionName: 'Medical Store / Pharmacy',
      description: '100% genuine prescription medicines, emergency healthcare supplies, illuminated cross signage, and dispensing desk.',
      imageSrc: pharmacyImg,
      isPlaceholder: false,
    },
    {
      id: 'department-signage',
      title: 'Indoor Floor Directory & Wayfinding Signage',
      category: 'Infrastructure',
      sectionName: 'Department Signage',
      description: 'Clear bilingual floor directory and directional boards for OPD chambers, pharmacy, diagnostics, and emergency care.',
      imageSrc: departmentSignageImg,
      isPlaceholder: false,
    },
    {
      id: 'waiting-lounge',
      title: 'Patient Waiting Lounge & Token Display',
      category: 'Infrastructure',
      sectionName: 'Waiting Lounge',
      description: 'Ergonomic seating rows, wall-mounted token call monitor TV, and welcoming Agra Helpline clinic atmosphere.',
      imageSrc: waitingLoungeImg,
      isPlaceholder: false,
    },
    {
      id: 'highway-billboard',
      title: 'Agra Highway Directional Billboard Signboard',
      category: 'Infrastructure',
      sectionName: 'Signboard & Location',
      description: 'Official Agra highway directional board pointing to Agra Helpline 24×7 in Dayalbagh, Agra.',
      imageSrc: highwayBillboardImg,
      isPlaceholder: false,
    },
    {
      id: 'consultation-chamber',
      title: 'Doctor Consultation Chamber',
      category: 'Clinical',
      sectionName: 'Doctor Cabin',
      description: 'Clean physician examination room with stethoscope, BP monitor, and consultation table for Dr. Mohit Gupta.',
      imageSrc: consultationImg,
      isPlaceholder: false,
    },
    {
      id: 'telemedicine-suite',
      title: 'Agra Helpline Telemedicine Hub',
      category: 'Clinical',
      sectionName: 'Telemedicine Suite',
      description: 'Verified branding signboard behind doctor: "Telemedicine Services | Dr. Mohit Gupta | +91 90124 29042 | Agra, India" with high-definition video consultation setup.',
      imageSrc: telemedicineImg,
      isPlaceholder: false,
    },
    {
      id: 'diagnostic-equipment',
      title: 'Pathology Lab & Diagnostic Collection',
      category: 'Clinical',
      sectionName: 'Diagnostics Area',
      description: 'Hygienic sample collection area, vital monitors, glucometers, ECG machines, and pathology collection tools.',
      imageSrc: diagnosticImg,
      isPlaceholder: false,
    },
    {
      id: 'emergency-desk',
      title: '24×7 Emergency Triage & Treatment Room',
      category: 'Emergency',
      sectionName: 'Emergency Care Room',
      description: 'Oxygen support equipment, patient bed, vital monitors, and rapid trauma assessment tools.',
      imageSrc: emergencyImg,
      isPlaceholder: false,
    },
    {
      id: 'staff-doctors',
      title: 'Medical Team & Clinical Staff',
      category: 'Community',
      sectionName: 'Doctor Team & Staff',
      description: 'Experienced Indian doctors, clinical nurses, and triage executives in official Agra Helpline uniforms.',
      imageSrc: doctorTeamImg,
      isPlaceholder: false,
    },
    {
      id: 'brand-emblem',
      title: 'Agra Helpline 24×7 Official Emblem',
      category: 'Infrastructure',
      sectionName: 'Brand Mark',
      description: 'Official registered healthcare logo emblem of Agra Helpline 24×7.',
      imageSrc: officialLogo,
      isPlaceholder: false,
    },
  ];

  const filteredItems = selectedCategory === 'All' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems]);

  const categories = ['All', 'Clinical', 'Infrastructure', 'Emergency', 'Community'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left space-y-10 min-h-screen">
      
      {/* Page Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-4 border border-slate-800">
        <div className="inline-flex items-center space-x-2 bg-teal-500/20 px-3.5 py-1.5 rounded-full text-teal-300 text-xs font-bold border border-teal-500/30">
          <Camera className="w-4 h-4" />
          <span>Agra Helpline Visual Showcase</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
          Agra Helpline <span className="text-teal-400">Clinic Gallery</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Explore our medical facility, emergency triage control desk, consultation chambers, pharmacy store, and telemedicine hub in Dayalbagh, Agra.
        </p>
      </div>

      {/* Category Filter Controls */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
        <div className="flex items-center space-x-1 text-xs font-bold text-slate-500 mr-2 shrink-0">
          <Filter className="w-4 h-4 text-teal-600" />
          <span>Filter Category:</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skeleton Loading State */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="bg-slate-100 animate-pulse rounded-2xl h-64 border border-slate-200" />
          ))}
        </div>
      ) : filteredItems.length === 0 ? (
        /* Empty State */
        <div className="bg-slate-50 rounded-2xl p-12 text-center space-y-3 border border-slate-200">
          <ImageIcon className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800">No items found in this category</h3>
          <p className="text-xs text-slate-500">Select "All" to view the complete clinic gallery.</p>
        </div>
      ) : (
        /* Responsive Gallery Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden group cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-video bg-slate-100 flex items-center justify-center overflow-hidden border-b border-slate-100">
                {item.imageSrc ? (
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="p-6 text-center space-y-2 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      {item.sectionName}
                    </span>
                  </div>
                )}

                <span className="absolute top-3 left-3 bg-slate-900/80 text-teal-300 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs">
                  {item.category}
                </span>
              </div>

              {/* Card Footer Details */}
              <div className="p-5 space-y-2">
                <span className="text-[10px] font-extrabold text-teal-700 uppercase tracking-wider block">
                  {item.sectionName}
                </span>
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-teal-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div 
          className="fixed inset-0 z-[2000] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div 
            className="bg-slate-900 text-white rounded-3xl max-w-4xl w-full border border-slate-800 overflow-hidden shadow-2xl relative space-y-4 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                  {filteredItems[activeLightboxIndex].sectionName}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
              </div>
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Image */}
            <div className="relative aspect-video bg-slate-950 rounded-2xl flex items-center justify-center p-2 border border-slate-800 overflow-hidden">
              {filteredItems[activeLightboxIndex].imageSrc && (
                <img
                  src={filteredItems[activeLightboxIndex].imageSrc}
                  alt={filteredItems[activeLightboxIndex].title}
                  className="max-h-96 w-full object-cover rounded-xl"
                />
              )}
            </div>

            {/* Description & Navigation Controls */}
            <div className="flex items-center justify-between pt-2">
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
                {filteredItems[activeLightboxIndex].description}
              </p>

              <div className="flex items-center space-x-2 shrink-0">
                <button
                  onClick={() => setActiveLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1))}
                  className="p-2.5 bg-slate-800 hover:bg-teal-600 text-white rounded-xl transition-colors cursor-pointer"
                  title="Previous Photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono font-bold text-slate-400">
                  {activeLightboxIndex + 1} / {filteredItems.length}
                </span>
                <button
                  onClick={() => setActiveLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0))}
                  className="p-2.5 bg-slate-800 hover:bg-teal-600 text-white rounded-xl transition-colors cursor-pointer"
                  title="Next Photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
