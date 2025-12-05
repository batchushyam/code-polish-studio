import { motion } from "framer-motion";
import { EXPERIENCE, EDUCATION, SKILLS } from "@/data/portfolio-data";

export const Experience = () => {
  return (
    <section id="experience" className="px-6 lg:px-8 py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column - Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4"
        >
          <div className="lg:sticky lg:top-24">
            <span className="font-mono text-xs tracking-widest uppercase text-accent mb-4 block">
              Background
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
              Experience &<br />Education
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A blend of academic excellence and hands-on engineering experience
              in medical devices, aerospace, and research.
            </p>
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <div className="lg:col-span-8 space-y-12">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 lg:p-8 rounded-2xl bg-card border border-border"
          >
            <h3 className="font-serif text-xl text-foreground mb-5">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg border border-border/50 hover:bg-accent/20 hover:border-accent/50 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-0">
            {EXPERIENCE.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 pb-10 last:pb-0 border-l-2 border-border"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background" />

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-3">
                  <h4 className="font-serif text-xl text-foreground">
                    {job.company}
                  </h4>
                  <span className="font-mono text-xs text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <p className="text-accent font-medium text-sm mb-2">
                  {job.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {job.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-xl text-foreground mb-5 pb-3 border-b border-border">
              Education
            </h3>
            {EDUCATION.map((edu, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-5 rounded-xl bg-card border border-border"
              >
                <div>
                  <h4 className="font-medium text-foreground">{edu.school}</h4>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                </div>
                <div className="flex gap-3 text-xs font-mono text-muted-foreground">
                  {edu.details.map((d, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-secondary rounded"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
