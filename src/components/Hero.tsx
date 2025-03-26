import image from "/image.png";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      id="home"
      className="pt-30 md:pt-32 px-16 flex min-h-screen w-full items-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt="Hero"
            className="w-[300px] cursor-pointer shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px] rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-5 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl leading-normal">
            Wanjang'i Gituku
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl">
            Software Developer
          </h3>
          <p className="md:text-base text-gray-400 text-pretty text-sm">
            I am a Software Developer skilled in Python, JavaScript, TypeScript,
            Node.js, React.js, Nest.js, and Tailwind CSS, focused on building
            clean scalable applications. From front-end design to seamless
            database integration with MySQL and/or PostgreSQL; as well as NoSQL
            solutions such as MongoDB, I create efficient solutions for dynamic
            user experiences. Let's build something great together!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
