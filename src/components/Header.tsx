import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Sun, Moon, Heart } from 'lucide-react';
import { ActiveTab } from '../types';
import { BUSINESS_INFO } from '../data';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  openOrderForm: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ activeTab, setActiveTab, openOrderForm, isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; tab: ActiveTab }[] = [
    { label: 'Home', tab: 'home' },
    { label: 'About Us', tab: 'about' },
    { label: 'Our Services', tab: 'services' },
    { label: 'Gallery', tab: 'gallery' },
    { label: 'Reviews', tab: 'testimonials' },
    { label: 'FAQ', tab: 'faq' },
    { label: 'Contact', tab: 'contact' },
  ];

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-neutral-800 py-3'
          : 'bg-white dark:bg-neutral-950 shadow-sm border-b border-slate-200 dark:border-neutral-900 py-4.5'
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 cursor-pointer group"
            id="logo-container"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-all">
              <Heart className="h-5 w-5 text-white fill-white animate-pulse" />
            </div>
            <div>
              <span className="block font-display text-base font-extrabold tracking-tight text-blue-900 dark:text-white leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                AGRAWAL
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-bold uppercase mt-0.5">
                Medical Hall
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.tab}
                onClick={() => handleNavClick(item.tab)}
                className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                  activeTab === item.tab
                    ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-neutral-850'
                }`}
                id={`nav-tab-${item.tab}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call & Order CTA & Toggle Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-neutral-800 text-slate-600 dark:text-neutral-300 hover:bg-slate-50 dark:hover:bg-neutral-850 transition-all cursor-pointer"
              aria-label="Toggle dark mode"
              id="theme-toggle-desktop"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Phone */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full border-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 text-xs font-bold transition-all cursor-pointer"
              id="header-call-btn"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Call Now</span>
            </a>

            {/* WhatsApp Order */}
            <button
              onClick={openOrderForm}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/10 cursor-pointer uppercase tracking-wider"
              id="header-whatsapp-order-btn"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Order on WhatsApp</span>
            </button>
          </div>

          {/* Right Action buttons for small mobile viewports */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-850 transition-all"
              aria-label="Toggle Theme"
              id="theme-toggle-mobile"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
              aria-label="Toggle Menu"
              id="mobile-menu-burger"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800 shadow-xl overflow-hidden py-4 px-4 space-y-4">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.tab}
                onClick={() => handleNavClick(item.tab)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === item.tab
                    ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold'
                    : 'text-slate-600 dark:text-neutral-300 hover:bg-slate-50 dark:hover:bg-neutral-850'
                }`}
                id={`mobile-nav-${item.tab}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-150 dark:border-neutral-800">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-neutral-300 font-semibold text-xs"
            >
              <Phone className="h-4 w-4 text-blue-600" />
              <span>Call Store</span>
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openOrderForm();
              }}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-xs cursor-pointer"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Order Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
