import React from "react";
import Letter from "../components/Letter/Letter";
import Reveal from "../components/Reveal/Reveal";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Letter />
      <Reveal />
    </div>
  );
}
