import { motion } from "framer-motion";
import { EXPERIENCE, EDUCATION } from "@/data/portfolio-data";

export const Experience = () => {
  return (
    <section id="experience" className="px-6 lg:px-8 py-16 max-w-4xl mx-auto">
      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="font-serif text-2xl text-foreground mb-6">education</h2>
        {EDUCATION.map((edu, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
              <span className="text-accent font-serif text-lg">M</span>
            </div>
            <div>
              <h3 className="font-serif text-lg text-foreground">
                {edu.school} <span className="text-muted-foreground font-sans text-sm">• {edu.degree}</span>
              </h3>
              <p className="text-muted-foreground text-sm">
                {edu.details.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-serif text-2xl text-foreground mb-6">my experiences</h2>
        <div className="space-y-8">
          {EXPERIENCE.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-serif text-lg">
                  {job.company.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground">
                  {job.company} <span className="text-muted-foreground font-sans text-sm">• {job.role}</span>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {job.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
