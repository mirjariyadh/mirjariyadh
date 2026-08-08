import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, ExternalLink, CheckCircle2, Box, Award, ShieldCheck } from 'lucide-react';
import { EXTERNAL_LINKS } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Revit 3D Architectural Model',
    lodRequired: 'LOD 350',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-slate-900 dark:text-white transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/30">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">About & Contact Mirja Riyadh</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">BIM Specialist & Revit Modeler • Available for Hire</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-8">
          
          {/* About Bio Header */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 space-y-3">
            <h4 className="text-sm font-bold font-display text-cyan-700 dark:text-cyan-300 uppercase tracking-wider">
              About Mirja Riyadh
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              Experienced BIM Specialist with over 4+ years of hands-on expertise in Autodesk Revit 3D modeling, Point Cloud Scan-to-BIM, MEP system coordination, and Navisworks clash matrix detection. Based in Bangladesh and serving international clients worldwide via Upwork & Fiverr.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Available for New Projects</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>Top Rated Freelancer</span>
              </span>
            </div>
          </div>

          {/* Contact Direct Profiles & Hire Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider font-semibold">
              Direct Platforms & Profiles
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <a
                href={EXTERNAL_LINKS.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 flex items-center justify-between text-slate-800 dark:text-slate-200 transition-all group shadow-sm"
              >
                <div>
                  <div className="font-bold text-emerald-600 dark:text-emerald-400">Fiverr Profile</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Order via Fiverr</div>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={EXTERNAL_LINKS.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 flex items-center justify-between text-slate-800 dark:text-slate-200 transition-all group shadow-sm"
              >
                <div>
                  <div className="font-bold text-cyan-600 dark:text-cyan-400">Upwork Profile</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Hire on Upwork</div>
                </div>
                <ExternalLink className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={EXTERNAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 flex items-center justify-between text-slate-800 dark:text-slate-200 transition-all group shadow-sm"
              >
                <div>
                  <div className="font-bold text-blue-600 dark:text-blue-400">LinkedIn Profile</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Connect on LinkedIn</div>
                </div>
                <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider font-semibold">
              Send Direct Project Inquiry
            </h4>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto animate-bounce" />
                <h5 className="text-lg font-bold text-slate-900 dark:text-white">Inquiry Received!</h5>
                <p className="text-xs text-emerald-800 dark:text-emerald-300 font-mono">
                  Thank you for reaching out. Mirja Riyadh will review your project details and respond within 12 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Architect John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@architects.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">Scope / Service</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400"
                    >
                      <option>Revit 3D Architectural Model</option>
                      <option>Point Cloud Scan to BIM</option>
                      <option>Custom Parametric Revit Families</option>
                      <option>MEP Systems Modeling</option>
                      <option>Navisworks Clash Matrix Resolution</option>
                      <option>Construction Documentation Sheets</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">Target LOD</label>
                    <select
                      value={formData.lodRequired}
                      onChange={(e) => setFormData({ ...formData, lodRequired: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400"
                    >
                      <option>LOD 300 (Design Modeling)</option>
                      <option>LOD 350 (Construction Detailing)</option>
                      <option>LOD 400 (Fabrication & MEP)</option>
                      <option>LOD 500 (As-Built Operations)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">Project Details & Notes</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Provide brief scope description, square footage, timeline, or links to CAD drawings..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400"
                  />
                </div>

                {/* PDF & Drawing Attachment Upload Input */}
                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">
                    Attach PDF Blueprints / DWG / Images (Optional)
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.dwg,.rvt,.zip,.webp,.webp,.webp"
                    onChange={(e) => {
                      const files = e.target.files;
                      if (files && files.length > 0) {
                        const file = files[0];
                        setFormData((prev) => ({
                          ...prev,
                          message: prev.message + `\n[Attached File: ${file.name} (${(file.size / (1024 * 1024)).toFixed(2)} MB)]`
                        }));
                      }
                    }}
                    className="w-full text-xs text-slate-600 dark:text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-teal-500/10 file:text-teal-600 dark:file:text-teal-400 hover:file:bg-teal-500/20 border border-slate-200 dark:border-slate-800 rounded-xl p-1 bg-slate-50 dark:bg-slate-950 cursor-pointer"
                  />
                  <p className="text-[10px] text-slate-400 mt-1 font-mono">
                    Supports .pdf, .dwg, .rvt, .zip, .webp, .webp files.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/25 text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Project Scope Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
