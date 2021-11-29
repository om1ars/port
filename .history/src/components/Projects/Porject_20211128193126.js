import React from "react";
import "./Porjects.scss";
import { PortfolioData } from "../../utils/PortfolioData";
import covid from "../../utils/covid.jpg";
export default function Porject() {
  return (
    <>
      <div className="port__container">
        {PortfolioData.map((d) => (
          <div class="thumb">
            <a
              href="#"
              style={{
                background: `url('https://media.istockphoto.com/vectors/shopping-car…=0&h=waK8qOHV2Fgz2ntEWHWBQtXpNDAQ_wdhd4tkTUz6tfE=')`,
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
