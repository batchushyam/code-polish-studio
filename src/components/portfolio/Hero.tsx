import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-8 pt-20 pb-12 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-muted/50 border border-border flex items-center justify-center overflow-hidden">
              <span className="text-muted-foreground text-sm font-mono">Your Photo Here</span>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed mb-6"
            >
              Hi, I'm <span className="text-foreground font-medium">Shyam</span>. I am a senior at the University of Michigan studying mechanical engineering. I am especially interested in exploring the fields of robotics and design. Currently I'm working on building a low-cost medical device with Team Flow. When I'm not working on engineering stuff you can find me playing tennis, hiking, going to the gym, and spending too much time stressing about fantasy football.
            </motion.p>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-muted-foreground"
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
        </div>
      </div>
    </section>
  );
};
