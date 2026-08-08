import React, { useState } from 'react';
import { BimWireframeCanvas } from './BimWireframeCanvas';
import { ArrowRight, Box, Building2, Settings2, Globe, Scan, Cpu, FileText, Layers, Sparkles } from 'lucide-react';
import heroIsometricImg from '../assets/images/hero.webp';

interface HeroProps {
  onViewProjects: (filter?: string) => void;
  onOpenContact: () => void;
  onExploreService?: (categoryFilter: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects, onOpenContact, onExploreService }) => {
  const [heroView, setHeroView] = useState<'image' | 'canvas'>('image');
  const [tilt, setTilt] = useState<{ rx: number; ry: number; isHovered: boolean }>({
    rx: 0,
    ry: 0,
    isHovered: false,
  });

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const ry = ((x - centerX) / centerX) * 20; // rotation Y degrees
    const rx = -((y - centerY) / centerY) * 20; // rotation X degrees

    setTilt({ rx, ry, isHovered: true });
  };

  const handleImageMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, isHovered: false });
  };

  const handleExplore = (filter: string) => {
    if (onExploreService) {
      onExploreService(filter);
    } else {
      onViewProjects(filter);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-14 lg:pt-12 lg:pb-16">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Green Availability Label */}
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                <span>AVAILABLE FOR PROJECTS</span>
                <span className="w-12 h-[2px] bg-teal-500/60" />
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white leading-[1.12]">
                BIM Modeling & CAD Solutions for the{' '}
                <span className="text-teal-600 dark:text-teal-400">
                  Built Environment
                </span>
              </h1>

              {/* Sub-headline Dots */}
              <div className="text-xs sm:text-sm font-mono font-bold text-slate-700 dark:text-slate-300 tracking-wide flex flex-wrap gap-2 items-center">
                <span>Point Cloud</span>
                <span className="text-teal-500">•</span>
                <span>Architectural BIM</span>
                <span className="text-teal-500">•</span>
                <span>MEP Systems</span>
                <span className="text-teal-500">•</span>
                <span>AutoCAD</span>
              </div>

              {/* Subtitle Description */}
              <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl font-sans leading-relaxed">
                I transform point clouds, drawings, and design information into accurate BIM models, coordinated MEP systems, and professional CAD documentation.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => onViewProjects('All')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm font-bold font-mono text-xs tracking-wider uppercase text-white bg-teal-600 hover:bg-teal-500 active:bg-teal-700 shadow-md shadow-teal-600/20 transition-all duration-200 cursor-pointer"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm font-bold font-mono text-xs tracking-wider uppercase text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-teal-500 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <span>Let's Work Together</span>
                </button>
              </div>

            </div>

            {/* Right Hero Column: Seamlessly Blended Building Render / BIM Canvas */}
            <div className="lg:col-span-5 relative group">
              {/* Top View Toggle Switcher */}
              <div className="flex items-center justify-between mb-3 z-20 relative">
                <div className="flex items-center gap-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-sm border border-slate-200 dark:border-slate-800 text-[10px] font-mono text-teal-600 dark:text-teal-400 shadow-sm">
                  <Sparkles className="w-3 h-3 text-teal-500 animate-pulse" />
                  <span className="font-bold tracking-wider">3D BIM RENDERING & SCAN</span>
                </div>

                <div className="flex items-center gap-1 bg-white/90 dark:bg-slate-900/90 p-0.5 rounded-sm border border-slate-200 dark:border-slate-800 text-[10px] font-mono shadow-sm">
                  <button
                    onClick={() => setHeroView('image')}
                    className={`px-2.5 py-1 rounded-sm transition-all flex items-center gap-1 cursor-pointer ${
                      heroView === 'image'
                        ? 'bg-teal-600 text-white font-bold shadow'
                        : 'text-slate-600 dark:text-slate-400 hover:text-teal-600'
                    }`}
                  >
                    <Building2 className="w-3 h-3" />
                    <span>3D Render</span>
                  </button>
                  <button
                    onClick={() => setHeroView('canvas')}
                    className={`px-2.5 py-1 rounded-sm transition-all flex items-center gap-1 cursor-pointer ${
                      heroView === 'canvas'
                        ? 'bg-teal-600 text-white font-bold shadow'
                        : 'text-slate-600 dark:text-slate-400 hover:text-teal-600'
                    }`}
                  >
                    <Layers className="w-3 h-3" />
                    <span>3D Orbit</span>
                  </button>
                </div>
              </div>

              {heroView === 'image' ? (
                <div
                  onMouseMove={handleImageMouseMove}
                  onMouseLeave={handleImageMouseLeave}
                  className="relative w-full h-[400px] sm:h-[460px] rounded-sm bg-white/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md overflow-hidden flex items-center justify-center p-2 shadow-2xl transition-all duration-300 cursor-crosshair [perspective:1200px]"
                >
                  {/* Subtle Background Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-35 dark:opacity-20 pointer-events-none" />

                  {/* Radial Ambient Glow */}
                  <div className="absolute inset-0 bg-radial from-teal-500/20 via-transparent to-transparent opacity-90 pointer-events-none" />

                  {/* Main Blended 3D Isometric Building Image with Interactive Mouse Tilt */}
                  <div
                    className="relative w-full h-full flex items-center justify-center overflow-hidden [transform-style:preserve-3d] transition-transform duration-200 ease-out pointer-events-none"
                    style={{
                      transform: tilt.isHovered
                        ? `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale3d(1.08, 1.08, 1.08)`
                        : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                    }}
                  >
                    <img
                      src={heroIsometricImg}
                      alt="3D Isometric Architectural BIM Building Model Render"
                      className="max-w-[105%] max-h-[105%] object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] mix-blend-multiply dark:mix-blend-screen dark:opacity-95 dark:brightness-110 dark:contrast-125 transition-all duration-300"
                      style={{
                        maskImage: 'radial-gradient(ellipse at center, black 80%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, black 80%, transparent 100%)',
                      }}
                    />

                    {/* Laser Scan Sweep Beam Overlay */}
                    <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent shadow-[0_0_12px_#22d3ee] animate-[scan_4s_ease-in-out_infinite] pointer-events-none" />
                  </div>

                  {/* Bottom Right Specification HUD Badge */}
                  <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-sm border border-slate-700 text-[10px] font-mono text-teal-300 shadow-md pointer-events-none z-10">
                    <span>LOD 400 SPECIFICATION</span>
                  </div>
                </div>
              ) : (
                <BimWireframeCanvas />
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS ROW (4-GRID) */}
      <section className="border-y border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x-0 md:divide-x divide-slate-200 dark:divide-slate-800">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-3.5 md:px-4 first:pl-0">
              <div className="w-10 h-10 rounded-sm bg-teal-500/10 dark:bg-teal-400/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                <Box className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-slate-900 dark:text-white">50+</div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Scan-to-BIM Projects</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3.5 md:px-4">
              <div className="w-10 h-10 rounded-sm bg-teal-500/10 dark:bg-teal-400/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-slate-900 dark:text-white">100+</div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">BIM & CAD Projects</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3.5 md:px-4">
              <div className="w-10 h-10 rounded-sm bg-teal-500/10 dark:bg-teal-400/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                <Settings2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-slate-900 dark:text-white">4</div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Core Services</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3.5 md:px-4">
              <div className="w-10 h-10 rounded-sm bg-teal-500/10 dark:bg-teal-400/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-slate-900 dark:text-white">Global</div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Client Experience</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION ("WHAT I DO") */}
      <section id="core-services-section" className="py-12 lg:py-16 max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-1">
              WHAT I DO
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
              Core Services
            </h2>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md">
            From reality capture and drawings to coordinated BIM models and professional CAD documentation.
          </p>
        </div>

        {/* 4 Cards Grid with Distinct Dynamic Gradient Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Service Card 1: Point Cloud - Teal/Emerald/Cyan Gradient Border */}
          <div className="relative group p-[2px] rounded-sm bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-500 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-[1px] h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-sm bg-teal-500/10 dark:bg-teal-400/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                    <Scan className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-0.5">
                  POINT CLOUD
                </h3>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Scan-to-BIM
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  Transforming point cloud data into accurate existing-condition and as-built BIM models.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 mb-5">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>Point Cloud to Revit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>Existing Conditions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>As-Built BIM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>LOD-based Modeling</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleExplore('Point Cloud')}
                className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-teal-600 dark:text-teal-400 hover:text-teal-500 transition-colors cursor-pointer"
              >
                <span>Explore Service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Service Card 2: Architectural - Blue/Sky/Teal Gradient Border */}
          <div className="relative group p-[2px] rounded-sm bg-gradient-to-r from-blue-500 via-sky-400 to-teal-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-[1px] h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-sm bg-sky-500/10 dark:bg-sky-400/10 border border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400">
                    <Box className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-0.5">
                  ARCHITECTURAL
                </h3>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  BIM Modeling
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  Intelligent architectural modeling with accurate documentation and schedules.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 mb-5">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                    <span>PDF / DWG to Revit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                    <span>Architectural Modeling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                    <span>Revit Families</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                    <span>Documentation</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleExplore('Architectural')}
                className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-sky-600 dark:text-sky-400 hover:text-sky-500 transition-colors cursor-pointer"
              >
                <span>Explore Service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Service Card 3: MEP Systems - Amber/Orange/Rose Gradient Border */}
          <div className="relative group p-[2px] rounded-sm bg-gradient-to-r from-amber-500 via-orange-400 to-rose-500 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-[1px] h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-sm bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-0.5">
                  MEP SYSTEMS
                </h3>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  BIM & Coordination
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  Coordinated MEP systems for better performance, clash-free construction.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 mb-5">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>HVAC Ducting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Plumbing & Piping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Electrical Layouts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Coordination & Clash Detection</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleExplore('MEP Systems')}
                className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors cursor-pointer"
              >
                <span>Explore Service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Service Card 4: AutoCAD - Fuchsia/Purple/Indigo Gradient Border */}
          <div className="relative group p-[2px] rounded-sm bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-500 hover:shadow-lg hover:shadow-fuchsia-500/20 transition-all duration-300">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-[1px] h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-sm bg-fuchsia-500/10 dark:bg-fuchsia-400/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-fuchsia-600 dark:text-fuchsia-400 mb-0.5">
                  AUTOCAD
                </h3>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  CAD Drafting
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  High-quality 2D drafting from PDF, images, sketches and existing drawings.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 mb-5">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shrink-0" />
                    <span>PDF to DWG</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shrink-0" />
                    <span>Image to CAD</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shrink-0" />
                    <span>Architectural Drafting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shrink-0" />
                    <span>MEP Drafting</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleExplore('AutoCAD')}
                className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-500 transition-colors cursor-pointer"
              >
                <span>Explore Service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
