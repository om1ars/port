import React from "react";
import { useParams } from "react-router";
import { PortfolioData } from "../utils/PortfolioData";

export default function SinglePort() {
  const { slug } = useParams();

  console.log(slug);
  return (
    <div>
      {PortfolioData.map((d) => (
        <>
          <p>{slug}</p>
        </>
      ))}
    </div>
  );
}
