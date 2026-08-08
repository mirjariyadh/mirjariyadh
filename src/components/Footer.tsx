import React from 'react';
import { ViewTab } from '../types';
import { EXTERNAL_LINKS } from '../data/portfolioData';
import { Box, ArrowUp, Linkedin, Globe } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: ViewTab) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 font-sans transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-3 lg:px-4 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold">
                <Box className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h3 className="text-base font-extrabold font-display tracking-wider uppercase text-slate-900 dark:text-white leading-none">
                  MIRJA RIYADH
                </h3>
                <p className="text-[10px] font-mono text-teal-600 dark:text-teal-400 font-semibold tracking-widest uppercase mt-0.5">
                  BIM SPECIALIST
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              BIM Modeling & CAD solutions for architecture, engineering and construction projects.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 space-y-2.5">
            <h4 className="text-xs font-mono uppercase text-slate-900 dark:text-white tracking-wider font-bold">Quick Links</h4>
            <ul className="space-y-1.5 text-xs font-medium">
              <li>
                <button onClick={() => { onSelectTab('home'); scrollToTop(); }} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('journey')} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectTab('home'); const elem = document.getElementById('core-services-section'); if (elem) elem.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('projects')} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectTab('home'); const elem = document.getElementById('workflow-process-section'); if (elem) elem.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Process
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-mono uppercase text-slate-900 dark:text-white tracking-wider font-bold">Services</h4>
            <ul className="space-y-1.5 text-xs font-medium">
              <li className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Point Cloud / Scan-to-BIM</li>
              <li className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Architectural BIM</li>
              <li className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">MEP BIM</li>
              <li className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">AutoCAD / CAD Drafting</li>
            </ul>
          </div>

          {/* Follow Me Column */}
          <div className="md:col-span-2 space-y-2.5">
            <h4 className="text-xs font-mono uppercase text-slate-900 dark:text-white tracking-wider font-bold">Follow Me</h4>
            <div className="flex items-center gap-2">
              <a
                href={EXTERNAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/50 transition-all shadow-sm"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={EXTERNAL_LINKS.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/50 transition-all font-mono font-bold text-xs shadow-sm"
                title="Fiverr"
              >
                Fi
              </a>
              <a
                href={EXTERNAL_LINKS.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/50 transition-all font-mono font-bold text-xs shadow-sm"
                title="Upwork"
              >
                Up
              </a>
              <a
                href="https://mirjariyadh.com.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/50 transition-all shadow-sm"
                title="Website"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} Mirja Riyadh. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-7 h-7 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/50 transition-all cursor-pointer shadow-sm"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
