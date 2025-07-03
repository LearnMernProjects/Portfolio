import ParallaxBackground from "./ParallaxBackground";
import { motion } from "framer-motion";

import {FlipWord} from "./FlipWord";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text px-4">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex space-y-6">
        <motion.h1
          className="text-6xl font-bold text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Viraj
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-6xl font-bold  text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            
            transition={{ delay: 1.2 }}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWord
              words={words}
              className="font-black tracking-wider bg-gray text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-6xl font-bold text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Viraj
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWord
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

// Full Hero Section combining both
const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <ParallaxBackground />
      <HeroText />
    </div>
  );
};

export default HeroSection;