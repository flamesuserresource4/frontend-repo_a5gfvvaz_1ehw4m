import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';

const data = [
  {
    title: 'Realtime Dashboard',
    description: 'Streaming metrics with fluid transitions and gesture controls.',
    tags: ['React', 'WebSockets', 'Framer Motion'],
    href: 'https://example.com'
  },
  {
    title: '3D Product Configurator',
    description: 'Interactive Spline scene wired to live options and variants.',
    tags: ['Spline', 'UX', 'Statecharts'],
    href: 'https://example.com'
  },
  {
    title: 'Design System',
    description: 'Accessible components with animated micro-interactions.',
    tags: ['Tailwind', 'a11y', 'Storybook'],
    href: 'https://example.com'
  },
  {
    title: 'AI Portfolio Writer',
    description: 'Generates case studies with tone and structure presets.',
    tags: ['LLM', 'Vite', 'MDX'],
    href: 'https://example.com'
  },
  {
    title: 'Motion Templates',
    description: 'Production-ready transitions for multi-step flows.',
    tags: ['Framer', 'Templates', 'UX'],
    href: 'https://example.com'
  },
  {
    title: 'Dev Tools',
    description: 'CLI and VS Code extension with live previews.',
    tags: ['Node', 'DX', 'Automation'],
    href: 'https://example.com'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      {/* Animated backdrop stripes */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            'repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 80px)'
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-1 text-white/70"
            >
              A selection of recent work with an emphasis on motion.
            </motion.p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((p, i) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
