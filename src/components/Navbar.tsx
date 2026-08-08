import React from 'react';
import { ViewTab } from '../types';
import { Box, Sparkles, FolderGit2, Star, Briefcase, Mail, ArrowUpRight, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  currentTab: ViewTab;
  onSelectTab: (tab: ViewTab) => void;
  onOpenContact: () => void;
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenContact,
  isDarkMode = true,
  onToggleTheme,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Brand: MIRJA RIYADH - BIM SPECIALIST */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onSelectTab('home')}>
            <div className="w-9 h-9 rounded-lg bg-teal-500/10 dark:bg-teal-400/20 border border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold">
              <Box className="w-5 h-5 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <div className="text-base font-extrabold tracking-wider uppercase text-slate-900 dark:text-white font-display leading-none">
                MIRJA RIYADH
              </div>
              <div className="text-[10px] font-mono tracking-widest text-teal-600 dark:text-teal-400 font-semibold uppercase mt-0.5">
                BIM SPECIALIST
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => {
                onSelectTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-xs font-mono font-bold tracking-wider uppercase transition-colors ${
                currentTab === 'home'
                  ? 'text-teal-600 dark:text-teal-400 font-extrabold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400'
              }`}
            >
              HOME
            </button>

            <button
              onClick={() => {
                onSelectTab('journey');
              }}
              className={`text-xs font-mono font-bold tracking-wider uppercase transition-colors ${
                currentTab === 'journey'
                  ? 'text-teal-600 dark:text-teal-400 font-extrabold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400'
              }`}
            >
              ABOUT
            </button>

            <button
              onClick={() => {
                onSelectTab('home');
                const elem = document.getElementById('core-services-section');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs font-mono font-bold tracking-wider uppercase text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              SERVICES
            </button>

            <button
              onClick={() => {
                onSelectTab('projects');
              }}
              className={`text-xs font-mono font-bold tracking-wider uppercase transition-colors ${
                currentTab === 'projects'
                  ? 'text-teal-600 dark:text-teal-400 font-extrabold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400'
              }`}
            >
              PROJECTS
            </button>

            <button
              onClick={() => {
                onSelectTab('home');
                const elem = document.getElementById('workflow-process-section');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs font-mono font-bold tracking-wider uppercase text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              PROCESS
            </button>

            <button
              onClick={onOpenContact}
              className="text-xs font-mono font-bold tracking-wider uppercase text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              CONTACT
            </button>
          </nav>

          {/* Right Action Buttons: Theme Toggle & Contact */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                aria-label="Toggle Theme"
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className="relative flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-teal-500/50 transition-all duration-200 shadow-sm group"
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700 group-hover:-rotate-12 transition-transform" />
                )}
              </button>
            )}

            <button
              onClick={onOpenContact}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold font-mono tracking-wider text-white bg-teal-600 hover:bg-teal-500 active:bg-teal-700 shadow-md shadow-teal-600/20 transition-all duration-200 cursor-pointer"
            >
              <span>Let's Work Together</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Bar Below for Easy Navigation */}
      <div className="md:hidden flex items-center justify-around py-2.5 px-3 bg-white/95 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">
        <button
          onClick={() => onSelectTab('home')}
          className={`px-3 py-1.5 rounded-md ${currentTab === 'home' ? 'text-cyan-600 dark:text-cyan-400 font-bold bg-slate-100 dark:bg-slate-800' : ''}`}
        >
          Showcase
        </button>
        <button
          onClick={() => onSelectTab('projects')}
          className={`px-3 py-1.5 rounded-md ${currentTab === 'projects' ? 'text-cyan-600 dark:text-cyan-400 font-bold bg-slate-100 dark:bg-slate-800' : ''}`}
        >
          Projects
        </button>
        <button
          onClick={() => onSelectTab('testimonials')}
          className={`px-3 py-1.5 rounded-md ${currentTab === 'testimonials' ? 'text-cyan-600 dark:text-cyan-400 font-bold bg-slate-100 dark:bg-slate-800' : ''}`}
        >
          Reviews
        </button>
        <button
          onClick={() => onSelectTab('journey')}
          className={`px-3 py-1.5 rounded-md ${currentTab === 'journey' ? 'text-cyan-600 dark:text-cyan-400 font-bold bg-slate-100 dark:bg-slate-800' : ''}`}
        >
          Journey
        </button>
      </div>
    </header>
  );
};
