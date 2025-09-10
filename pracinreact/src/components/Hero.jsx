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
      className="min-h-screen flex items-center py-24 px-6 bg-gradient-to-b from-transparent via-white/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="flex flex-col items-start gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            variants={itemVariants}
            className="text-base text-blue-400 font-semibold uppercase tracking-widest mb-2"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
          >
            Mohammad Modasir Jawad
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-purple-300 underline decoration-purple-400/40 underline-offset-4"
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-xl font-normal leading-relaxed"
          >
            I build scalable, accessible, and performant web applications using
            <span className="font-semibold text-blue-400"> React</span>,
            <span className="font-semibold text-orange-400"> Laravel</span>,
            <span className="font-semibold text-green-400"> Node.js</span>, and modern tooling. I focus on clean code,
            delightful UX, and shipping production-ready features.
          </motion.p>
          


          <hr className="w-full border-t border-gray-700 my-4" />
          {/* <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-3 rounded-lg hover:bg-white/10 font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Contact Me
            </a>
            <a
              href="/assets/resume.pdf"
              className="sm:inline-flex items-center gap-2 text-sm text-white/80 px-4 py-2 rounded-lg hover:bg-white/10 font-medium transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </motion.div> */}
          
          {/* Tech stack badges
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-2 items-center"
          >
            <span className="text-sm text-gray-400 mr-3 font-medium">Tech Stack:</span>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1.5 rounded-full font-semibold shadow border border-blue-500/30">
                React
              </span>
              <span className="bg-green-500/20 text-green-300 text-xs px-3 py-1.5 rounded-full font-semibold shadow border border-green-500/30">
                Node.js
              </span>
              <span className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1.5 rounded-full font-semibold shadow border border-purple-500/30">
                TypeScript
              </span>
              <span className="bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1.5 rounded-full font-semibold shadow border border-cyan-500/30">
                Tailwind
              </span>
            </div>
          </motion.div> */}
        </motion.div>
        
        <motion.div 
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-blue-500/30 shadow-2xl transition-transform transform hover:scale-105">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <img
                  src="/public/image.jpg"
                  alt="Portrait of Mohammad Modasir Jawad"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </div>
            
            {/* Floating elements around the image */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse-slow"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Export the Hero component as default
export default Hero;