'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      toast.success('Message sent! We\'ll get back to you soon.');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-ocean-950 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4 inline-block">
            {t.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Details (Left Side / 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass p-6 rounded-2xl flex items-center gap-6 border-l-4 border-l-gold-500">
              <div className="w-14 h-14 bg-ocean-800 rounded-full flex items-center justify-center flex-shrink-0 text-gold-400 shadow-inner">
                <MapPin size={24} />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-ocean-100 font-medium text-lg leading-relaxed">{t.contact.omanOffice.split('\n')[0]}</span>
                <span className="text-ocean-100 font-medium text-lg leading-relaxed" dir="ltr">{t.contact.omanOffice.split('\n')[1]}</span>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center gap-6 border-l-4 border-l-ocean-500">
              <div className="w-14 h-14 bg-ocean-800 rounded-full flex items-center justify-center flex-shrink-0 text-ocean-400 shadow-inner">
                <MapPin size={24} />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-ocean-100 font-medium text-lg leading-relaxed">{t.contact.jordanOffice.split('\n')[0]}</span>
                <span className="text-ocean-100 font-medium text-lg leading-relaxed" dir="ltr">{t.contact.jordanOffice.split('\n')[1]}</span>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center gap-6">
              <div className="w-14 h-14 bg-ocean-800 rounded-full flex items-center justify-center flex-shrink-0 text-gold-400 shadow-inner">
                <Mail size={24} />
              </div>
              <div className="flex flex-col gap-1">
                <a href={`mailto:${t.contact.infoEmail}`} className="text-ocean-100 hover:text-gold-400 transition-colors font-medium text-lg">
                  {t.contact.infoEmail}
                </a>
                <a href={`mailto:${t.contact.salesEmail}`} className="text-ocean-100 hover:text-gold-400 transition-colors font-medium text-lg">
                  {t.contact.salesEmail}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right Side / 3 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass p-8 md:p-10 rounded-3xl border-t border-white/10 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-ocean-200 font-medium">{t.contact.form.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-ocean-900/50 border border-ocean-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-ocean-200 font-medium">{t.contact.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-ocean-900/50 border border-ocean-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-ocean-200 font-medium">{t.contact.form.subject}</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-ocean-900/50 border border-ocean-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                  placeholder="Inquiry about..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-ocean-200 font-medium">{t.contact.form.message}</label>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-ocean-900/50 border border-ocean-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all resize-none"
                  placeholder="Hello..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-400 disabled:opacity-60 disabled:cursor-not-allowed text-ocean-900 font-bold rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2"
              >
                <span>{loading ? 'Sending...' : t.contact.form.send}</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
