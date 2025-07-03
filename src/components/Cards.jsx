import React from 'react';
import {motion} from "motion/react"; 
const Cards = ({ style, text, image, containerRef }) => {
  return image && !text ? (
        <motion.img className="absolute rounded-full h-[172px] w-[12rem] object-fit cursor-grab" whileHover={{scale: 1.05}} drag dragConstraints={containerRef} dragElastic={1} src={image} alt="card" />
      ) : (
        <motion.div
          className="absolute px-1 py-4 text-xl text-center rounded-full ring-gray-700 font-semi-bold bg-lavender/100 w-[12rem] cursor-grab" 
          style={style}
          drag
          dragElastic={1}
          whileHover={{scale: 1.05}}
          dragConstraints={containerRef}
        >
          {text}
        </motion.div>
      
   
  );
};

export default Cards;
