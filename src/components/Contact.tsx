import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [validationError, setValidationError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [currentTimeStr, setCurrentTimeStr] = useState('');

  // Live Open/Closed Logic (India Time is UTC +5:30)
  useEffect(() => {
    const checkStoreStatus = () => {
      // Get current date/time in India
      const options = { timeZone: 'Asia/Kolkata', hour12: false };
      const formatter = new Intl.DateTimeFormat('en-US', {
        ...options,
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric'
      });
      
      const parts = formatter.formatToParts(new Date());
      let weekday = '';
      let hour = 0;
      let minute = 0;

      parts.forEach(part => {
        if (part.type === 'weekday') weekday = part.value;
        if (part.type === 'hour') hour = parseInt(part.value, 10);
        if (part.type === 'minute') minute = parseInt(part.value, 10);
      });

      // Format time string for display
      const displayFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      });
      setCurrentTimeStr(displayFormatter.format(new Date()));

      const timeInMins = hour * 60 + minute;

      if (weekday === 'Sunday') {
        // Sunday: 09:00 AM (540 mins) to 04:00 PM (960 mins)
        if (timeInMins >= 540 && timeInMins <= 960) {
          setIsStoreOpen(true);
        } else {
          setIsStoreOpen(false);
        }
      } else {
        // Monday - Saturday: 08:00 AM (480 mins) to 09:30 PM (1290 mins)
        if (timeInMins >= 480 && timeInMins <= 1290) {
          setIsStoreOpen(true);
        } else {
          setIsStoreOpen(false);
        }
      }
    };

    checkStoreStatus();
    const interval = setInterval(checkStoreStatus, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setValidationError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setValidationError('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setValidationError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!formData.message.trim()) {
      setValidationError('Please enter your message or query.');
      return;
    }

    // Redirect to preformatted WhatsApp message
    const formattedMsg = `*Hello AGRAWAL MEDICAL HALL, Pai Bigha*\n\nI have a query from the website contact page:\n\n*Customer Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || 'N/A'}\n\n*Message:* ${formData.message}\n\n_Submitted via website contact module_`;
    const waUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(formattedMsg)}`;

    setSuccess(true);
    setValidationError('');

    setTimeout(() => {
      window.open(waUrl, '_blank');
      setSuccess(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <div className="pt-24 pb-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact-view">
      
      {/* 1. HEADER HERO */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-8">
        <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">Get In Touch</span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
          Contact Agrawal Medical Hall
        </h1>
        <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full" />
        <p className="text-slate-500 dark:text-neutral-450 text-sm sm:text-base leading-relaxed">
          Reach out to us directly for quick stock inquiries, custom dosage questions, or local medical assistance. Our customer desk is ready to respond.
        </p>
      </section>

      {/* 2. DUAL CONTACT INFRASTRUCTURE & LIVE HOURS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Contact Details Panel (Column Left) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Business Information
            </h2>
            <p className="text-xs text-slate-400">
              We serve the historic Pai Bigha locality with utmost health compliance. Call or walk in anytime during operational schedules.
            </p>
          </div>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-850 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-widest">Store Address</h4>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-neutral-200 font-sans leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-850 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-widest">Phone Call Support</h4>
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`} 
                  className="block text-sm sm:text-base font-display font-black text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {BUSINESS_INFO.formattedPhone}
                </a>
                <span className="text-[10px] text-slate-400 block leading-none">Emergency Phone Support: 07480860951</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-850 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-widest">Email Mailbox</h4>
                <a 
                  href={`mailto:${BUSINESS_INFO.email}`} 
                  className="block text-xs sm:text-sm text-slate-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Operational hours with dynamic Open Indicator */}
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-neutral-900/40 border border-slate-100 dark:border-neutral-850 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">Store Operating Hours</h4>
              </div>

              {/* Dynamic Open Badge */}
              <div className="flex items-center gap-1.5">
                <span className={`h-2.5 w-2.5 rounded-full ${isStoreOpen ? 'bg-emerald-500 animate-ping' : 'bg-red-500'}`} />
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isStoreOpen ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                  {isStoreOpen ? 'Open Now' : 'Closed'}
                </span>
              </div>
            </div>

            <div className="space-y-2 border-t border-slate-100 dark:border-neutral-800 pt-3">
              {BUSINESS_INFO.workingHours.map((sched, index) => (
                <div key={index} className="flex justify-between items-center text-xs font-sans">
                  <span className="text-slate-500 dark:text-neutral-400 font-semibold">{sched.days}</span>
                  <span className="text-slate-800 dark:text-neutral-200 font-bold">{sched.hours}</span>
                </div>
              ))}
            </div>

            <span className="block text-[10px] text-center text-slate-400 italic leading-tight font-mono pt-1">
              Current India Store Time: {currentTimeStr || 'Calculating...'}
            </span>
          </div>

        </div>

        {/* Live Contact Form Panel (Column Right) */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-neutral-855 shadow-md space-y-6">
            <div className="space-y-2">
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Submit an Online Inquiry
              </h3>
              <p className="text-xs text-slate-500">
                Have stock requests, vaccine queries, or generic rate doubts? Send us a message! We will immediately format and redirect to WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {success ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center text-blue-600 dark:text-blue-400 space-y-2"
                >
                  <CheckCircle2 className="h-10 w-10 animate-bounce text-emerald-500" />
                  <h4 className="font-display font-bold">Redirecting to WhatsApp...</h4>
                  <p className="text-xs text-slate-500 max-w-xs">Connecting to your chat thread with Agrawal Medical. Please click send when prompted!</p>
                </motion.div>
              ) : (
                <>
                  {validationError && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2 rounded-xl bg-red-50 dark:bg-red-950/30 p-3 text-xs text-red-600 dark:text-red-400"
                    >
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{validationError}</span>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Your Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Ramesh Singh"
                        className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-855 px-4 py-2.5 text-xs focus:border-blue-600 focus:outline-none dark:text-white"
                        required
                        id="contact-form-name"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mobile Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 9876543210"
                        className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-855 px-4 py-2.5 text-xs focus:border-blue-600 focus:outline-none dark:text-white"
                        required
                        id="contact-form-phone"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address (Optional)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. ramesh@gmail.com"
                      className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-855 px-4 py-2.5 text-xs focus:border-blue-600 focus:outline-none dark:text-white"
                      id="contact-form-email"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Message Description *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your health query, specific medicine list, dosage instructions, or feedback details here..."
                      rows={4}
                      className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-855 px-4 py-2.5 text-xs focus:border-blue-600 focus:outline-none dark:text-white"
                      required
                      id="contact-form-message"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-extrabold text-xs py-3.5 transition-all shadow-md cursor-pointer uppercase tracking-wider"
                    id="contact-form-submit-btn"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message via WhatsApp</span>
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* 3. FULL MAP IFRAME WITH EMBED */}
      <section className="space-y-4">
        <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">Detailed Roadmap</h3>
        <div className="rounded-3xl overflow-hidden border border-slate-100 dark:border-neutral-850 h-96">
          <iframe
            src={BUSINESS_INFO.googleMapsIframeUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Agrawal Medical Hall Map"
          />
        </div>
      </section>

    </div>
  );
}
