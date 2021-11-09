import React, { useEffect, useMemo, useRef } from "react";
import Carousel from "./components/Carousel/Carousel";
import SecondCarousel from "./components/Carousel/SecondCarousel";
import Gallery from "./components/Gallery/Gallery";
import TypeText from "./components/TypeText/TypeText";
import "./Study.scss";

export default function Study() {
  return (
    <div className='study__container'>
    <div style={{ backgroundColor: "white" }}>
      <TypeText />
      <Gallery />
    </div>

      <SecondCarousel />
  );
}
