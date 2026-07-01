import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Phone,
  Clock,
  User,
  Send,
  CalendarCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    service: 'Bridal Blouse'
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const servicesOption = [
    'Bridal Blouse',
    'Designer Blouse',
    'Simple Blouse',
    'Kurti Stitching',
    'Lehenga Stitching',
    'Salwar Suit Stitching',
    'Dress Stitching / Gown',
    'Kids Wear Stitching',
    'Alterations / Adjustments'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setError('Please provide a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);

    // Simulate scheduling delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // Generate pre-formatted WhatsApp text
      const whatsAppText = `Hello Janakbhai, I would like to book a tailoring appointment at Gargi Ladies Tailor.%0A%0A*Name:* ${encodeURIComponent(
        formData.name
      )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Required Service:* ${encodeURIComponent(
        formData.service
      )}%0A*My Design Note:* ${encodeURIComponent(formData.message || 'Standard Fitting Trial')}%0A%0APlease let me know your available slots. Thank you!`;

      const whatsAppUrl = `https://wa.me/916352902879?text=${whatsAppText}`;

      // Open WhatsApp after a tiny delay
      setTimeout(() => {
        window.open(whatsAppUrl, '_blank');
      }, 1500);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      message: '',
      service: 'Bridal Blouse'
    });
    setSuccess(false);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-charcoal text-charcoal dark:text-stone-100 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[10px] font-semibold tracking-[3px] uppercase text-maroon dark:text-gold mb-2"
          >
            SCHEDULE A VISIT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-maroon dark:text-stone-100 uppercase"
          >
            Book Your Custom Stitching Session
          </motion.h2>
          <div className="h-[1px] w-24 bg-gold/50 mx-auto mt-4" />
          <p className="font-sans text-stone-500 dark:text-stone-400 text-xs mt-5 leading-relaxed max-w-xl mx-auto font-light tracking-wide">
            Fill out the form below to lock your trial slot. We will automatically generate a WhatsApp chat with Janakbhai to confirm your details instantly.
          </p>
        </div>

        {/* Form and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Column 1: Info & Map (Spans 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Quick Contact Info Cards */}
            <div className="bg-beige dark:bg-charcoal/40 border border-gold/15 dark:border-gold/10 rounded-none p-6 sm:p-8 shadow-none space-y-6">
              <h3 className="font-serif text-base font-bold uppercase tracking-wider text-maroon dark:text-gold border-b border-gold/15 pb-3">
                Store Details
              </h3>

              <div className="space-y-5">
                {/* Physical Address */}
                <div className="flex gap-4">
                  <div className="h-9 w-9 border border-gold/40 text-gold flex items-center justify-center flex-shrink-0 mt-0.5 rounded-none">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans text-[10px] font-semibold text-stone-400 uppercase tracking-[1.5px]">Our Address</h4>
                    <p className="font-sans text-xs text-stone-700 dark:text-stone-200 mt-1 leading-relaxed font-semibold">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Direct Call Details */}
                <div className="flex gap-4">
                  <div className="h-9 w-9 border border-gold/40 text-gold flex items-center justify-center flex-shrink-0 mt-0.5 rounded-none">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans text-[10px] font-semibold text-stone-400 uppercase tracking-[1.5px]">Call Owner (Janakbhai)</h4>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="font-serif text-base font-bold text-maroon dark:text-gold hover:underline mt-1 block"
                    >
                      {BUSINESS_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Store Hours */}
                <div className="flex gap-4">
                  <div className="h-9 w-9 border border-gold/40 text-gold flex items-center justify-center flex-shrink-0 mt-0.5 rounded-none">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans text-[10px] font-semibold text-stone-400 uppercase tracking-[1.5px]">Business Hours</h4>
                    <p className="font-sans text-xs text-stone-700 dark:text-stone-200 mt-1 leading-relaxed">
                      {BUSINESS_INFO.hours.weekdays} <br />
                      <span className="text-maroon dark:text-gold font-bold">{BUSINESS_INFO.hours.sunday}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-none overflow-hidden border border-gold/15 dark:border-gold/10 aspect-[4/3] relative shadow-none">
              <iframe
                title="Gargi Ladies Tailor Google Map Location"
                src={BUSINESS_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Column 2: Interactive Scheduling Form (Spans 7) */}
          <div className="lg:col-span-7">
            <div className="bg-beige dark:bg-charcoal/40 border border-gold/15 dark:border-gold/10 rounded-none p-6 sm:p-8 shadow-none flex flex-col justify-between h-full">
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.form
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="flex items-center gap-2 mb-4 border-b border-gold/15 pb-4">
                      <CalendarCheck className="w-4 h-4 text-maroon dark:text-gold" />
                      <h3 className="font-serif text-base font-bold uppercase tracking-wider text-maroon dark:text-gold">
                        Appointment Scheduler
                      </h3>
                    </div>

                    {/* Error Box */}
                    {error && (
                      <div className="flex items-center gap-2.5 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 text-rose-700 p-3.5 rounded-none font-sans text-xs">
                        <AlertCircle className="w-4.5 h-4.5 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Customer Name */}
                    <div className="space-y-1">
                      <label className="block font-sans text-[10px] font-bold text-stone-600 dark:text-stone-300 uppercase tracking-widest">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Priyanka Patel"
                          className="w-full pl-10 pr-4 py-3 border border-gold/20 dark:border-gold/10 bg-white dark:bg-[#120D0E] text-stone-800 dark:text-stone-100 rounded-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors font-sans text-xs"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1">
                      <label className="block font-sans text-[10px] font-bold text-stone-600 dark:text-stone-300 uppercase tracking-widest">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400 font-sans text-xs font-bold">
                          +91
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. 9876543210"
                          maxLength={10}
                          className="w-full pl-12 pr-4 py-3 border border-gold/20 dark:border-gold/10 bg-white dark:bg-[#120D0E] text-stone-800 dark:text-stone-100 rounded-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors font-sans text-xs"
                        />
                      </div>
                    </div>

                    {/* Stitching Service Selector */}
                    <div className="space-y-1">
                      <label className="block font-sans text-[10px] font-bold text-stone-600 dark:text-stone-300 uppercase tracking-widest">
                        Select Stitching Requirement
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-3 border border-gold/20 dark:border-gold/10 bg-white dark:bg-[#120D0E] text-stone-800 dark:text-stone-100 rounded-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors font-sans text-xs"
                      >
                        {servicesOption.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Custom Message Note */}
                    <div className="space-y-1">
                      <label className="block font-sans text-[10px] font-bold text-stone-600 dark:text-stone-300 uppercase tracking-widest">
                        Describe Design or Pattern Note
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="e.g. Back hook open, elbow length sleeves, princess-cut with cotton linings required."
                        className="w-full px-4 py-3 border border-gold/20 dark:border-gold/10 bg-white dark:bg-[#120D0E] text-stone-800 dark:text-stone-100 rounded-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors font-sans text-xs resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-gold text-charcoal hover:bg-transparent hover:text-gold border border-gold font-sans text-xs font-semibold tracking-[2px] uppercase rounded-none transition-all duration-300 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <div className="h-4 w-4 border-2 border-stone-400 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Book Appointment Via WhatsApp</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="booking-success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="text-center py-12 px-4 space-y-6 flex flex-col items-center justify-center h-full"
                  >
                    <div className="h-14 w-14 border border-emerald-500 text-emerald-500 rounded-none flex items-center justify-center shadow-none">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-maroon dark:text-gold">
                        Details Registered!
                      </h3>
                      <p className="font-sans text-xs sm:text-xs text-stone-500 dark:text-stone-400 leading-relaxed max-w-sm font-light">
                        Thank you, <span className="font-bold text-maroon dark:text-gold">{formData.name}</span>. Your trial details are saved. We are opening WhatsApp to instantly coordinate with Janakbhai Kapadiwala.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={handleReset}
                        className="px-5 py-2.5 border border-gold/25 hover:bg-gold hover:text-charcoal bg-transparent text-gold font-sans text-[10px] font-semibold tracking-[2px] uppercase rounded-none transition-colors duration-200"
                      >
                        Stitch Another Design
                      </button>

                      <a
                        href={`https://wa.me/916352902879?text=Hello%20Janakbhai,%20this%20is%20${encodeURIComponent(
                          formData.name
                        )}%20inquiring%20about%20my%20appointment.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-gold text-charcoal hover:bg-transparent hover:text-gold border border-gold font-sans text-[10px] font-semibold tracking-[2px] uppercase rounded-none transition-colors duration-200 flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Chat Directly</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
