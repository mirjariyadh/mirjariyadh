import React, { useState, useEffect } from 'react';
import { ViewTab, Project, JourneyExperience } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ProjectCatalogPage } from './components/ProjectCatalogPage';
import { ProjectModal } from './components/ProjectModal';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { Testimonials } from './components/Testimonials';
import { JourneyTimeline } from './components/JourneyTimeline';
import { AboutSection } from './components/AboutSection';
import { JourneyDetailPage } from './components/JourneyDetailPage';
import { ContactModal } from './components/ContactModal';
import { WorkflowSection } from './components/WorkflowSection';
import { Footer } from './components/Footer';
import { FadeInUp } from './components/FadeInUp';

export default function App() {
  const [currentTab, setCurrentTab] = useState<ViewTab>('home');
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [detailProject, setDetailProject] = useState<Project | null>(null);
  const [detailExperience, setDetailExperience] = useState<JourneyExperience | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeShowcaseFilter, setActiveShowcaseFilter] = useState<string>('All');

  // Theme state: light mode active by default as requested
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved) return saved === 'dark';
    }
    return false; // Light mode as primary mode
  });

  // Sync theme class on HTML element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Scroll to top on page or detail view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab, detailProject, detailExperience]);

  const handleSelectTab = (tab: ViewTab) => {
    setDetailProject(null);
    setDetailExperience(null);
    setCurrentTab(tab);
  };

  const handleOpenProjectModal = (project: Project) => {
    setModalProject(project);
  };

  const handleCloseProjectModal = () => {
    setModalProject(null);
  };

  const handleViewFullProjectDetail = (project: Project) => {
    setModalProject(null);
    setDetailProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectExperience = (exp: JourneyExperience) => {
    setDetailExperience(exp);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreService = (filter: string) => {
    setActiveShowcaseFilter(filter);
    if (currentTab !== 'home') {
      setCurrentTab('home');
    }
    setTimeout(() => {
      const elem = document.getElementById('projects-showcase');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${
      isDarkMode
        ? 'bg-slate-950 text-white selection:bg-cyan-500 selection:text-slate-950'
        : 'bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white'
    }`}>
      {/* Sticky Header Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenContact={() => setIsContactOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Router */}
      <main className="relative">
        {/* If viewing a full Project Detail Page */}
        {detailProject ? (
          <FadeInUp duration={0.4}>
            <ProjectDetailPage
              project={detailProject}
              onBack={() => setDetailProject(null)}
              onOpenContact={() => setIsContactOpen(true)}
            />
          </FadeInUp>
        ) : detailExperience ? (
          /* If viewing a full Experience Detail Page */
          <FadeInUp duration={0.4}>
            <JourneyDetailPage
              experience={detailExperience}
              onBack={() => setDetailExperience(null)}
              onOpenContact={() => setIsContactOpen(true)}
            />
          </FadeInUp>
        ) : currentTab === 'projects' ? (
          /* Dedicated Project Catalog Page */
          <FadeInUp duration={0.4}>
            <ProjectCatalogPage
              onSelectProject={handleOpenProjectModal}
              onBackToHome={() => setCurrentTab('home')}
            />
          </FadeInUp>
        ) : (
          /* Default Home & Section Views */
          <>
            {/* Hero Section */}
            {currentTab === 'home' && (
              <FadeInUp duration={0.6}>
                <Hero
                  onViewProjects={(filter) => {
                    if (filter) setActiveShowcaseFilter(filter);
                    const elem = document.getElementById('projects-showcase');
                    if (elem) {
                      elem.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      setCurrentTab('projects');
                    }
                  }}
                  onExploreService={handleExploreService}
                  onOpenContact={() => setIsContactOpen(true)}
                />
              </FadeInUp>
            )}

            {/* Project Showcase Grid */}
            {currentTab === 'home' && (
              <FadeInUp duration={0.6} amount={0.1}>
                <ProjectShowcase
                  onSelectProject={handleOpenProjectModal}
                  onViewAllProjects={() => setCurrentTab('projects')}
                  activeFilter={activeShowcaseFilter}
                  onFilterChange={setActiveShowcaseFilter}
                />
              </FadeInUp>
            )}

            {/* Workflow Process & Visual Showcase & CTA */}
            {currentTab === 'home' && (
              <FadeInUp duration={0.6} amount={0.1}>
                <WorkflowSection onOpenContact={() => setIsContactOpen(true)} />
              </FadeInUp>
            )}

            {/* Testimonials */}
            {(currentTab === 'home' || currentTab === 'testimonials') && (
              <FadeInUp duration={0.6} amount={0.15}>
                <Testimonials />
              </FadeInUp>
            )}

            {/* About Page Section & Career Journey Timeline */}
            {currentTab === 'journey' && (
              <>
                <FadeInUp duration={0.6} amount={0.1}>
                  <AboutSection
                    onOpenContact={() => setIsContactOpen(true)}
                  />
                </FadeInUp>
                <FadeInUp duration={0.6} amount={0.15}>
                  <JourneyTimeline
                    onSelectExperience={handleSelectExperience}
                  />
                </FadeInUp>
              </>
            )}
          </>
        )}
      </main>

      {/* Pop-Up Project Gallery Modal */}
      <ProjectModal
        project={modalProject}
        onClose={handleCloseProjectModal}
        onViewFullDetail={handleViewFullProjectDetail}
      />

      {/* Contact & About Drawer / Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </div>
  );
}
