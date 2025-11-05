import React from 'react';
import ProjectCard from './ProjectCard.jsx';

const PROJECTS = [
  { title: 'GenieACS Guide', desc: 'A comprehensive guide for implementing GenieACS...', img: '/genieacs.png', tags: ['GenieACS', 'TR-069'], link: '/projects/genieacs' },
  { title: 'Skydash Monitoring Mikrotik', desc: 'A full-stack web application for monitoring...', img: '/mikrotik.png', tags: ['RouterOS', 'Monitoring'], link: 'https://github.com/skydashnet/skydash-next-monitoring' },
  { title: 'Skydash Finance Tracker', desc: 'A personal finance tracker app built with Dart', img: '/skydash-finance.png', tags: ['Dart', 'Flutter'], link: 'https://github.com/skydashnet/skydash-finance-tracker' },
  { title: 'AVAIL Project', desc: 'A Web3 infra layer...', img: '/avail.webp', tags: ['Web3', 'Blockchain'], link: 'https://www.availproject.org/' },
  { title: 'Rivalz Network', desc: 'Building the future of AI Data...', img: '/rivalz.webp', tags: ['AI', 'DePIN'], link: 'https://rivalz.ai/' },
  { title: 'Tea Protocol', desc: 'Decentralized technology framework...', img: '/tea.png', tags: ['Crypto', 'NPM'], link: 'https://tea.xyz' },
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
        <span className="text-cyan-400">01.</span> Some Things I've Built
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}
