'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Anchor, ShieldCheck, MapPin } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();

  const advantageIcons = [ShieldCheck, Anchor, MapPin];

  return (
    <section id="about" className="py-24 bg-ocean-900 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient inline-block">
              {t.about.title}
            </h2>
            <div className="space-y-6 text-ocean-100/90 leading-relaxed text-lg mb-10">
              <p>{t.about.description}</p>
              <p>{t.about.network}</p>
            </div>
            <div className="relative h-64 sm:h-80 w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="/images/about.png" 
                alt="Premium Seafood" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            id="advantage"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8 lg:p-10"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              {t.advantage.title}
            </h3>
            <p className="text-sm text-ocean-200 mb-6">{t.advantage.intro}</p>
            <p className="text-sm text-ocean-200 mb-8">{t.advantage.location}</p>
            
            <div className="space-y-6">
              {t.advantage.points.map((point, idx) => {
                const Icon = advantageIcons[idx];
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/20">
                      <Icon className="text-gold-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{point.title}</h4>
                      <p className="text-sm text-ocean-100/70">{point.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
