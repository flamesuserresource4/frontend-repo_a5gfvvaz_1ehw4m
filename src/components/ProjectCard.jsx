import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, description, image, tags = [], href }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rx = useSpring(useTransform(y, [50, -50], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = (e.clientY - (rect.top + rect.height / 2)) * -1;
    x.set(Math.max(-50, Math.min(50, mx)));
    y.set(Math.max(-50, Math.min(50, my)));
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 180, damping: 22 }}
      style={{ rotateX: rx, rotateY: ry }}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur will-change-transform"
    >
      {/* Animated border glow */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{
        background: 'conic-gradient(from 180deg at 50% 50%, rgba(99,102,241,0.25), rgba(236,72,153,0.25), rgba(20,184,166,0.25), rgba(99,102,241,0.25))',
        filter: 'blur(24px)'
      }} />

      <div className="relative z-10 p-4">
        <div className="aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-black/20">
          {image ? (
            <img src={image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-white/30">
              <span>Preview</span>
            </div>
          )}
        </div>
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-white/70">{description}</p>
          </div>
          <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 group-hover:bg-white/10 transition">
            <ExternalLink size={16} />
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/80">{t}</span>
          ))}
        </div>
      </div>

      {/* Shimmer */}
      <span className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100" style={{
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
        mask: 'linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)',
        WebkitMask: 'linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)'
      }} />
    </motion.a>
  );
}
