import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="about" className="min-h-[60vh] flex flex-col justify-center items-center px-6 lg:px-8 pt-20 pb-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl bg-muted/50 border border-border flex items-center justify-center overflow-hidden">
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
              className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed"
            >
              Hi, I'm Shyam. Welcome to my portfolio! I am a senior at the University of Michigan studying mechanical engineering with a concentration in robotics. I want to utilize technology to create things that intrigue me and benefit others.  I am especially interested in exploring the fields of robotics, design, and medical devices. When I'm not working on engineering stuff you can find me playing tennis, hiking, and spending too much time stressing about board games with friends. 
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
