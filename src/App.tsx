import { useState, useEffect } from 'react';
import { ActiveTab } from './types';
import { BUSINESS_INFO } from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import WhatsAppOrderForm from './components/WhatsAppOrderForm';
import SEOHead from './components/SEOHead';
import { Phone, MessageSquare, ChevronUp, AlertTriangle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Load and apply Dark/Light theme preferences
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global page tracking for React SPA (WMIT Tracker)
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid'));
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      if (activeTab) {
        return activeTab.charAt(0).toUpperCase() + activeTab.slice(1);
      }
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, visitor_id: visitorId, session_id: sessionId,
        page_name: getPageName(), referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }).catch(err => {});
    };

    const sendExitPayload = () => {
      const payload = { cid: cid, session_id: sessionId, page_name: getPageName(), action: 'page_change' };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), keepalive: true }).catch(err => {});
      }
    };

    sendInitPayload();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { sendExitPayload(); }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      sendExitPayload();
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', sendExitPayload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [activeTab]);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenOrderFormWithMedicine = (medName: string) => {
    setPrefilledMedicine(medName);
    setIsOrderFormOpen(true);
  };

  const handleOpenGeneralOrderForm = () => {
    setPrefilledMedicine('');
    setIsOrderFormOpen(true);
  };

  // Dynamically render active tab view
  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <Home 
            setActiveTab={setActiveTab} 
            openOrderForm={handleOpenGeneralOrderForm} 
            openOrderFormWithMedicine={handleOpenOrderFormWithMedicine}
          />
        );
      case 'about':
        return <About />;
      case 'services':
        return <Services openOrderFormWithMedicine={handleOpenOrderFormWithMedicine} />;
      case 'gallery':
        return <Gallery />;
      case 'testimonials':
      case 'faq':
        // Smooth scroll to respective sections on home tab if requested
        return (
          <Home 
            setActiveTab={setActiveTab} 
            openOrderForm={handleOpenGeneralOrderForm} 
            openOrderFormWithMedicine={handleOpenOrderFormWithMedicine}
          />
        );
      case 'contact':
        return <Contact />;
      default:
        return (
          <Home 
            setActiveTab={setActiveTab} 
            openOrderForm={handleOpenGeneralOrderForm} 
            openOrderFormWithMedicine={handleOpenOrderFormWithMedicine}
          />
        );
    }
  };

  // Dynamic SEO description tags based on active tabs
  const getSEOTags = () => {
    switch (activeTab) {
      case 'about':
        return {
          title: 'About Us | Certified Local Pharmacy',
          description: 'Learn about the legacy of Agrawal Medical Hall in Pai Bigha, Bihar. Supplying genuine medicine, surgical goods, vaccines, and family health essentials since 1998.',
          keywords: 'about pharmacy Pai Bigha, medical story Bihar, Mr Agrawal chemist, reliable local drug store Jehanabad'
        };
      case 'services':
        return {
          title: 'Our Services | Prescription & Medical Devices',
          description: 'Explore the pharmaceutical dispensing, diabetic support, pediatric care, diagnostic accessories, and first aid supplies catalog at Agrawal Medical Hall.',
          keywords: 'prescription drugs Bihar, home BP monitor Pai Bigha, surgical equipment shop, diabetic care strips'
        };
      case 'gallery':
        return {
          title: 'Store Gallery | Pharmacy Visual Tour',
          description: 'Check clean and sterile medicine shelves, store layout, cold chain immunization refrigerators, and diagnostic devices in Pai Bigha.',
          keywords: 'pharmacy interior Bihar, medical shop photo Pai Bigha, chemist shelves gallery'
        };
      case 'contact':
        return {
          title: 'Contact Us | Pharmacy Phone & Address',
          description: 'Get location directions, interactive working hours table, and call numbers for Agrawal Medical Hall in Pai Bigha, Bihar. Reach our pharmacist directly.',
          keywords: 'pharmacy phone number Pai Bigha, Agrawal Medical Hall address, local medical shop near me'
        };
      default:
        return {
          title: 'Genuine Medicines & Healthcare',
          description: 'Agrawal Medical Hall in Pai Bigha, Bihar is your trusted pharmacy for 100% genuine medicines, personal hygiene, surgical supplies, and baby care. Call or order on WhatsApp now.',
          keywords: 'pharmacy Pai Bigha, medical store Bihar 804424, genuine medicine shop, order medicine online Jehanabad, Agrawal Medical Hall'
        };
    }
  };

  const seoTags = getSEOTags();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 transition-colors duration-300 font-sans">
      
      {/* Dynamic SEO Injector */}
      <SEOHead 
        title={seoTags.title}
        description={seoTags.description}
        keywords={seoTags.keywords}
        pageUrl={window.location.href}
        activeTab={activeTab}
      />

      {/* Sticky Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        openOrderForm={handleOpenGeneralOrderForm}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* EMERGENCY RUNNING ANNOUNCEMENT BANNER */}
      <div className="bg-gradient-to-r from-red-600 to-amber-600 text-white text-xs font-semibold py-2 px-4 text-center mt-16 sm:mt-20 flex items-center justify-center gap-2 relative z-30">
        <AlertTriangle className="h-4 w-4 animate-bounce shrink-0" />
        <span>Pai Bigha Community Notice: Call +91 74808 60951 directly for fast counter collection or emergency critical needs.</span>
      </div>

      {/* Dynamic Main Body Content */}
      <main className="min-h-[70vh]">
        {renderActiveView()}
      </main>

      {/* Footer Section */}
      <Footer setActiveTab={setActiveTab} />

      {/* WhatsApp Order Modal Form */}
      <WhatsAppOrderForm 
        isOpen={isOrderFormOpen} 
        onClose={() => setIsOrderFormOpen(false)} 
        prefilledMedicine={prefilledMedicine}
      />

      {/* FLOATING ACTION UTILITIES */}

      {/* 1. Mobile-only Floating Call Button (Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-40 sm:hidden">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30 transition-all cursor-pointer"
          aria-label="Call Store"
          id="floating-phone-dialer"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      {/* 2. Floating WhatsApp Support Button (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={handleBackToTop}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 shadow-md hover:-translate-y-1 transition-all cursor-pointer"
            aria-label="Back to top"
            id="floating-back-to-top"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        )}

        <button
          onClick={handleOpenGeneralOrderForm}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-xl shadow-teal-500/30 hover:scale-105 hover:-translate-y-1 transition-all cursor-pointer relative group"
          aria-label="Open WhatsApp order form"
          id="floating-whatsapp-order-btn"
        >
          <MessageSquare className="h-6 w-6" />
          {/* Tooltip on hover */}
          <span className="absolute right-16 top-3 bg-neutral-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            Order Medicines Now
          </span>
          {/* Active green blink pulse */}
          <span className="absolute top-0.5 right-0.5 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-neutral-950 animate-pulse" />
        </button>
      </div>

    </div>
  );
}
