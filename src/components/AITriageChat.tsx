import React, { useState } from 'react';
import { Send, Bot, User, AlertTriangle, Phone, Sparkles, RefreshCw, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { TriageMessage } from '../types';

export const AITriageChat: React.FC = () => {
  const [messages, setMessages] = useState<TriageMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Namaste! I am your AI Health Advisor from Agra Helpline 24×7. How can I assist you with your health symptoms, first-aid questions, or doctor OPD recommendations today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [inputPrompt, setInputPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const suggestedPrompts = [
    'Symptom assessment for high fever & chills',
    'When should I consult Dr. Mohit Gupta for blood pressure?',
    'First aid advice for minor household burns',
    'What are red flag symptoms of chest pain?',
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const promptText = textToSend || inputPrompt;
    if (!promptText.trim() || loading) return;

    const userMsg: TriageMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: promptText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputPrompt('');
    setLoading(true);

    try {
      const response = await fetch('/api/health-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: promptText }),
      });

      const data = await response.json();

      const assistantMsg: TriageMessage = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || data.fallbackMessage || 'Please contact Agra Helpline 24×7 at +91 90124 29042.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUrgent: data.isUrgent,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error('AI Triage chat error:', err);
      const errorMsg: TriageMessage = {
        id: `err-${Date.now()}`,
        sender: 'assistant',
        text: 'Agra Helpline 24×7 AI Service is currently busy. For direct medical guidance, please dial +91 90124 29042.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUrgent: true,
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Title Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200 text-indigo-700 px-3.5 py-1 rounded-full text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>Powered by Gemini AI Triage Engine</span>
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900">
          AI Health Advisor & Triage Assistant
        </h2>
        <p className="text-slate-600 text-sm">
          Instant symptom assessment, first-aid protocols, and OPD care recommendations.
        </p>
      </div>

      {/* Emergency Hotline Alert Banner */}
      <div className="mb-6 bg-gradient-to-r from-rose-600 to-red-700 text-white rounded-2xl p-4 shadow-md flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-white/20 rounded-xl">
            <ShieldAlert className="w-6 h-6 text-white" />
          </div>
          <div className="text-left text-xs sm:text-sm">
            <p className="font-bold">Experiencing a severe medical emergency?</p>
            <p className="text-rose-100">Do not wait for AI response. Call Agra Helpline Ambulance Triage immediately.</p>
          </div>
        </div>
        <a
          href="tel:+919012429042"
          className="bg-white text-rose-700 hover:bg-rose-50 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm flex items-center space-x-2"
        >
          <Phone className="w-4 h-4" />
          <span>Call +91 90124 29042</span>
        </a>
      </div>

      {/* Chat Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden flex flex-col h-[580px]">
        
        {/* Chat Messages Log */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start space-x-3 ${
                msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-teal-600 text-white'
                    : 'bg-indigo-600 text-white shadow-xs'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
              </div>

              <div
                className={`max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed text-left ${
                  msg.sender === 'user'
                    ? 'bg-teal-600 text-white rounded-tr-xs'
                    : msg.isUrgent
                    ? 'bg-rose-50 border border-rose-300 text-rose-950 rounded-tl-xs shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-800 rounded-tl-xs shadow-xs'
                }`}
              >
                {msg.isUrgent && (
                  <div className="flex items-center space-x-1.5 text-rose-700 font-bold mb-2 pb-2 border-b border-rose-200">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>URGENT MEDICAL NOTICE</span>
                  </div>
                )}
                
                <p className="whitespace-pre-line">{msg.text}</p>
                <span className="block text-[10px] opacity-60 text-right mt-2">{msg.timestamp}</span>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center space-x-3 text-slate-500 text-xs font-semibold py-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-100 flex items-center justify-center animate-spin">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
              </div>
              <span>Helpline AI is analyzing symptoms...</span>
            </div>
          )}
        </div>

        {/* Suggested Quick Prompts */}
        <div className="bg-white border-t border-slate-200 px-4 py-2.5 overflow-x-auto flex space-x-2 scrollbar-none">
          {suggestedPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-xs font-medium shrink-0 transition-colors cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="bg-white p-4 border-t border-slate-200 flex items-center space-x-3"
        >
          <input
            type="text"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            placeholder="Describe your health symptoms or ask a question..."
            className="flex-1 px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-teal-500"
          />
          <button
            type="submit"
            disabled={!inputPrompt.trim() || loading}
            className="px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-sm transition-all disabled:opacity-50 cursor-pointer flex items-center space-x-2 font-semibold text-sm"
          >
            <span>Ask</span>
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>

      <p className="text-center text-xs text-slate-400 mt-4">
        Disclaimer: Helpline AI Advisor provides general health triage information and does not replace official clinical diagnosis.
      </p>

    </div>
  );
};
