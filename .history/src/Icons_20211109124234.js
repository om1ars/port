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
      <div>
        <Telegram style={{ color: "#0088cc" }} />
      </div>
      <div>
        <Instagram  />
      </div>
      <div>
        <YouTube style={{#FF0000}} />
      </div>
      <div>
        <GitHub />
      </div>
      <div>
        <LinkedIn />
      </div>
      <div>
        <Facebook />
      </div>
    </div>
  );
}
