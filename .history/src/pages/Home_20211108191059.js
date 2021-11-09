import { motion } from "framer-motion";
import React from "react";
import About from "../components/about";
import Carousel from "../components/Carousel/Carousel";
import Current from "../components/Current/Current";
import HeroSection from "../components/heroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
        <About />
      <Current />
      <Carousel />
    </div>
  );
}
