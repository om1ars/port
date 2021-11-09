import HeroSection from "./components/heroSection";
import About from "./components/about";
import "./App.scss";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
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
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Study from "./Study";
import Contact from "./pages/Contact";
import Icons from "./Icons";

export default function App() {
  const [opneMenu, setOpenMenu] = useState(false);

  const toggleMnu = () => {
    setOpenMenu(!opneMenu);
  };
  return (
    <div>
      <BrowserRouter>
        <>
          <div
            onClick={toggleMnu}
            className="menu"
            style={{
              position: "fixed",
              top: "10px",
              left: "10px",
              zIndex: 10000000,
            }}
          >
            <ul>
              <li>
                <a>
                  <Link to="/">My world</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/portfolio">Portfolio</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/tajriba">Expreince</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/study">Bio <div></div></Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/contact">Credits 🙏</Link>
                </a>
              </li>
            </ul>
          </div>
          <div
            style={{
              position: "fixed",
              right: "10px",
              cursor: "pointer",
              top: "50%",
              zIndex: 10000000,
            }}
          >
            <Icons />
          </div>
        </>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/tajriba" component={Experience} />
          <Route exact path="/study" component={Study} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
