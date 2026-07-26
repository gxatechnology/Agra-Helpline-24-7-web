import React, { useState } from 'react';
import { ShieldCheck, FileText, HelpCircle, Search, ChevronDown, Lock, Scale, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';

interface PolicySectionProps {
  type: 'privacy' | 'terms' | 'faq';
  onOpenAppointmentModal: () => void;
}

export const PolicySection: React.FC<PolicySectionProps> = ({ type, onOpenAppointmentModal }) => {
  // FAQ Search & Accordion State
  const [faqSearch, setFaqSearch] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (type === 'faq') {
    const faqCategories = [
      {
        category: 'General Information',
        items: [
          {
            q: 'What is Agra Helpline 24×7?',
            a: 'Agra Helpline 24×7 is a dedicated healthcare facility and emergency helpline service located in Dayalbagh, Agra, providing round-the-clock medical triage, doctor consultations, OPD bookings, and telemedicine assistance.'
          },
          {
            q: 'What are the main helpline contact numbers?',
            a: 'You can reach Agra Helpline 24×7 at +91 90124 29042 via direct call or WhatsApp support.'
          }
        ]
      },
      {
        category: 'OPD Appointment',
        items: [
          {
            q: 'How do I book an OPD consultation token?',
            a: 'You can book an appointment directly through our website by clicking "Book Appointment", or by calling or messaging us on WhatsApp at +91 90124 29042.'
          },
          {
            q: 'Can I visit without a prior booking?',
            a: 'Walk-in consultations are welcome at our Dayalbagh clinic during OPD hours; however, booking in advance ensures a priority token and minimal waiting time.'
          }
        ]
      },
      {
        category: 'Consultation Fee',
        items: [
          {
            q: 'What is the consultation fee?',
            a: 'The standard OPD consultation fee at Agra Helpline 24×7 is ₹100.'
          },
          {
            q: 'Are there any hidden service charges?',
            a: 'No. The OPD consultation fee is fixed at ₹100. Any additional diagnostic tests or medicines are billed separately with full transparency.'
          }
        ]
      },
      {
        category: 'Telemedicine & WhatsApp',
        items: [
          {
            q: 'How does Telemedicine work?',
            a: 'Telemedicine allows patients to consult Dr. Mohit Gupta remotely via video call or phone audio. Simply select Telemedicine on our portal or contact our helpline.'
          },
          {
            q: 'Can I receive prescriptions via WhatsApp?',
            a: 'Yes, after a verified remote consultation, digital advice and prescription notes can be shared directly via WhatsApp at +91 90124 29042.'
          }
        ]
      },
      {
        category: 'Emergency Assistance',
        items: [
          {
            q: 'How does 24×7 Emergency help work?',
            a: 'Our helpline +91 90124 29042 is active 24 hours a day. Our triage team assists with emergency advice and coordinates local hospital transfers.'
          },
          {
            q: 'Is ambulance service available?',
            a: 'Ambulance service availability: Please confirm through the helpline (+91 90124 29042).'
          }
        ]
      },
      {
        category: 'Doctors & Services',
        items: [
          {
            q: 'Who is the lead doctor at Agra Helpline 24×7?',
            a: 'Dr. Mohit Gupta leads the OPD and medical consultation services.'
          },
          {
            q: 'What medical services are available at the clinic?',
            a: 'Services include General Physician OPD, Emergency Triage, Telemedicine, Pharmacy coordination, and Diagnostic support.'
          }
        ]
      },
      {
        category: 'Medical Store & Diagnostics',
        items: [
          {
            q: 'Is there a pharmacy/medical store available?',
            a: 'Essential medicines and prescription items are coordinated through our Dayalbagh clinical store desk.'
          },
          {
            q: 'How are diagnostic reports collected?',
            a: 'Please contact the helpline for confirmation regarding specific pathology sample pick-ups and report delivery timings.'
          }
        ]
      },
      {
        category: 'Location and Contact',
        items: [
          {
            q: 'Where is the clinic located in Agra?',
            a: 'Address: Nagala Budhi, Pushpanjali Bagh Road, Dayalbagh, Agra, Uttar Pradesh – 282005.'
          },
          {
            q: 'What is the official email address?',
            a: 'Email: agrahelpline24.7@gmail.com.'
          }
        ]
      },
      {
        category: 'Cancellation and Rescheduling',
        items: [
          {
            q: 'Can I cancel or reschedule my OPD token?',
            a: 'Cancellation, rescheduling and refund conditions must be confirmed directly with Agra Helpline 24×7 via call or WhatsApp at +91 90124 29042.'
          }
        ]
      },
      {
        category: 'Privacy and Patient Data',
        items: [
          {
            q: 'Is my health information kept private?',
            a: 'Yes. All patient records, contact numbers, and appointment details are kept strictly confidential.'
          }
        ]
      }
    ];

    // Flatten for search
    let flatIndex = 0;
    const allFaqsWithIndex = faqCategories.flatMap((cat) =>
      cat.items.map((item) => ({
        ...item,
        category: cat.category,
        index: flatIndex++
      }))
    );

    const filteredFaqs = allFaqsWithIndex.filter(
      (f) =>
        f.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
        f.a.toLowerCase().includes(faqSearch.toLowerCase()) ||
        f.category.toLowerCase().includes(faqSearch.toLowerCase())
    );

    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left space-y-8 min-h-screen">
        
        {/* Hero */}
        <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-teal-950 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-4 border border-slate-800">
          <div className="inline-flex items-center space-x-2 bg-teal-500/20 px-3.5 py-1.5 rounded-full text-teal-300 text-xs font-bold border border-teal-500/30">
            <HelpCircle className="w-4 h-4" />
            <span>Patient Assistance Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions <span className="text-teal-400">(FAQs)</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Find answers regarding OPD bookings, consultation fee (₹100), telemedicine care, 24×7 emergency triage, and clinic location.
          </p>

          {/* Search Field */}
          <div className="relative max-w-md pt-2">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-5" />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search questions (e.g. fee, location, emergency)..."
              className="w-full pl-11 pr-4 py-3 bg-white/10 text-white placeholder-slate-400 rounded-2xl border border-white/20 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-400"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-slate-50 p-8 rounded-2xl text-center text-slate-500 text-sm">
              No questions found matching "{faqSearch}". Please contact the helpline for confirmation (+91 90124 29042).
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqIndex === faq.index;
              return (
                <div
                  key={faq.index}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : faq.index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between space-x-4 hover:bg-slate-50 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wider block">
                        {faq.category}
                      </span>
                      <span className="text-sm font-bold text-slate-900 mt-0.5 block">
                        {faq.q}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-teal-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions CTA */}
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-slate-900 text-sm">Have a specific question not listed here?</h3>
            <p className="text-xs text-slate-600 mt-0.5">Speak with our 24×7 Agra helpline desk directly.</p>
          </div>
          <a
            href="tel:+919012429042"
            className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0 whitespace-nowrap"
          >
            Call +91 90124 29042
          </a>
        </div>

      </div>
    );
  }

  if (type === 'terms') {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left space-y-8 min-h-screen">
        <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-3xl space-y-3 shadow-lg border border-slate-800">
          <div className="inline-flex items-center space-x-2 bg-teal-500/20 px-3 py-1 rounded-full text-teal-300 text-xs font-bold border border-teal-500/30">
            <Scale className="w-4 h-4" />
            <span>Terms of Service</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold">Terms & Conditions</h1>
          <p className="text-slate-300 text-xs sm:text-sm">Agra Helpline 24×7 Platform Operational & Patient Usage Rules</p>
          <div className="pt-2 text-[11px] text-teal-400 font-medium">Last Updated: July 2026</div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">1. Website Use & Agreement</h3>
            <p>By accessing or using the Agra Helpline 24×7 portal, you agree to comply with these terms. This portal provides healthcare information, OPD token scheduling, and emergency helpline routing for Agra residents.</p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">2. OPD Appointments & Consultation Fee</h3>
            <p>The standard OPD consultation fee is ₹100. Appointment requests submitted online generate a digital token pass for verification at our Dayalbagh clinic or during telemedicine consultations.</p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">3. Cancellation & Rescheduling</h3>
            <p>Cancellation, rescheduling and refund conditions must be confirmed directly with Agra Helpline 24×7 via phone or WhatsApp at +91 90124 29042.</p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">4. Telemedicine & Medical Disclaimer</h3>
            <p>Telemedicine guidance provided remotely serves as preliminary medical advice. It does not replace full in-person clinical examinations. In acute physical distress, immediate physical OPD attendance is advised.</p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">5. Emergency Limitations</h3>
            <p>This web application is not an automated emergency responder. In acute life-threatening situations, call our direct helpline at +91 90124 29042 or proceed immediately to the nearest hospital trauma unit.</p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">6. Contact Information</h3>
            <p>For questions regarding these terms, contact Agra Helpline 24×7 at agrahelpline24.7@gmail.com or visit Dayalbagh, Agra.</p>
          </section>
        </div>
      </div>
    );
  }

  // Privacy Policy
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left space-y-8 min-h-screen">
      <div className="bg-teal-950 text-white p-8 sm:p-10 rounded-3xl space-y-3 shadow-lg border border-teal-900">
        <div className="inline-flex items-center space-x-2 bg-teal-500/20 px-3 py-1 rounded-full text-teal-300 text-xs font-bold border border-teal-500/30">
          <Lock className="w-4 h-4" />
          <span>Patient Privacy Statement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold">Privacy Policy</h1>
        <p className="text-teal-200 text-xs sm:text-sm">How Agra Helpline 24×7 Handles Patient Data & Contact Details</p>
        <div className="pt-2 text-[11px] text-teal-300 font-medium">Last Updated: July 2026</div>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">1. Information Collected</h3>
          <p>We collect information provided directly through appointment booking forms, contact forms, and helpline calls, including patient name, mobile phone number, email address, and symptom notes.</p>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">2. Purpose of Data Use</h3>
          <p>Collected information is strictly used to schedule OPD appointments, generate digital tokens, communicate telemedicine guidance, send WhatsApp confirmations, and provide emergency assistance.</p>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">3. Cookies & Analytics</h3>
          <p>This website uses essential browser local storage and standard anonymous cookies to maintain user session preferences and token state. No tracking data is sold to external parties.</p>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">4. Third-Party Links & WhatsApp Redirection</h3>
          <p>When clicking links to external platforms such as Google Maps, Facebook, Instagram, or WhatsApp, you will be redirected to those respective official services subject to their privacy guidelines.</p>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">5. Medical Data Protection & Disclaimer</h3>
          <p>Your personal health information is handled with care. Please note that online form submissions are for appointment scheduling and general inquiry, not for transmitting sensitive medical history records without doctor authorization.</p>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">6. Contact Email for Privacy Inquiries</h3>
          <p>If you have questions regarding your data or wish to request record deletion, email us at <strong className="text-slate-900">agrahelpline24.7@gmail.com</strong> or call +91 90124 29042.</p>
        </section>
      </div>
    </div>
  );
};
