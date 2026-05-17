'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/80 via-ocean-900/60 to-ocean-900 z-10" />
        <img 
          src="/images/hero.png" 
          alt="Ocean Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-gold-400/50 bg-gold-400/10 text-gold-400 text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
            {t.hero.subtitle}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-2xl text-ocean-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          <a 
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 hover:bg-gold-400 text-ocean-900 font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
          >
            {t.hero.cta}
          </a>
        </motion.div>
      </div>

      {/* Decorative Wave/Gradient at bottom */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-ocean-900 to-transparent z-20" />
    </section>
  );
};
