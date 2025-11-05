import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const messages = [
  'Designing delightful interactions',
  'Building fast, modern web apps',
  'Animating ideas into products',
  'Shipping pixel-perfect UI'
];

function useTypewriter(lines, speed = 38, hold = 1400) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = lines[index % lines.length];
    if (!deleting && text === full) {
      const t = setTimeout(() => setDeleting(true), hold);
      return () => clearTimeout(t);
    }
    const timeout = setTimeout(() => {
      if (deleting) {
        setText(full.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % lines.length);
        }
      } else {
        setText(full.slice(0, text.length + 1));
      }
    }, deleting ? speed / 1.6 : speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, lines, speed, hold]);

  return text + (deleting ? '' : '▋');
}

export default function Hero() {
  const typed = useTypewriter(messages);

  // Cursor-following shimmer
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 100, damping: 20, mass: 0.3 });
  const sy = useSpring(my, { stiffness: 100, damping: 20, mass: 0.3 });

  const gradient = useTransform([sx, sy], ([x, y]) => `radial-gradient(600px 300px at ${x}px ${y}px, rgba(99,102,241,0.25), transparent 60%)`);

  const heroRef = useRef(null);
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      mx.set(e.clientX - rect.left);
      my.set(e.clientY - rect.top);
    };
    el.addEventListener('pointermove', onMove);
    return () => el.removeEventListener('pointermove', onMove);
  }, [mx, my]);

  return (
    <section id="home" className="relative pt-28 sm:pt-32">
      <motion.div
        ref={heroRef}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: gradient }}
      >
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              Hi, I’m Flames
              <span className="block bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Product Engineer & Animator</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-white/70 text-lg"
            >
              {typed}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 font-medium hover:shadow-lg hover:shadow-indigo-500/20 transition">
                View Work <ArrowRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10 transition">
                Contact
              </a>
              <div className="ml-2 flex items-center gap-2">
                <a href="https://github.com" aria-label="GitHub" className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"><Github size={18} /></a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"><Linkedin size={18} /></a>
                <a href="mailto:hello@example.com" aria-label="Mail" className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"><Mail size={18} /></a>
              </div>
            </motion.div>

            {/* Floating tech badges */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { label: 'React', color: 'from-sky-400 to-blue-500' },
                { label: 'Tailwind', color: 'from-cyan-400 to-teal-400' },
                { label: 'Framer Motion', color: 'from-fuchsia-400 to-pink-400' },
                { label: 'Spline 3D', color: 'from-indigo-400 to-purple-500' },
              ].map((b, i) => (
                <motion.span
                  key={b.label}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: [0, -6, 0], opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.06, duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                  className={`inline-flex items-center rounded-xl bg-gradient-to-br ${b.color} px-3 py-1 text-xs font-semibold text-black/90 shadow-lg shadow-black/10`}
                >
                  {b.label}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Spline Scene */}
          <div className="relative h-[380px] sm:h-[460px] lg:h-[560px]">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />

            {/* Glow overlay that doesn't block interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
