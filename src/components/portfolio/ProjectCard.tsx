import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio-data";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (id: number) => void;
}

export const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => onClick(project.id)}
      className="group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-5 bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Arrow Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1 }}
          className="absolute top-4 right-4 w-10 h-10 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
        >
          <ArrowUpRight size={18} className="text-foreground" />
        </motion.div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-3 py-1.5 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-xl lg:text-2xl text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-muted-foreground mt-1.5 whitespace-nowrap">
            {project.year}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{project.role}</p>
      </div>
    </motion.article>
  );
};
