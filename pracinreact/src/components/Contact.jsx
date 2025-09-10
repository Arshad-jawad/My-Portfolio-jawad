import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    setShowContactInfo(!showContactInfo);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here for better UX
    alert(`Copied to clipboard: ${text}`);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-24 px-6 bg-gradient-to-b from-transparent via-white/5 to-transparent"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          className="flex flex-col items-center justify-center gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">
            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
              <span className="text-orange-400">0.4</span> Get in Touch
            </span>
          </h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Want to chat? Send me an email and I'll respond as soon as possible.
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-4 items-center"
          >
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/50"
            >
              {showContactInfo ? "Hide Contact Info" : "Contact Me"}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </button>

            <AnimatePresence>
              {showContactInfo && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 w-full max-w-md"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>

                  <div className="space-y-4">
                    <div className="flex flex-col items-center">
                      <span className="text-gray-300 mb-1">Email</span>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400 font-medium">jawadmodasir@gmail.com</span>
                        <button
                          onClick={() => copyToClipboard("jawadmodasir@gmail.com")}
                          className="p-1 text-gray-400 hover:text-white transition-colors"
                          aria-label="Copy email"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                          </svg>
                        </button>
                      </div>
                      <a
                        href="mailto:jawadmodasir@gmail.com"
                        className="text-sm text-blue-400 hover:text-blue-300 mt-1"
                      >
                        Send email directly
                      </a>
                    </div>

                    <div className="border-t border-white/10 pt-4 flex flex-col items-center">
                      <span className="text-gray-300 mb-1">Phone</span>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400 items-center font-medium">(+93) 790 13 13 75</span>
                        <button
                          onClick={() => copyToClipboard("+93790131375")}
                          className="p-1 text-gray-400 hover:text-white items-center transition-colors"
                          aria-label="Copy phone number"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <div>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:text-orange-500 inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/20 hover:border-white/30"
            >
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;