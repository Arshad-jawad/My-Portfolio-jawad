// Import the hero image asset
import image from "/public/image.jpg";
import { motion } from "framer-motion";

// Define the Hero functional component
const Hero = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  // Begin component render
  return (
    <section
      id="hero"
      className="flex items-center min-h-screen px-6 py-24 bg-gradient-to-b from-blue-900/40 via-purple-900/10 to-pink-900/0"
    >
      <div className="grid items-center w-full max-w-6xl grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
        <motion.div
          className="flex flex-col items-start gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="mb-2 text-base font-semibold tracking-widest text-blue-400 uppercase drop-shadow"
          >
            <span className="text-orange-400">0.1</span> 👋 Hello, I'm
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-black leading-tight text-transparent bg-white sm:text-5xl md:text-6xl from-blue-500 via-purple-500 to-pink-500 bg-clip-text drop-shadow-2xl"
          >
            Mohammad Modasir Jawad
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold text-purple-300 underline md:text-3xl decoration-purple-400/40 underline-offset-4 drop-shadow"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-lg font-normal leading-relaxed text-gray-200 md:text-xl drop-shadow"
          >
            I build <span className="font-semibold text-blue-400">scalable</span>, <span className="font-semibold text-purple-400">accessible</span>, and <span className="font-semibold text-pink-400">performant</span> web applications using
            <span className="font-semibold text-blue-400"> React</span>,
            <span className="font-semibold text-orange-400"> Laravel</span>,
            <span className="font-semibold text-green-400"> Node.js</span>, and modern tooling. I focus on clean code,
            delightful UX, and shipping production-ready features.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mt-6"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:-translate-y-1"
            >
              <span>🌟</span> View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 font-semibold text-white transition-all duration-300 border rounded-lg border-white/30 hover:bg-white/10 hover:shadow-lg"
            >
              <span>✉️</span> Contact Me
            </a>
            <a
              href="/assets/resume.pdf"
              className="items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg sm:inline-flex hover:text-orange-400 text-white/80 hover:bg-white/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>📄</span> Resume
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-2 mt-8"
          >
            <span className="mr-3 text-sm font-medium text-gray-400">Tech Stack:</span>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1.5 rounded-full font-semibold shadow border border-blue-500/30 flex items-center gap-1">
                ⚛️ React
              </span>
              <span className="bg-green-500/20 text-green-300 text-xs px-3 py-1.5 rounded-full font-semibold shadow border border-green-500/30 flex items-center gap-1">
                🟩 Laravel
              </span>
              <span className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1.5 rounded-full font-semibold shadow border border-purple-500/30 flex items-center gap-1">
                🟪 TypeScript
              </span>
              <span className="bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1.5 rounded-full font-semibold shadow border border-cyan-500/30 flex items-center gap-1">
                💨 Tailwind
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="relative">
            <div className="w-64 h-64 overflow-hidden transition-transform transform rounded-full shadow-2xl sm:w-80 sm:h-80 md:w-96 md:h-96 ring-4 ring-blue-500/30 hover:scale-105 bg-gradient-to-tr from-blue-500/30 via-purple-500/20 to-pink-500/10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <img
                  src={image}
                  alt="Portrait of Mohammad Modasir Jawad"
                  className="object-cover object-center w-full h-full transition-opacity duration-500 rounded-lg opacity-70 group-hover:opacity-90 opactity-90 hover:opacity-90"
                />
              </motion.div>
            </div>

            {/* Floating elements around the image */}
            <div className="absolute w-16 h-16 rounded-full -top-4 -right-4 bg-blue-500/30 blur-xl animate-pulse"></div>
            <div className="absolute w-20 h-20 rounded-full -bottom-4 -left-4 bg-purple-500/30 blur-xl animate-pulse-slow"></div>
            <div className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-full bg-pink-500/30 blur-xl animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Export the Hero component as default
export default Hero;