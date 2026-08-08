import React from 'react';
import { JourneyExperience } from '../types';
import { ArrowLeft, Briefcase, Calendar, MapPin, CheckCircle2, Cpu, Award, Building2 } from 'lucide-react';

interface JourneyDetailPageProps {
  experience: JourneyExperience;
  onBack: () => void;
  onOpenContact: () => void;
}

export const JourneyDetailPage: React.FC<JourneyDetailPageProps> = ({
  experience,
  onBack,
  onOpenContact
}) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pt-8 pb-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Career Timeline</span>
        </button>

        {/* Header Card */}
        <div className="bg-white dark:bg-slate-900/80 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 mb-3">
                <Briefcase className="w-3.5 h-3.5" />
                <span>{experience.employmentType}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white">{experience.title}</h1>
              <div className="flex items-center gap-2 text-lg text-cyan-700 dark:text-cyan-400 font-semibold mt-1">
                <Building2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span>{experience.company}</span>
              </div>
            </div>

            <div className="text-left sm:text-right space-y-1 font-mono text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center sm:justify-end gap-1.5 text-slate-700 dark:text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {experience.summary}
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {experience.highlights.map((hl, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-950/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 flex items-start gap-3">
                <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Responsibilities Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>Core Responsibilities & Deliverables</span>
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {experience.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/50">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Projects */}
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold font-display text-white">Major Project Undertakings</h3>
              <div className="flex flex-wrap gap-2">
                {experience.keyProjects.map((kp, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-slate-950 text-cyan-300 border border-slate-800">
                    {kp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
                Areas of Expertise
              </h4>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                {experience.areasOfExpertise.map((aoe, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{aoe}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
                Software & Equipment Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {experience.software.map((sw, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800 text-slate-200">
                    {sw}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={onOpenContact}
                className="w-full py-3 px-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/20 text-xs text-center transition-all"
              >
                Inquire Experience / References
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
