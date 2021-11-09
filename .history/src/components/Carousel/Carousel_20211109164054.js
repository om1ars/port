import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

export default function Carousel() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    function shuffle(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    const s3names = document.querySelectorAll(".s3name");

    const s3namesArray = Array.from(s3names);

    shuffle(s3namesArray);

    for (let i = 0; i < s3namesArray.length; i++) {
      s3namesArray[i].id = "s3name-" + i;
      s3namesArray[i].style.opacity = 0;
    }


    gsap.to("#s2d0", {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: "#box1",
        scrub: true,
        start: "top top",
        end: "bottom top",
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#box2",
        scrub: true,
        start: "-=300",
        end: "bottom top",
      },
    });

    tl.to("#s2d5", { autoAlpha: 1 });
    tl.to("#s2d5", { autoAlpha: 0 }).to("#box2", {
      backgroundColor: "#f6f6f6",
    });
  
    gsap.to("#s3d1", {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: "#box3",
        scrub: true,
        start: "top center",
        end: "+=500",
      },
    });

    const tlNames = gsap.timeline({
      scrollTrigger: {
        trigger: "#box3",
        scrub: true,
        start: "+=250",
        end: "bottom bottom",
        pin: true,
      },
    });

    tlNames.set("#s3names", { display: "visible" });
    for (let i = 0; i < s3names.length; i++) {
      tlNames.to(s3namesArray[i], { autoAlpha: 1 });
    }

    gsap.to(["#s3d1", "#s3names"], {
      autoAlpha: 0,
      scrollTrigger: {
        trigger: "#box4",
        scrub: true,
        start: "top top",
        end: "+=500",
      },
    });
  });
  return (
    <div style={{ zIndex: 10000 }}>
      <>
        <div id="box2">
    
          <div id="s2d5" className="s2">
            <h1 style={{ top: 0, left: 0 }}>Belief</h1>
            Do not show lethargy or negligence in giving alms and charity till
            your last breath.
            <h4>Muhammad, upon him be peace</h4>
          </div>
        </div>

        <div id="box3">
          <div id="s3names">
           Hello
          </div>
        </div>
        <div id="box4"></div>
      </>
    </div>
  );
}
