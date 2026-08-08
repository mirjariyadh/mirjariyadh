import React from 'react';
import { ArrowRight, Send, Mail, MapPin, Phone, Upload, Cpu, Layers, CheckCircle, FileCheck } from 'lucide-react';
import bimEcosystemImg from '../assets/images/bim_ecosystem_diagram_1786164617788.webp';
import pointCloudBimImg from '../assets/images/point_cloud_bim_1785993136586.webp';
import mepClashImg from '../assets/images/mep_clash_detection_1785993146756.webp';
import archModelImg from '../assets/images/bim_architectural_model_1785993123920.webp';
import revitFamilyImg from '../assets/images/revit_custom_family_1785993157920.webp';
import isometricImg from '../assets/images/isometric_3d_bim_building_1786164106214.webp';
import { ImageComparisonSlider } from './ImageComparisonSlider';

interface WorkflowSectionProps {
  onOpenContact: () => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onOpenContact }) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* 1. WORKFLOW PROCESS STEPS SECTION */}
      <section id="workflow-process-section" className="py-10 lg:py-14 max-w-[1400px] mx-auto px-2 sm:px-3 lg:px-4">
        
        <div className="text-left mb-6">
          <div className="text-xs font-mono font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-1">
            MY WORKFLOW
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
            From Data to Deliverables
          </h2>
        </div>

        {/* 5 Steps Chain */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3.5 relative">
          
          {/* Step 1 */}
          <div className="bg-white dark:bg-slate-900 p-3.5 rounded-sm border border-slate-200 dark:border-slate-800 shadow-sm relative group hover:border-teal-500/50 transition-all">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-10 h-10 rounded-sm bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800/80 flex items-center justify-center shrink-0">
                <Upload className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <div className="text-xs font-extrabold font-mono text-teal-600 dark:text-teal-400">01</div>
                <h3 className="text-xs font-extrabold uppercase font-mono tracking-wider text-slate-900 dark:text-white">
                  INPUT
                </h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-mono">
              Point Cloud<br />
              PDF / DWG<br />
              Images / Drawings
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white dark:bg-slate-900 p-3.5 rounded-sm border border-slate-200 dark:border-slate-800 shadow-sm relative group hover:border-teal-500/50 transition-all">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-10 h-10 rounded-sm bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800/80 flex items-center justify-center shrink-0">
                <Cpu className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <div className="text-xs font-extrabold font-mono text-teal-600 dark:text-teal-400">02</div>
                <h3 className="text-xs font-extrabold uppercase font-mono tracking-wider text-slate-900 dark:text-white">
                  PROCESS
                </h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-mono">
              Review<br />
              Clean<br />
              Analyze
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white dark:bg-slate-900 p-3.5 rounded-sm border border-slate-200 dark:border-slate-800 shadow-sm relative group hover:border-teal-500/50 transition-all">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-10 h-10 rounded-sm bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800/80 flex items-center justify-center shrink-0">
                <Layers className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <div className="text-xs font-extrabold font-mono text-teal-600 dark:text-teal-400">03</div>
                <h3 className="text-xs font-extrabold uppercase font-mono tracking-wider text-slate-900 dark:text-white">
                  MODEL
                </h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-mono">
              Architecture<br />
              MEP Systems<br />
              BIM Modeling
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white dark:bg-slate-900 p-3.5 rounded-sm border border-slate-200 dark:border-slate-800 shadow-sm relative group hover:border-teal-500/50 transition-all">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-10 h-10 rounded-sm bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800/80 flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <div className="text-xs font-extrabold font-mono text-teal-600 dark:text-teal-400">04</div>
                <h3 className="text-xs font-extrabold uppercase font-mono tracking-wider text-slate-900 dark:text-white">
                  QA / QC
                </h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-mono">
              Model Review<br />
              Coordination<br />
              Clash Check
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-white dark:bg-slate-900 p-3.5 rounded-sm border border-slate-200 dark:border-slate-800 shadow-sm relative group hover:border-teal-500/50 transition-all">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-10 h-10 rounded-sm bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800/80 flex items-center justify-center shrink-0">
                <FileCheck className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <div className="text-xs font-extrabold font-mono text-teal-600 dark:text-teal-400">05</div>
                <h3 className="text-xs font-extrabold uppercase font-mono tracking-wider text-slate-900 dark:text-white">
                  DELIVERY
                </h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-mono">
              RVT / IFC<br />
              DWG / PDF<br />
              Schedules
            </p>
          </div>

        </div>
      </section>

      {/* 2. VISUAL SHOWCASE CARDS (LIGHT / DARK RESPONSIVE) */}
      <section className="bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white py-10 lg:py-14 border-t border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-[1400px] mx-auto px-2 sm:px-3 lg:px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Visual Card 1: BIM Ecosystem (Placed First) */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md overflow-hidden p-3.5 flex flex-col justify-between shadow-sm">
              <div className="mb-2">
                <div className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
                  BIM ECOSYSTEM
                </div>
              </div>
              <div className="relative aspect-video rounded bg-slate-950 overflow-hidden border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <img
                  src={bimEcosystemImg}
                  alt="BIM Ecosystem Workflow Model"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] font-mono text-teal-400 border border-teal-500/30">
                  REVIT / NAVISWORKS
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-teal-600 text-[10px] font-mono text-white">
                  RVT / IFC / DWG
                </div>
              </div>
            </div>

            {/* Visual Card 2: Point Cloud -> BIM (Interactive Comparison Slider) */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md overflow-hidden p-3.5 flex flex-col justify-between shadow-sm">
              <div className="mb-2">
                <div className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
                  POINT CLOUD &rarr; BIM
                </div>
              </div>
              <ImageComparisonSlider
                beforeImage={isometricImg}
                afterImage={pointCloudBimImg}
                beforeLabel="POINT CLOUD RAW"
                afterLabel="3D BIM MODEL"
                title="POINT CLOUD TO 3D BIM MODEL"
                alt="Point Cloud to BIM comparison"
              />
            </div>

            {/* Visual Card 3: MEP Coordination (Interactive Comparison Slider) */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md overflow-hidden p-3.5 flex flex-col justify-between shadow-sm">
              <div className="mb-2">
                <div className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
                  MEP COORDINATION
                </div>
              </div>
              <ImageComparisonSlider
                beforeImage={revitFamilyImg}
                afterImage={mepClashImg}
                beforeLabel="UNCOORDINATED"
                afterLabel="COORDINATED MEP"
                title="MEP CLASH DETECTION & COORDINATION"
                alt="MEP Coordination Clash comparison"
              />
            </div>

            {/* Visual Card 4: PDF to CAD (Interactive Comparison Slider) */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md overflow-hidden p-3.5 flex flex-col justify-between shadow-sm">
              <div className="mb-2">
                <div className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
                  PDF TO CAD
                </div>
              </div>
              <ImageComparisonSlider
                beforeImage={revitFamilyImg}
                afterImage={archModelImg}
                beforeLabel="2D PDF DRAFT"
                afterLabel="3D CAD DWG"
                title="2D PDF DRAFT TO 3D CAD DWG CONVERSION"
                alt="PDF to CAD drawing comparison"
              />
            </div>

          </div>

        </div>
      </section>

      {/* 3. CTA SECTION ("Have a BIM or CAD Project?") */}
      <section className="py-10 lg:py-14 max-w-[1400px] mx-auto px-2 sm:px-3 lg:px-4">
        <div className="bg-white dark:bg-slate-900 rounded-md p-5 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          
          <div className="space-y-2.5 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
              Have a BIM or CAD Project?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Let's turn your drawings, point cloud data, or project information into a professional digital model.
            </p>
            
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-4 py-2 rounded font-bold font-mono text-xs tracking-wider uppercase text-white bg-teal-600 hover:bg-teal-500 transition-all cursor-pointer shadow-sm"
              >
                <span>Send an Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-4 py-2 rounded font-bold font-mono text-xs tracking-wider uppercase text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer border border-slate-200 dark:border-slate-700"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Me</span>
              </button>
            </div>
          </div>

          <div className="space-y-2 font-mono text-xs text-slate-600 dark:text-slate-400 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 pt-4 lg:pt-0 lg:pl-6 shrink-0 w-full lg:w-auto">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">mirja.riyadh@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Available via Contact Form</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Dhaka, Bangladesh (Remote)</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
