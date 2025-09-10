import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import QuoteGenerator from "./components/QuoteGenerator";

function App() {
  return (
    <>
      <div
        className="fixed w-full min-h-screen -z-10"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
        }}
      ></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16 ">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
        <ScrollToTop />
        <QuoteGenerator />
        <Footer />
      </main>
    </>
  );
}

export default App;
