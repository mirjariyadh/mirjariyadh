import React from 'react';
import { CAREER_JOURNEY } from '../data/portfolioData';
import { JourneyExperience } from '../types';
import { Briefcase, Calendar, MapPin, ChevronRight, Building2, Award } from 'lucide-react';

interface JourneyTimelineProps {
  onSelectExperience: (exp: JourneyExperience) => void;
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ onSelectExperience }) => {
  return (
    <section id="journey" className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-left mb-8 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-cyan-600 dark:text-cyan-400 shadow-sm">
            <Briefcase className="w-3 h-3" />
            <span>CAREER JOURNEY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Engineering & BIM Background
          </h2>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CAREER_JOURNEY.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectExperience(item)}
              className="group bg-white dark:bg-slate-900/80 p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-3">
                {/* Header info */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                    {item.employmentType}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold font-display text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-cyan-700 dark:text-cyan-400 font-semibold mt-0.5">
                    <Building2 className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                    <span>{item.company}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                  {item.summary}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-4 flex items-center justify-between text-xs font-mono text-cyan-600 dark:text-cyan-400">
                <span>View Details</span>
                <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
