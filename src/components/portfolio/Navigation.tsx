import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  onScrollTo: (id: string) => void;
}

export const Navigation = ({ onScrollTo }: NavigationProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="w-8" /> {/* Spacer for layout balance */}

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Work", "Experience", "Contact"].map((item, i) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              onClick={() => onScrollTo(item.toLowerCase())}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            href="/Shyam_Batchu_Resume.pdf"
            target="_blank"
            className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t border-border"
        >
          <div className="px-6 py-4 space-y-3">
            {["Work", "Experience", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  onScrollTo(item.toLowerCase());
                  setMobileOpen(false);
                }}
                className="block w-full text-left py-2 text-foreground font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
