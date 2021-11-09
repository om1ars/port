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
        <Instagram style={{color: '#8a3ab9'}} />
      </div>
      <div>
        <YouTube style={{ color: "#FF0000" }} />
      </div>
      <div>
        <GitHub style={{color: 'black'}} />
      </div>
      <div>
        <LinkedIn style={{color: 'skyblue'}} />
      </div>
      <div>
        <Facebook />
      </div>
    </div>
  );
}
