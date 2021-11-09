import React from "react";

import "./about.scss";

export default function About() {
  return (
    <div className="body">
      <div class="all">
        <div class="lefter">
          <div class="text">Hosting</div>
        </div>
        <div class="left">
          <div class="text">Web Design</div>
        </div>
        <div class="center">
          <div
            class="explainer"
            style={{ display: "flex", alignItems: "center", margin: 'auto' }}
          >
            <span>Route for pages</span>
          </div>
          <div class="text">Frontend Development</div>
        </div>
        <div class="right">
          <div class="text">Backend Development</div>
        </div>
        <div class="righter">
          <div class="text">SEO</div>
        </div>
      </div>
    </div>
  );
}
