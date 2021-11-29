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
      <a href='https://t.me/omar_slf' t>
        <Telegram style={{ color: "#0088cc" }} />
      </a>
      <div>
        <Instagram style={{ color: "#fbad50" }} />
      </div>
      <div>
        <YouTube style={{ color: "#FF0000" }} />
      </div>
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
