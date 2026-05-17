'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export const Certificates = () => {
  const { t } = useLanguage();

  return (
    <section id="certificates" className="py-24 bg-ocean-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4 inline-block">
            {t.certificates.title}
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {t.certificates.list.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-8 glass rounded-2xl min-w-[250px] hover:-translate-y-2 transition-transform duration-300"
            >
              <Award className="text-gold-400 mb-6" size={48} strokeWidth={1.5} />
              <h4 className="text-xl font-semibold text-white text-center">{cert}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
