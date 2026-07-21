import { BUSINESS_INFO, SERVICES } from '../data';
import { ActiveTab } from '../types';
import { Phone, MessageSquare, MapPin, Heart, ChevronRight, Mail, ShieldAlert, Code } from 'lucide-react';
import { useState } from 'react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const [showSchema, setShowSchema] = useState(false);

  const handleLinkClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  // Printable local schema for inspector
  const localBusinessSchemaJson = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "name": BUSINESS_INFO.name,
    "telephone": BUSINESS_INFO.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pai Bigha",
      "addressLocality": "Jehanabad",
      "addressRegion": "Bihar",
      "postalCode": "804424",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Sa 08:00-21:30, Su 09:00-16:00"
  };

  return (
    <footer className="bg-slate-950 text-neutral-400 pt-20 pb-8 border-t border-slate-900" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* 1. BUSINESS INFORMATION (Col 1-4) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-display font-black text-sm">
              AM
            </div>
            <div>
              <span className="block font-display text-base font-extrabold text-white tracking-tight leading-none">
                AGRAWAL
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-blue-400 font-bold uppercase">
                Medical Hall
              </span>
            </div>
          </div>

          <p className="text-xs text-neutral-400 font-sans leading-relaxed max-w-sm">
            {BUSINESS_INFO.tagline}. Sourced directly from authorized manufacturers to serve our Pai Bigha families with trust, integrity, and extreme temperature quality assurance since 1998.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="h-4 w-4 text-blue-500 shrink-0" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Phone className="h-4 w-4 text-blue-500 shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">
                {BUSINESS_INFO.formattedPhone}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Mail className="h-4 w-4 text-blue-500 shrink-0" />
              <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* 2. QUICK LINKS (Col 5-7) */}
        <div className="lg:col-span-2 space-y-5">
          <h4 className="font-display font-bold text-sm text-neutral-100 uppercase tracking-widest">
            Quick Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            {['home', 'about', 'services', 'gallery', 'testimonials', 'faq', 'contact'].map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => handleLinkClick(tab as ActiveTab)}
                  className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-blue-500" />
                  <span className="capitalize">{tab === 'testimonials' ? 'Reviews' : tab === 'faq' ? 'FAQ' : tab}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. CORE SERVICES (Col 8-10) */}
        <div className="lg:col-span-3 space-y-5">
          <h4 className="font-display font-bold text-sm text-neutral-100 uppercase tracking-widest">
            Pharmacy Offerings
          </h4>
          <ul className="space-y-2 text-xs">
            {SERVICES.slice(0, 5).map((serv) => (
              <li key={serv.id} className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5 text-emerald-500" />
                <span>{serv.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. OPERATIONAL HOURS & TRUST BADGES (Col 11-12) */}
        <div className="lg:col-span-3 space-y-5">
          <h4 className="font-display font-bold text-sm text-neutral-100 uppercase tracking-widest">
            Operating Schedule
          </h4>
          <div className="space-y-3 text-xs">
            {BUSINESS_INFO.workingHours.map((sch, i) => (
              <div key={i} className="border-b border-neutral-900 pb-2 last:border-0 last:pb-0">
                <span className="block text-neutral-500 font-semibold">{sch.days}</span>
                <span className="block text-neutral-300 font-bold font-mono">{sch.hours}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => setShowSchema(!showSchema)}
              className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-500 hover:text-blue-400 cursor-pointer"
              id="footer-schema-inspector-btn"
            >
              <Code className="h-3.5 w-3.5" />
              <span>Inspect Local SEO Schema</span>
            </button>
          </div>
        </div>

      </div>

      {/* SCHEMA DRAWER EXPANSION */}
      {showSchema && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10" id="schema-inspector-panel">
          <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-850 text-neutral-400 space-y-2">
            <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">JSON-LD Pharmacy Schema Active</span>
            <pre className="text-[10px] font-mono leading-relaxed overflow-x-auto bg-black p-3 rounded-lg text-emerald-400">
              {JSON.stringify(localBusinessSchemaJson, null, 2)}
            </pre>
            <p className="text-[9px] text-neutral-500 font-sans">
              * This metadata is dynamically compiled and injected into the document header on page loads to guarantee optimal crawlers parsing.
            </p>
          </div>
        </div>
      )}

      {/* LOWER FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-900 text-center space-y-4">
        
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-neutral-500">
          <span className="cursor-pointer hover:text-white">Privacy Policy</span>
          <span className="cursor-pointer hover:text-white">Terms & Conditions</span>
          <span className="cursor-pointer hover:text-white">Pharmacy Disclaimer</span>
        </div>

        <p className="text-[10px] text-neutral-500 leading-relaxed font-sans max-w-2xl mx-auto">
          Disclaimer: AGRAWAL MEDICAL HALL, Pai Bigha, Bihar provides verified FDA-approved generic and brand formulations. The information displayed on this website is for search discovery purposes and does not constitute absolute self-prescription guidelines. Always seek advice from your professional physician for physical medical administration.
        </p>

        <p className="text-xs text-neutral-600 dark:text-neutral-500 flex flex-wrap items-center justify-center gap-1.5">
          <span>&copy; {currentYear} {BUSINESS_INFO.legalName}. All Rights Reserved.</span>
          <span className="text-neutral-300 dark:text-neutral-800">|</span>
          <span>Developed by <a href="https://main.webmakerit.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 font-bold hover:underline transition-colors">WMIT</a>.</span>
          <span className="text-neutral-300 dark:text-neutral-800">|</span>
          <span className="text-red-500"><Heart className="h-3.5 w-3.5 fill-red-500" /></span>
          <span>Crafted for Pai Bigha, Bihar.</span>
        </p>
      </div>
    </footer>
  );
}
