import { motion } from "motion/react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Contacts = () => {
  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div
      id="contacts"
      className="pt-30 md:pt-32 flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto"
      >
        <h2 className="text-center text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Let's Work Together
          </span>
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
          I'm currently looking for new opportunities. Whether you have an
          exciting project, a job opportunity, or just want to connect—I'd love
          to hear from you!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <a
            href="mailto:wanjangi.gituku@gmail.com"
            target="_blank"
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg text-white font-semibold text-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2"
          >
            <FaEnvelope className="h-6 w-6" />
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/wanjang-i-gituku"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-indigo-500 rounded-lg text-white font-semibold text-lg hover:bg-indigo-900/30 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center gap-2"
          >
            <FaLinkedin className="h-6 w-6" />
            LinkedIn
          </a>
        </div>

        <div className="mt-16 text-gray-400">
          <p>Or connect with me on:</p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/Ras-Pekt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://x.com/WanjangiG"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-8 h-8" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contacts;
