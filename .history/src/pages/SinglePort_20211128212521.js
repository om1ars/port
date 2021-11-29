import React from "react";
import { useParams } from "react-router";
import { PortfolioData } from "../utils/PortfolioData";
import "./SinglePort.css";

export default function SinglePort() {
  const { slug } = useParams();

  console.log(slug);

  return (
    <div>
      {/* <p>{slug}</p> */}
      {PortfolioData.filter((f) => f.slug === slug).map((v, i) => (
        <>
          <div className="imageSide">
            <img src={v.image} alt={v.title} />
          </div>
          <div className="contextSide">
              
          </div>
        </>
      ))}
    </div>
  );
}
