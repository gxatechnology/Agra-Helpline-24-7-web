import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { initialDoctorProfile } from './src/data/initialData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let currentDoctorProfile = { ...initialDoctorProfile };
let appointmentsStore: any[] = [];

// Initialize Gemini AI Client lazily/safely
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is not configured in environment.');
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'Agra Helpline 24×7 API' });
  });

  // Doctor Profile Endpoints
  app.get('/api/doctor-profile', (req, res) => {
    res.json(currentDoctorProfile);
  });

  app.put('/api/doctor-profile', (req, res) => {
    const updated = req.body;
    currentDoctorProfile = { ...currentDoctorProfile, ...updated };
    res.json({ success: true, profile: currentDoctorProfile });
  });

  // Appointments Endpoints
  app.get('/api/appointments', (req, res) => {
    res.json(appointmentsStore);
  });

  app.post('/api/appointments', (req, res) => {
    const appointmentData = req.body;
    const tokenNum = `AH-${Math.floor(100000 + Math.random() * 900000)}`;
    const newAppointment = {
      id: `apt-${Date.now()}`,
      tokenNumber: tokenNum,
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
      doctorName: appointmentData.doctorName || 'Dr. Mohit Gupta',
      videoCallLink: appointmentData.consultationType === 'Telemedicine' 
        ? `https://telehealth.agrahelpline.com/room/${tokenNum}`
        : undefined,
      ...appointmentData,
    };
    appointmentsStore.unshift(newAppointment);
    res.json({ success: true, appointment: newAppointment });
  });

  // AI Health Advisor / Symptom Triage Endpoint
  app.post('/api/health-ai', async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required.' });
    }

    const lowerPrompt = prompt.toLowerCase();
    const emergencyKeywords = [
      'chest pain', 'heart attack', 'unconscious', 'severe bleeding', 
      'breathing problem', 'shortness of breath', 'stroke', 'head injury', 'paralysis'
    ];
    const isUrgent = emergencyKeywords.some(k => lowerPrompt.includes(k));

    let replyText = '';

    try {
      const ai = getGeminiClient();

      const systemInstruction = `You are "Helpline Health Advisor", the compassionate AI medical assistant for Agra Helpline 24×7 (Helpline Number: +91 90124 29042).
Your lead physician is Dr. Mohit Gupta.
Your goal is to provide clear, helpful, empathetic health triage, general medical information, home care guidance, and OPD recommendation.

Guidelines:
1. Always maintain a professional, calm, caring tone.
2. If the user mentions RED FLAG EMERGENCY symptoms (severe chest pain, sudden paralysis/numbness, extreme shortness of breath, severe head trauma, massive bleeding, loss of consciousness):
   - Immediately start with a clear RED ALERT notice.
   - Advise dialing Agra Helpline Emergency immediately at +91 90124 29042 or calling local emergency services (102/108).
3. For non-emergency queries:
   - Provide clear, bulleted health explanation.
   - Suggest relevant home care or first aid steps where applicable.
   - Recommend booking an OPD or Telemedicine consultation with Dr. Mohit Gupta / Agra Helpline 24×7.
4. Keep answers concise, highly readable, and structured. Include a brief standard medical disclaimer at the end.`;

      // Attempt generation with primary model alias gemini-2.5-flash
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      replyText = response.text || '';
    } catch (err: any) {
      console.warn('[Agra Helpline AI] Gemini API call returned error, switching to clinical triage fallback:', err?.message || err);
      
      // Fallback Medical Triage Generator if Gemini API returns 403 / PERMISSION_DENIED or fails
      if (isUrgent) {
        replyText = `🚨 RED ALERT: IMMEDIATE EMERGENCY MEDICAL GUIDANCE

If you or someone nearby is experiencing severe symptoms such as chest pain, sudden breathlessness, severe bleeding, or loss of consciousness:

1. CALL AGRA HELPLINE EMERGENCY IMMEDIATELY: +91 90124 29042
2. Keep the patient in a comfortable, seated or resting position with maximum ventilation.
3. Do not offer heavy food or drinks until evaluated by a qualified doctor.
4. Our ICU ambulance dispatch unit is ready 24×7 across Agra.

Disclaimer: This is an emergency automated alert. Please contact emergency services (+91 90124 29042 or 108) immediately.`;
      } else if (lowerPrompt.includes('fever') || lowerPrompt.includes('cough') || lowerPrompt.includes('cold') || lowerPrompt.includes('chills')) {
        replyText = `Namaste! Based on your symptoms regarding fever and cold:

• Home Care Protocol:
  1. Maintain adequate hydration with warm water and fresh ORS or fluids.
  2. Take adequate bed rest in a well-ventilated room.
  3. Monitor body temperature periodically using a digital thermometer.

• Recommendation:
  It is advised to schedule an OPD consultation with Dr. Mohit Gupta at Agra Helpline 24×7 to get an official prescription and routine blood work (CBC/CRP) if fever persists beyond 48 hours.

• Helpline Support:
  Call +91 90124 29042 for instant OPD token booking.

Disclaimer: For informational purposes only. Consult Dr. Mohit Gupta for medical diagnosis.`;
      } else if (lowerPrompt.includes('pressure') || lowerPrompt.includes('bp') || lowerPrompt.includes('hypertension') || lowerPrompt.includes('dizzy')) {
        replyText = `Namaste! Regarding blood pressure and dizziness concerns:

• General Health Guidance:
  1. Sit down immediately if feeling lightheaded or dizzy.
  2. Avoid high sodium intake, excessive caffeine, and sudden physical strain.
  3. Record BP readings at resting state twice daily for doctor review.

• Clinical Next Steps:
  Dr. Mohit Gupta specializes in cardiovascular health triage and preventive care. We recommend booking a Telemedicine or OPD slot with Agra Helpline 24×7.

• Contact:
  Book directly on this platform or call +91 90124 29042.

Disclaimer: General health advice only. Seek immediate care if accompanied by severe chest tightness.`;
      } else if (lowerPrompt.includes('burn') || lowerPrompt.includes('wound') || lowerPrompt.includes('cut') || lowerPrompt.includes('first aid')) {
        replyText = `Namaste! Here are essential First-Aid guidelines:

• Immediate First Aid:
  1. Hold affected area under cool running tap water for 10-15 minutes (Do NOT use ice or apply butter/toothpaste).
  2. Cover lightly with a sterile, clean gauze dressing.
  3. Do not pop any blisters that may form.

• Doctor Care:
  If the wound is deep, bleeding heavily, or covers a large area, visit Agra Helpline Emergency OPD immediately or call +91 90124 29042.

Disclaimer: First-aid guidance only. Consult a doctor for proper wound dressing and tetanus evaluation.`;
      } else {
        replyText = `Namaste! Thank you for consulting Agra Helpline 24×7 AI Health Advisor.

• Clinical Guidance for "${prompt}":
  1. Stay well hydrated and maintain a balanced diet with proper rest.
  2. Monitor any worsening or persistent symptoms carefully.
  3. For personalized diagnosis and treatment plans, consult Dr. Mohit Gupta, Lead Practitioner at Agra Helpline Care Centre.

• OPD & Telehealth Booking:
  You can book an in-clinic OPD appointment or video consultation directly using the "Book Appointment" button above or call our 24×7 Helpline at +91 90124 29042.

Disclaimer: This automated health advisor provides general information and does not replace formal clinical diagnosis by a registered physician.`;
      }
    }

    res.json({
      reply: replyText,
      isUrgent,
    });
  });

  // Vite middleware in dev or static files in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Agra Helpline 24×7] Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
