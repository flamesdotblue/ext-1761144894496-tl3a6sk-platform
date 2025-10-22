import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative isolate min-h-[86vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-neutral-950 to-transparent opacity-90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-neutral-950 to-transparent opacity-90" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 px-4 pt-28 md:px-6 md:pt-36">
        <div className="max-w-2xl rounded-2xl border border-white/10 bg-neutral-950/50 p-6 shadow-2xl backdrop-blur">
          <p className="text-sm uppercase tracking-widest text-neutral-300">Tech • Interactive • Modern</p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Building playful, human-centered experiences for the web
          </h1>
          <p className="mt-3 text-neutral-300">
            I’m a front‑end developer who loves 3D, motion, and accessible design. Scroll to explore selected work.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
