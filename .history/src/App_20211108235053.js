import HeroSection from "./components/heroSection";
import About from "./components/about";
import "./App.scss";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ClickAwayListener, Menu } from "@material-ui/core";
import {
  ArrowDownward,
  ArrowDropDown,
  ArrowDropDownRounded,
  ArrowDropDownTwoTone,
  DoneAllTwoTone,
  MenuBook,
} from "@material-ui/icons";
import { useState } from "react";

export default function App() {
  const [opneMenu, setOpenMenu] = useState(false);

  const toggleMnu = () => {
    setOpenMenu(!opneMenu);
  };
  return (
    <div>
      <BrowserRouter>
        <div
          onClick={toggleMnu}
          style={{
            position: "fixed",
            top: "10px",
            left: "10px",
            zIndex: 10000000,
          }}
        >
         <nav class="menu">
  <input checked="checked" class="menu-toggler" type="checkbox" />
  <label for="menu-toggler"></label>
  <ul>
    <li class="menu-item">
      <a class="fas fa-cat" href=""></a>
    </li>
    <li class="menu-item">
      <a class="fas fa-cookie-bite" href="#"></a>
    </li>
    <li class="menu-item">
      <a class="fab fa-earlybirds" href="#"></a>
    </li>
    <li class="menu-item">
      <a class="fab fa-fly"href="#"></a>
    </li>
    <li class="menu-item">
      <a class ="far fa-gem" href="#"></a>
    </li>
    <li class="menu-item">
      <a class="fas fa-glass-cheers" href="#"></a>
    </li>
  </ul>
</nav>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
