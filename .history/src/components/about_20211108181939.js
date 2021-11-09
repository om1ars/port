import React from "react";
import "./about.scss";
import styles from "../styles/about.module.css";
import image from "../assets/images/image.jpeg";
import ImageContainer from "./parallaxText/ImageContainer";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function About({ offset = 1500 }) {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <div className={styles.container}>
      <h1 style={{ position: "fixed", top: 0 }}>Background</h1>
      <div className="">
        <ImageContainer />
      </div>

      <div class="Iam">
        <p>I am </p>
        <b>
          <div class="innerIam">
            Omar
            <br />
            Programmer
            <br />
            Youtuber
            <br />
            Gamer
            <br />
            Frontend-dev
          </div>
        </b>
      </div>
      <div>
        <motion.img
        
        src={}
        />
      </div>
    </div>
  );
}
