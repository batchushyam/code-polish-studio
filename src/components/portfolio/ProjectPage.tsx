import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/data/portfolio-data";

interface ProjectPageProps {
  project: Project;
  onBack: () => void;
}

export const ProjectPage = ({ project, onBack }: ProjectPageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      {/* Navigation */}
      <div className="sticky top-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors text-sm uppercase tracking-wide group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back
          </button>
          <span className="font-serif text-lg text-foreground hidden sm:block">
            {project.title}
          </span>
          <div className="w-16" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="aspect-video w-full bg-muted rounded-2xl overflow-hidden mb-12 shadow-xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 pb-12 border-b border-border"
        >
          <span className="inline-block px-3 py-1.5 bg-accent/20 text-accent-foreground text-xs font-semibold rounded-full mb-6 uppercase tracking-wider">
            {project.category}
          </span>
          <h1 className="font-serif text-4xl lg:text-6xl text-foreground mb-8 leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-8 text-muted-foreground font-mono text-sm">
            <div>
              <span className="block text-xs text-muted-foreground/60 mb-1 uppercase">
                Role
              </span>
              <span className="text-foreground">{project.role}</span>
            </div>
            <div>
              <span className="block text-xs text-muted-foreground/60 mb-1 uppercase">
                Timeline
              </span>
              <span className="text-foreground">{project.year}</span>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h3 className="font-serif text-2xl text-foreground mb-6">
              Key Contributions
            </h3>
            <ul className="space-y-5">
              {project.bullets.map((bullet, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex gap-4 text-muted-foreground leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="p-6 rounded-2xl bg-card border border-border sticky top-24">
              <h4 className="font-medium text-foreground mb-4 text-sm uppercase tracking-wide">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
