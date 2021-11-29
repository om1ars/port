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
      <a href="https://youtu.be/ngd8WTakdtA" target="blank">
        <YouTube style={{ color: "#FF0000" }} />
      </a>
      <a href="https://github.com/omar-slf?tab=repositories" target="_blank">
        <GitHub style={{ color: "#4078c0" }} />
      </a>
    </div>
  );
}
