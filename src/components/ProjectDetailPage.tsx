import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { ArrowLeft, CheckCircle2, Download, ExternalLink, Calendar, MapPin, Layers, Cpu, Share2, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { getAssetUrl, handleImageError } from '../utils/imageUtils';

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
  onOpenContact: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onBack,
  onOpenContact
}) => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeImage = project.images[selectedImgIndex] || { url: project.thumbnail, caption: project.title };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedImgIndex((prev) => (prev + 1) % project.images.length);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setSelectedImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      } else if (e.key === 'ArrowRight') {
        setSelectedImgIndex((prev) => (prev + 1) % project.images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, project.images.length]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pt-8 pb-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Navigation Row */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects Showcase</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white shadow-sm"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Link Copied!' : 'Share Project'}</span>
            </button>
          </div>
        </div>

        {/* Title Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            {(Array.isArray(project.category) ? project.category : [project.category]).map((cat, catIdx) => (
              <span key={catIdx} className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                {cat}
              </span>
            ))}
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm">
              {project.lod}
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Completed: {project.completionDate}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            {project.title}
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed max-w-3xl">
            {project.fullDesc}
          </p>
        </div>

        {/* Gallery Stage */}
        <div className="space-y-4">
          <div
            onClick={() => setIsLightboxOpen(true)}
            className="relative w-full h-[380px] sm:h-[500px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl group cursor-pointer"
          >
            <img
              src={getAssetUrl(activeImage.url)}
              alt={activeImage.caption}
              referrerPolicy="no-referrer"
              onError={(e) => handleImageError(e, project.category)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 group-hover:bg-slate-950/30 transition-all" />

            {/* Expand Hint Overlay Icon */}
            <div className="absolute top-4 right-4 z-10 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-cyan-300 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all backdrop-blur-md">
              <Maximize2 className="w-5 h-5" />
            </div>

            {/* Left/Right Navigation Arrows on Main Stage */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-cyan-500 hover:text-slate-950 border border-slate-800 transition-all shadow-xl backdrop-blur-md"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-cyan-500 hover:text-slate-950 border border-slate-800 transition-all shadow-xl backdrop-blur-md"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="px-4 py-2 rounded-xl text-xs font-mono bg-slate-950/90 text-cyan-300 border border-slate-800 backdrop-blur-md">
                {activeImage.caption}
              </span>
              <span className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 bg-slate-950/80 border border-slate-800">
                Image {selectedImgIndex + 1} of {project.images.length}
              </span>
            </div>
          </div>

          {/* Gallery Thumbnails */}
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
            {project.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImgIndex(idx)}
                className={`relative h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  selectedImgIndex === idx
                    ? 'border-cyan-400 ring-2 ring-cyan-500/40 scale-105'
                    : 'border-slate-800 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={getAssetUrl(img.url)} alt={img.caption} referrerPolicy="no-referrer" onError={(e) => handleImageError(e, project.category)} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Specifications & Deliverables Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          
          <div className="lg:col-span-8 space-y-6">
            {/* Key Features */}
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 space-y-4">
              <h3 className="text-base font-bold font-display text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>BIM Deliverables & Engineering Specifications</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-950/40 p-3 rounded-xl border border-slate-800/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Software used */}
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 space-y-3">
              <h3 className="text-base font-bold font-display text-white">Software Tools Applied</h3>
              <div className="flex flex-wrap gap-2">
                {project.softwareUsed.map((sw) => (
                  <span
                    key={sw}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-950 text-cyan-300 border border-slate-800"
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar Details */}
          <div className="lg:col-span-4 bg-slate-900/80 p-6 rounded-2xl border border-slate-800/80 space-y-6">
            <h3 className="text-sm font-mono uppercase text-slate-400 tracking-wider">Project Quick Facts</h3>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Client Region</span>
                <span className="font-semibold text-white">{project.clientRegion}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Level of Detail</span>
                <span className="font-semibold text-cyan-300">{project.lod}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Completion</span>
                <span className="font-semibold text-white">{project.completionDate}</span>
              </div>
              {project.areaSqFt && (
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Total Area</span>
                  <span className="font-semibold text-white">{project.areaSqFt}</span>
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="w-full py-3 px-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/20 text-xs text-center transition-all"
              >
                Inquire Similar BIM Project
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Textless Full Picture Lightbox Overlay Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
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
              src={getAssetUrl(activeImage.url)}
              alt=""
              referrerPolicy="no-referrer"
              onError={(e) => handleImageError(e, project.category)}
              className="max-h-[78vh] sm:max-h-[82vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
            />

            {/* Right Arrow */}
            {project.images.length > 1 && (
              <button
                onClick={handleNextImage}
                className="absolute right-2 sm:right-6 z-30 p-3.5 rounded-full bg-slate-900/80 text-white hover:bg-cyan-500 hover:text-slate-950 border border-slate-700 transition-all shadow-2xl backdrop-blur-md cursor-pointer"
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
                    onClick={() => setSelectedImgIndex(idx)}
                    className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      selectedImgIndex === idx
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
