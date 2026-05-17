'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

export const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 relative bg-ocean-950">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group glass p-10 rounded-3xl hover:bg-ocean-800/60 transition-colors border-t border-gold-500/30"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-8 shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform">
              <Eye className="text-ocean-950" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">
              {t.visionMission.visionTitle}
            </h3>
            <p className="text-ocean-100/80 leading-relaxed text-lg drop-cap">
              {t.visionMission.visionDesc}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group glass p-10 rounded-3xl hover:bg-ocean-800/60 transition-colors border-t border-ocean-400/30"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center mb-8 shadow-lg shadow-ocean-500/20 group-hover:scale-110 transition-transform">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">
              {t.visionMission.missionTitle}
            </h3>
            <p className="text-ocean-100/80 leading-relaxed text-lg drop-cap">
              {t.visionMission.missionDesc}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
