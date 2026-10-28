import React from 'react';
import { Newspaper, ArrowRight, Calendar, Users, Award } from 'lucide-react';

interface CommunityHighlightsSectionProps {
  setActiveTab: (tab: string) => void;
}

export const CommunityHighlightsSection: React.FC<CommunityHighlightsSectionProps> = ({ setActiveTab }) => {
  return (
    <section className="bg-slate-50 border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>Social Responsibility & Engagement</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Community Highlights
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
              Civic participation, social responsibility, and outreach initiatives connecting Agra Helpline with community organizations in Agra.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('news-events')}
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 transition-colors cursor-pointer shrink-0"
          >
            <span>All News & Events</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Featured Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch">
            
            {/* Image Column */}
            <div className="md:col-span-5 relative aspect-video md:aspect-auto overflow-hidden bg-slate-100 min-h-[220px]">
              <img
                src="/assets/events/rotary-15th/16_rotary_15th_anniversary_group.webp"
                alt="Rotary Club of Agra Greater 15th Installation Ceremony commemorative group photo"
                loading="lazy"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-teal-300 text-[11px] font-bold px-2.5 py-1 rounded-full">
                Featured Story
              </span>
            </div>

            {/* Content Column */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200">
                    Community Engagement &amp; Social Responsibility
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500 font-medium flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    October 2026 Event
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-teal-700 transition-colors">
                  Rotary Club of Agra Greater — 15th Installation Ceremony
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Rotary Club of Agra Greater celebrated its 15th installation ceremony in Agra, recognizing member contributions and civic dedication. Dr. Mohit Gupta, Lead Practitioner associated with Agra Helpline 24×7, participated and delivered the vote of thanks.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-slate-100">
                <button
                  onClick={() => setActiveTab('rotary-15th-article')}
                  className="inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setActiveTab('gallery')}
                  className="inline-flex items-center space-x-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  <Users className="w-4 h-4 text-slate-500" />
                  <span>View Event Gallery</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
