import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const MESSAGES = [
  "I build things for the web.",
  "I am a Node Validator.",
  "I am a Network Engineering.",
];

function useTypeLoop(messages, typingSpeed = 50, pause = 2000) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const full = messages[index % messages.length];

    if (!deleting) {
      if (display.length < full.length) {
        timer = setTimeout(() => setDisplay(full.slice(0, display.length + 1)), typingSpeed);
      } else {
        timer = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (display.length > 0) {
        timer = setTimeout(() => setDisplay(full.slice(0, display.length - 1)), typingSpeed / 1.5);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % messages.length);
      }
    }

    return () => clearTimeout(timer);
  }, [messages, typingSpeed, pause, display, deleting, index]);

  return display + (deleting ? '' : '│');
}

export default function Hero() {
  const typed = useTypeLoop(MESSAGES, 45, 2000);

  const tech = useMemo(
    () => [
      { name: 'JavaScript', color: 'text-yellow-300' },
      { name: 'TypeScript', color: 'text-blue-300' },
      { name: 'React', color: 'text-cyan-300' },
      { name: 'Next.js', color: 'text-gray-200' },
      { name: 'Node.js', color: 'text-green-300' },
      { name: 'TailwindCSS', color: 'text-teal-300' },
      { name: 'Python', color: 'text-emerald-300' },
      { name: 'Go', color: 'text-sky-300' },
      { name: 'PostgreSQL', color: 'text-indigo-300' },
    ],
    []
  );

  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <p className="text-cyan-400 tracking-wide">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-white">Skydash.NET</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 min-h-[2.5rem]">
            {typed}
          </h2>
          <p className="max-w-prose text-gray-300 leading-relaxed">
            A passionate Full Stack Developer, Network Engineer, and Crypto Enthusiast from Kediri, Indonesia. Currently focused on building accessible, human-centered products.
          </p>
          <div>
            <a
              href="#contact"
              className="inline-block rounded-md border border-cyan-400 px-5 py-2 text-cyan-300 hover:bg-cyan-500/10 transition"
            >
              Get In Touch
            </a>
          </div>

          {/* Tech stack */}
          <div className="pt-4">
            <p className="text-sm text-gray-400 mb-2">Tech I enjoy</p>
            <div className="flex flex-wrap gap-3">
              {tech.map((t, i) => (
                <motion.span
                  key={t.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i }}
                  className={`text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 ${t.color}`}
                >
                  {t.name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3D Spline scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-[380px] sm:h-[460px] lg:h-[520px] w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 to-black"
        >
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* subtle glow overlay that doesn't block interactions */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.12),transparent_55%)]" />
        </motion.div>
      </div>
    </div>
  );
}
