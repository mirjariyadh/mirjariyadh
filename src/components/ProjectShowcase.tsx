import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import {
  Box,
  Building2,
  Scan,
  Layers,
  Zap,
  CheckCircle2,
  FileText,
  Grid,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { getAssetUrl, handleImageError } from '../utils/imageUtils';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
  onViewAllProjects: () => void;
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
}

interface CategoryConfig {
  name: string;
  icon: React.ElementType;
  description: string;
}

const CATEGORY_CONFIGS: CategoryConfig[] = [
  {
    name: 'Architectural Modeling',
    icon: Building2,
    description: 'Precise 3D Revit models from concept sketches to fully detailed architectural sets.',
  },
  {
    name: 'Point Cloud to BIM',
    icon: Scan,
    description: 'Converting laser-scan point cloud data into accurate, ready-to-use 3D Revit models.',
  },
  {
    name: 'Custom Revit Families',
    icon: Layers,
    description: 'Parametric family creation with formulas tailored to specific client requirements.',
  },
  {
    name: 'MEP Systems',
    icon: Zap,
    description: 'HVAC ducting, plumbing & piping, electrical systems modeled with clash-free coordination.',
  },
  {
    name: 'Clash Detection',
    icon: CheckCircle2,
    description: 'Identifying and resolving conflicts across disciplines using Navisworks Manage.',
  },
  {
    name: 'Documentation',
    icon: FileText,
    description: 'Construction, shop & GA drawings with clean, code-compliant 2D output.',
  },
];

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  onSelectProject,
  onViewAllProjects,
  activeFilter,
  onFilterChange,
}) => {
  const [internalFilter, setInternalFilter] = useState<string>('All');

  const currentFilter = activeFilter !== undefined ? activeFilter : internalFilter;

  const handleSelectFilter = (filter: string) => {
    setInternalFilter(filter);
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };

  // Filter categories matching screenshot: All, Point Cloud, Architectural, MEP Systems, AutoCAD
  const filters = ['All', 'Point Cloud', 'Architectural', 'MEP Systems', 'AutoCAD'];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    if (currentFilter === 'All') return true;
    const categories = Array.isArray(proj.category) ? proj.category : [proj.category];
    const catStr = categories.join(' ').toLowerCase();
    const shortDesc = proj.shortDesc ? proj.shortDesc.toLowerCase() : '';
    const title = proj.title.toLowerCase();
    const sw = proj.softwareUsed ? proj.softwareUsed.join(' ').toLowerCase() : '';

    const filterLower = currentFilter.toLowerCase();

    if (filterLower === 'mep' || filterLower === 'mep systems') {
      return catStr.includes('mep') || shortDesc.includes('mep') || title.includes('mep');
    }

    if (filterLower === 'autocad') {
      return catStr.includes('cad') || sw.includes('autocad') || title.includes('cad') || shortDesc.includes('cad');
    }

    return (
      catStr.includes(filterLower) ||
      title.includes(filterLower) ||
      shortDesc.includes(filterLower) ||
      sw.includes(filterLower)
    );
  });

  // Pick top 8 featured projects
  const displayedProjects = filteredProjects.slice(0, 8);

  return (
    <section id="projects-showcase" className="py-10 lg:py-14 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-3 lg:px-4 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-1">
              PORTFOLIO
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
              Selected Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleSelectFilter(filter)}
                className={`px-3 py-1 rounded-sm text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                  currentFilter === filter
                    ? 'bg-teal-600 dark:bg-teal-500 text-white dark:text-slate-950 shadow-sm font-extrabold'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((proj) => {
              const categoryLabel = Array.isArray(proj.category) ? proj.category[0] : proj.category;
              const thumbUrl = getAssetUrl(proj.thumbnail);

              return (
                <div
                  key={proj.id}
                  onClick={() => onSelectProject(proj)}
                  className="group relative bg-white dark:bg-slate-800/90 rounded-sm overflow-hidden border border-slate-200 dark:border-slate-700/80 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-sm"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                    <img
                      src={thumbUrl}
                      alt={proj.title}
                      onError={(e) => handleImageError(e, thumbUrl)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                    
                    {/* Category Pill Tag */}
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 rounded-sm bg-slate-950/80 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider uppercase text-teal-300 border border-teal-500/30">
                        {categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                        {proj.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                        {proj.lod} {proj.softwareUsed && proj.softwareUsed.length > 0 && `| ${proj.softwareUsed[0]}`}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700/50">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        {proj.clientRegion}
                      </span>
                      <div className="w-5 h-5 rounded-sm bg-slate-100 dark:bg-slate-700/50 group-hover:bg-teal-600 dark:group-hover:bg-teal-500 group-hover:text-white dark:group-hover:text-slate-950 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all">
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-12 text-center text-slate-500 font-mono text-xs">
              No projects found for category "{currentFilter}".
            </div>
          )}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button
            onClick={onViewAllProjects}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-sm font-bold font-mono text-xs tracking-wider uppercase text-slate-900 dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 hover:border-teal-500 transition-all duration-200 cursor-pointer shadow-sm"
          >
            <span>View All Projects</span>
          </button>
        </div>

      </div>
    </section>
  );
};
