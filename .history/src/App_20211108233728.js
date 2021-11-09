import HeroSection from "./components/heroSection";
import About from "./components/about";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Menu } from "@material-ui/core";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div
          style={{
            position: "fixed",
            top: "10px",
            left: "10px",
            zIndex: 10000000,
          }}
        >
          <Menu />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
