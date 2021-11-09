import React from "react";
import Letter from "../components/Letter/Letter";
import Porject from "../components/Projects/Porject";
import Reveal from "../components/Reveal/Reveal";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Letter />
      <Reveal />
      <Porject />
    </div>
  );
}
