import { motion } from "framer-motion";
import React from "react";
import About from "../components/about";
import Carousel from "../components/Carousel/Carousel";
import Current from "../components/Current/Current";
import HeroSection from "../components/heroSection";
import Summary from "../components/Summary/Summary";
import './Home.css'

export default function Home() {
  return (
    <div cl >
      <HeroSection />
      <About />
      <Current />
      <Carousel />
      <Summary />
    </div>
  );
}
