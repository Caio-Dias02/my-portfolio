import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import MouseTrail from "./components/MouseTrail";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/global.css";


function App() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      <MouseTrail />
      <ScrollToTop />
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
