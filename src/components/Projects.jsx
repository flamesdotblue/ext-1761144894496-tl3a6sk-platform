import React from 'react';

const projects = [
  {
    title: 'Realtime Dashboard',
    tag: 'React • WebSockets • Tailwind',
    desc: 'A live analytics dashboard with animated charts and streaming data.',
    link: '#',
  },
  {
    title: '3D Product Configurator',
    tag: 'Three.js • UX • Accessibility',
    desc: 'Interactive 3D viewer with customizable materials and lighting presets.',
    link: '#',
  },
  {
    title: 'Design System',
    tag: 'Storybook • Tokens • Radix',
    desc: 'A cohesive component library with theming and motion guidelines.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected Projects</h2>
          <p className="mt-2 max-w-2xl text-neutral-300">A blend of performance, aesthetics, and delightful interactions.</p>
        </div>
        <a href="#" className="hidden rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10 md:inline-flex">
          More on GitHub
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 p-5 shadow-lg transition hover:translate-y-[-2px] hover:bg-neutral-900/60"
          >
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-fuchsia-500/20 via-cyan-400/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100 pointer-events-none" />
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-neutral-300">{p.tag}</p>
            <p className="mt-3 text-neutral-200">{p.desc}</p>
            <a
              href={p.link}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
            >
              View case study →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
