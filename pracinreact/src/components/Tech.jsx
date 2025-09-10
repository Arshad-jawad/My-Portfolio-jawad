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
      className="min-h-screen flex items-center py-24 px-6 bg-gradient-to-b from-transparent via-white/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          Technologies
        </motion.h1>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="group relative flex flex-col items-center"
          >
            <div className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/10">
              <BiLogoTypescript className="text-4xl md:text-5xl text-sky-500 transition-all duration-300 group-hover:scale-110" />
            </div>
            <span className="mt-4 text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">TypeScript</span>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="group relative flex flex-col items-center"
          >
            <div className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/10">
              <BiLogoJavascript className="text-4xl md:text-5xl text-yellow-400 transition-all duration-300 group-hover:scale-110" />
            </div>
            <span className="mt-4 text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">JavaScript</span>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="group relative flex flex-col items-center"
          >
            <div className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/10">
              <BiLogoDocker className="text-4xl md:text-5xl text-blue-400 transition-all duration-300 group-hover:scale-110" />
            </div>
            <span className="mt-4 text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">Docker</span>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="group relative flex flex-col items-center"
          >
            <div className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/10">
              <BiLogoTailwindCss className="text-4xl md:text-5xl text-cyan-400 transition-all duration-300 group-hover:scale-110" />
            </div>
            <span className="mt-4 text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">Tailwind</span>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="group relative flex flex-col items-center"
          >
            <div className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/10">
              <BiLogoNodejs className="text-4xl md:text-5xl text-green-500 transition-all duration-300 group-hover:scale-110" />
            </div>
            <span className="mt-4 text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">Node.js</span>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="group relative flex flex-col items-center"
          >
            <div className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/10">
              <BiLogoPostgresql className="text-4xl md:text-5xl text-blue-600 transition-all duration-300 group-hover:scale-110" />
            </div>
            <span className="mt-4 text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">PostgreSQL</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;