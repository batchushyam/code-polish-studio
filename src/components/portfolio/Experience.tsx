import { motion } from "framer-motion";
import { EXPERIENCE, EDUCATION } from "@/data/portfolio-data";
import umichLogo from "@/assets/logos/umich-logo.png";
import bostonScientificLogo from "@/assets/logos/boston-scientific-logo.png";
import neecLogo from "@/assets/logos/neec-logo.png";

// Map company names to their logos
const companyLogos: Record<string, string> = {
  "University of Michigan": umichLogo,
  "Boston Scientific Company": bostonScientificLogo,
  "Naval Engineering Education Consortium": neecLogo,
};

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
        <h2 className="font-serif text-2xl text-foreground mb-6">Education</h2>
        {EDUCATION.map((edu, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#00274C] flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img src={umichLogo} alt="University of Michigan" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-foreground">
                {edu.school} <span className="text-muted-foreground font-sans text-sm">• {edu.degree}</span>
              </h3>
              <p className="text-muted-foreground text-sm">
                {edu.details.join(", ")}
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Dean's List and University Honors every semester
              </p>
              {edu.coursework && (
                <p className="text-muted-foreground text-sm mt-1">
                  <span className="text-foreground">Relevant Coursework:</span> {edu.coursework.join(", ")}
                </p>
              )}
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
        <h2 className="font-serif text-2xl text-foreground mb-6">Experience</h2>
        <div className="space-y-8">
          {EXPERIENCE.map((job, i) => {
            const logo = companyLogos[job.company];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0 overflow-hidden border border-border">
                  {logo ? (
                    <img src={logo} alt={job.company} className="w-full h-full object-contain p-1" />
                  ) : (
                    <span className="text-accent font-serif text-lg">
                      {job.company.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground">
                    {job.company} <span className="text-muted-foreground font-sans text-sm">• {job.role}</span>
                  </h3>
                  <p className="text-muted-foreground text-xs text-accent mb-1">
                    {job.period}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {job.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};