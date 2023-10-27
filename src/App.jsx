import About from "./components/About";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="text-[#444957]">
      <Navbar />
      <Hero />
      <About />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App
