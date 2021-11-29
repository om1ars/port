import React from "react";
import { useParams } from "react-router";
import { PortfolioData } from "../utils/PortfolioData";

export default function SinglePort() {
  const { slug } = useParams();

  console.log(slug);


  return (
    <div>
     
          <p>{slug}</p>
          {PortfolioData.filter((f) => f.slug === slug).map((v, i) => (
              
          ))}
    </div>
  );
}
