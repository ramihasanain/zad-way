'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import Link from 'next/link';

export const Header = () => {
  const { lang, t, toggleLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.vision, href: '#services' },
    { name: t.nav.advantage, href: '#advantage' },
    { name: t.nav.certificates, href: '#certificates' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="w-auto md:w-1/4 flex justify-start">
          <Link href="/" className="text-2xl font-bold tracking-wider text-white">
            ZAD<span className="text-gold-400">WAY</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:w-2/4 justify-center items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-white/80 hover:text-gold-400 transition-colors whitespace-nowrap">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle & Language Button */}
        <div className="w-auto md:w-1/4 flex justify-end items-center gap-4">
          <button 
            onClick={toggleLang}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium whitespace-nowrap"
          >
            <Globe size={16} className="text-gold-400" />
            {lang === 'en' ? 'العربية' : 'English'}
          </button>

          <button onClick={toggleLang} className="md:hidden p-2 text-white">
            <Globe size={20} className="text-gold-400" />
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full border-t border-white/10 py-4 px-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-white/90 hover:text-gold-400 py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
