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
          {/* <ArrowDropDownRounded /> */}
          {/* {opneMenu && ( */}
          <header>
            <button class="toggle-nav">
              <span onClick={toggleMnu}>0</span>
            </button>
            
              <ul class="nav`>
                <li class="loud">
                  <a href="#">Home</a>
                </li>
                <li class="loud">
                  <a href="#">About</a>
                </li>
                <li class="loud">
                  <a href="#">Case studies</a>
                </li>
                <li class="loud">
                  <a href="#">Clients</a>
                </li>
                <li class="loud">
                  <a href="#">Contact</a>
                </li>
              </ul>

          </header>
          {/* )} */}
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
