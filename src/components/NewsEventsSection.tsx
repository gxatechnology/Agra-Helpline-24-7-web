import React, { useState, useEffect } from 'react';
import { 
  Newspaper, Calendar, MapPin, ArrowRight, ArrowLeft, ExternalLink, 
  Users, Award, ShieldCheck, ChevronRight, CheckCircle2, 
  X, ChevronLeft, Image as ImageIcon, Share2, Info
} from 'lucide-react';

interface NewsEventsSectionProps {
  viewArticleSlug?: string | null;
  onSelectArticle: (slug: string) => void;
  onBackToListing: () => void;
  setActiveTab: (tab: string) => void;
  onOpenAppointmentModal: () => void;
}

interface EventPhoto {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

export const NewsEventsSection: React.FC<NewsEventsSectionProps> = ({
  viewArticleSlug,
  onSelectArticle,
  onBackToListing,
  setActiveTab,
  onOpenAppointmentModal,
}) => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const eventPhotos: EventPhoto[] = [
    {
      src: '/assets/events/rotary-15th/38_rotary_inaugural_lamp_lighting.webp',
      alt: 'Traditional ceremonial lamp lighting at the 15th installation ceremony of Rotary Club of Agra Greater',
      title: 'Ceremonial Lamp Lighting',
      caption: 'Inaugural traditional lamp-lighting ceremony formally opening the 15th anniversary and installation proceedings.',
    },
    {
      src: '/assets/events/rotary-15th/20_rotary_women_members_welcome.webp',
      alt: 'Welcome and felicitation of dignitaries and members at Rotary Club of Agra Greater',
      title: 'Member Welcome & Fellowship',
      caption: 'Formal welcoming of guests, women members, and community representatives during the installation assembly.',
    },
    {
      src: '/assets/events/rotary-15th/26_rotary_medal_presentation.webp',
      alt: 'Presentation of medals and honors recognizing community service contributions',
      title: 'Medal & Honor Presentation',
      caption: 'Recognition ceremony conferring honors on members in acknowledgment of dedicated civic and social welfare service.',
    },
    {
      src: '/assets/events/rotary-15th/22_rotary_member_address.webp',
      alt: 'Podium address by guest and community speaker at Rotary Club of Agra Greater ceremony',
      title: 'Keynote & Event Address',
      caption: 'Distinguished address emphasizing community service, healthcare accessibility, and collective social responsibility.',
    },
    {
      src: '/assets/events/rotary-15th/29_rotary_certificate_presentation.webp',
      alt: 'Certificate presentation acknowledging contributions at Rotary Club of Agra Greater event',
      title: 'Recognition of Service',
      caption: 'Presentation of official certificates of appreciation honoring eight members for exemplary social contributions.',
    },
    {
      src: '/assets/events/rotary-15th/35_rotary_event_audience.webp',
      alt: 'Audience of members and distinguished guests attending the 15th installation ceremony in Agra',
      title: 'Gathering of Community Leaders',
      caption: 'Rotarians, healthcare professionals, and invited civic leaders attending the anniversary celebration in Agra.',
    },
  ];

