import React from "react";
import { PortfolioData } from "../../utils/PortfolioData";
import "./Porjects.scss";

export default function Porject() {
  return (
    <div className="port__container">
      <div class="thumb">
       {PortfolioData.map((d) => (
          <a
          href="#"
          style={{
            background: "url('	https://www.equiti.com/media/11666/amazon.jpg')",
          }}
        >
          <span>Amazon Clone</span>
        </a>
       ))}
      </div>
    </div>
  );
}
