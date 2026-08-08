import React, { useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, ChevronLeft, ChevronRight, Layers, Cpu, CheckCircle2, MapPin, Calendar, Maximize2 } from 'lucide-react';
import { getAssetUrl, handleImageError } from '../utils/imageUtils';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onViewFullDetail: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onViewFullDetail }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!project) return null;

  const currentImage = project.images[activeImageIndex] || { url: project.thumbnail, caption: project.title };

  const handleNextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-slate-900 dark:text-white transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
          <div className="flex flex-wrap items-center gap-2">
            {(Array.isArray(project.category) ? project.category : [project.category]).map((cat, catIdx) => (
              <span key={catIdx} className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                {cat}
              </span>
            ))}
            <span className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded">
              {project.lod}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Scrollable */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Main Image Preview Stage */}
          <div
            onClick={() => setIsLightboxOpen(true)}
            className="relative w-full h-[280px] sm:h-[380px] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group cursor-pointer"
          >
            <img
              src={getAssetUrl(currentImage.url)}
              alt={currentImage.caption}
              referrerPolicy="no-referrer"
              onError={(e) => handleImageError(e, project.category)}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            
            {/* Image Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />

            {/* Expand Hint Icon */}
            <div className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-slate-950/70 border border-slate-800 text-cyan-300 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all backdrop-blur-md">
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Caption Tag */}
            <div className="absolute bottom-3 left-4 right-16 z-10 pointer-events-none">
              <p className="text-xs font-mono text-cyan-300 bg-slate-950/80 backdrop-blur-md py-1.5 px-3 rounded-lg border border-slate-800 inline-block">
                {currentImage.caption}
              </p>
            </div>

            {/* Carousel Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/80 text-white hover:bg-cyan-500 hover:text-slate-950 border border-slate-800 transition-all shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/80 text-white hover:bg-cyan-500 hover:text-slate-950 border border-slate-800 transition-all shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Selector Row */}
          {project.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-cyan-400 ring-2 ring-cyan-500/30 scale-105'
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={getAssetUrl(img.url)} alt={img.caption} referrerPolicy="no-referrer" onError={(e) => handleImageError(e, project.category)} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Title & Description */}
          <div>
            <h3 className="text-2xl font-bold font-display text-white mb-2">{project.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{project.fullDesc}</p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
            <div>
              <span className="text-slate-400 block mb-1">Target LOD</span>
              <span className="font-mono font-semibold text-cyan-300">{project.lod}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">Location</span>
              <span className="font-semibold text-slate-200">{project.clientRegion}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">Completion</span>
              <span className="font-semibold text-slate-200">{project.completionDate}</span>
            </div>
            {project.areaSqFt && (
              <div>
                <span className="text-slate-400 block mb-1">Project Scale</span>
                <span className="font-semibold text-slate-200">{project.areaSqFt}</span>
              </div>
            )}
          </div>

          {/* Software Used Tags */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Software Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.softwareUsed.map((sw) => (
                <span
                  key={sw}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {sw}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features List */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">BIM Deliverables & Specifications</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer: View Detail Link */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/80">
          <p className="text-xs text-slate-400 hidden sm:block">
            Click view details to examine full CAD/BIM specifications
          </p>

          <button
            onClick={() => {
              onClose();
              onViewFullDetail(project);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-lg shadow-cyan-500/20 text-sm transition-all"
          >
            <span>View Full Detail Page</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Textless Full Picture Lightbox Overlay Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col justify-between bg-black/95 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Top Bar: Close Button ONLY (No Text) */}
          <div className="flex justify-end w-full max-w-7xl mx-auto z-20" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-3 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/80 transition-all shadow-xl cursor-pointer"
              aria-label="Close full view"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Stage: Full Picture with Left and Right Navigation Arrows (No Text) */}
          <div
            className="relative flex-1 flex items-center justify-center my-auto w-full max-w-7xl mx-auto overflow-hidden px-2 sm:px-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Arrow */}
            {project.images.length > 1 && (
              <button
                onClick={handlePrevImage}
                className="absolute left-2 sm:left-6 z-30 p-3.5 rounded-full bg-slate-900/80 text-white hover:bg-cyan-500 hover:text-slate-950 border border-slate-700 transition-all shadow-2xl backdrop-blur-md cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Main Picture */}
            <img
              src={getAssetUrl(currentImage.url)}
              alt=""
              referrerPolicy="no-referrer"
              onError={(e) => handleImageError(e, project.category)}
              className="max-h-[78vh] sm:max-h-[82vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
            />

            {/* Right Arrow */}
            {project.images.length > 1 && (
              <button
                onClick={handleNextImage}
                className="absolute right-2 sm:left-auto sm:right-6 z-30 p-3.5 rounded-full bg-slate-900/80 text-white hover:bg-cyan-500 hover:text-slate-950 border border-slate-700 transition-all shadow-2xl backdrop-blur-md cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Bottom Row: Thumbnail Selector Pictures ONLY (No Text) */}
          {project.images.length > 1 && (
            <div className="w-full max-w-4xl mx-auto pt-3 z-20" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-2 px-4 scrollbar-thin">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-cyan-400 ring-2 ring-cyan-500/50 scale-105 opacity-100'
                        : 'border-slate-800 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={getAssetUrl(img.url)}
                      alt=""
                      referrerPolicy="no-referrer"
                      onError={(e) => handleImageError(e, project.category)}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
