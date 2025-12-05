import { motion } from "framer-motion";
import { MapPin, Mail, ArrowDown } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-8 pt-20 pb-12 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-accent/50 bg-accent/10"
        >
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-xs font-medium tracking-widest uppercase text-foreground/80">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-foreground mb-6 leading-[0.95] tracking-tight"
        >
          {PERSONAL_INFO.name.split(" ")[0]}
          <br />
          <span className="italic font-normal text-muted-foreground">
            {PERSONAL_INFO.name.split(" ")[1]}
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-mono text-sm tracking-widest uppercase text-accent mb-8"
        >
          {PERSONAL_INFO.role}
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg text-muted-foreground font-light leading-relaxed mb-10"
        >
          {PERSONAL_INFO.short_bio}
        </motion.p>

        {/* Meta Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-accent" />
            {PERSONAL_INFO.location}
          </span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Mail size={16} className="text-accent" />
            {PERSONAL_INFO.email}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};
