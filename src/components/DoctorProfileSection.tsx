import React, { useState } from 'react';
import { DoctorProfile } from '../types';
import { Stethoscope, Award, Clock, MapPin, Phone, Mail, Edit3, Save, X, Calendar, CheckCircle, ShieldCheck } from 'lucide-react';

interface DoctorProfileSectionProps {
  doctorProfile: DoctorProfile;
  onUpdateDoctorProfile: (updatedProfile: DoctorProfile) => void;
  onOpenAppointmentModal: () => void;
}

export const DoctorProfileSection: React.FC<DoctorProfileSectionProps> = ({
  doctorProfile,
  onUpdateDoctorProfile,
  onOpenAppointmentModal,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<DoctorProfile>(doctorProfile);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'consultationFee' ? Number(value) : value,
    }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/doctor-profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        onUpdateDoctorProfile(formData);
        setIsEditing(false);
        setSaveSuccessMessage(true);
        setTimeout(() => setSaveSuccessMessage(false), 4000);
      }
    } catch (err) {
      console.error('Failed to update doctor profile:', err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Banner / Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Primary Medical Practitioner
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
            Doctor Profile & OPD Schedule
          </h2>
          <p className="text-slate-600 text-sm">
            Agra Helpline 24×7 Official Practitioner Information
          </p>
        </div>

        <button
          onClick={() => {
            setFormData(doctorProfile);
            setIsEditing(true);
          }}
          className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <Edit3 className="w-4 h-4 text-teal-400" />
          <span>Edit Doctor Details</span>
        </button>
      </div>

      {saveSuccessMessage && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Doctor profile updated successfully and persisted to Agra Helpline 24×7 platform.</span>
        </div>
      )}

      {/* Main Profile Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Avatar & Quick Info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center space-y-4">
            <div className="relative inline-block">
              <div className="w-28 h-28 mx-auto rounded-2xl bg-teal-50 border-2 border-teal-500 flex items-center justify-center text-teal-800 shadow-sm">
                <Stethoscope className="w-12 h-12" />
              </div>
              <span className="absolute bottom-1 right-1 p-2 bg-teal-600 text-white rounded-full shadow-md">
                <ShieldCheck className="w-4 h-4" />
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">{doctorProfile.name}</h3>
              <p className="text-teal-700 text-sm font-semibold">{doctorProfile.title}</p>
              <p className="text-xs text-slate-500 mt-1">{doctorProfile.specialization}</p>
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-2 text-left text-xs">
              <div className="flex justify-between text-slate-600 gap-2">
                <span className="shrink-0">Qualification:</span>
                <span className="font-semibold text-slate-900 text-right">{doctorProfile.qualification}</span>
              </div>
              <div className="flex justify-between text-slate-600 gap-2">
                <span className="shrink-0">Experience:</span>
                <span className="font-semibold text-slate-900 text-right">{doctorProfile.experienceYears}</span>
              </div>
              <div className="flex justify-between text-slate-600 gap-2">
                <span className="shrink-0">Reg. Number:</span>
                <span className="font-mono text-slate-800 font-semibold text-right">{doctorProfile.registrationNumber}</span>
              </div>
              <div className="flex justify-between text-slate-600 gap-2">
                <span className="shrink-0">Consultation Fee:</span>
                <span className="font-bold text-teal-700 text-sm">₹{doctorProfile.consultationFee}</span>
              </div>
            </div>

            <button
              onClick={onOpenAppointmentModal}
              className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm rounded-xl shadow-sm transition-colors cursor-pointer"
            >
              Book OPD Consultation (₹100)
            </button>
          </div>

          {/* Contact Details Card */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4 text-left">
            <h4 className="text-base font-bold flex items-center space-x-2 text-teal-400">
              <Phone className="w-4 h-4 shrink-0" />
              <span>Direct Emergency Helpline</span>
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <p className="text-slate-400">Phone / WhatsApp:</p>
                <a href="tel:+919012429042" className="text-sm font-extrabold text-white underline hover:text-teal-300 whitespace-nowrap">
                  +91 90124 29042
                </a>
              </div>
              <div>
                <p className="text-slate-400">Email Address:</p>
                <p className="font-medium text-slate-200 select-all">agrahelpline24.7@gmail.com</p>
              </div>
              <div>
                <p className="text-slate-400">Clinic Address:</p>
                <p className="font-medium text-slate-200">
                  Nagala Budhi, Pushpanjali Bagh Road, Dayalbagh, Agra, Uttar Pradesh – 282005
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio, Qualifications, OPD Timings */}
        <div className="lg:col-span-8 space-y-6 text-left">
          
          {/* Bio Section */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <Stethoscope className="w-5 h-5 text-teal-600" />
              <span>About Dr. Mohit Gupta</span>
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
              {doctorProfile.bio}
            </p>

            {/* Doctor Consultation Chamber & Team Showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                <div className="aspect-video bg-slate-100 overflow-hidden">
                  <img
                    src={new URL('../assets/images/doctor_consultation_room_1785099635716.jpg', import.meta.url).href}
                    alt="Dr. Mohit Gupta Consultation Room"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-2.5 bg-slate-50 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-teal-700 uppercase block">Consultation Room</span>
                  <span className="text-xs font-semibold text-slate-800">Clean & Hygienic Examination Chamber</span>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                <div className="aspect-video bg-slate-100 overflow-hidden">
                  <img
                    src={new URL('../assets/images/indian_doctor_team_1785099675016.jpg', import.meta.url).href}
                    alt="Agra Helpline Medical Team"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-2.5 bg-slate-50 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-teal-700 uppercase block">Triage & Clinical Team</span>
                  <span className="text-xs font-semibold text-slate-800">24×7 On-Duty Physicians & Staff</span>
                </div>
              </div>
            </div>
          </div>

          {/* OPD Schedule Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <Clock className="w-5 h-5 text-teal-600" />
              <span>OPD Timings & Availability</span>
            </h3>

            <div className="bg-teal-50/70 border border-teal-100 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-teal-800 font-medium">Weekly OPD Hours:</p>
                <p className="text-sm font-bold text-slate-900">{doctorProfile.opdTimings}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-teal-800 font-medium">In-Clinic Consultation Fee:</p>
                <p className="text-lg font-extrabold text-teal-700">₹{doctorProfile.consultationFee}</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-600 mb-2">Available Practice Days:</p>
              <div className="flex flex-wrap gap-2">
                {doctorProfile.availableDays.map((day) => (
                  <span key={day} className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg">
                    {day}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hospital Affiliations & Credentials */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <Award className="w-5 h-5 text-teal-600" />
              <span>Hospital Affiliations & Clinical Network</span>
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
              {doctorProfile.hospitalAffiliations.map((aff, idx) => (
                <li key={idx} className="flex items-center space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  <span>{aff}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      {/* Edit Doctor Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative text-left my-8">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Edit Doctor Profile</h3>
                <p className="text-xs text-slate-500">Update Dr. Mohit Gupta's official credentials & OPD details</p>
              </div>
              <button
                onClick={() => setIsEditing(false)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Doctor Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Title / Designation</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Qualification (e.g. MBBS, MD)</label>
                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Experience (e.g. 12+ Years)</label>
                  <input
                    type="text"
                    name="experienceYears"
                    value={formData.experienceYears}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Registration Number</label>
                  <input
                    type="text"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Consultation Fee (₹)</label>
                  <input
                    type="number"
                    name="consultationFee"
                    value={formData.consultationFee}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">OPD Hours & Schedule</label>
                <input
                  type="text"
                  name="opdTimings"
                  value={formData.opdTimings}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Doctor Bio & Overview</label>
                <textarea
                  name="bio"
                  rows={4}
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                  required
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 border border-slate-300 rounded-lg font-semibold text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-sm flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
