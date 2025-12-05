import { motion } from "framer-motion";
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end"
        >
          {/* Left - CTA */}
          <div>
            <span className="font-mono text-xs tracking-widest uppercase text-accent mb-4 block">
              Get in touch
            </span>
            <h2 className="font-serif text-4xl lg:text-6xl mb-6 leading-tight">
              Let's build<br />
              something great.
            </h2>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 text-accent hover:text-primary-foreground transition-colors group text-lg"
            >
              {PERSONAL_INFO.email}
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>

          {/* Right - Links */}
          <div className="flex flex-col sm:flex-row gap-6 lg:justify-end">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            >
              <Linkedin size={20} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            >
              <Github size={20} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            >
              <Mail size={20} />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Shyam Batchu. All rights reserved.</p>
          <p className="font-mono text-xs">Designed & Built with care</p>
        </div>
      </div>
    </footer>
  );
};
