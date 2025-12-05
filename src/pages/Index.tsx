import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { Experience } from "@/components/portfolio/Experience";
import { Footer } from "@/components/portfolio/Footer";
import { ProjectPage } from "@/components/portfolio/ProjectPage";
import { PROJECTS } from "@/data/portfolio-data";

const Index = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  
  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId);

  const handleProjectClick = (id: number) => {
    setSelectedProjectId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelectedProjectId(null);
  };

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence mode="wait">
        {selectedProject ? (
          <ProjectPage
            key="project"
            project={selectedProject}
            onBack={handleBack}
          />
        ) : (
          <main key="home">
            <Navigation onScrollTo={handleScrollTo} />
            <Hero />
            <ProjectGrid onProjectClick={handleProjectClick} />
            <Experience />
            <Footer />
          </main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
