import React, { useEffect, useMemo, useRef } from "react";
import "./Study.scss";

export default function Study() {
  let time = 0;
  let mouseX = window.innerWidth * 0.75;
  let x = 0;

  /*--------------------
Options
--------------------*/
  const opt = {
    radius: 100,
    radiusY: 0.4,
    maxSpeed: 0.05,
    maxRotation: 50,
    minOpacity: 0.3,
    spacer: "*",
  };

  /*--------------------
Utils
--------------------*/
  const scale = (a, b, c, d, e) => {
    return ((a - b) * (e - d)) / (c - b) + d;
  };
  const lerp = (v0, v1, t) => {
    return v0 * (1 - t) + v1 * t;
  };

  /*--------------------
Create Invaders
--------------------*/
  let letter;
  const createInvaders = () => {
    const word = document.querySelector(".word");
    const Letters = document.quinnerHTML
      .replace(/\s/g, opt.spacer)
      .split("")
      .reverse();
    word.innerHTML = "";
    Letters.forEach((i) => {
      const l = document.createElement("span");
      l.innerHTML = i;
      word.appendChild(l);
    });
    letter = document.querySelectorAll(".word span");
  };
  createInvaders();

  /*--------------------
Animate
--------------------*/
  const animate = () => {
    if (!letter) return;

    x = lerp(x, mouseX / window.innerWidth, 0.1);
    const rotation = -opt.maxRotation + x * opt.maxRotation * 2;
    const speed = -opt.maxSpeed + x * opt.maxSpeed * 2;
    const modY = 1 + x * -2;

    time -= speed;

    letter.forEach((i, ind) => {
      const theta = 1 - ind / letter.length;
      const x = opt.radius * Math.sin(time + theta * Math.PI * 2);
      const y =
        opt.radius * opt.radiusY * Math.cos(modY + time + theta * Math.PI * 2);
      const s = scale(
        y,
        -opt.radius * opt.radiusY,
        opt.radius * opt.radiusY,
        opt.minOpacity,
        1
      );

      Object.assign(i.style, {
        zIndex: Math.min(2, Math.max(-2, Math.ceil(y))),
        filter: `blur(${4 - 5 * s}px)`,
        opacity: s,
        transform: `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg)`,
      });
    });
    requestAnimationFrame(animate);
  };
  animate();

  /*--------------------
Events
--------------------*/
  const handleMouse = (e) => {
    mouseX = e.clientX || e.touches[0].clientX;
  };
  window.addEventListener("mousemove", handleMouse);
  window.addEventListener("touchstart", handleMouse);
  window.addEventListener("touchmove", handleMouse);

  return (
    <div className="study">
      <div class="word">SPACE INVADERS </div>
    </div>
  );
}
