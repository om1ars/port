import HeroSection from "./components/heroSection";
import About from "./components/about";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1 className="side__text">Portfolio</h1>
      <HeroSection />
      <About />
    </div>
  );
}
