// Import motion from Framer Motion for animations
import { motion } from "framer-motion";

// Import project images (update paths as needed)
import image1 from "/public/1.png";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import image4 from "/public/4.png";
import image5 from "/public/5.png";

// Project data array with detailed information for each project
const projectData = [
  {
    image: image1,  // Project image
    title: "Habit Tracker",  // Project title
    description: "A comprehensive habit tracking application with progress visualization, reminder system, and streak tracking to help users build consistent routines.",  // Project description
    techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],  // Technologies used
    link: "#"  // Project link
  },
  {
    image: image2,
    title: "Task Management App",
    description: "A productivity application featuring drag-and-drop task organization, priority settings, due date reminders, and collaborative workspaces.",
    techStack: ["React", "Redux", "Express", "PostgreSQL", "Framer Motion"],
    link: "#"
  },
  {
    image: image3,
    title: "Social Media Platform",
    description: "A full-stack social networking application with real-time messaging, post interactions, user profiles, and content feed algorithms.",
    techStack: ["React", "Socket.io", "Node.js", "MongoDB", "Cloudinary"],
    link: "#"
  },

];

// Animation variants for container (staggered children)
const containerVariants = {
  hidden: { opacity: 0 },  // Initial hidden state
  visible: {
    opacity: 1,  // Final visible state
    transition: {
      delayChildren: 0.3,  // Delay before children start animating
      staggerChildren: 0.2  // Time between each child animation
    }
  }
};

// Animation variants for individual items
const itemVariants = {
  hidden: { y: 20, opacity: 0 },  // Start slightly below and transparent
  visible: {
    y: 0,  // End at normal position
    opacity: 1,  // Fully visible
    transition: { duration: 0.5, ease: "easeOut" }  // Animation timing
  }
};

// ProjectCard component for displaying individual projects
const ProjectCard = ({ project, index }) => {
  return (
    // Animated card container with hover effects
    <motion.div
      variants={itemVariants}  // Use item animation variants
      className="flex flex-col overflow-hidden transition-all duration-500 border shadow-lg group rounded-2xl bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 hover:bg-white/10 hover:shadow-xl"
    >
      {/* Image container with hover effects */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}  // Project image
          alt={project.title}  // Accessibility alt text
          className="object-cover w-full h-48 transition-transform duration-700 group-hover:scale-105"  // Image styling with hover scale
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100"></div>
      </div>

      {/* Content section of the card */}
      <div className="flex flex-col gap-4 p-6">
        {/* Project title with hover color change */}
        <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
          {project.title}
        </h3>

        {/* Project description */}
        <p className="leading-relaxed text-gray-300">
          {project.description}
        </p>

        {/* Technology badges */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 text-xs font-medium text-blue-300 border rounded-full bg-blue-500/20 border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project link with arrow animation */}
        {/* <div className="mt-4">
          <a 
            href={project.link}
            className="inline-flex items-center text-sm font-medium text-blue-400 transition-colors duration-300 hover:text-blue-300"
          >
            View Project
            {/* Animated arrow icon */}
        {/* <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> */}
        {/* </svg>
          </a> */}
        {/* </div> */}
      </div>
    </motion.div>
  );
};

// Main Projects component
const Projects = () => {
  return (
    // Section container with matching gradient background
    <section
      id="projects"  // Section ID for navigation
      className="flex items-center min-h-screen px-6 py-24 bg-gradient-to-b from-transparent via-white/5 to-transparent"
    >
      {/* Container with max width and centering */}
      <div className="w-full max-w-6xl mx-auto">
        {/* Animated section title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}  // Start state
          animate={{ opacity: 1, y: 0 }}    // End state
          transition={{ duration: 0.5, ease: "easeOut" }}  // Animation settings
          className="mb-16 text-4xl font-black text-center text-transparent bg-white md:text-5xl from-blue-500 via-purple-500 to-pink-500 bg-clip-text drop-shadow-lg"
        >
          <span className="text-orange-400">0.3</span> My Projects
        </motion.h1>

        {/* Projects grid with staggered animations */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"  // Responsive grid
          variants={containerVariants}  // Container animation variants
          initial="hidden"  // Initial animation state
          animate="visible"  // Animation trigger
        >
          {/* Map through project data and render ProjectCard for each */}
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Export the Projects component as default
export default Projects;