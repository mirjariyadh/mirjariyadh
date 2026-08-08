import React from 'react';
import { CLIENT_REVIEWS, EXTERNAL_LINKS } from '../data/portfolioData';
import { Star, Award, ExternalLink } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const fiverrReviews = CLIENT_REVIEWS.filter((r) => r.platform === 'Fiverr');
  const upworkReviews = CLIENT_REVIEWS.filter((r) => r.platform === 'Upwork');

  return (
    <section id="testimonials" className="py-10 sm:py-14 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-3 lg:px-4 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-cyan-600 dark:text-cyan-400 shadow-sm">
              <Award className="w-3 h-3" />
              <span>TESTIMONIALS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
              Client Feedback & Reviews
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Ratings badge */}
            <div className="flex items-center gap-3 bg-white dark:bg-slate-900 px-3.5 py-2 rounded-sm border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
                5.0 Rating on Fiverr & Upwork
              </span>
            </div>

            {/* Profile Proof Links */}
            <a
              href={EXTERNAL_LINKS.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold transition-all shadow-sm"
              title="View Fiverr Profile"
            >
              <span>Fiverr Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={EXTERNAL_LINKS.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono font-bold transition-all shadow-sm"
              title="View Upwork Profile"
            >
              <span>Upwork Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          
          {/* Card 1: Fiverr Verified */}
          {fiverrReviews[0] && (
            <div className="bg-white dark:bg-slate-900/80 p-4.5 rounded-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm hover:border-emerald-500/50 transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <a
                    href={EXTERNAL_LINKS.fiverr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Fiverr Verified</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans italic">
                  "{fiverrReviews[0].comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-4 flex items-center justify-between text-xs font-mono">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{fiverrReviews[0].clientName}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">{fiverrReviews[0].clientCountry}</div>
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">{fiverrReviews[0].date}</div>
              </div>
            </div>
          )}

          {/* Card 2: Upwork Verified */}
          {upworkReviews[0] && (
            <div className="bg-white dark:bg-slate-900/80 p-4.5 rounded-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm hover:border-cyan-500/50 transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <a
                    href={EXTERNAL_LINKS.upwork}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800 font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Upwork Verified</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans italic">
                  "{upworkReviews[0].comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-4 flex items-center justify-between text-xs font-mono">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{upworkReviews[0].clientName}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">{upworkReviews[0].clientCountry}</div>
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">{upworkReviews[0].date}</div>
              </div>
            </div>
          )}

          {/* Card 3: Upwork Verified 2 */}
          {upworkReviews[1] && (
            <div className="bg-white dark:bg-slate-900/80 p-4.5 rounded-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm hover:border-cyan-500/50 transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <a
                    href={EXTERNAL_LINKS.upwork}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800 font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Upwork Verified</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans italic">
                  "{upworkReviews[1].comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-4 flex items-center justify-between text-xs font-mono">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{upworkReviews[1].clientName}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">{upworkReviews[1].clientCountry}</div>
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">{upworkReviews[1].date}</div>
              </div>
            </div>
          )}

        </div>

        {/* Verification banner link */}
        <div className="bg-white dark:bg-slate-900 p-3.5 rounded-sm border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Looking for full client work history and ratings?</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={EXTERNAL_LINKS.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 hover:underline font-bold flex items-center gap-1"
            >
              <span>Check Fiverr Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <a
              href={EXTERNAL_LINKS.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 dark:text-cyan-400 hover:underline font-bold flex items-center gap-1"
            >
              <span>Check Upwork Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
