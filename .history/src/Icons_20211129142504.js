import {
  Facebook,
  GitHub,
  Instagram,
  Telegram,
  YouTube,
  LinkedIn,
} from "@material-ui/icons";
import React from "react";
import "./Icons.css";

export default function Icons() {
  return (
    <div className="icons">
      <a href="https://t.me/omar_slf" target="blank">
        <Telegram style={{ color: "#0088cc" }} />
      </a>
      <a href="https://t.me/omar_slf" target="blank">
        <Instagram style={{ color: "#fbad50" }} />
      </a>
      <a href='https://youtu.be/ngd8WTakdtA' >
        <YouTube style={{ color: "#FF0000" }} />
      </a>
      <div>
        <GitHub style={{ color: "#4078c0" }} />
      </div>
      <div>
        <LinkedIn style={{ color: "#0077b5" }} />
      </div>
      <div>
        <Facebook style={{ color: " #3b5998" }} />
      </div>
    </div>
  );
}
