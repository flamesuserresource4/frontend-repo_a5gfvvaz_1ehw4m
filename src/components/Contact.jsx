import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 16 });
  const sy = useSpring(my, { stiffness: 120, damping: 16 });
  const gradient = useTransform([sx, sy], ([x, y]) => `radial-gradient(600px 300px at ${x}px ${y}px, rgba(236,72,153,0.18), transparent 60%)`);

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <section id="contact" className="relative py-24">
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-12 backdrop-blur"
        style={{ backgroundImage: gradient }}
      >
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-center"
        >
          Let’s build something animated
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-center text-white/70"
        >
          Tell me about your project — timeline, goals, and inspiration.
        </motion.p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 font-medium hover:shadow-lg hover:shadow-pink-500/20 transition">
            <Mail size={16} /> Email me
          </a>
          <a href="https://github.com" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10 transition">
            <Github size={16} /> GitHub
          </a>
          <a href="https://linkedin.com" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10 transition">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        {/* Ambient orbs */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -bottom-12 -right-10 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Flames — Built with React, Tailwind, Framer Motion and Spline
      </div>
    </section>
  );
}
