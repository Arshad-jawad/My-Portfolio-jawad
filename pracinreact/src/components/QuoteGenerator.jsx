import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const QuoteGenerator = () => {
    const [currentQuote, setCurrentQuote] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);

    // Sample quotes array - you can add more quotes
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Innovation distinguishes between a leader and a follower. - Steve Jobs",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "The way to get started is to quit talking and begin doing. - Walt Disney",
        "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
        "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
        "If you look at what you have in life, you'll always have more. - Oprah Winfrey",
        "Life is what happens when you're busy making other plans. - John Lennon",
        "Spread love everywhere you go. - Mother Teresa",
        "The purpose of our lives is to be happy. - Dalai Lama",
        "Get busy living or get busy dying. - Stephen King",
        "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
        "The future belongs to those who prepare for it today. - Malcolm X"
        
        
    ];

    const generateRandomQuote = () => {
        setIsGenerating(true);

        // Clear current quote for a moment
        setCurrentQuote("");

        // Short delay for animation effect
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            setCurrentQuote(quotes[randomIndex]);
            setIsGenerating(false);
        }, 500);
    };

    return (
        <section id="quotes" className="px-6 py-20 ">
            <div className="w-full max-w-4xl mx-auto">
                <motion.div
                    className="flex flex-col items-center justify-center gap-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h2 className="text-3xl font-black md:text-4xl">
                        <span className="mb-16 text-4xl font-black text-center text-transparent bg-white md:text-5xl from-blue-500 via-purple-500 to-pink-500 bg-clip-text drop-shadow-lg">
                            Inspirational Quotes
                        </span>
                    </h2>

                    <p className="max-w-2xl text-lg text-gray-300">
                        Need some inspiration? Generate a random quote to brighten your day.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={generateRandomQuote}
                        disabled={isGenerating}
                        className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-indigo-600 to-blue-600 shadow-indigo-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/50"
                    >
                        {isGenerating ? (
                            <>
                                <svg className="w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Generating...
                            </>
                        ) : (
                            <>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                                </svg>
                                Generate Quote
                            </>
                        )}
                    </motion.button>

                    <AnimatePresence mode="wait">
                        {currentQuote && (
                            <motion.div
                                key={currentQuote}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="w-full max-w-2xl p-6 mt-6 border bg-white/5 backdrop-blur-sm border-white/10 rounded-xl"
                            >
                                <svg className="w-8 h-8 mx-auto mb-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                </svg>
                                <p className="text-xl italic text-center text-gray-200">"{currentQuote}"</p>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigator.clipboard.writeText(currentQuote)}
                                    className="flex items-center gap-2 mx-auto mt-4 text-sm text-blue-400 transition-colors hover:text-blue-300"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                    </svg>
                                    Copy Quote
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default QuoteGenerator;