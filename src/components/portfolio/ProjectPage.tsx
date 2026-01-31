import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { Project, ContentBlock } from "@/data/portfolio-data";

interface ProjectPageProps {
  project: Project;
  onBack: () => void;
}

const ContentBlockRenderer = ({ block, index }: { block: ContentBlock; index: number }) => {
  switch (block.type) {
    case "heading":
      return (
        <motion.h4
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          className="font-serif text-xl text-foreground mt-8 mb-4"
        >
          {block.text}
        </motion.h4>
      );
    
    case "paragraph":
      return (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          className="text-muted-foreground leading-relaxed mb-4"
        >
          {block.text}
        </motion.p>
      );
    
    case "bullets":
      return (
        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          className="space-y-3 mb-6"
        >
          {block.items.map((item, idx) => (
            <li key={idx} className="flex gap-4 text-muted-foreground leading-relaxed">
              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>
      );
    
    case "image":
      return (
        <motion.figure
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          className="my-8"
        >
          <img
            src={block.src}
            alt={block.alt}
            className="w-full rounded-xl shadow-lg"
          />
          {block.caption && (
            <figcaption className="text-sm text-muted-foreground mt-3 text-center italic">
              {block.caption}
            </figcaption>
          )}
        </motion.figure>
      );
    
    case "gallery":
      return (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8"
        >
          {block.images.map((img, idx) => (
            <figure key={idx}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full rounded-lg shadow-md aspect-video object-cover"
              />
              {img.caption && (
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </motion.div>
      );
    
    case "quote":
      return (
        <motion.blockquote
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          className="border-l-4 border-accent pl-6 my-8 italic"
        >
          <p className="text-foreground text-lg mb-2">"{block.text}"</p>
          {block.attribution && (
            <cite className="text-muted-foreground text-sm not-italic">
              — {block.attribution}
            </cite>
          )}
        </motion.blockquote>
      );
    
    case "callout":
      return (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          className="bg-accent/10 border border-accent/20 rounded-xl p-6 my-8"
        >
          <h5 className="font-semibold text-foreground mb-2">{block.title}</h5>
          <p className="text-muted-foreground">{block.text}</p>
        </motion.div>
      );

    case "videoComparison":
      return (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          className="my-6 p-4 bg-muted/30 rounded-xl border border-border/50"
        >
          <h5 className="font-serif text-lg text-foreground mb-4">{block.title}</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 block">Real World</span>
              <video
                src={block.realVideo}
                controls
                className="w-full rounded-lg shadow-md aspect-video object-cover"
                playsInline
              />
            </div>
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 block">Model</span>
              <video
                src={block.modelVideo}
                controls
                className="w-full rounded-lg shadow-md aspect-video object-cover"
                playsInline
              />
            </div>
          </div>
          {block.description && (
            <p className="text-sm text-muted-foreground leading-relaxed">{block.description}</p>
          )}
        </motion.div>
      );
    
    default:
      return null;
  }
};

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
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
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
          className="mb-12"
        >
          <span className="inline-block px-3 py-1.5 bg-accent/20 text-accent-foreground text-xs font-semibold rounded-full mb-6 uppercase tracking-wider">
            {project.category}
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-8 text-muted-foreground font-mono text-sm mb-8">
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

          {/* Technologies */}
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
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-lg text-muted-foreground leading-relaxed mb-12 pb-12 border-b border-border"
        >
          {project.summary}
        </motion.p>

        {/* Sections */}
        {project.sections.map((section, sectionIndex) => (
          <motion.section
            key={sectionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + sectionIndex * 0.1 }}
            className="mb-12"
          >
            <h3 className="font-serif text-2xl text-foreground mb-6 pb-2 border-b border-border/50">
              {section.title}
            </h3>
            {section.content.map((block, blockIndex) => (
              <ContentBlockRenderer
                key={blockIndex}
                block={block}
                index={blockIndex}
              />
            ))}
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
};
