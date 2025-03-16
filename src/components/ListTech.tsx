import { motion } from "motion/react";

type ListTechProps = {
  Icon: React.ComponentType<{ className: string; style: React.CSSProperties }>;
  colorCode: string;
};

const variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ListTech = ({ Icon, colorCode }: ListTechProps) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
    >
      <Icon
        className="cursor-pointer text-[80px] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
        style={{ color: colorCode }}
      />
    </motion.div>
  );
};

export default ListTech;
