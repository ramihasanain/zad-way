'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { dictionaries, Language } from '@/i18n/dictionaries';

type LanguageContextType = {
  lang: Language;
  t: typeof dictionaries.en;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  // Load language from localStorage if available
  useEffect(() => {
    const savedLang = localStorage.getItem('zadway-lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      setLang(savedLang);
    }
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const newLang = prev === 'en' ? 'ar' : 'en';
      localStorage.setItem('zadway-lang', newLang);
      document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = newLang;
      return newLang;
    });
  };

  const t = dictionaries[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
