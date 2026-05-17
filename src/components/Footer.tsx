'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-ocean-950 border-t border-white/10 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-ocean-100/50 text-sm">
          &copy; {new Date().getFullYear()} Zad Way. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
