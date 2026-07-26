export interface DoctorProfile {
  id: string;
  name: string;
  title: string;
  qualification: string;
  experienceYears: number | string;
  registrationNumber: string;
  specialization: string;
  languages: string[];
  bio: string;
  opdTimings: string;
  consultationFee: number;
  availableDays: string[];
  contactPhone: string;
  whatsapp: string;
  email: string;
  website: string;
  address: string;
  facebook: string;
  instagram: string;
  googleMap: string;
  hospitalAffiliations: string[];
  image: string;
}

export type ConsultationType = 'OPD' | 'Telemedicine' | 'HomeVisit';

export interface Appointment {
  id: string;
  patientName: string;
  patientPhone: string;
  patientAge: number | string;
  patientGender: 'Male' | 'Female' | 'Other';
  consultationType: ConsultationType;
  specialty: string;
  doctorId: string;
  doctorName: string;
  date: string;
  timeSlot: string;
  symptoms: string;
  medicalHistory?: string;
  tokenNumber: string;
  status: 'Confirmed' | 'Pending' | 'Completed' | 'Cancelled';
  createdAt: string;
  videoCallLink?: string;
}

export interface TriageMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isUrgent?: boolean;
}

export interface MedicalService {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  emergencySupport: boolean;
}

export interface LabReport {
  id: string;
  patientName: string;
  testName: string;
  date: string;
  status: 'Ready' | 'In Progress';
  summary?: string;
  fileUrl?: string;
}
