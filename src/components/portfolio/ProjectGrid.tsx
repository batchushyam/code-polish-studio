import { motion } from "framer-motion";
import { PROJECTS } from "@/data/portfolio-data";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  onProjectClick: (id: number) => void;
}

export const ProjectGrid = ({ onProjectClick }: ProjectGridProps) => {
  return (
    <section id="work" className="px-6 lg:px-8 py-24 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground">
            Projects
          </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={onProjectClick}
          />
        ))}
      </div>
    </section>
  );
};
