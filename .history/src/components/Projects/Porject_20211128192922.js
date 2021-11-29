import React from "react";
import "./Porjects.scss";
import { PortfolioData } from "../../utils/PortfolioData";
import covid from '../../utils/covid.jpg'
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
                  `url(${d.img})`,
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
