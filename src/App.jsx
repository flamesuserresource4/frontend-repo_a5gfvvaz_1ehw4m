import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  const { scrollYProgress } = useScroll();
  const hue = useTransform(scrollYProgress, [0, 1], [210, 320]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <div className="min-h-screen text-white antialiased">
      {/* Animated background gradient that slowly shifts hue as you scroll */}
      <motion.div
        aria-hidden
        className="fixed inset-0 -z-0"
        style={{
          background:
            'radial-gradient(1200px 600px at 80% 10%, rgba(99,102,241,0.25), transparent 60%), radial-gradient(900px 500px at 10% 30%, rgba(236,72,153,0.2), transparent 60%)',
          filter: 'blur(40px)'
        }}
      />
      <motion.div
        aria-hidden
        className="fixed inset-0 -z-0"
        style={{
          backgroundColor: hue.to((h) => `hsl(${Math.round(h)} 80% 6%)`),
          opacity: bgOpacity,
        }}
      />

      <Header />

      <main className="relative">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
