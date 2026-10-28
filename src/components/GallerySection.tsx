import React, { useState, useEffect } from 'react';
import { 
  Camera, Stethoscope, ShieldAlert, HeartPulse, Building2, MapPin, 
  X, ChevronLeft, ChevronRight, Image as ImageIcon, Filter, CheckCircle, 
  ArrowRight, Users, Award, Calendar, ExternalLink
} from 'lucide-react';
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

export interface GalleryItem {
  id: string;
  title: string;
  primaryCategory: 'clinic' | 'community';
  subCategory?: 'Clinical' | 'Infrastructure' | 'Emergency' | 'Community Event';
  sectionName: string;
  description: string;
  imageSrc?: string;
  isPlaceholder?: boolean;
  eventStoryLink?: string;
}

interface GallerySectionProps {
  setActiveTab?: (tab: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ setActiveTab }) => {
  // Main tabs: 'clinic' (Category A) or 'community' (Category B) or 'all'
  const [activeMainCategory, setActiveMainCategory] = useState<'all' | 'clinic' | 'community'>('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Simulate skeleton loading on view
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 250);
    return () => clearTimeout(timer);
  }, []);

  // Category A: Clinic Gallery items (preserved verbatim)
  const clinicItems: GalleryItem[] = [
    {
      id: 'reception-area',
      title: 'Reception & Digital Token Registration Desk',
      primaryCategory: 'clinic',
      subCategory: 'Infrastructure',
      sectionName: 'Reception Desk',
      description: 'Backlit illuminated 3D logo wall, marble counter, real-time queue token LED screen, and OPD registration desk.',
      imageSrc: receptionImg,
      isPlaceholder: false,
    },
    {
      id: 'emergency-entrance',
      title: '24×7 Emergency Canopy Entrance & Ambulance',
      primaryCategory: 'clinic',
      subCategory: 'Emergency',
      sectionName: 'Emergency Entrance',
      description: 'Glowing red Emergency 24×7 canopy, automatic sliding doors, wheelchair ramp, and custom Agra Helpline ambulance.',
      imageSrc: emergencyEntranceImg,
      isPlaceholder: false,
    },
    {
      id: 'pharmacy-store',
      title: 'Agra Helpline 24×7 Medical Store',
      primaryCategory: 'clinic',
      subCategory: 'Clinical',
      sectionName: 'Medical Store / Pharmacy',
      description: '100% genuine prescription medicines, emergency healthcare supplies, illuminated cross signage, and dispensing desk.',
      imageSrc: pharmacyImg,
      isPlaceholder: false,
    },
    {
      id: 'department-signage',
      title: 'Indoor Floor Directory & Wayfinding Signage',
      primaryCategory: 'clinic',
      subCategory: 'Infrastructure',
      sectionName: 'Department Signage',
      description: 'Clear bilingual floor directory and directional boards for OPD chambers, pharmacy, diagnostics, and emergency care.',
      imageSrc: departmentSignageImg,
      isPlaceholder: false,
    },
    {
      id: 'waiting-lounge',
      title: 'Patient Waiting Lounge & Token Display',
      primaryCategory: 'clinic',
      subCategory: 'Infrastructure',
      sectionName: 'Waiting Lounge',
      description: 'Ergonomic seating rows, wall-mounted token call monitor TV, and welcoming Agra Helpline clinic atmosphere.',
      imageSrc: waitingLoungeImg,
      isPlaceholder: false,
    },
    {
      id: 'highway-billboard',
      title: 'Agra Highway Directional Billboard Signboard',
      primaryCategory: 'clinic',
      subCategory: 'Infrastructure',
      sectionName: 'Signboard & Location',
      description: 'Official Agra highway directional board pointing to Agra Helpline 24×7 in Dayalbagh, Agra.',
      imageSrc: highwayBillboardImg,
      isPlaceholder: false,
    },
    {
      id: 'consultation-chamber',
      title: 'Doctor Consultation Chamber',
      primaryCategory: 'clinic',
      subCategory: 'Clinical',
      sectionName: 'Doctor Cabin',
      description: 'Clean physician examination room with stethoscope, BP monitor, and consultation table for Dr. Mohit Gupta.',
      imageSrc: consultationImg,
      isPlaceholder: false,
    },
    {
      id: 'telemedicine-suite',
      title: 'Agra Helpline Telemedicine Hub',
      primaryCategory: 'clinic',
      subCategory: 'Clinical',
      sectionName: 'Telemedicine Suite',
      description: 'Verified branding signboard behind doctor: "Telemedicine Services | Dr. Mohit Gupta | +91 90124 29042 | Agra, India" with high-definition video consultation setup.',
      imageSrc: telemedicineImg,
      isPlaceholder: false,
    },
    {
      id: 'diagnostic-equipment',
      title: 'Pathology Lab & Diagnostic Collection',
      primaryCategory: 'clinic',
      subCategory: 'Clinical',
      sectionName: 'Diagnostics Area',
      description: 'Hygienic sample collection area, vital monitors, glucometers, ECG machines, and pathology collection tools.',
      imageSrc: diagnosticImg,
      isPlaceholder: false,
    },
    {
      id: 'emergency-desk',
      title: '24×7 Emergency Triage & Treatment Room',
      primaryCategory: 'clinic',
      subCategory: 'Emergency',
      sectionName: 'Emergency Care Room',
      description: 'Oxygen support equipment, patient bed, vital monitors, and rapid trauma assessment tools.',
      imageSrc: emergencyImg,
      isPlaceholder: false,
    },
    {
      id: 'staff-doctors',
      title: 'Medical Team & Clinical Staff',
      primaryCategory: 'clinic',
      subCategory: 'Clinical',
      sectionName: 'Doctor Team & Staff',
      description: 'Experienced Indian doctors, clinical nurses, and triage executives in official Agra Helpline uniforms.',
      imageSrc: doctorTeamImg,
      isPlaceholder: false,
    },
    {
      id: 'brand-emblem',
      title: 'Agra Helpline 24×7 Official Emblem',
      primaryCategory: 'clinic',
      subCategory: 'Infrastructure',
      sectionName: 'Brand Mark',
      description: 'Official registered healthcare logo emblem of Agra Helpline 24×7.',
      imageSrc: officialLogo,
      isPlaceholder: false,
    },
  ];

  // Category B: Community & Events (Rotary Installation Ceremony Photography)
  const communityItems: GalleryItem[] = [
    {
      id: 'rotary-group-photo',
      title: 'Rotary Club of Agra Greater 15th Installation Assembly',
      primaryCategory: 'community',
      subCategory: 'Community Event',
      sectionName: 'Rotary Club 15th Installation',
      description: 'Commemorative group photo of members, guests, and community dignitaries at the 15th installation ceremony of Rotary Club of Agra Greater in Agra.',
      imageSrc: '/assets/events/rotary-15th/16_rotary_15th_anniversary_group.webp',
      isPlaceholder: false,
      eventStoryLink: 'rotary-15th-article',
    },
    {
      id: 'rotary-lamp-lighting',
      title: 'Ceremonial Inaugural Lamp Lighting',
      primaryCategory: 'community',
      subCategory: 'Community Event',
      sectionName: 'Inaugural Ceremony',
      description: 'Traditional ceremonial lamp-lighting ceremony formally inaugurating the 15th installation ceremony in Agra.',
      imageSrc: '/assets/events/rotary-15th/38_rotary_inaugural_lamp_lighting.webp',
      isPlaceholder: false,
      eventStoryLink: 'rotary-15th-article',
    },
    {
      id: 'rotary-women-welcome',
      title: 'Member Welcome & Dignitary Felicitation',
      primaryCategory: 'community',
      subCategory: 'Community Event',
      sectionName: 'Fellowship & Welcome',
      description: 'Formal reception, welcome, and felicitation of women members and community representatives during the installation proceedings.',
      imageSrc: '/assets/events/rotary-15th/20_rotary_women_members_welcome.webp',
      isPlaceholder: false,
      eventStoryLink: 'rotary-15th-article',
    },
    {
      id: 'rotary-medal-honors',
      title: 'Medal & Honor Presentation for Civic Service',
      primaryCategory: 'community',
      subCategory: 'Community Event',
      sectionName: 'Recognition of Service',
      description: 'Presentation of commemorative medals acknowledging dedicated civic and social responsibility contributions.',
      imageSrc: '/assets/events/rotary-15th/26_rotary_medal_presentation.webp',
      isPlaceholder: false,
      eventStoryLink: 'rotary-15th-article',
    },
    {
      id: 'rotary-podium-address',
      title: 'Keynote & Community Address',
      primaryCategory: 'community',
      subCategory: 'Community Event',
      sectionName: 'Ceremony Address',
      description: 'Podium address highlighting fellowship, community welfare initiatives, and civic engagement in Agra.',
      imageSrc: '/assets/events/rotary-15th/22_rotary_member_address.webp',
      isPlaceholder: false,
      eventStoryLink: 'rotary-15th-article',
    },
    {
      id: 'rotary-certificate-presentation',
      title: 'Appreciation Certificate Presentation',
      primaryCategory: 'community',
      subCategory: 'Community Event',
      sectionName: 'Member Honors',
      description: 'Presentation of certificates of appreciation honoring eight members for their valuable service to the organization and community.',
      imageSrc: '/assets/events/rotary-15th/29_rotary_certificate_presentation.webp',
      isPlaceholder: false,
      eventStoryLink: 'rotary-15th-article',
    },
    {
      id: 'rotary-audience-gathering',
      title: 'Distinguished Gathering & Audience',
      primaryCategory: 'community',
      subCategory: 'Community Event',
      sectionName: 'Event Audience',
      description: 'Members, guests, and community leaders participating in the 15th anniversary assembly of Rotary Club of Agra Greater.',
      imageSrc: '/assets/events/rotary-15th/35_rotary_event_audience.webp',
      isPlaceholder: false,
      eventStoryLink: 'rotary-15th-article',
    },
  ];

  const allItems = [...clinicItems, ...communityItems];

  const filteredItems = allItems.filter((item) => {
    if (activeMainCategory === 'clinic' && item.primaryCategory !== 'clinic') return false;
    if (activeMainCategory === 'community' && item.primaryCategory !== 'community') return false;
    if (selectedSubCategory !== 'All' && item.subCategory !== selectedSubCategory) return false;
    return true;
  });

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

  const handleReadFullStory = (targetTab?: string) => {
    if (setActiveTab) {
      setActiveTab(targetTab || 'rotary-15th-article');
    } else {
      window.location.href = '/news-events/rotary-club-agra-greater-15th-installation-2026';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left space-y-10 min-h-screen">
      
      {/* Page Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-4 border border-slate-800">
        <div className="inline-flex items-center space-x-2 bg-teal-500/20 px-3.5 py-1.5 rounded-full text-teal-300 text-xs font-bold border border-teal-500/30">
          <Camera className="w-4 h-4" />
          <span>Agra Helpline Visual Showcase</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
          Agra Helpline <span className="text-teal-400">Photo Gallery</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Explore our modern clinic infrastructure, consultation chambers, diagnostic units, and verified community engagement events across Agra.
        </p>
      </div>

      {/* Primary Category Switcher (Task 4: Clear Two-Category Organization) */}
      <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center gap-2">
        <button
          onClick={() => {
            setActiveMainCategory('all');
            setSelectedSubCategory('All');
          }}
          className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer text-center ${
            activeMainCategory === 'all'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          All Photos ({allItems.length})
        </button>

        <button
          onClick={() => {
            setActiveMainCategory('clinic');
            setSelectedSubCategory('All');
          }}
          className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer text-center flex items-center justify-center space-x-2 ${
            activeMainCategory === 'clinic'
              ? 'bg-teal-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>Category A: Clinic Gallery ({clinicItems.length})</span>
        </button>

        <button
          onClick={() => {
            setActiveMainCategory('community');
            setSelectedSubCategory('All');
          }}
          className={`flex-1 min-w-[180px] py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer text-center flex items-center justify-center space-x-2 ${
            activeMainCategory === 'community'
              ? 'bg-teal-700 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Category B: Community &amp; Events ({communityItems.length})</span>
        </button>
      </div>

      {/* Category B Context Card (Shows when Community & Events tab is active) */}
      {(activeMainCategory === 'community' || activeMainCategory === 'all') && (
        <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white rounded-2xl p-6 sm:p-7 border border-teal-800 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-teal-500/20 px-2.5 py-0.5 rounded-full text-teal-300 text-[11px] font-bold">
              <Award className="w-3.5 h-3.5" />
              <span>Civic Engagement Archive</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Rotary Club of Agra Greater — 15th Installation Ceremony
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Photography from the 15th installation ceremony held in Agra, honoring eight members for civic contributions. Dr. Mohit Gupta, Lead Practitioner associated with Agra Helpline 24×7, delivered the vote of thanks at the conclusion of the ceremony.
            </p>
          </div>

          <button
            onClick={() => handleReadFullStory('rotary-15th-article')}
            className="inline-flex items-center space-x-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all cursor-pointer shrink-0"
          >
            <span>Read Full Event Story</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

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
          <h3 className="text-lg font-bold text-slate-800">No items found in this selection</h3>
          <p className="text-xs text-slate-500">Select another category to view images.</p>
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
                    loading="lazy"
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

                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs ${
                    item.primaryCategory === 'community' 
                      ? 'bg-amber-950/85 text-amber-300' 
                      : 'bg-slate-900/80 text-teal-300'
                  }`}>
                    {item.primaryCategory === 'community' ? 'Community & Events' : 'Clinic Gallery'}
                  </span>
                </div>
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

                {item.primaryCategory === 'community' && (
                  <div className="pt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleReadFullStory(item.eventStoryLink);
                      }}
                      className="inline-flex items-center space-x-1 text-[11px] font-bold text-teal-700 hover:text-teal-900 transition-colors"
                    >
                      <span>Read Full Event Story</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                )}
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
          role="dialog"
          aria-modal="true"
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
                  className="max-h-96 w-full object-contain rounded-xl"
                />
              )}
            </div>

            {/* Description & Navigation Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
                {filteredItems[activeLightboxIndex].description}
              </p>

              <div className="flex items-center space-x-2 shrink-0 self-end sm:self-center">
                {filteredItems[activeLightboxIndex].primaryCategory === 'community' && (
                  <button
                    onClick={() => {
                      const link = filteredItems[activeLightboxIndex].eventStoryLink;
                      setActiveLightboxIndex(null);
                      handleReadFullStory(link);
                    }}
                    className="mr-2 inline-flex items-center space-x-1 px-3 py-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}

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