  // Dynamic Document Title and Meta Management for SEO
  useEffect(() => {
    const originalTitle = document.title;
    if (viewArticleSlug === 'rotary-club-agra-greater-15th-installation-2026') {
      document.title = 'Rotary Club of Agra Greater 15th Installation Ceremony | Agra Helpline 24×7';
    } else {
      document.title = 'News & Community Events | Agra Helpline 24×7';
    }
    return () => {
      document.title = originalTitle;
    };
  }, [viewArticleSlug]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev !== null && prev < eventPhotos.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : eventPhotos.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, eventPhotos.length]);

  const handleShareClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const isArticleView = viewArticleSlug === 'rotary-club-agra-greater-15th-installation-2026';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-left space-y-8 min-h-screen">
      
      {/* Structured JSON-LD Schema for Article View */}
      {isArticleView && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NewsArticle',
              'headline': 'Rotary Club of Agra Greater Celebrates Its 15th Installation Ceremony',
              'image': [
                'https://agra-helpline-24-7-web.vercel.app/assets/events/rotary-15th/16_rotary_15th_anniversary_group.webp'
              ],
              'datePublished': '2026-10-23T18:00:00+05:30',
              'dateModified': '2026-10-28T12:00:00+05:30',
              'author': {
                '@type': 'Organization',
                'name': 'Agra Helpline 24×7 Editorial Desk'
              },
              'publisher': {
                '@type': 'Organization',
                'name': 'Agra Helpline 24×7',
                'logo': {
                  '@type': 'ImageObject',
                  'url': 'https://agra-helpline-24-7-web.vercel.app/android-chrome-512x512.png'
                }
              },
              'description': 'Highlights from the 15th installation ceremony of Rotary Club of Agra Greater, featuring community recognition, leadership fellowship, and participation by Dr. Mohit Gupta.'
            })
          }}
        />
      )}

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
        <button
          onClick={() => setActiveTab('home')}
          className="hover:text-teal-700 transition-colors cursor-pointer"
        >
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        {isArticleView ? (
          <>
            <button
              onClick={onBackToListing}
              className="hover:text-teal-700 transition-colors cursor-pointer"
            >
              News &amp; Events
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 truncate max-w-xs sm:max-w-md">
              Rotary Club 15th Installation
            </span>
          </>
        ) : (
          <span className="text-slate-900">News &amp; Events</span>
        )}
      </nav>

      {/* VIEW A: LISTING PAGE */}
      {!isArticleView && (
        <div className="space-y-10">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-4 border border-slate-800">
            <div className="inline-flex items-center space-x-2 bg-teal-500/20 px-3.5 py-1.5 rounded-full text-teal-300 text-xs font-bold border border-teal-500/30">
              <Newspaper className="w-4 h-4" />
              <span>Agra Helpline Community Bulletin</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              News &amp; <span className="text-teal-400">Community Events</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
              Updates on civic welfare initiatives, social responsibility partnerships, and community leadership engagements connecting Agra Helpline 24×7 with the people of Agra.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Featured Article Card */}
            <article className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="relative aspect-video bg-slate-100 overflow-hidden">
                  <img
                    src="/assets/events/rotary-15th/16_rotary_15th_anniversary_group.webp"
                    alt="Rotary Club of Agra Greater 15th Installation Ceremony commemorative group photo"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-teal-700/90 backdrop-blur-xs text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full">
                    Community News
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-2 text-[11px] text-slate-500 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-teal-600" />
                    <span>October 2026</span>
                    <span>•</span>
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>Agra, U.P.</span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                    Rotary Club of Agra Greater Celebrates Its 15th Installation Ceremony
                  </h2>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    Rotary Club of Agra Greater marked its 15th installation ceremony in Agra, gathering civic leaders and honoring eight dedicated members. Dr. Mohit Gupta participated and delivered the vote of thanks.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-lg">
                  W2L News Coverage
                </span>
                <button
                  onClick={() => onSelectArticle('rotary-club-agra-greater-15th-installation-2026')}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>

          </div>

          {/* Clinical Commitment Notice */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  Agra Helpline 24×7 Healthcare Commitment
                </h4>
                <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                  Community activities represent voluntary social engagement. Clinical OPD consultations with Dr. Mohit Gupta (₹100) and round-the-clock emergency triage remain fully operational.
                </p>
              </div>
            </div>
            <button
              onClick={onOpenAppointmentModal}
              className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors cursor-pointer shrink-0"
            >
              Book OPD (₹100)
            </button>
          </div>

        </div>
      )}

      {/* VIEW B: ARTICLE VIEW */}
      {isArticleView && (
        <article className="space-y-10">
          
          {/* Article Header & Meta */}
          <header className="space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={onBackToListing}
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-600 hover:text-teal-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-xl transition-colors cursor-pointer mr-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to News</span>
              </button>

              <span className="bg-teal-50 text-teal-800 text-xs font-bold px-3 py-1 rounded-full border border-teal-200">
                Community Engagement &amp; Social Responsibility
              </span>

              <span className="text-xs text-slate-500 font-medium flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>October 2026</span>
              </span>

              <button
                onClick={handleShareClick}
                className="ml-auto inline-flex items-center space-x-1 text-xs font-semibold text-slate-500 hover:text-slate-800 p-1.5 rounded-lg border border-slate-200 cursor-pointer"
                title="Copy Article Link"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Copied!' : 'Share'}</span>
              </button>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Rotary Club of Agra Greater Celebrates Its 15th Installation Ceremony
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 border-b border-slate-200 pb-5">
              <div className="flex items-center space-x-2">
                <span className="w-7 h-7 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center text-[10px]">
                  AH
                </span>
                <span className="font-semibold text-slate-800">Agra Helpline Community Desk</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Agra, Uttar Pradesh</span>
              </div>
              <span className="text-slate-300">•</span>
              <span className="text-teal-700 font-medium">Independent Press Reference: W2L News</span>
            </div>
          </header>

          {/* Primary Featured Image */}
          <figure className="space-y-2">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
              <img
                src="/assets/events/rotary-15th/16_rotary_15th_anniversary_group.webp"
                alt="Rotary Club of Agra Greater 15th Installation Ceremony commemorative group photo with members and guests in Agra"
                className="w-full h-auto max-h-[540px] object-cover object-center"
              />
            </div>
            <figcaption className="text-xs text-slate-500 px-2 leading-relaxed">
              <strong>Commemorative Group Photo:</strong> Members, guests, and community representatives gathered at the 15th installation ceremony of the Rotary Club of Agra Greater.
            </figcaption>
          </figure>

          {/* Editorial Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Main Editorial Text (8 Cols) */}
            <div className="lg:col-span-8 space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
              
              <div className="bg-teal-50/60 border-l-4 border-teal-600 p-4 sm:p-5 rounded-r-2xl space-y-2">
                <p className="font-semibold text-slate-900 text-sm sm:text-base">
                  The Rotary Club of Agra Greater marked its 15th installation ceremony and anniversary gathering in Agra, bringing together civic leaders, healthcare professionals, and dedicated community members for an occasion devoted to fellowship, leadership, and public service.
                </p>
              </div>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Ceremony Overview &amp; Leadership Gathering
                </h2>
                <p>
                  The landmark 15th installation ceremony served as an occasion to celebrate the organization&apos;s continued dedication to civic welfare in the Agra region. The gathering opened with ceremonial observances and featured participation from long-standing members, civic guests, and representatives of local community initiatives.
                </p>
                <p>
                  Proceedings during the ceremony highlighted fellowship, organizational continuity, and social responsibility. Attendees reviewed ongoing community welfare efforts and reaffirmed their commitment to supporting meaningful civic engagement programs across Agra.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Member Recognition &amp; Contributions
                </h2>
                <p>
                  In recognition of dedicated service to community advancement and organizational initiatives, <strong>eight members were formally recognized</strong> during the ceremony. Honors and certificates of appreciation were presented to commend their sustained contributions to civic welfare, social support projects, and club activities.
                </p>
                <p>
                  The recognition segment highlighted the importance of active volunteerism and community leadership, inspiring fellow attendees to deepen their engagement with regional social welfare endeavors.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Participation by Dr. Mohit Gupta
                </h2>
                <p>
                  <strong>Dr. Mohit Gupta</strong>, the Lead Practitioner associated with Agra Helpline 24×7, actively participated in the ceremony. As recorded in news coverage by W2L News, Dr. Gupta concluded the formal proceedings by delivering the <strong>vote of thanks</strong> on behalf of the organizing body, expressing sincere gratitude to distinguished guests, attendees, and fellow members for their dedication to community welfare.
                </p>
                <p>
                  Dr. Gupta&apos;s participation reflects his constructive engagement with local social responsibility initiatives and community organizations outside his clinical responsibilities at Agra Helpline 24×7.
                </p>
              </section>

              {/* Event Photography Section */}
              <section className="space-y-4 pt-4 border-t border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Visual Record</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Ceremony Photo Gallery
                    </h2>
                  </div>
                  <span className="text-xs text-slate-500">Click any image to expand</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {eventPhotos.map((photo, idx) => (
                    <figure
                      key={idx}
                      onClick={() => setActiveLightboxIndex(idx)}
                      className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between"
                    >
                      <div className="relative aspect-video bg-slate-100 overflow-hidden">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" />
                      </div>
                      <figcaption className="p-3 text-left space-y-1">
                        <h3 className="font-bold text-xs text-slate-900 group-hover:text-teal-700 transition-colors">
                          {photo.title}
                        </h3>
                        <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                          {photo.caption}
                        </p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              {/* Press & Media Coverage Section (Task 8) */}
              <section className="space-y-4 pt-6 border-t border-slate-200">
                <div className="flex items-center space-x-2">
                  <Newspaper className="w-5 h-5 text-teal-600" />
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    In the Press &amp; Media Coverage
                  </h2>
                </div>

                {/* Primary Source Card: W2L News */}
                <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4 border border-slate-800 shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-2.5 py-1 rounded-md border border-teal-800">
                      Independent News Reference
                    </span>
                    <span className="text-xs text-slate-400">Published: October 2026</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      W2L News / Way To Lakshya
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Coverage: <em>&ldquo;Rotary Club of Agra Greater 15th Installation Ceremony&rdquo;</em> — Reporting on the proceedings, member honors, and event milestones held in Agra.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800">
                    <p className="text-[11px] text-slate-400">
                      Regional news publication documenting the anniversary celebration.
                    </p>
                    <a
                      href="https://waytolakshya3.blogspot.com/2026/10/15_0612412448.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors shrink-0"
                    >
                      <span>Read Original News Coverage</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Media Archive Disclosure */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center space-x-1.5 font-bold text-slate-800">
                    <Info className="w-4 h-4 text-teal-600" />
                    <span>Editorial Transparency &amp; Archival Notice</span>
                  </div>
                  <p className="leading-relaxed">
                    Regional newspaper coverage (including editions of <em>Our City</em> and <em>Dainik Jagran</em>) was consulted during background research. In accordance with digital copyright best practices, third-party newspaper scans are retained in offline documentation archives pending formal publisher syndication approval.
                  </p>
                </div>

              </section>

            </div>

            {/* Right Column: Sidebar & Quick Facts (4 Cols) */}
            <aside className="lg:col-span-4 space-y-6">
              
              {/* Event Facts Card */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2 flex items-center space-x-2">
                  <Award className="w-4 h-4 text-teal-600" />
                  <span>Event Factsheet</span>
                </h3>

                <ul className="space-y-3 text-xs">
                  <li className="flex justify-between items-start gap-2">
                    <span className="text-slate-500 font-medium">Organization:</span>
                    <span className="font-semibold text-slate-900 text-right">Rotary Club of Agra Greater</span>
                  </li>
                  <li className="flex justify-between items-start gap-2">
                    <span className="text-slate-500 font-medium">Milestone:</span>
                    <span className="font-semibold text-slate-900 text-right">15th Installation Ceremony</span>
                  </li>
                  <li className="flex justify-between items-start gap-2">
                    <span className="text-slate-500 font-medium">Location:</span>
                    <span className="font-semibold text-slate-900 text-right">Agra, Uttar Pradesh</span>
                  </li>
                  <li className="flex justify-between items-start gap-2">
                    <span className="text-slate-500 font-medium">Venue Reference:</span>
                    <span className="font-semibold text-slate-900 text-right">Hotel Radisson, Agra (as reported)</span>
                  </li>
                  <li className="flex justify-between items-start gap-2">
                    <span className="text-slate-500 font-medium">Honors Conferred:</span>
                    <span className="font-semibold text-slate-900 text-right">8 Members Recognized</span>
                  </li>
                  <li className="flex justify-between items-start gap-2">
                    <span className="text-slate-500 font-medium">Doctor Participation:</span>
                    <span className="font-semibold text-teal-800 text-right">Dr. Mohit Gupta (Delivered Vote of Thanks)</span>
                  </li>
                  <li className="flex justify-between items-start gap-2">
                    <span className="text-slate-500 font-medium">Press Report Date:</span>
                    <span className="font-semibold text-slate-900 text-right">October 2026</span>
                  </li>
                </ul>
              </div>

              {/* Doctor Medical Consultation Card */}
              <div className="bg-white rounded-2xl border border-teal-200 shadow-xs p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Looking for Clinical Care?</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Consult with Dr. Mohit Gupta at Agra Helpline 24×7 in Dayalbagh, Agra, or book an online telemedicine token.
                  </p>
                </div>

                <div className="p-3 bg-teal-50 rounded-xl border border-teal-100 flex items-center justify-between text-xs">
                  <span className="text-teal-900 font-semibold">In-Clinic OPD Fee:</span>
                  <span className="text-base font-extrabold text-teal-700">₹100</span>
                </div>

                <div className="space-y-2 pt-1">
                  <button
                    onClick={onOpenAppointmentModal}
                    className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    Book Consultation (₹100)
                  </button>
                  <button
                    onClick={() => setActiveTab('doctors')}
                    className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                  >
                    View Doctor Credentials
                  </button>
                </div>
              </div>

              {/* Gallery Navigation Card */}
              <div className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-2xl p-6 space-y-3">
                <h4 className="text-sm font-bold text-teal-300">Explore Website Gallery</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Browse both our clinical facility photo gallery and community engagement archives in the enhanced website gallery.
                </p>
                <button
                  onClick={() => setActiveTab('gallery')}
                  className="w-full py-2.5 bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Visit Gallery
                </button>
              </div>

            </aside>

          </div>

        </article>
      )}

      {/* Accessible Photo Lightbox Modal */}
      {activeLightboxIndex !== null && eventPhotos[activeLightboxIndex] && (
        <div 
          className="fixed inset-0 z-[2000] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={eventPhotos[activeLightboxIndex].title}
        >
          <div 
            className="bg-slate-900 text-white rounded-3xl max-w-4xl w-full border border-slate-800 overflow-hidden shadow-2xl relative space-y-4 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                  Rotary 15th Installation Photo Record
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  {eventPhotos[activeLightboxIndex].title}
                </h3>
              </div>
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Lightbox Image */}
            <div className="relative aspect-video bg-slate-950 rounded-2xl flex items-center justify-center p-2 border border-slate-800 overflow-hidden">
              <img
                src={eventPhotos[activeLightboxIndex].src}
                alt={eventPhotos[activeLightboxIndex].alt}
                className="max-h-96 w-full object-contain rounded-xl"
              />
            </div>

            {/* Caption & Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
                {eventPhotos[activeLightboxIndex].caption}
              </p>

              <div className="flex items-center space-x-2 shrink-0 self-end sm:self-center">
                <button
                  onClick={() => setActiveLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : eventPhotos.length - 1))}
                  className="p-2.5 bg-slate-800 hover:bg-teal-600 text-white rounded-xl transition-colors cursor-pointer"
                  title="Previous Photo"
                  aria-label="Previous Photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono font-bold text-slate-400">
                  {activeLightboxIndex + 1} / {eventPhotos.length}
                </span>
                <button
                  onClick={() => setActiveLightboxIndex((prev) => (prev !== null && prev < eventPhotos.length - 1 ? prev + 1 : 0))}
                  className="p-2.5 bg-slate-800 hover:bg-teal-600 text-white rounded-xl transition-colors cursor-pointer"
                  title="Next Photo"
                  aria-label="Next Photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
