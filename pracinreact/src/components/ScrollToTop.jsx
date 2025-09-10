// Import useState and useEffect hooks from React
// useState: Allows functional components to have state
// useEffect: Handles side effects in functional components (like event listeners, API calls)
import { useState, useEffect } from 'react';

// Import motion and AnimatePresence from Framer Motion
// motion: Used to create animated components
// AnimatePresence: Allows components to animate out when they're removed from the React tree
import { motion, AnimatePresence } from 'framer-motion';

// Define the ScrollToTop component as a functional component
const ScrollToTop = () => {
  // Create a state variable 'isVisible' with initial value false
  // setIsVisible is the function to update this state
  // This will control whether the button is visible or not
  const [isVisible, setIsVisible] = useState(false);

  // useEffect hook to handle side effects (scroll event listener)
  // The empty array [] as second parameter means this effect runs only once after initial render
  useEffect(() => {
    // Define function to toggle button visibility based on scroll position
    const toggleVisibility = () => {
      // Check if user has scrolled more than 300 pixels from the top
      if (window.pageYOffset > 300) {
        setIsVisible(true); // Show button if scrolled down
      } else {
        setIsVisible(false); // Hide button if near top
      }
    };

    // Add scroll event listener to window
    // Calls toggleVisibility function whenever user scrolls
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup function: removes event listener when component unmounts
    // Prevents memory leaks and ensures proper cleanup
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []); // Empty dependency array means effect runs only once

  // Function to handle scroll to top action
  const scrollToTop = () => {
    // Use window.scrollTo method for smooth scrolling
    window.scrollTo({
      top: 0, // Scroll to top of page (0 pixels from top)
      behavior: 'smooth', // Animate the scroll with smooth behavior
    });
  };

  // Return the JSX to render
  return (
    // AnimatePresence component allows exit animations for components
    // that are being removed from the DOM
    <AnimatePresence>
      {/* Only render the button if isVisible is true */}
      {isVisible && (
        // motion.button component with animation properties
        <motion.button
          // Initial animation state (hidden and scaled down)
          initial={{ opacity: 0, scale: 0.5 }}
          // Animation when component enters (visible and normal scale)
          animate={{ opacity: 1, scale: 1 }}
          // Exit animation (hidden and scaled down)
          exit={{ opacity: 0, scale: 0.5 }}
          // Animation transition settings (duration of 0.3 seconds)
          transition={{ duration: 0.3 }}
          // Click handler - calls scrollToTop function when clicked
          onClick={scrollToTop}
          // CSS classes for styling:
          // fixed: Position fixed relative to viewport
          // bottom-8, right-8: Position 2rem from bottom and right
          // z-50: High z-index to ensure button appears above other content
          // p-3: Padding of 0.75rem
          // bg-gradient-to-r: Gradient background from indigo to blue
          // text-white: White text color
          // rounded-full: Fully rounded corners (circle shape)
          // shadow-lg: Large shadow
          // hover:shadow-xl: Larger shadow on hover
          // transition-all, duration-300: Smooth transition for all properties
          // hover:-translate-y-1: Moves up slightly on hover
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-indigo-600 to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          // Accessibility label for screen readers
          aria-label="Scroll to top"
        >
          {/* SVG icon for upward arrow */}
          <svg
            // CSS classes for icon sizing
            className="w-6 h-6"
            // fill="none": No fill color
            fill="none"
            // stroke="currentColor": Use current text color for stroke
            stroke="currentColor"
            // ViewBox defines the coordinate system and aspect ratio
            viewBox="0 0 24 24"
            // XML namespace for SVG
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Path defining the arrow shape */}
            <path
              // strokeLinecap="round": Rounded line endings
              strokeLinecap="round"
              // strokeLinejoin="round": Rounded line joins
              strokeLinejoin="round"
              // strokeWidth={2}: 2px stroke width
              strokeWidth={2}
              // d: Path data defining the arrow coordinates
              // M5 10: Move to position (5,10)
              // l7-7: Draw line 7 units left and 7 units up (relative)
              // m0 0: Move relative (0,0) - no movement
              // l7 7: Draw line 7 units right and 7 units down (relative)
              // m-7-7: Move 7 units left and 7 units up (relative)
              // v18: Draw vertical line 18 units down
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Export the component as default export
// This allows other files to import this component
export default ScrollToTop;