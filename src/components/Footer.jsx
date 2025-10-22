import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Let’s build something great</h3>
            <p className="mt-2 max-w-lg text-neutral-300">
              Open to freelance, full‑time, and collaboration opportunities. Drop a line and I’ll get back within 24 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-neutral-200 hover:text-white">
              <Mail className="h-5 w-5" /> hello@example.com
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-neutral-200 hover:text-white">
              <Github className="h-5 w-5" /> github.com/yourhandle
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-neutral-200 hover:text-white">
              <Linkedin className="h-5 w-5" /> linkedin.com/in/yourhandle
            </a>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-sm text-neutral-400">
          <span>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</span>
          <span>Crafted with React • Tailwind • Spline</span>
        </div>
      </div>
    </footer>
  );
}
