import React, { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Search, 
  CheckCircle, 
  Clock, 
  ArrowRight, 
  Star, 
  ChevronDown, 
  Plus, 
  Minus, 
  AlertCircle,
  HelpCircle,
  Activity,
  Heart,
  Pill,
  Award,
  Zap,
  ShieldCheck,
  Users,
  BadgePercent,
  Sparkles,
  Layers,
  Droplet,
  Syringe,
  Dumbbell,
  HeartPulse,
  Flower,
  Baby,
  Accessibility,
  FlaskConical,
  Scissors,
  Thermometer,
  FileSpreadsheet
} from 'lucide-react';
import { 
  BUSINESS_INFO, 
  WHY_CHOOSE_US, 
  SERVICES, 
  CATEGORIES, 
  TRUST_FACTORS, 
  WORKING_PROCESS, 
  TESTIMONIALS, 
  FAQS, 
  MEDICINE_CATALOG 
} from '../data';
import { ActiveTab } from '../types';

interface HomeProps {
  setActiveTab: (tab: ActiveTab) => void;
  openOrderForm: () => void;
  openOrderFormWithMedicine?: (medName: string) => void;
}

// Icon mapper helper
const IconMap: { [key: string]: any } = {
  ShieldCheck, Users, BadgePercent, Zap, FileText: Activity, Activity, Sparkles, MessageSquareText: MessageSquare,
  Clock, Award, Smile: Users, MapPin, 
  Pill, Layers, Droplet, Syringe, Dumbbell, HeartPulse, Flower, Baby, Accessibility, FlaskConical, Scissors, Thermometer, FileSpreadsheet
};

