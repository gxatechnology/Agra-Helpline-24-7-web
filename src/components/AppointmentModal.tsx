import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle, Video, Stethoscope, FileText, Download, QrCode } from 'lucide-react';
import { Appointment, ConsultationType, DoctorProfile } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctorProfile: DoctorProfile;
  onAppointmentCreated: (appointment: Appointment) => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  doctorProfile,
  onAppointmentCreated,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [consultationType, setConsultationType] = useState<ConsultationType>('OPD');
  const [specialty, setSpecialty] = useState('General Medicine & Triage');
  const [selectedDate, setSelectedDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('11:00 AM - 11:30 AM');

  // Patient Info
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientAge, setPatientAge] = useState('32');
  const [patientGender, setPatientGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [symptoms, setSymptoms] = useState('');
  const [userMessage, setUserMessage] = useState('');

  // Result state
  const [createdAppointment, setCreatedAppointment] = useState<Appointment | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleResetAndClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const timeSlotsMorning = [
    '10:00 AM - 10:30 AM',
    '10:30 AM - 11:00 AM',
    '11:00 AM - 11:30 AM',
    '11:30 AM - 12:00 PM',
    '12:00 PM - 12:30 PM',
  ];

  const timeSlotsEvening = [
    '05:00 PM - 05:30 PM',
    '05:30 PM - 06:00 PM',
    '06:00 PM - 06:30 PM',
    '06:30 PM - 07:00 PM',
    '07:00 PM - 07:30 PM',
  ];

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      patientName,
      patientPhone,
      patientAge,
      patientGender,
      consultationType,
      specialty,
      doctorId: doctorProfile.id,
      doctorName: doctorProfile.name,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      symptoms,
    };

    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setCreatedAppointment(data.appointment);
        onAppointmentCreated(data.appointment);
        setStep(3); // Confirmation step
      }
    } catch (err) {
      console.error('Appointment creation failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setStep(1);
    setCreatedAppointment(null);
    onClose();
  };

  return (
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
      className="fixed inset-0 z-[100000] bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-4 overflow-hidden"
    >
      <div className="bg-white rounded-2xl w-[calc(100%-20px)] sm:w-full max-w-xl shadow-2xl relative text-left flex flex-col max-h-[calc(100dvh-28px)] sm:max-h-[88vh] overflow-hidden border border-slate-200 my-auto">
        
        {/* Sticky Top Header */}
        <div className="sticky top-0 z-[99998] bg-white border-b border-slate-200 px-5 sm:px-6 py-3.5 sm:py-4 relative pr-16 shrink-0 shadow-xs">
          <div className="pr-10 sm:pr-12">
            <span className="text-[11px] font-bold text-teal-600 uppercase tracking-wider block">Agra Helpline 24×7 • Dayalbagh</span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 truncate">
              {step === 3 ? 'Appointment Token Pass' : 'Book Consultation'}
            </h3>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Close appointment form"
            className="absolute top-3 right-3 z-[99999] p-2 sm:p-2.5 text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl transition-all border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-xs cursor-pointer shrink-0"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto overscroll-contain space-y-5 sm:space-y-6 flex-1">

        {/* Wizard Step 1: Type & Slot Selection */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Select Consultation Type</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setConsultationType('OPD')}
                  className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
                    consultationType === 'OPD'
                      ? 'bg-teal-50 border-teal-600 text-teal-800 font-bold shadow-xs ring-2 ring-teal-600/20'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <Stethoscope className="w-6 h-6 mx-auto mb-1.5 text-teal-600" />
                  <span className="text-sm block font-bold">In-Clinic OPD</span>
                  <span className="text-[11px] text-slate-500 font-normal">Dayalbagh Clinic</span>
                </button>

                <button
                  type="button"
                  onClick={() => setConsultationType('Telemedicine')}
                  className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
                    consultationType === 'Telemedicine'
                      ? 'bg-teal-50 border-teal-600 text-teal-800 font-bold shadow-xs ring-2 ring-teal-600/20'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <Video className="w-6 h-6 mx-auto mb-1.5 text-teal-600" />
                  <span className="text-sm block font-bold">Video Telehealth</span>
                  <span className="text-[11px] text-slate-500 font-normal">Online Call</span>
                </button>

                <button
                  type="button"
                  onClick={() => setConsultationType('HomeVisit')}
                  className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
                    consultationType === 'HomeVisit'
                      ? 'bg-teal-50 border-teal-600 text-teal-800 font-bold shadow-xs ring-2 ring-teal-600/20'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <User className="w-6 h-6 mx-auto mb-1.5 text-teal-600" />
                  <span className="text-sm block font-bold">Home Visit</span>
                  <span className="text-[11px] text-slate-500 font-normal">Agra Area</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Select Practitioner</label>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-teal-100 border border-teal-500 flex items-center justify-center text-teal-700 shrink-0">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900">{doctorProfile.name}</p>
                    <p className="text-xs text-slate-600">{doctorProfile.specialization}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 block">Consultation Fee</span>
                  <span className="text-sm font-black text-teal-700 bg-teal-100 px-3 py-1 rounded-lg inline-block">
                    ₹{doctorProfile.consultationFee}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Consultation Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Medical Specialty</label>
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="General Medicine & Triage">General Medicine & Triage</option>
                  <option value="Cardiology Triage">Cardiology Triage</option>
                  <option value="Pediatrics Care">Pediatrics Care</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Preventive Health">Preventive Health</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Available Time Slots</label>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-slate-500 font-bold mb-1.5">Morning OPD Schedule:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                    {timeSlotsMorning.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          selectedTimeSlot === slot
                            ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-500 font-bold mb-1.5">Evening OPD Schedule:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                    {timeSlotsEvening.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          selectedTimeSlot === slot
                            ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition-all cursor-pointer"
              >
                Proceed to Patient Details &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Wizard Step 2: Patient Info */}
        {step === 2 && (
          <form onSubmit={handleSubmitBooking} className="space-y-5 text-xs">
            <div className="bg-teal-50/80 p-4 rounded-xl border border-teal-200 text-teal-900 flex flex-wrap justify-between items-center gap-2 text-xs">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-sm">{consultationType} Consultation</span>
                <span className="text-slate-400">•</span>
                <span className="font-semibold">{selectedDate}</span>
              </div>
              <span className="font-mono font-bold bg-teal-200 text-teal-900 px-3 py-1 rounded-lg text-xs">
                {selectedTimeSlot}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Patient Full Name *</label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="e.g. Rajesh Kumar"
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Mobile Phone Number *</label>
                <input
                  type="tel"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Email Address (Optional)</label>
                <input
                  type="email"
                  value={patientEmail}
                  onChange={(e) => setPatientEmail(e.target.value)}
                  placeholder="e.g. patient@gmail.com"
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Patient Age *</label>
                <input
                  type="number"
                  value={patientAge}
                  onChange={(e) => setPatientAge(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Gender</label>
                <select
                  value={patientGender}
                  onChange={(e) => setPatientGender(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Consultation Fee</label>
                <div className="w-full px-3.5 py-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-sm font-extrabold text-emerald-800 flex items-center justify-between">
                  <span>Standard Fee</span>
                  <span className="text-base font-black">₹100</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1.5">Symptoms / Reason for Visit</label>
              <textarea
                rows={2}
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="Describe symptoms briefly (e.g. Mild fever, persistent cough for 2 days)..."
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1.5">Message / Additional Request (Optional)</label>
              <textarea
                rows={2}
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Any special notes or preferred instructions..."
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-5 py-2.5 border border-slate-300 hover:bg-slate-50 rounded-xl font-bold text-slate-700 cursor-pointer text-sm"
              >
                &larr; Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-md cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Confirming Token...' : 'Confirm Appointment'}
              </button>
            </div>
          </form>
        )}

        {/* Wizard Step 3: Confirmation Token Pass */}
        {step === 3 && createdAppointment && (
          <div className="space-y-6 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <h4 className="text-2xl sm:text-3xl font-black text-slate-900">Appointment Request Received!</h4>
              <p className="text-sm font-semibold text-emerald-700 mt-1">
                Your appointment request has been received. Our team will contact you shortly.
              </p>
              <p className="text-xs text-slate-500 mt-0.5">Agra Helpline 24×7 Digital Token Generated (Fee: ₹100)</p>
            </div>

            {/* Token Badge */}
            <div className="bg-gradient-to-r from-teal-800 to-slate-900 text-white rounded-2xl p-6 shadow-md text-left space-y-4">
              <div className="flex items-center justify-between border-b border-teal-700/60 pb-3">
                <div>
                  <span className="text-xs text-teal-300 uppercase font-bold">Token Pass Number</span>
                  <p className="text-3xl font-mono font-black text-teal-400">{createdAppointment.tokenNumber}</p>
                </div>
                <QrCode className="w-14 h-14 text-teal-300/80 shrink-0" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block text-xs">Patient Name</span>
                  <p className="font-bold text-white">{createdAppointment.patientName}</p>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Practitioner</span>
                  <p className="font-bold text-white">{createdAppointment.doctorName}</p>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Date & Slot</span>
                  <p className="font-bold text-white">{createdAppointment.date} ({createdAppointment.timeSlot})</p>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Consultation Type</span>
                  <p className="font-bold text-white">{createdAppointment.consultationType}</p>
                </div>
              </div>

              {createdAppointment.videoCallLink && (
                <div className="pt-3 border-t border-teal-700/60">
                  <span className="text-xs text-teal-300 block mb-1 font-bold">Telehealth Video Call Link:</span>
                  <a
                    href={createdAppointment.videoCallLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs sm:text-sm font-mono bg-teal-900/90 text-teal-200 px-3.5 py-2 rounded-lg block truncate hover:underline border border-teal-700"
                  >
                    {createdAppointment.videoCallLink}
                  </a>
                </div>
              )}
            </div>

            <p className="text-xs text-slate-500">
              For any change or emergency dispatch, call Agra Helpline at <strong className="text-rose-700">+91 90124 29042</strong>.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/919012429042?text=${encodeURIComponent(
                  `Hello Agra Helpline 24x7, I have submitted an appointment request for ${createdAppointment.patientName} (Token #${createdAppointment.tokenNumber}) for ${createdAppointment.date} at ${createdAppointment.timeSlot}. Please confirm.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-sm transition-all flex items-center space-x-2"
              >
                <span>WhatsApp Confirmation</span>
              </a>

              <button
                onClick={handleResetAndClose}
                className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-xl shadow-sm transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}

        </div>
      </div>
    </div>
  );
};
