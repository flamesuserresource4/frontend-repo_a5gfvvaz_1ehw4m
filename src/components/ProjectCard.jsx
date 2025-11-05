import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.link}
      target={project.link?.startsWith('http') ? '_blank' : undefined}
      rel={project.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.15 }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 transition-transform"
    >
      <div className="aspect-video w-full bg-gradient-to-br from-slate-800 to-slate-900">
        {/* Image with graceful fallback */}
        {project.img ? (
          <img
            src={project.img}
            alt={project.title}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : null}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-300 transition-colors" />
        </div>
        <p className="mt-2 text-sm text-gray-300 line-clamp-2">{project.desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags?.map((t) => (
            <span key={t} className="text-xs text-cyan-300/90 bg-cyan-400/10 border border-cyan-400/20 px-2 py-0.5 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
