import About from "./components/About";
import BlogSection from "./components/BlogSection";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="text-[#444957]">
      <Navbar />
      <Hero />
      <About />
      <BlogSection />
    </div>
  );
}

export default App
