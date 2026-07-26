import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { DoctorProfileSection } from './components/DoctorProfileSection';
import { ServicesGrid } from './components/ServicesGrid';
import { TelemedicineSection } from './components/TelemedicineSection';
import { GallerySection } from './components/GallerySection';
import { AITriageChat } from './components/AITriageChat';
import { PatientPortal } from './components/PatientPortal';
import { EmergencySection } from './components/EmergencySection';
import { ContactSection } from './components/ContactSection';
import { PolicySection } from './components/PolicySection';
import { NotFoundSection } from './components/NotFoundSection';
import { AppointmentModal } from './components/AppointmentModal';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { DoctorProfile, Appointment } from './types';
import { initialDoctorProfile } from './data/initialData';

const pathToTabMap: Record<string, string> = {
  '': 'home',
  '/': 'home',
  '/home': 'home',
  '/about': 'about',
  '/services': 'services',
  '/doctors': 'doctors',
  '/doctors/dr-mohit-gupta': 'doctors',
  '/telemedicine': 'telemedicine',
  '/gallery': 'gallery',
  '/contact': 'contact',
  '/faqs': 'faq',
  '/faq': 'faq',
  '/emergency': 'emergency',
  '/privacy-policy': 'privacy',
  '/privacy': 'privacy',
  '/terms-and-conditions': 'terms',
  '/terms': 'terms',
  '/ai-triage': 'ai-triage',
  '/patient-portal': 'patient-portal',
};

const tabToPathMap: Record<string, string> = {
  'home': '/',
  'about': '/about',
  'services': '/services',
  'doctors': '/doctors',
  'telemedicine': '/telemedicine',
  'gallery': '/gallery',
  'contact': '/contact',
  'faq': '/faqs',
  'emergency': '/emergency',
  'privacy': '/privacy-policy',
  'terms': '/terms-and-conditions',
  'ai-triage': '/ai-triage',
  'patient-portal': '/patient-portal',
};

export default function App() {
  const [activeTab, setActiveTabState] = useState<string>('home');
  const [doctorProfile, setDoctorProfile] = useState<DoctorProfile>(initialDoctorProfile);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync tab with URL path & history
  const handleSetActiveTab = (tabId: string) => {
    setActiveTabState(tabId);
    const targetPath = tabToPathMap[tabId] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ tab: tabId }, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync route on initial load & popstate (Back/Forward)
  useEffect(() => {
    const getTabFromLocation = () => {
      const currentPath = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      return pathToTabMap[currentPath] || '404';
    };

    setActiveTabState(getTabFromLocation());

    const handlePopState = () => {
      setActiveTabState(getTabFromLocation());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Fetch Doctor Profile and Appointments from server
  useEffect(() => {
    fetch('/api/doctor-profile')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.name) {
          setDoctorProfile(data);
        }
      })
      .catch((err) => console.error('Error loading doctor profile:', err));

    fetch('/api/appointments')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setAppointments(data);
        }
      })
      .catch((err) => console.error('Error loading appointments:', err));
  }, []);

  const handleUpdateDoctorProfile = (updatedProfile: DoctorProfile) => {
    setDoctorProfile(updatedProfile);
  };

  const handleAppointmentCreated = (newAppointment: Appointment) => {
    setAppointments((prev) => [newAppointment, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-teal-100 selection:text-teal-900 pb-16 md:pb-0">
      
      {/* Header Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleSetActiveTab}
        onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
        onMobileMenuToggle={(isOpen) => setIsMobileMenuOpen(isOpen)}
      />

      {/* Main Tab Views */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HeroSection
              doctorProfile={doctorProfile}
              onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
              setActiveTab={handleSetActiveTab}
            />
            <ServicesGrid
              onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
              setActiveTab={handleSetActiveTab}
            />
            <DoctorProfileSection
              doctorProfile={doctorProfile}
              onUpdateDoctorProfile={handleUpdateDoctorProfile}
              onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
            />
          </>
        )}

        {activeTab === 'about' && (
          <AboutSection
            doctorProfile={doctorProfile}
            onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
            setActiveTab={handleSetActiveTab}
          />
        )}

        {(activeTab === 'doctors' || activeTab === 'doctor') && (
          <DoctorProfileSection
            doctorProfile={doctorProfile}
            onUpdateDoctorProfile={handleUpdateDoctorProfile}
            onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
          />
        )}

        {activeTab === 'services' && (
          <ServicesGrid
            onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
            setActiveTab={handleSetActiveTab}
          />
        )}

        {activeTab === 'telemedicine' && (
          <TelemedicineSection
            doctorProfile={doctorProfile}
            onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
          />
        )}

        {activeTab === 'gallery' && (
          <GallerySection />
        )}

        {activeTab === 'ai-triage' && (
          <AITriageChat />
        )}

        {activeTab === 'patient-portal' && (
          <PatientPortal
            appointments={appointments}
            onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
          />
        )}

        {activeTab === 'emergency' && (
          <EmergencySection />
        )}

        {activeTab === 'contact' && (
          <ContactSection
            doctorProfile={doctorProfile}
            onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
          />
        )}

        {activeTab === 'faq' && (
          <PolicySection
            type="faq"
            onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
          />
        )}

        {activeTab === 'privacy' && (
          <PolicySection
            type="privacy"
            onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
          />
        )}

        {activeTab === 'terms' && (
          <PolicySection
            type="terms"
            onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
          />
        )}

        {activeTab === '404' && (
          <NotFoundSection
            setActiveTab={handleSetActiveTab}
            onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
          />
        )}
      </main>

      {/* Appointment Modal Wizard */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        doctorProfile={doctorProfile}
        onAppointmentCreated={handleAppointmentCreated}
      />

      {/* Footer */}
      <Footer
        doctorProfile={doctorProfile}
        setActiveTab={handleSetActiveTab}
      />

      {/* Sticky Mobile Bottom Action Bar */}
      <MobileBottomBar
        onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
        isModalOpen={isAppointmentModalOpen}
        isMenuOpen={isMobileMenuOpen}
      />

    </div>
  );
}
