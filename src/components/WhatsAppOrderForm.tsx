import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Phone, ClipboardCheck, AlertCircle, FileText, Upload } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface WhatsAppOrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export default function WhatsAppOrderForm({ isOpen, onClose, prefilledMedicine }: WhatsAppOrderFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    medicineName: '',
    message: '',
    preferredTime: 'Anytime (08:00 AM - 09:30 PM)',
    hasPrescription: 'No' as 'Yes' | 'No'
  });

  // Prefill the medicine field when prefilledMedicine changes
  useEffect(() => {
    if (prefilledMedicine) {
      setFormData(prev => ({ ...prev, medicineName: prefilledMedicine }));
    }
  }, [prefilledMedicine, isOpen]);

  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setValidationError('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setValidationError('Prescription file size should be less than 5MB.');
        return;
      }
      setPrescriptionFile(file);
      setFormData(prev => ({ ...prev, hasPrescription: 'Yes' }));
      setValidationError('');
    }
  };

  const generateWhatsAppText = () => {
    const header = `*Hello AGRAWAL MEDICAL HALL, Pai Bigha*`;
    const details = [
      `*Customer Name:* ${formData.name}`,
      `*Phone:* ${formData.mobile}`,
      formData.email ? `*Email:* ${formData.email}` : null,
      `*Medicines Required:* ${formData.medicineName}`,
      `*Address:* ${formData.address}`,
      `*Prescription Attached:* ${formData.hasPrescription}${prescriptionFile ? ` (${prescriptionFile.name})` : ''}`,
      `*Preferred Delivery Time:* ${formData.preferredTime}`,
      formData.message ? `*Message:* ${formData.message}` : null
    ].filter(Boolean).join('\n\n');

    const footer = `\n\n_Submitted via website order assistant_`;
    return encodeURIComponent(`${header}\n\n${details}${footer}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verification checks
    if (!formData.name.trim()) {
      setValidationError('Please enter your name.');
      return;
    }
    if (!formData.mobile.trim() || formData.mobile.length < 10) {
      setValidationError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.medicineName.trim()) {
      setValidationError('Please specify the medicine names or dosage required.');
      return;
    }
    if (!formData.address.trim()) {
      setValidationError('Please provide your complete delivery or counter collection address.');
      return;
    }

    // Trigger WhatsApp redirect
    const waText = generateWhatsAppText();
    const waUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${waText}`;
    
    setIsSuccess(true);
    setValidationError('');

    setTimeout(() => {
      window.open(waUrl, '_blank');
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800"
            id="whatsapp-order-modal"
          >
            {/* Header banner */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight">WhatsApp Quick Order</h3>
                  <p className="mt-1 text-xs text-blue-100">Send your prescription or medicines list. We will handle the rest!</p>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-all cursor-pointer"
                  aria-label="Close"
                  id="close-order-modal-btn"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Content Form */}
            <form onSubmit={handleSubmit} className="max-h-[75vh] overflow-y-auto p-6 space-y-4">
              
              {isSuccess ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center text-blue-600 dark:text-blue-400 space-y-3"
                >
                  <div className="rounded-full bg-blue-50 dark:bg-blue-950/40 p-4">
                    <ClipboardCheck className="h-12 w-12 animate-bounce" />
                  </div>
                  <h4 className="font-display text-2xl font-bold">Connecting to WhatsApp...</h4>
                  <p className="text-sm text-neutral-500 max-w-md">We are formatting your medical order and opening WhatsApp. Please send the message when prompted!</p>
                </motion.div>
              ) : (
                <>
                  {validationError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 rounded-xl bg-red-50 dark:bg-red-950/30 p-3 text-sm text-red-600 dark:text-red-400"
                    >
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{validationError}</span>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-850 px-4 py-2 text-sm focus:border-blue-600 focus:outline-none dark:text-white"
                        required
                        id="order-name-input"
                      />
                    </div>

                    {/* Mobile */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Mobile Number (10-digit) *</label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="e.g. 9876543210"
                        className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-850 px-4 py-2 text-sm focus:border-blue-600 focus:outline-none dark:text-white"
                        required
                        id="order-mobile-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Email Address (Optional)</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. ramesh@gmail.com"
                        className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-850 px-4 py-2 text-sm focus:border-blue-600 focus:outline-none dark:text-white"
                        id="order-email-input"
                      />
                    </div>

                    {/* Preferred Time */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Preferred Collection/Delivery Time</label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-850 px-4 py-2 text-sm focus:border-blue-600 focus:outline-none dark:text-white"
                        id="order-time-select"
                      >
                        <option>Anytime (08:00 AM - 09:30 PM)</option>
                        <option>Morning (08:00 AM - 12:00 PM)</option>
                        <option>Afternoon (12:00 PM - 04:00 PM)</option>
                        <option>Evening (04:00 PM - 09:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Medicines Required */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Medicines Required *</label>
                    <textarea
                      name="medicineName"
                      value={formData.medicineName}
                      onChange={handleInputChange}
                      placeholder="List the medicines and quantities needed (e.g. Paracetamol 650mg - 2 strips, Volini Gel - 1 tube)"
                      rows={3}
                      className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-850 px-4 py-2 text-sm focus:border-blue-600 focus:outline-none dark:text-white"
                      required
                      id="order-medicines-textarea"
                    />
                  </div>

                  {/* Address */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Your Full Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Pai Bigha village/area, street number, landmarks"
                      className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-850 px-4 py-2 text-sm focus:border-blue-600 focus:outline-none dark:text-white"
                      required
                      id="order-address-input"
                    />
                  </div>

                  {/* Upload Prescription */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Upload Prescription Slip</span>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-slate-200 dark:border-neutral-800 rounded-2xl cursor-pointer hover:bg-slate-55 dark:hover:bg-neutral-850 transition-all">
                        <div className="flex flex-col items-center justify-center pt-4 pb-4">
                          {prescriptionFile ? (
                            <>
                              <FileText className="h-8 w-8 text-blue-500 mb-1" />
                              <p className="text-xs font-medium text-blue-600 dark:text-blue-400 truncate max-w-xs">{prescriptionFile.name}</p>
                              <p className="text-[10px] text-neutral-400">({(prescriptionFile.size / 1024).toFixed(1)} KB) - Click to replace</p>
                            </>
                          ) : (
                            <>
                              <Upload className="h-8 w-8 text-neutral-400 mb-1" />
                              <p className="text-xs font-medium text-neutral-500 font-sans">Drag & drop or <span className="text-blue-600 hover:underline">click to upload</span></p>
                              <p className="text-[10px] text-neutral-400">JPEG, PNG, or PDF up to 5MB</p>
                            </>
                          )}
                        </div>
                        <input type="file" accept="image/*,.pdf" onChange={handleFileChange} className="hidden" />
                      </label>
                    </div>
                  </div>

                  {/* Custom Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Special Instructions / Message (Optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any instructions for substitute brands or general health questions..."
                      rows={2}
                      className="w-full rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-850 px-4 py-2 text-sm focus:border-blue-600 focus:outline-none dark:text-white"
                      id="order-instructions-textarea"
                    />
                  </div>

                  {/* Form Submission Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-semibold py-3 transition-all shadow-md cursor-pointer uppercase tracking-wider text-xs"
                      id="submit-whatsapp-order-btn"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send to WhatsApp</span>
                    </button>

                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-neutral-800 hover:bg-slate-50 dark:hover:bg-neutral-850 text-slate-700 dark:text-neutral-300 font-display font-semibold py-3 px-6 transition-all cursor-pointer text-xs uppercase tracking-wider"
                      id="call-order-modal-btn"
                    >
                      <Phone className="h-4 w-4" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
