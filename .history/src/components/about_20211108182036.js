import React from "react";
import "./about.scss";
import styles from "../styles/about.module.css";
import image from "../assets/images/image.jpeg";
import ImageContainer from "./parallaxText/ImageContainer";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function About({ offset = 1500 }) {
  const { scrollY } = useViewportScroll();
  // 3.
  const scale = useTransform(scrollY, [0, offset], [1, 25]);
  const opacity = useTransform(scrollY, [0, offset], [3, 0]);
  const moveDown = useTransform(scrollY, [0, offset], [0, 5800]);

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
      <div className={styles.ImageContainer}>
        <motion.img
          src={image}
          alty="Model"
          style={{
            opacity: opacity,
            scale: scale,
            y: moveDown,
          }}
        />
      </div>
    </div>
  );
}
