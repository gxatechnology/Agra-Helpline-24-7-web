import React, { useState, useRef, useEffect } from 'react';
import { Phone, PhoneCall, Calendar, Stethoscope, Menu, X, Activity, MapPin, Video, Image, ShieldCheck, ChevronDown, HelpCircle, ShieldAlert, FileText, MessageSquare } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAppointmentModal: () => void;
  onMobileMenuToggle?: (isOpen: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  activeTab, 
  setActiveTab, 
  onOpenAppointmentModal,
  onMobileMenuToggle,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Notify parent of drawer state change
  useEffect(() => {
    onMobileMenuToggle?.(mobileMenuOpen);
  }, [mobileMenuOpen, onMobileMenuToggle]);

  // Prevent background page scrolling when drawer is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile drawer
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [mobileMenuOpen]);

  // Close "More" dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && !target.closest('[data-dropdown="more"]')) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMoreDropdownOpen(false);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setMoreDropdownOpen((prev) => !prev);
    }
  };

  // Smooth hover timer management
  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setMoreDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setMoreDropdownOpen(false);
    }, 300); // 300ms hover delay
  };

  // Primary desktop navigation items
  const primaryNav1350 = [
    { id: 'home', label: 'Home', icon: Activity },
    { id: 'about', label: 'About', icon: ShieldCheck },
    { id: 'services', label: 'Services', icon: Activity },
    { id: 'doctors', label: 'Doctors', icon: Stethoscope },
    { id: 'telemedicine', label: 'Telemedicine', icon: Video },
    { id: 'gallery', label: 'Gallery', icon: Image },
  ];

  const primaryNav1100 = [
    { id: 'home', label: 'Home', icon: Activity },
    { id: 'about', label: 'About', icon: ShieldCheck },
    { id: 'services', label: 'Services', icon: Activity },
    { id: 'doctors', label: 'Doctors', icon: Stethoscope },
    { id: 'telemedicine', label: 'Telemedicine', icon: Video },
  ];

  const primaryNav900 = [
    { id: 'home', label: 'Home', icon: Activity },
    { id: 'services', label: 'Services', icon: Activity },
    { id: 'doctors', label: 'Doctors', icon: Stethoscope },
    { id: 'telemedicine', label: 'Telemedicine', icon: Video },
  ];

  // Dropdown items for >1350px
  const moreNav1350 = [
    { id: 'contact', label: 'Contact', icon: MapPin },
    { id: 'faq', label: 'FAQs', icon: HelpCircle },
    { id: 'emergency', label: 'Emergency Help', icon: ShieldAlert },
    { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck },
    { id: 'terms', label: 'Terms & Conditions', icon: FileText },
  ];

  // Dropdown items for 1100-1349px (Includes Gallery)
  const moreNav1100 = [
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'contact', label: 'Contact', icon: MapPin },
    { id: 'faq', label: 'FAQs', icon: HelpCircle },
    { id: 'emergency', label: 'Emergency Help', icon: ShieldAlert },
    { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck },
    { id: 'terms', label: 'Terms & Conditions', icon: FileText },
  ];

  // Dropdown items for 900-1099px (Includes About & Gallery)
  const moreNav900 = [
    { id: 'about', label: 'About Us', icon: ShieldCheck },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'contact', label: 'Contact', icon: MapPin },
    { id: 'faq', label: 'FAQs', icon: HelpCircle },
    { id: 'emergency', label: 'Emergency Help', icon: ShieldAlert },
    { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck },
    { id: 'terms', label: 'Terms & Conditions', icon: FileText },
  ];

  // Hamburger mobile items (<900px)
  const allMobileNav = [
    { id: 'home', label: 'Home', icon: Activity },
    { id: 'about', label: 'About Us', icon: ShieldCheck },
    { id: 'services', label: 'Services', icon: Activity },
    { id: 'doctors', label: 'Doctors', icon: Stethoscope },
    { id: 'telemedicine', label: 'Telemedicine', icon: Video },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'contact', label: 'Contact Us', icon: MapPin },
    { id: 'faq', label: 'FAQs', icon: HelpCircle },
    { id: 'emergency', label: 'Emergency 24×7', icon: ShieldAlert },
    { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck },
    { id: 'terms', label: 'Terms & Conditions', icon: FileText },
  ];

  const handleSubItemClick = (id: string) => {
    setActiveTab(id);
    setMoreDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-[1000] bg-white border-b border-slate-200 shadow-xs w-full max-w-full overflow-visible relative">
      {/* 24x7 Emergency Top Hotline Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white px-3 sm:px-6 lg:px-8 py-1.5 text-xs font-medium w-full max-w-full overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-2 w-full min-w-0">
          <div className="flex items-center space-x-2 min-w-0 shrink-0">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-600 text-white animate-pulse shrink-0">
              24×7 EMERGENCY
            </span>
            <span className="hidden sm:inline text-slate-300 font-medium">Agra Helpline:</span>
            <a 
              href="tel:+919012429042" 
              className="underline font-black text-rose-300 hover:text-white flex items-center space-x-1 whitespace-nowrap shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5 inline shrink-0 text-rose-400" />
              <span className="whitespace-nowrap">+91 90124 29042</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-3 text-xs opacity-90 shrink-0">
            <span className="text-teal-300 font-semibold">Consultation Fee: ₹100</span>
            <span className="hidden lg:inline text-slate-500">|</span>
            <span className="hidden lg:inline text-slate-300">Care • Connect • Comfort</span>
          </div>
        </div>
      </div>

      {/* Main Responsive Header */}
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 py-3 overflow-visible">
        <div className="flex items-center justify-between w-full min-w-0 overflow-visible">
          
          {/* Column 1: Reserved Brand Block */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center cursor-pointer group flex-1 min-w-0"
          >
            {/* Logo Icon (44px on mobile, 46px on tablet, 52px on desktop) */}
            <BrandLogo size="md" variant="icon" className="shrink-0 !w-[44px] !h-[44px] sm:!w-[46px] sm:!h-[46px] md:!w-[52px] md:!h-[52px]" />
            
            <div className="flex flex-col justify-center text-left flex-1 min-w-0 ml-3 mr-3 overflow-hidden">
              <div className="whitespace-nowrap text-[17px] sm:text-[21px] lg:text-[clamp(22px,1.55vw,28px)] font-extrabold tracking-tight leading-none truncate text-ellipsis overflow-hidden">
                <span className="text-[#0a2540]">Agra Helpline</span>{' '}
                <span className="text-teal-600">24×7</span>
              </div>
              <div className="hidden sm:block whitespace-nowrap text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1 truncate text-ellipsis overflow-hidden">
                Care • Connect • Comfort
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (Responsive Breakpoints) */}
          <nav className="hidden md:flex items-center justify-center min-w-0 shrink-1 overflow-visible">
            
            {/* Breakpoint 1: Large Desktop (>1350px) */}
            <div className="hidden 2xl:flex items-center gap-[clamp(14px,1.2vw,25px)] min-w-0 overflow-visible">
              {primaryNav1350.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-[clamp(14px,0.95vw,16px)] font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-teal-50 text-teal-800 border border-teal-200/80 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-teal-600' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}

              {/* More Dropdown for >1350px */}
              <div 
                data-dropdown="more"
                className="relative shrink-0 overflow-visible" 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setMoreDropdownOpen((prev) => !prev)}
                  onKeyDown={handleKeyDown}
                  aria-expanded={moreDropdownOpen}
                  aria-haspopup="menu"
                  className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                    ['contact', 'faq', 'emergency', 'privacy', 'terms'].includes(activeTab)
                      ? 'bg-teal-50 text-teal-800 border border-teal-200/80'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>More</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180 text-teal-600' : 'text-slate-500'}`} />
                </button>

                {/* Transparent Hover Bridge */}
                <div className="absolute top-full left-0 right-0 h-3 bg-transparent pointer-events-auto" />

                {/* Dropdown Panel */}
                <div
                  className={`absolute right-0 top-full pt-1.5 w-60 z-[1100] transition-all duration-200 ${
                    moreDropdownOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                  role="menu"
                >
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-2 space-y-0.5">
                    {moreNav1350.map((subItem) => {
                      const SubIcon = subItem.icon;
                      const isSubActive = activeTab === subItem.id;
                      return (
                        <button
                          key={subItem.id}
                          type="button"
                          role="menuitem"
                          onClick={() => handleSubItemClick(subItem.id)}
                          className={`w-full text-left px-3.5 py-2.5 text-xs font-semibold rounded-xl flex items-center space-x-2.5 transition-colors cursor-pointer group/sub ${
                            isSubActive
                              ? 'bg-teal-50 text-teal-900 font-bold'
                              : 'text-slate-700 hover:bg-teal-50/70 hover:text-teal-800'
                          }`}
                        >
                          <div className={`p-1 rounded-lg transition-colors ${isSubActive ? 'bg-teal-200 text-teal-800' : 'bg-slate-100 text-slate-500 group-hover/sub:bg-teal-100 group-hover/sub:text-teal-700'}`}>
                            <SubIcon className="w-4 h-4 shrink-0" />
                          </div>
                          <span>{subItem.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Breakpoint 2: Medium Desktop (1100px - 1349px) */}
            <div className="hidden xl:flex 2xl:hidden items-center gap-2 min-w-0 overflow-visible">
              {primaryNav1100.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-teal-50 text-teal-800 border border-teal-200/80 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-teal-600' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}

              {/* More Dropdown for 1100px - 1349px */}
              <div 
                data-dropdown="more"
                className="relative shrink-0 overflow-visible" 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setMoreDropdownOpen((prev) => !prev)}
                  onKeyDown={handleKeyDown}
                  aria-expanded={moreDropdownOpen}
                  aria-haspopup="menu"
                  className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                    ['gallery', 'contact', 'faq', 'emergency', 'privacy', 'terms'].includes(activeTab)
                      ? 'bg-teal-50 text-teal-800 border border-teal-200/80'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>More</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180 text-teal-600' : 'text-slate-500'}`} />
                </button>

                <div className="absolute top-full left-0 right-0 h-3 bg-transparent pointer-events-auto" />

                <div
                  className={`absolute right-0 top-full pt-1.5 w-60 z-[1100] transition-all duration-200 ${
                    moreDropdownOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                  role="menu"
                >
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-2 space-y-0.5">
                    {moreNav1100.map((subItem) => {
                      const SubIcon = subItem.icon;
                      const isSubActive = activeTab === subItem.id;
                      return (
                        <button
                          key={subItem.id}
                          type="button"
                          role="menuitem"
                          onClick={() => handleSubItemClick(subItem.id)}
                          className={`w-full text-left px-3.5 py-2.5 text-xs font-semibold rounded-xl flex items-center space-x-2.5 transition-colors cursor-pointer group/sub ${
                            isSubActive
                              ? 'bg-teal-50 text-teal-900 font-bold'
                              : 'text-slate-700 hover:bg-teal-50/70 hover:text-teal-800'
                          }`}
                        >
                          <div className={`p-1 rounded-lg transition-colors ${isSubActive ? 'bg-teal-200 text-teal-800' : 'bg-slate-100 text-slate-500 group-hover/sub:bg-teal-100 group-hover/sub:text-teal-700'}`}>
                            <SubIcon className="w-4 h-4 shrink-0" />
                          </div>
                          <span>{subItem.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Breakpoint 3: Compact Laptop Navigation (900px - 1099px) */}
            <div className="hidden md:flex xl:hidden items-center gap-1.5 min-w-0 overflow-visible">
              {primaryNav900.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center space-x-1 px-2 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-teal-50 text-teal-800 font-bold border border-teal-200/80'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-teal-600' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}

              {/* More Dropdown for 900-1099px */}
              <div 
                data-dropdown="more"
                className="relative shrink-0 overflow-visible" 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setMoreDropdownOpen((prev) => !prev)}
                  onKeyDown={handleKeyDown}
                  aria-expanded={moreDropdownOpen}
                  aria-haspopup="menu"
                  className={`flex items-center space-x-1 px-2 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    ['about', 'gallery', 'contact', 'faq', 'emergency', 'privacy', 'terms'].includes(activeTab)
                      ? 'bg-teal-50 text-teal-800 border border-teal-200/80'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>More</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180 text-teal-600' : 'text-slate-500'}`} />
                </button>

                <div className="absolute top-full left-0 right-0 h-3 bg-transparent pointer-events-auto" />

                <div
                  className={`absolute right-0 top-full pt-1.5 w-60 z-[1100] transition-all duration-200 ${
                    moreDropdownOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                  role="menu"
                >
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-2 space-y-0.5">
                    {moreNav900.map((subItem) => {
                      const SubIcon = subItem.icon;
                      const isSubActive = activeTab === subItem.id;
                      return (
                        <button
                          key={subItem.id}
                          type="button"
                          role="menuitem"
                          onClick={() => handleSubItemClick(subItem.id)}
                          className={`w-full text-left px-3.5 py-2.5 text-xs font-semibold rounded-xl flex items-center space-x-2.5 transition-colors cursor-pointer group/sub ${
                            isSubActive
                              ? 'bg-teal-50 text-teal-900 font-bold'
                              : 'text-slate-700 hover:bg-teal-50/70 hover:text-teal-800'
                          }`}
                        >
                          <div className={`p-1 rounded-lg transition-colors ${isSubActive ? 'bg-teal-200 text-teal-800' : 'bg-slate-100 text-slate-500 group-hover/sub:bg-teal-100 group-hover/sub:text-teal-700'}`}>
                            <SubIcon className="w-4 h-4 shrink-0" />
                          </div>
                          <span>{subItem.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

          </nav>

          {/* Column 3: Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            
            {/* Book Appointment CTA Button (Visible sm+) */}
            <button
              onClick={onOpenAppointmentModal}
              className="hidden sm:flex items-center space-x-1.5 bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-bold px-3 sm:px-[clamp(12px,1.2vw,22px)] py-2.5 rounded-xl shadow-xs hover:shadow transition-all cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span className="hidden xl:inline">Book Appointment</span>
              <span className="inline xl:hidden">Book</span>
            </button>

            {/* Call Now CTA Button (Visible sm+) */}
            <a
              href="tel:+919012429042"
              className="hidden sm:flex items-center justify-center bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold p-2.5 2xl:px-4 rounded-xl shadow-xs transition-all whitespace-nowrap"
              title="Call Helpline: +91 90124 29042"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span className="hidden 2xl:inline ml-1.5 whitespace-nowrap">Call Now</span>
            </a>

            {/* Hamburger Toggle (Visible below 1100px / xl) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-0 text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-[12px] border border-slate-200/90 shrink-0 cursor-pointer w-[44px] h-[44px] min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Slide-Over Drawer Navigation (< 1100px) */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-[99990]">
          {/* Backdrop Overlay */}
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
          />

          {/* Drawer Container Panel */}
          <div className="fixed top-0 right-0 bottom-0 z-[99991] h-[100dvh] max-h-[100dvh] w-[min(88vw,380px)] bg-white shadow-2xl flex flex-col overflow-hidden">
            
            {/* Drawer Header (Sticky Top) */}
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white z-10 shrink-0 shadow-xs">
              <div className="flex items-center space-x-2.5 min-w-0">
                <BrandLogo size="sm" variant="icon" className="!w-9 !h-9 shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-base font-extrabold text-slate-900 leading-tight truncate">Agra Helpline 24×7</h3>
                  <p className="text-[11px] font-bold text-teal-600 truncate">Dayalbagh, Agra</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="p-2.5 text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl transition-all border border-slate-200 focus:outline-none cursor-pointer shrink-0 ml-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Scrollable Navigation Body (Single Scrollbar) */}
            <div className="p-3 sm:p-4 flex-1 min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain space-y-1 pb-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-1">Navigation Menu</p>
              {allMobileNav.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full flex items-center space-x-3 px-3.5 py-3 rounded-xl text-left text-sm font-bold transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-teal-50 text-teal-800 border border-teal-200 shadow-xs' 
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-teal-600' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Drawer Action CTAs (Sticky Bottom) */}
            <div className="p-3.5 sm:p-4 border-t border-slate-200 bg-slate-50/95 space-y-2 sticky bottom-0 z-10 shrink-0 shadow-lg">
              <button
                type="button"
                onClick={() => {
                  onOpenAppointmentModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full h-11 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white rounded-xl text-center font-bold text-xs sm:text-sm shadow-xs cursor-pointer flex items-center justify-center space-x-2 transition-colors"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Book OPD Appointment (₹100)</span>
              </button>

              <a
                href="tel:+919012429042"
                className="w-full h-11 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white rounded-xl text-center font-bold text-xs sm:text-sm shadow-xs flex items-center justify-center space-x-2 transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">Call Hotline: +91 90124 29042</span>
              </a>

              <a
                href="https://wa.me/919012429042"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-11 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-xl text-center font-bold text-xs sm:text-sm shadow-xs flex items-center justify-center space-x-2 transition-colors whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">WhatsApp Support</span>
              </a>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('patient-portal');
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs text-slate-500 hover:text-teal-700 font-semibold underline cursor-pointer"
                >
                  Patient Portal & Tokens
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
