import { motion } from "motion/react";
import { techIcons } from "./TechIcons";
import ListTech from "./ListTech";

const Tech = () => {
  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div
      id="tech"
      className="pt-30 md:pt-32 flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        {techIcons.map((icon, index) => (
          <ListTech key={index} Icon={icon.Icon} colorCode={icon.color} />
        ))}
      </div>
    </div>
  );
};

export default Tech;
