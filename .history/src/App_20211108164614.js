import HeroSection from "./components/heroSection";
import About from "./components/about";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter></BrowserRouter>
      <Home />
    </div>
  );
}
