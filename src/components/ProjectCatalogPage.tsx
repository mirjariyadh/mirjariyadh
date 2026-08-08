import React, { useState } from 'react';
import { Project } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import {
  ArrowLeft,
  Search,
  X,
  Filter,
  Building2,
  Scan,
  Layers,
  Zap,
  CheckCircle2,
  FileText,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight,
  FolderGit2
} from 'lucide-react';
import { getAssetUrl, handleImageError } from '../utils/imageUtils';

interface ProjectCatalogPageProps {
  onSelectProject: (project: Project) => void;
  onBackToHome: () => void;
}

const CATEGORIES = [
  'All',
  'Architectural Modeling',
  'Point Cloud to BIM',
  'Custom Revit Families',
  'MEP Systems',
  'Clash Detection',
  'Documentation'
];

export const ProjectCatalogPage: React.FC<ProjectCatalogPageProps> = ({
  onSelectProject,
  onBackToHome
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Filter projects by category and search query
  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    const categories = Array.isArray(proj.category) ? proj.category : [proj.category];
    const matchesCategory =
      selectedCategory === 'All' || categories.includes(selectedCategory as any);

    const query = searchQuery.toLowerCase().trim();
    const categoriesText = categories.join(' ').toLowerCase();

    const matchesSearch =
      !query ||
      proj.title.toLowerCase().includes(query) ||
      categoriesText.includes(query) ||
      proj.shortDesc.toLowerCase().includes(query) ||
      proj.softwareUsed.some((sw) => sw.toLowerCase().includes(query)) ||
      (proj.clientRegion && proj.clientRegion.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pt-6 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header & Navigation */}
        <div className="space-y-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-1 px-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home Showcase</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800/60 text-xs font-mono text-cyan-700 dark:text-cyan-300">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>FULL PROJECT CATALOG</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
                All BIM & Revit Projects
              </h1>

              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl leading-relaxed">
                Explore the complete collection of architectural, MEP, point cloud to BIM, clash matrix, and custom parametric Revit family deliverables.
              </p>
            </div>

            {/* Total Count Badge */}
            <div className="shrink-0">
              <div className="px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-right">
                <span className="text-2xl font-black font-display text-cyan-600 dark:text-cyan-400">
                  {filteredProjects.length}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">
                  {filteredProjects.length === PORTFOLIO_PROJECTS.length
                    ? 'Total Projects'
                    : `Filtered of ${PORTFOLIO_PROJECTS.length}`}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="space-y-4 bg-white dark:bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects by name, software, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded-full cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Reset Filter Button */}
            {(selectedCategory !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 self-end lg:self-center shrink-0 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-thin">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0 font-semibold flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5 text-cyan-500" />
              <span>Category:</span>
            </span>

            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const isHovered = hoveredCardId === project.id;

              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredCardId(project.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  onClick={() => onSelectProject(project)}
                  className={`group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border transition-all duration-300 cursor-pointer flex flex-col h-full shadow-sm ${
                    isHovered
                      ? 'border-cyan-500 dark:border-cyan-400 shadow-xl shadow-cyan-500/15 -translate-y-1'
                      : 'border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {/* Thumbnail Image Header */}
                  <div className="relative w-full h-52 overflow-hidden bg-slate-950 shrink-0">
                    <img
                      src={getAssetUrl(project.thumbnail)}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => handleImageError(e, project.category)}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        isHovered ? 'scale-105' : 'scale-100'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Category Tag */}
                    <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1 max-w-[70%]">
                      {(Array.isArray(project.category) ? project.category : [project.category]).map((cat, catIdx) => (
                        <span key={catIdx} className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950/85 text-cyan-300 border border-cyan-500/40 backdrop-blur-md shadow-sm">
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* LOD Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-950/85 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
                        {project.lod}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-base font-bold font-display text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors line-clamp-2">
                        {project.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {project.shortDesc}
                      </p>
                    </div>

                    {/* Software Used Tags & Action Footer */}
                    <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                      <div className="flex flex-wrap gap-1.5">
                        {project.softwareUsed.map((sw, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50"
                          >
                            {sw}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                        <span>Explore Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search Result State */
          <div className="text-center py-16 px-4 bg-white dark:bg-slate-900/40 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
              No projects found
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              We couldn't find any projects matching "{searchQuery}". Try adjusting your category filter or search keywords.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
