import React from "react";
import "./Porjects.scss";

export default function Porject() {
  return (
  {PortfolioData.map((d) => (
    <div className="port__container">
    <div class="thumb">
      <a
        href="#"
        style={{
          background: "url('	https://www.equiti.com/media/11666/amazon.jpg')",
        }}
      >
        <span>Amazon Clone</span>
      </a>
    </div>
   
  </div>
  ))}
  );
}
