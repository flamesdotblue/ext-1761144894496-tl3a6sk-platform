import React from 'react';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="group inline-flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">MyPortfolio</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          <a href="#projects" className="text-sm text-neutral-300 transition hover:text-white">Projects</a>
          <a href="#contact" className="text-sm text-neutral-300 transition hover:text-white">Contact</a>
          <div className="ml-2 flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-neutral-900/60 ring-1 ring-white/10 transition hover:bg-neutral-800/80">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-neutral-900/60 ring-1 ring-white/10 transition hover:bg-neutral-800/80">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="Email" href="#contact" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-neutral-900/60 ring-1 ring-white/10 transition hover:bg-neutral-800/80">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
