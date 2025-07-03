import React, { useState } from 'react';
import { AnimatePresence, easeInOut, motion } from 'motion/react';

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "naikviraj301@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{y:-5}}
      whileTap={{scale:1.4}}
      className="relative px-4 py-1 text-xl text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            key="copied"
            className="text-white flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: easeInOut }}
          >
            <img className="w-5" src="assets/copied.png" alt="copied" />
            Email is copied
          </motion.p>
        ) : (
          <motion.p
            key="default"
            className="text-white flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: easeInOut }}
          >
            <img className="w-5 bg-black" src="assets/cpy.jpg" alt="copy" />
            Copy Email
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
