import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger the animation of each child
      },
    },
  };

  // Animation variants for each technology icon
  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotateY: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.1,
      rotateY: 180,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-row flex-wrap justify-center gap-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {technologies.map((technology, index) => (
        <motion.div
          key={index}
          className="w-28 h-28 flex items-center justify-center bg-white rounded-full shadow-lg"
          variants={iconVariants}
          whileHover="hover"
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-16 h-16"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SectionWrapper(Tech, "");
