import { Facebook, GitHub, Instagram, Telegram, YouTube } from "@material-ui/icons";
import React from "react";
import "./Icons.css";

export default function Icons() {
  return (
    <div className="icons">
      <div>
        <Telegram />
      </div>
      <div>
        <Instagram />
      </div>
      <div>
        <YouTube />
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
