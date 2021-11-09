import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";
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
  return (
    <div>
      <>
        <main className="main-parallax">
          {/*<section className="section-section">*/}
          {/*    /!*<div className="image-container parallax" data-depth='-2'>*!/*/}
          {/*    /!*    <div className="image-container__inner parallax" data-depth='1'>*!/*/}
          {/*    /!*        <img*!/*/}
          {/*    /!*            src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&auto=format&fit=crop&w=2168&q=80"*!/*/}
          {/*    /!*            alt="Avocado" className="parallax-image"/>*!/*/}
          {/*    /!*    </div>*!/*/}
          {/*    /!*</div>*!/*/}

          {/*    <div className="text-container text-container__front">*/}
          {/*        <h2 className="parallax-text">*/}
          {/*            Development Development*/}
          {/*        </h2>*/}
          {/*        <h2 className="parallax-text">*/}
          {/*            SMM SMM SMM*/}
          {/*        </h2>*/}
          {/*    </div>*/}
          {/*</section>*/}

          <section className="section-section">
            <div className="text-container text-container__back">
              <h2 className="parallax-text">17 school</h2>
              <h2 className="parallax-text parallax-text-second">
                Ex-funny boy
              </h2>
            </div>



            <div className="text-container text-container__front">
              <h2 className="parallax-text">
                SamdTCHI university
              </h2>
              <h2 className="parallax-text parallax-text-second">
                IBS-CHool
              </h2>
            </div>
            <div className="text-container text-container__middle">
              <h2 className="parallax-text">
                Web/Mobile Web/Mobile Web/Mobile
              </h2>
              <h2 className="parallax-text parallax-text-second">
                UI/UX Design UI/UX Design
              </h2>
            </div>
          </section>
        </main>
      </>
    </div>
  );
}
