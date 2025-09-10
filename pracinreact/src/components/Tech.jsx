import { BiLogoTypescript, BiLogoJavascript, BiLogoDocker, BiLogoTailwindCss, BiLogoNodejs, BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const Tech = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section
      id="tech"
      className="flex items-center min-h-screen px-6 py-24 bg-gradient-to-b from-transparent via-white/5 to-transparent"
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 text-4xl font-black text-center text-transparent bg-white md:text-5xl from-blue-500 via-purple-500 to-pink-500 bg-clip-text drop-shadow-lg"
        >
          <span className="text-orange-400">0.2</span> Technologies
        </motion.h1>

        <motion.div
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center group"
          >
            <div className="flex items-center justify-center w-20 h-20 transition-all duration-500 border shadow-lg md:h-24 md:w-24 rounded-xl bg-white/5 backdrop-blur-sm border-white/10 group-hover:-translate-y-2 group-hover:bg-white/10">
              <BiLogoTypescript className="text-4xl transition-all duration-300 md:text-5xl text-sky-500 group-hover:scale-110" />
            </div>
            <span className="mt-4 text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">TypeScript</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center group"
          >
            <div className="flex items-center justify-center w-20 h-20 transition-all duration-500 border shadow-lg md:h-24 md:w-24 rounded-xl bg-white/5 backdrop-blur-sm border-white/10 group-hover:-translate-y-2 group-hover:bg-white/10">
              <BiLogoJavascript className="text-4xl text-yellow-400 transition-all duration-300 md:text-5xl group-hover:scale-110" />
            </div>
            <span className="mt-4 text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">JavaScript</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center group"
          >
            <div className="flex items-center justify-center w-20 h-20 transition-all duration-500 border shadow-lg md:h-24 md:w-24 rounded-xl bg-white/5 backdrop-blur-sm border-white/10 group-hover:-translate-y-2 group-hover:bg-white/10">
              <BiLogoDocker className="text-4xl text-blue-400 transition-all duration-300 md:text-5xl group-hover:scale-110" />
            </div>
            <span className="mt-4 text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">Docker</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center group"
          >
            <div className="flex items-center justify-center w-20 h-20 transition-all duration-500 border shadow-lg md:h-24 md:w-24 rounded-xl bg-white/5 backdrop-blur-sm border-white/10 group-hover:-translate-y-2 group-hover:bg-white/10">
              <BiLogoTailwindCss className="text-4xl transition-all duration-300 md:text-5xl text-cyan-400 group-hover:scale-110" />
            </div>
            <span className="mt-4 text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">Tailwind</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center group"
          >
            <div className="flex items-center justify-center w-20 h-20 transition-all duration-500 border shadow-lg md:h-24 md:w-24 rounded-xl bg-white/5 backdrop-blur-sm border-white/10 group-hover:-translate-y-2 group-hover:bg-white/10">
              <BiLogoNodejs className="text-4xl text-green-500 transition-all duration-300 md:text-5xl group-hover:scale-110" />
            </div>
            <span className="mt-4 text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">Node.js</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center group"
          >
            <div className="flex items-center justify-center w-20 h-20 transition-all duration-500 border shadow-lg md:h-24 md:w-24 rounded-xl bg-white/5 backdrop-blur-sm border-white/10 group-hover:-translate-y-2 group-hover:bg-white/10">
              <BiLogoPostgresql className="text-4xl text-blue-600 transition-all duration-300 md:text-5xl group-hover:scale-110" />
            </div>
            <span className="mt-4 text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">PostgreSQL</span>
          </motion.div>

          {/* Laravel */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center group"
          >
            <div className="flex items-center justify-center w-20 h-20 transition-all duration-500 border shadow-lg md:h-24 md:w-24 rounded-xl bg-white/5 backdrop-blur-sm border-white/10 group-hover:-translate-y-2 group-hover:bg-white/10">
              {/* Laravel icon SVG */}
              <svg className="text-4xl text-red-500 transition-all duration-300 md:text-5xl group-hover:scale-110" viewBox="0 0 64 64" fill="currentColor">
                <path d="M54.8 45.2L41.7 36.2l8.2-5.2c.6-.4 1-1.1 1-1.8v-9.7c0-.7-.4-1.4-1-1.8l-8.2-5.2c-.6-.4-1.4-.4-2 0l-8.2 5.2c-.6.4-1 1.1-1 1.8v9.7c0 .7.4 1.4 1 1.8l8.2 5.2-13.1 9c-.6.4-1.4.4-2 0l-8.2-5.2c-.6-.4-1-1.1-1-1.8v-9.7c0-.7.4-1.4 1-1.8l8.2-5.2c.6-.4 1.4-.4 2 0l8.2 5.2c.6.4 1 1.1 1 1.8v9.7c0 .7-.4 1.4-1 1.8l-8.2 5.2 13.1 9c.6.4 1.4.4 2 0l8.2-5.2c.6-.4 1-1.1 1-1.8v-9.7c0-.7-.4-1.4-1-1.8z" />
              </svg>
            </div>
            <span className="mt-4 text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">Laravel</span>
          </motion.div>

          {/* PHP */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center group"
          >
            <div className="flex items-center justify-center w-20 h-20 transition-all duration-500 border shadow-lg md:h-24 md:w-24 rounded-xl bg-white/5 backdrop-blur-sm border-white/10 group-hover:-translate-y-2 group-hover:bg-white/10">
              {/* PHP icon SVG */}
              <svg className="text-4xl text-indigo-400 transition-all duration-300 md:text-5xl group-hover:scale-110" viewBox="0 0 64 64" fill="currentColor">
                <ellipse cx="32" cy="32" rx="28" ry="16" fill="currentColor" />
                <text x="32" y="38" textAnchor="middle" fontSize="18" fill="#fff" fontWeight="bold">PHP</text>
              </svg>
            </div>
            <span className="mt-4 text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">PHP</span>
          </motion.div>

          {/* MySQL */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center group"
          >
            <div className="flex items-center justify-center w-20 h-20 transition-all duration-500 border shadow-lg md:h-24 md:w-24 rounded-xl bg-white/5 backdrop-blur-sm border-white/10 group-hover:-translate-y-2 group-hover:bg-white/10">
              {/* MySQL dolphin SVG */}
              <svg className="text-4xl text-teal-400 transition-all duration-300 md:text-5xl group-hover:scale-110" viewBox="0 0 64 64" fill="currentColor">
                <path d="M12 52c10-20 40-32 40-32s-8 8-8 16c0 8 8 8 8 8s-8 0-16 8c-8 8-24 0-24 0z" />
              </svg>
            </div>
            <span className="mt-4 text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">MySQL</span>
          </motion.div>

          {/* Bootstrap */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center group"
          >
            <div className="flex items-center justify-center w-20 h-20 transition-all duration-500 border shadow-lg md:h-24 md:w-24 rounded-xl bg-white/5 backdrop-blur-sm border-white/10 group-hover:-translate-y-2 group-hover:bg-white/10">
              {/* Bootstrap icon SVG */}
              <svg className="text-4xl text-purple-500 transition-all duration-300 md:text-5xl group-hover:scale-110" viewBox="0 0 64 64" fill="currentColor">
                <rect x="8" y="8" width="48" height="48" rx="12" fill="currentColor" />
                <text x="32" y="42" textAnchor="middle" fontSize="28" fill="#fff" fontWeight="bold">B</text>
              </svg>
            </div>
            <span className="mt-4 text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">Bootstrap</span>
          </motion.div>

          {/* Postman */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center group"
          >
            <div className="flex items-center justify-center w-20 h-20 transition-all duration-500 border shadow-lg md:h-24 md:w-24 rounded-xl bg-white/5 backdrop-blur-sm border-white/10 group-hover:-translate-y-2 group-hover:bg-white/10">
              {/* Postman icon SVG */}
              <svg className="text-4xl text-orange-400 transition-all duration-300 md:text-5xl group-hover:scale-110" viewBox="0 0 64 64" fill="currentColor">
                <circle cx="32" cy="32" r="24" fill="currentColor" />
                <rect x="24" y="28" width="16" height="8" rx="4" fill="#fff" />
              </svg>
            </div>
            <span className="mt-4 text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">Postman</span>
          </motion.div>
          {/* GitHub */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center group"
          >
            <div className="flex items-center justify-center w-20 h-20 transition-all duration-500 border shadow-lg md:h-24 md:w-24 rounded-xl bg-white/5 backdrop-blur-sm border-white/10 group-hover:-translate-y-2 group-hover:bg-white/10">
              {/* GitHub icon SVG */}
              <svg className="text-4xl text-gray-300 transition-all duration-300 md:text-5xl group-hover:scale-110" viewBox="0 0 64 64" fill="currentColor">
                <path d="M32 6C17.6 6 6 17.6 6 32c0 11.5 7.4 21.3 17.7 24.8 1.3.2 1.8-.6 1.8-1.3v-4.6c-7.2 1.6-8.7-3.5-8.7-3.5-1.2-3-2.9-3.8-2.9-3.8-2.4-1.7.2-1.7.2-1.7 2.7.2 4.1 2.8 4.1 2.8 2.4 4.1 6.3 2.9 7.8 2.2.2-1.7.9-2.9 1.6-3.6-5.7-.6-11.7-2.9-11.7-12.7 0-2.8 1-5.1 2.7-6.9-.3-.7-1.2-3.4.3-7.1 0 0 2.2-.7 7.2 2.6 2.1-.6 4.3-.9 6.5-.9s4.4.3 6.5.9c5-3.3 7.2-2.6 7.2-2.6 1.5 3.7.6 6.4.3 7.1 1.7 1.8 2.7 4.1 2.7 6.9 0 9.8-6 12.1-11.7 12.7.9.8 1.7 2.3 1.7 4.6v6.8c0 .7.5 1.5 1.8 1.3C50.6 53.3 58 43.5 58 32 58 17.6 46.4 6 32 6z" />
              </svg>
            </div>
            <span className="mt-4 text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">GitHub</span>
          </motion.div>


          {/* Add more if needed */}

        </motion.div>
      </div>
    </section>
  );
};

export default Tech;