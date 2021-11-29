import React from "react";
import { useParams } from "react-router";
import { PortfolioData } from "../utils/PortfolioData";
import "./SinglePort.scss";

export default function SinglePort() {
  const { slug } = useParams();

  console.log(slug);

  return (
    <div>
      {/* <p>{slug}</p> */}
      {PortfolioData.filter((f) => f.slug === slug).map((v, i) => (
        <>
          <div class="containerr">
            <div class="containerr__image" style={{backgroundImage: `url(${v.image})`}}>
              <div class="container__info container__author">
                Photo by{" "}
                <a
                  class="link"
                  href="https://instagram.com/silvia.diaconescu"
                  target="_blank"
                >
                  Silvia Diaconescu
                </a>
              </div>
              <div class="container__info container__location">
                Geneva Lake Switzerland{" "}
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
