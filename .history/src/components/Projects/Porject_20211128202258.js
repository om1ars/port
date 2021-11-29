import React from "react";
import "./Porjects.scss";
import { PortfolioData } from "../../utils/PortfolioData";
import covid from "../../utils/covid.jpg";
import { Link } from "react-router-dom";
export default function Porject() {
  return (
    <>
      <div className="port__container">
        {PortfolioData.map((d) => (
            <div class="thumb">
                        <Link to={`/portfolio/${d.slug}`}>

              <a
                href="#"
                style={{
                  background: `url(${d.image})`,
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              >
                <span>{d.title}</span>
              </a>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
