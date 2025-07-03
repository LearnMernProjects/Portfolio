"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FlipWord } from "./FlipWord";

// Parallax background
const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, { damping: 50, stiffness: 100 });

  const mountain3Y = useTransform(smoothScroll, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(smoothScroll, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(smoothScroll, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(smoothScroll, [0, 0.5], ["0%", "0%"]);

  return (
    <section id="ParallaxBackground" className="absolute inset-0 w-full h-screen overflow-hidden bg-black z-[-10]">
      {/* Sky */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(/assets/sky.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          opacity: 1,
        }}
      />

      {/* Mountain 3 */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(/assets/mountain-3.png)`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          y: mountain3Y,
          opacity: 1,
        }}
      />

      {/* Planets */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(/assets/planets.png)`,
          backgroundSize: "cover",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          x: planetsX,
          opacity: 1,
        }}
      />

      {/* Mountain 2 */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(/assets/mountain-2.png)`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          y: mountain2Y,
          opacity: 1,
        }}
      />

      {/* Mountain 1 */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(/assets/mountain-1.png)`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          y: mountain1Y,
          opacity: 1,
        }}
      />
    </section>
  );
};
export default ParallaxBackground;
