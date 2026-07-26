import React, { useState, useEffect } from 'react';
import { Appointment, LabReport } from '../types';
import { Calendar, FileText, Upload, Download, QrCode, CheckCircle, Clock, ShieldCheck, User, Activity } from 'lucide-react';

interface PatientPortalProps {
  appointments: Appointment[];
  onOpenAppointmentModal: () => void;
}

export const PatientPortal: React.FC<PatientPortalProps> = ({ appointments, onOpenAppointmentModal }) => {
  const [activeSubTab, setActiveSubTab] = useState<'tokens' | 'reports' | 'idcard'>('tokens');

  // Sample lab reports state
  const [labReports, setLabReports] = useState<LabReport[]>([
    {
      id: 'rep-1',
      patientName: 'Self / Registered Patient',
      testName: 'Complete Blood Count (CBC) & HbA1c',
      date: '2026-07-20',
      status: 'Ready',
      summary: 'All parameters normal. Hemoglobin: 14.2 g/dL, HbA1c: 5.6% (Non-diabetic range).',
    },
    {
      id: 'rep-2',
      patientName: 'Self / Registered Patient',
      testName: 'Lipid Profile & Liver Function Test',
      date: '2026-06-15',
      status: 'Ready',
      summary: 'Total Cholesterol: 185 mg/dL (Desirable), LFT values within optimal range.',
    },
  ]);

  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleSimulatedUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploading(true);
      setTimeout(() => {
        const newReport: LabReport = {
          id: `rep-${Date.now()}`,
          patientName: 'Self / Registered Patient',
          testName: file.name.replace(/\.[^/.]+$/, ''),
          date: new Date().toISOString().split('T')[0],
          status: 'Ready',
          summary: 'Uploaded lab report processed successfully. Parameters recorded in Agra Helpline Patient Health Vault.',
        };
        setLabReports((prev) => [newReport, ...prev]);
        setUploading(false);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }, 1500);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Patient Portal & Records
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
            Health Vault & Token Passes
          </h2>
          <p className="text-slate-600 text-sm">
            Access your OPD appointments, digital passes, and lab diagnostic reports.
          </p>
        </div>

        {/* Sub-tab Selectors */}
        <div className="flex bg-slate-100 p-1.5 rounded-xl space-x-1">
          <button
            onClick={() => setActiveSubTab('tokens')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'tokens' ? 'bg-white text-teal-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            My Appointments ({appointments.length})
          </button>
          <button
            onClick={() => setActiveSubTab('reports')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'reports' ? 'bg-white text-teal-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Lab Reports ({labReports.length})
          </button>
          <button
            onClick={() => setActiveSubTab('idcard')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'idcard' ? 'bg-white text-teal-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Emergency Health ID
          </button>
        </div>
      </div>

      {/* Sub-tab 1: Appointments & Tokens */}
      {activeSubTab === 'tokens' && (
        <div className="space-y-6">
          {appointments.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
              <Calendar className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-xl font-bold text-slate-800">No Appointments Booked Yet</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Book your OPD or Telemedicine consultation with Dr. Mohit Gupta to get instant digital token passes.
              </p>
              <button
                onClick={onOpenAppointmentModal}
                className="px-6 py-3 bg-teal-600 text-white text-sm font-semibold rounded-xl shadow-sm hover:bg-teal-700"
              >
                Book OPD Appointment
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-xs font-mono font-black text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
                      TOKEN: {apt.tokenNumber}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                      {apt.status}
                    </span>
                  </div>

                  <div className="space-y-1 text-xs">
                    <p className="text-sm font-bold text-slate-900">{apt.patientName}</p>
                    <p className="text-slate-600">Doctor: <span className="font-semibold">{apt.doctorName}</span></p>
                    <p className="text-slate-600">Date & Slot: <span className="font-semibold text-teal-800">{apt.date} ({apt.timeSlot})</span></p>
                    <p className="text-slate-600">Type: <span className="font-semibold">{apt.consultationType}</span></p>
                    {apt.symptoms && <p className="text-slate-500 italic">"Symptoms: {apt.symptoms}"</p>}
                  </div>

                  {apt.videoCallLink && (
                    <a
                      href={apt.videoCallLink}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-center py-2 bg-teal-600 text-white rounded-xl text-xs font-bold hover:bg-teal-700"
                    >
                      Join Telemedicine Room
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Sub-tab 2: Lab Reports & Upload */}
      {activeSubTab === 'reports' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Upload & Save Medical Lab Reports</h3>
              <p className="text-xs text-slate-500">Upload PDFs or image reports to keep your clinical health vault updated.</p>
            </div>

            <label className="cursor-pointer bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-sm flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span>{uploading ? 'Processing File...' : 'Upload Lab Report'}</span>
              <input type="file" onChange={handleSimulatedUpload} className="hidden" accept=".pdf,.png,.jpg,.jpeg" />
            </label>
          </div>

          {uploadSuccess && (
            <div className="p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-semibold flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Lab report uploaded and added to your health vault successfully.</span>
            </div>
          )}

          <div className="space-y-4">
            {labReports.map((report) => (
              <div key={report.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-slate-900">{report.testName}</h4>
                  <span className="text-xs text-slate-400">{report.date}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <strong className="text-slate-800">AI Summary:</strong> {report.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-tab 3: Emergency Health ID Card */}
      {activeSubTab === 'idcard' && (
        <div className="max-w-xl mx-auto space-y-6">
          <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white rounded-2xl p-6 shadow-2xl space-y-4 border border-teal-500/30">
            <div className="flex items-center justify-between border-b border-slate-700 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-slate-900 font-black">
                  AH
                </div>
                <div>
                  <h4 className="text-sm font-bold">AGRA HELPLINE 24×7</h4>
                  <p className="text-[10px] text-teal-300 uppercase">Emergency Health Card</p>
                </div>
              </div>
              <QrCode className="w-10 h-10 text-teal-400" />
            </div>

            <div className="space-y-2 text-xs">
              <p className="text-sm font-bold text-teal-300">CARD HOLDER: Patient Record</p>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                <div>Emergency Contact: <span className="font-bold text-white">+91 90124 29042</span></div>
                <div>Primary Doctor: <span className="font-bold text-white">Dr. Mohit Gupta</span></div>
                <div>Agra Region ID: <span className="font-mono text-teal-400">AH-AGRA-90124</span></div>
                <div>Blood Group: <span className="font-bold text-rose-400">O +ve</span></div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-700 text-[10px] text-slate-400 flex justify-between">
              <span>Agra Helpline 24×7 Official Digital Medical Passport</span>
              <span className="text-teal-400 font-bold">24×7 LIVE</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
