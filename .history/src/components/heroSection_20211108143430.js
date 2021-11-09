import React from "react";
// 1.
import { motion, useViewportScroll, useTransform } from "framer-motion";

import styles from "../styles/heroSection.module.css";
import heroImage from "../assets/images/image.jpeg";

export default function HeroSection({ offset = 1500 }) {
  // 2.
  const { scrollY } = useViewportScroll();
  // 3.
  const scale = useTransform(scrollY, [0, offset], [1, 25]);
  const opacity = useTransform(scrollY, [0, offset], [3, 0]);
  const moveDown = useTransform(scrollY, [0, offset], [0, 5800]);

  return (
    <>
      <div className={styles.imageContainer}>
        <motion.img
          src={heroImage}
          alt="Model"
          style={{
            opacity: opacity,
            scale: scale,
            y: moveDown,
          }}
        ></motion.img>
        <motion.p
          alt="Model"
          style={{
            opacity: opacity,
            scale: scale,
            y: moveDown,
          }}
        ></motion.p>
      </div>
      <div style={{ background: "#7d956d", height: `${offset}px` }}></div>
      <div style={{ background: "#7d956d", height: "80vh" }}></div>
    </>
  );
}
