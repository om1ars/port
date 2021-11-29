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
import Clock from "./components/Clock";
import Rotating from "./components/Rotating/Rotating";
import SinglePort from "./pages/SinglePort";

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
                <div className="death">☠️</div>
              </li>
              <li>
                <a>
                  <Link to="/portfolio">Portfolio</Link>
                </a>
                <div>😜</div>
              </li>
              <li>
                <a>
                  <Link to="/tajriba">Expreince</Link>
                </a>
                <div>🐣</div>
              </li>
              <li>
                <a>
                  <Link to="/study">Bio</Link>
                </a>
                <div>😄</div>
              </li>
              <li>
                <a>
                  <Link to="/contact">Credits</Link>
                </a>
                <div>🙏</div>
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
          <div
            style={{
              position: "fixed",
              bottom: "10px",
              left: "50%",
              display: "flex",
              zIndex: 10000000,
            }}
          >
            <p
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Sorry for being a bit creative{" "}
              <div style={{ marginLeft: "8px" }}>🤔</div>
            </p>
          </div>
          <div
            className="clock"
            style={{
              position: "fixed",
              right: "10px",
              cursor: "pointer",
              top: "10px",
              zIndex: 10000000,
            }}
          >
            <Clock />
          </div>
          <div
            style={{
              position: "fixed",
              right: "50px",
              cursor: "pointer",
              top: "260px",
              zIndex: 10000000,
            }}
          >
            <Rotating />
          </div>
          <div
            style={{
              position: "fixed",
              left: "50px",
              cursor: "pointer",
              top: "560px",
              zIndex: 10000000,
            }}
          >
            <Rotating />
          </div>
        </>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/portfolio/:slug" component={SinglePort} />
          <Route exact path="/tajriba" component={Experience} />
          <Route exact path="/study" component={Study} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
