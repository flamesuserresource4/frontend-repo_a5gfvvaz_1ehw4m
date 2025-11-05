import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      >
        <div className={`mt-3 flex items-center justify-between rounded-2xl border backdrop-blur supports-[backdrop-filter]:bg-white/5 ${
          scrolled ? 'bg-white/5 border-white/10 shadow-lg shadow-black/20' : 'bg-white/0 border-white/10'
        }`}
        >
          <a href="#home" className="flex items-center gap-2 pl-4 py-3 group">
            <motion.span
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white"
            >
              <Sparkles size={18} />
            </motion.span>
            <div className="text-sm font-semibold tracking-wide">
              Flames Portfolio
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1 pr-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative rounded-xl px-3 py-2 text-sm text-white/80 hover:text-white transition"
              >
                {l.label}
                <motion.span
                  layoutId="underline"
                  className="absolute left-3 right-3 -bottom-[6px] h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
                  whileHover={{ scaleX: 1 }}
                  initial={{ scaleX: 0 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 24 }}
                />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium hover:bg-white/10 transition"
            >
              Let’s talk
            </a>
          </nav>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-3"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm hover:bg-white/10"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
