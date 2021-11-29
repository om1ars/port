import React from "react";
import "./Porjects.scss";
import { PortfolioData } from "../../utils/PortfolioData";

export default function Porject() {
  return (
    <>
      <div className="port__container">
        {PortfolioData.map((d) => (
          <div class="thumb">
            <a
              href="#"
              style={{
                background:
                  `url('https://www.equiti.com/media/11666/amazon.jpg')",
              }}
            >
              <span>{d.title}</span>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
