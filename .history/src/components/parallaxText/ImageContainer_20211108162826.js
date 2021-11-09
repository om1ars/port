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


          <section className="section-section">
            <div className="text-container text-container__back">
              <h2 className="parallax-text">Graphic Design Graphic Design</h2>
              <h2 className="parallax-text parallax-text-second">
                Social media marketing
              </h2>
            </div>



            <div className="text-container text-container__front">
              <h2 className="parallax-text">
                Logo/Branding Logo/Branding Logo/Branding
              </h2>
              <h2 className="parallax-text parallax-text-second">
                Poligraphy Poligraphy Poligraphy Poligraphy
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
