import React from 'react';
// 1.
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import styles from '../styles/heroSection.module.css';
import heroImage from '../assets/images/image.jpeg';

export default function HeroSection({ offset = 1500 }) {
  // 2.
  const { scrollY } = useViewportScroll();
  // 3.
  const scale = useTransform(scrollY, [0, offset], [1, 5]);
  const opacity = useTransform(scrollY, [0, offset], [3, 0]);
  const moveDown = useTransform(scrollY, [0, offset], [0, -1000]);

  return (
    <>
      <div className={styles.imageContainer}>
        {/* 5. */}
        <motion.img
          src={heroImage}
          alt='Model'
          style={{
            opacity: opacity,
            scale: scale,
            y: moveDown,
          }}
        />
      </div>
      {/* 6. */}
      <div style={{ background: '#030303', height: `${offset}px` }}></div>
      <div style={{ background: '#030303', height: '80vh' }}></div>
    </>
  );
}
