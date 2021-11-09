import React from "react";

export default function ImageContainer() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let viewHeight = window.innerHeight;

    let textContainers = document.querySelectorAll(".text-container");

    textContainers.forEach((element, index) => {
      let top = element.getBoundingClientRect().top;
      let start = viewHeight - top;

      let firstText = element.querySelector(".parallax-text:first-child");
      let secondText = element.querySelector(".parallax-text:last-child");

      gsap.to(firstText, {
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: start + "px bottom" * 4,
          end: "bottom top",
        },
        x: "-84vw",
        transformOrigin: "left center",
        ease: "none",
      });
      gsap.to(secondText, {
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: start + "px bottom" * 4,
          end: "bottom top",
        },
        x: "82vw",
        transformOrigin: "left center",
        ease: "none",
      });
    });

    // ScrollTrigger.create({
    //     trigger: ".section-section",
    //     start: "top center",
    //     scrub: true,
    //     animation: tl,
    //     onLeave: () => gsap.to(".section-section", {
    //         duration: 1,
    //         backgroundColor: "#f6f6f6",
    //         autoAlpha: 1,
    //         color: "#222"
    //     }),
    // })
    // ScrollTrigger.create({
    //     trigger: ".parallax-text",
    //     start: "top center",
    //     scrub: true,
    //     onEnter: () => gsap.to(".parallax-text", {
    //         duration: 1,
    //         webkitTextStroke: "#222"
    //     }),
    //     onLeave: () => gsap.to(".parallax-text", {
    //         duration: 1,
    //         autoAlpha: 1,
    //         webkitTextStroke: "#222",
    //     }),
    //     markers: true
    // })
  });
  return <div></div>;
}
