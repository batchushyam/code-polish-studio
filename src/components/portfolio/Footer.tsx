import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl mb-8">contact</h2>
          
          <div className="space-y-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              linkedin.com/in/shyambatchu
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