export default function Home({ setActiveTab, openOrderForm, openOrderFormWithMedicine }: HomeProps) {
  // Collapsible FAQ state
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof MEDICINE_CATALOG>([]);
  const [hasSearched, setHasSearched] = useState(false);

  // Quick Inquiry Form State
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }
    const filtered = MEDICINE_CATALOG.filter(med => 
      med.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      med.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
    setHasSearched(true);
  };

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) return;

    // Send WhatsApp query directly
    const text = `*Hello AGRAWAL MEDICAL HALL*\n\nI have a general health inquiry:\n\n*Name:* ${inquiryName}\n*Phone:* ${inquiryPhone}\n*Query:* ${inquiryMsg}\n\n_Sent via web inquiry form_`;
    const waUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    
    setInquirySuccess(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setInquirySuccess(false);
      setInquiryName('');
      setInquiryPhone('');
      setInquiryMsg('');
    }, 1000);
  };

  const handleQuickOrder = (medName: string) => {
    if (openOrderFormWithMedicine) {
      openOrderFormWithMedicine(medName);
    } else {
      openOrderForm();
    }
  };

  return (
    <div className="space-y-24 pb-12" id="home-view">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-neutral-900" id="hero-section">
        {/* Visual Background with generated image asset & gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/pharmacy_hero_banner_1783497011824.jpg"
            alt="Agrawal Medical Hall Pharmacy Banner"
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-950/40 via-transparent to-emerald-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest font-mono"
            id="hero-badge"
          >
            <CheckCircle className="h-4 w-4 text-emerald-400" />
            <span>Serving Pai Bigha, Bihar Since 1998</span>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-tight"
              id="hero-headline"
            >
              AGRAWAL MEDICAL HALL
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-sm tracking-widest font-bold text-emerald-400 uppercase"
            >
              YOUR TRUSTED PHARMACY IN PAIBIGHA
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 leading-relaxed font-sans"
            id="hero-description"
          >
            Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care, and daily medical essentials at affordable prices. Direct home delivery or quick counter pick-up is available.
          </motion.p>

          {/* Action Call buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
            id="hero-actions"
          >
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-blue-900 font-display font-bold shadow-lg shadow-blue-900/10 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              id="hero-call-btn"
            >
              <Phone className="h-5 w-5 text-blue-600" />
              <span>CALL NOW</span>
            </a>

            <button
              onClick={openOrderForm}
              className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-display font-bold shadow-lg border border-emerald-400/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              id="hero-whatsapp-btn"
            >
              <MessageSquare className="h-5 w-5" />
              <span>ORDER ON WHATSAPP</span>
            </button>

            <a
              href={BUSINESS_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-blue-900/40 hover:bg-blue-900/60 text-blue-100 border border-white/10 font-display font-bold transition-all transform hover:-translate-y-0.5 cursor-pointer"
              id="hero-directions-btn"
            >
              <MapPin className="h-5 w-5 text-blue-400" />
              <span>GET DIRECTIONS</span>
            </a>
          </motion.div>
        </div>

        {/* Diagonal Wave border */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white dark:bg-neutral-950 transition-colors duration-300" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* 2. MEDICINE SEARCH MODULE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20" id="search-section">
        <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-10 shadow-xl border border-neutral-100 dark:border-neutral-850">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
              🔍 Quick Medicine Stock Finder
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Browse our standard stock list of essential medications and wellness products. Type a medicine name or group below to check availability instantly.
            </p>

            <form onSubmit={handleSearch} className="relative flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type paracetamol, vitamin, syrup, Amoxycillin..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-850 text-sm focus:border-blue-600 focus:outline-none dark:text-white"
                  id="stock-search-input"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer transition-all"
                id="stock-search-submit"
              >
                Search Stock
              </button>
            </form>

            {/* Dynamic Results */}
            {hasSearched && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-left mt-6 border-t border-neutral-100 dark:border-neutral-800 pt-6 space-y-3"
                id="search-results-panel"
              >
                <div className="flex items-center justify-between text-xs font-bold text-neutral-500 tracking-wider uppercase">
                  <span>Results for &quot;{searchQuery}&quot;</span>
                  <span>{searchResults.length} items found</span>
                </div>

                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto pr-1">
                    {searchResults.map(med => (
                      <div 
                        key={med.id}
                        className="p-4 rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex flex-col justify-between gap-3 hover:border-teal-500/35 transition-all"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-display font-bold text-sm text-neutral-900 dark:text-white leading-tight">{med.name}</span>
                            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                              med.availability === 'In Stock' 
                                ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400' 
                                : med.availability === 'Available on Demand'
                                ? 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400'
                                : 'bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400'
                            }`}>
                              {med.availability}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-1">{med.description}</p>
                          <span className="inline-block text-[10px] bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 font-semibold px-2 py-0.5 rounded-md mt-2">
                            {med.category}
                          </span>
                        </div>
                        <button
                          onClick={() => handleQuickOrder(med.name)}
                          className="w-full text-center py-2 rounded-xl bg-teal-50 hover:bg-teal-100 dark:bg-teal-950/30 dark:hover:bg-teal-900 text-teal-600 dark:text-teal-400 text-xs font-bold transition-all cursor-pointer"
                        >
                          Order this Medicine
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-6 text-center text-neutral-400 space-y-1">
                    <AlertCircle className="h-8 w-8 text-neutral-300" />
                    <span className="text-xs font-bold">Medicine not listed in typical catalog?</span>
                    <p className="text-[11px] max-w-sm">We carry over 5,000+ brands! Click the WhatsApp button to ask us directly, we can arrange it within a few hours.</p>
                    <button
                      type="button"
                      onClick={() => handleQuickOrder(searchQuery)}
                      className="mt-2 text-xs text-teal-600 dark:text-teal-400 font-bold hover:underline"
                    >
                      Ask on WhatsApp for &quot;{searchQuery}&quot;
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="why-choose-us-section">
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white uppercase tracking-tight">
              Why Choose Agrawal Medical Hall?
            </h2>
            <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full" />
            <p className="text-neutral-500 dark:text-neutral-400 text-base">
              Serving Pai Bigha since 1998, we provide premium pharmaceutical standards, guaranteed genuine supplies, and a highly customer-first local service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, index) => {
              const IconComp = IconMap[item.icon] || ShieldCheck;
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-3xl border border-slate-100 dark:border-neutral-850 bg-white dark:bg-neutral-900 hover:shadow-xl hover:border-blue-500/25 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-base text-neutral-900 dark:text-white mb-2 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-neutral-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES */}
      <section className="bg-slate-100/50 dark:bg-neutral-900/40 py-20 border-y border-slate-200/60 dark:border-neutral-850" id="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">Dedicated Healthcare Care</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white uppercase tracking-tight">
                Our Primary Medical Services
              </h2>
              <div className="h-1 w-16 bg-blue-600 rounded-full" />
            </div>
            <button
              onClick={() => setActiveTab('services')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 dark:text-blue-400 hover:gap-2 transition-all cursor-pointer"
            >
              <span>View All Services</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => {
              const IconComp = IconMap[service.iconName] || Pill;
              return (
                <div
                  key={service.id}
                  className="rounded-3xl bg-white dark:bg-neutral-900 p-6 sm:p-8 border border-slate-100 dark:border-neutral-850 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-extrabold text-lg text-neutral-900 dark:text-white tracking-tight">{service.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-neutral-400 leading-relaxed font-sans">{service.description}</p>
                    
                    <ul className="space-y-2 pt-2">
                      {service.features.map((feat, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-350">
                          <CheckCircle className="h-3.5 w-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleQuickOrder(service.title)}
                    className="mt-6 w-full text-center py-2.5 rounded-xl border border-slate-200 dark:border-neutral-800 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-xs font-bold transition-all cursor-pointer"
                  >
                    Inquire/Order
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FEATURED CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="categories-section">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white uppercase tracking-tight">
            Browse Featured Categories
          </h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full" />
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
            We stock an extensive range of pharmacy inventory. Click on any category below to initiate a custom order.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => {
            const IconComp = IconMap[category.iconName] || Pill;
            return (
              <div
                key={category.id}
                className="group rounded-3xl bg-white dark:bg-neutral-900 p-6 border border-slate-100 dark:border-neutral-855 hover:shadow-lg transition-all flex flex-col justify-between hover:border-blue-500/25"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                      <IconComp className="h-4 w-4" />
                    </div>
                    <h3 className="font-display font-extrabold text-sm text-neutral-900 dark:text-white leading-tight">{category.name}</h3>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-neutral-400 font-sans leading-relaxed">{category.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {category.items.map((item, index) => (
                      <span 
                        key={index}
                        className="text-[10px] bg-slate-50 dark:bg-neutral-950 border border-slate-100 dark:border-neutral-800 text-slate-600 dark:text-neutral-400 px-2.5 py-0.5 rounded-full font-mono font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleQuickOrder(category.name)}
                  className="mt-5 text-left text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 group-hover:gap-1.5 transition-all cursor-pointer"
                >
                  <span>Request items</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. WHY CUSTOMERS TRUST US */}
      <section className="bg-gradient-to-r from-teal-950 via-neutral-900 to-emerald-950 py-20 text-white rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="trust-section">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10 max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold uppercase text-emerald-400 tracking-widest">A Legacy of Care</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
              Why Customers Trust Us
            </h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRUST_FACTORS.map((fact, index) => {
              const IconComp = IconMap[fact.icon] || Clock;
              return (
                <div key={index} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-sm text-neutral-100">{fact.title}</h3>
                    <p className="text-xs text-neutral-300 leading-relaxed font-sans">{fact.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. WORKING PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="process-section">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white uppercase tracking-tight">
            Our Simple Ordering Process
          </h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full" />
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
            Whether ordering online or shopping in-store, we make medical supplies streamlined and convenient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector line for large screens */}
          <div className="hidden md:block absolute top-12 left-12 right-12 h-0.5 bg-neutral-100 dark:bg-neutral-800 z-0" />
          
          {WORKING_PROCESS.map((proc, index) => (
            <div key={index} className="relative z-10 bg-white dark:bg-neutral-950 p-6 rounded-2xl border border-slate-100 dark:border-neutral-855 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-display font-black text-sm flex items-center justify-center mx-auto shadow-md">
                {proc.step}
              </div>
              <h3 className="font-display font-extrabold text-sm text-neutral-900 dark:text-white tracking-tight">{proc.title}</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">{proc.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="bg-slate-100/50 dark:bg-neutral-900/40 py-20 border-y border-slate-200/60 dark:border-neutral-855" id="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white uppercase tracking-tight">
              Customer Testimonials
            </h2>
            <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full" />
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">
              Read authentic feedback from local residents, healthcare practitioners, and patients of Pai Bigha, Bihar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="rounded-3xl bg-white dark:bg-neutral-900 p-6 sm:p-8 border border-slate-100 dark:border-neutral-855 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 italic font-sans leading-relaxed">
                    &quot;{testimonial.review}&quot;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-50 dark:border-neutral-850 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-xs text-neutral-900 dark:text-white leading-none">{testimonial.name}</h4>
                    <span className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono">{testimonial.location}</span>
                  </div>
                  <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12" id="faq-section">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full" />
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
            Quick responses to basic doubts about prescription ordering, biological storage guidelines, and payments.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFAQIndex === index;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-100 dark:border-neutral-855 bg-white dark:bg-neutral-900 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFAQIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-4.5 text-left font-display font-extrabold text-sm sm:text-base text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  id={`faq-btn-${index}`}
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-blue-500 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-neutral-400 transition-transform ${isOpen ? 'rotate-180 text-blue-500' : ''}`} />
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="border-t border-neutral-50 dark:border-neutral-850 bg-neutral-50/50 dark:bg-neutral-950/20 px-6 py-4 text-xs sm:text-sm text-neutral-500 dark:text-neutral-450 leading-relaxed font-sans"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. GOOGLE MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" id="map-section">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white uppercase tracking-tight">
            Our Location in Pai Bigha
          </h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full" />
          <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm">
            Visit us in Pai Bigha, Bihar for face-to-face health consultations and express counter collections. Click directions below to find us easily.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg border border-neutral-100 dark:border-neutral-800 h-96 relative">
          <iframe
            src={BUSINESS_INFO.googleMapsIframeUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Agrawal Medical Hall Google Map Location"
          />
        </div>
      </section>

      {/* 11. QUICK INQUIRY FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6" id="inquiry-section">
        <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-10 border border-slate-100 dark:border-neutral-855 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">Quick Inquiry Support</h3>
            <p className="text-xs text-slate-500">Ask us any health dosage queries, stock checks, or alternative medicine rates. We respond immediately.</p>
          </div>

          <form onSubmit={handleInquirySubmit} className="space-y-4">
            {inquirySuccess && (
              <div className="p-3 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-xl text-center">
                Redirecting to WhatsApp with your query...
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Full Name *"
                value={inquiryName}
                onChange={(e) => setInquiryName(e.target.value)}
                className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-855 px-4 py-2.5 text-xs focus:border-blue-600 focus:outline-none dark:text-white"
                required
              />
              <input
                type="tel"
                placeholder="Mobile Number *"
                value={inquiryPhone}
                onChange={(e) => setInquiryPhone(e.target.value)}
                className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-855 px-4 py-2.5 text-xs focus:border-blue-600 focus:outline-none dark:text-white"
                required
              />
            </div>
            <textarea
              placeholder="What are you looking for? Write your medicine list, dosage inquiries, or surgical needs here..."
              rows={3}
              value={inquiryMsg}
              onChange={(e) => setInquiryMsg(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-855 px-4 py-2.5 text-xs focus:border-blue-600 focus:outline-none dark:text-white"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer transition-all"
            >
              Send Live Inquiry on WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* 12. CONTACT CTA */}
      <section className="bg-blue-900 text-white rounded-3xl max-w-7xl mx-auto px-6 py-12 text-center space-y-6 shadow-xl" id="contact-cta">
        <div className="max-w-2xl mx-auto space-y-2">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">Need Medicines Immediately?</h2>
          <p className="text-xs sm:text-sm text-blue-100">
            Call our store pharmacist directly or drop a snapshot of your prescription list. We will instantly coordinate pack-and-delivery options for you.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-900 font-display font-extrabold text-xs sm:text-sm shadow-md hover:bg-neutral-50 transition-all"
            id="cta-call-btn"
          >
            <Phone className="h-4 w-4" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>

          <button
            onClick={openOrderForm}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white border border-emerald-500 hover:bg-emerald-700 font-display font-extrabold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            id="cta-whatsapp-btn"
          >
            <MessageSquare className="h-4 w-4 text-white" />
            <span>Order on WhatsApp</span>
          </button>
        </div>
      </section>

    </div>
  );
}
