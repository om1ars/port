import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SecondCarousel.css";

export default function SecondCarousel() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    function shuffle(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
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
    <div>
      <div style={{ zIndex: 10000 }}>
        <>
          <div id="box2">
            <div id="s2d5" className="s2">
              <h1 style={{ top: 0, left: 0, color: "black" }}>Belief</h1>
             <p></p>
              <h4 style={{ color: "black" }}>Muhammad, upon him be peace</h4>
            </div>
          </div>

          {/* <div id="box3">
          <div id="s3names">
            <span className="s3name">kindness</span>
            <span className="s3name">leadership</span>
            <span className="s3name">leadership</span>
            <span className="s3name">consideration</span>
            <span className="s3name">empathy</span>
            <span className="s3name">reliable</span>
            <span className="s3name">Positive intellectual traits</span>
            <span className="s3name">intelligent</span>
            <span className="s3name">innovative</span>
            <span className="s3name">thoughtful</span>
            <span className="s3name">conscientious</span>
            <span className="s3name">effective</span>
            <span className="s3name">Positive emotional traits</span>
            <span className="s3name">resilient</span>
            <span className="s3name">brave</span>
            <span className="s3name">calm</span>
            <span className="s3name">optimistic</span>
            <span className="s3name">humorous</span>
            <span className="s3name">Positive personal attributes</span>
            <span className="s3name">Positive appearance</span>
            <span className="s3name">pretty eyes</span>
            <span className="s3name">fit body</span>
            <span className="s3name">nice smile</span>
            <span className="s3name">nice smile</span>
            <span className="s3name">cute dimples</span>
            <span className="s3name">smooth legs</span>
            <span className="s3name">Positive bodily attributes</span>
            <span className="s3name">"good genes"</span>
            <span className="s3name">fast metabolism</span>
            <span className="s3name">flexible</span>
            <span className="s3name">fast runner</span>
            <span className="s3name">strong</span>
            <span className="s3name">Positive skills</span>
            <span className="s3name">General positive skills</span>
            <span className="s3name">good cook</span>
            <span className="s3name">good painter</span>
            <span className="s3name">fast reader</span>
            <span className="s3name">good with computers</span>
            <span className="s3name">fast typer</span>
            <span className="s3name">kindness</span>
            <span className="s3name">leadership</span>
            <span className="s3name">leadership</span>
            <span className="s3name">consideration</span>
            <span className="s3name">empathy</span>
            <span className="s3name">reliable</span>
            <span className="s3name">Positive intellectual traits</span>
            <span className="s3name">intelligent</span>
            <span className="s3name">innovative</span>
            <span className="s3name">thoughtful</span>
            <span className="s3name">conscientious</span>
            <span className="s3name">effective</span>
            <span className="s3name">Positive emotional traits</span>
            <span className="s3name">resilient</span>
            <span className="s3name">brave</span>
            <span className="s3name">calm</span>
            <span className="s3name">optimistic</span>
            <span className="s3name">humorous</span>
            <span className="s3name">Positive personal attributes</span>
            <span className="s3name">Positive appearance</span>
            <span className="s3name">pretty eyes</span>
            <span className="s3name">fit body</span>
            <span className="s3name">nice smile</span>
            <span className="s3name">nice smile</span>
            <span className="s3name">cute dimples</span>
            <span className="s3name">smooth legs</span>
            <span className="s3name">Positive bodily attributes</span>
            <span className="s3name">"good genes"</span>
            <span className="s3name">fast metabolism</span>
            <span className="s3name">flexible</span>
            <span className="s3name">fast runner</span>
            <span className="s3name">strong</span>
            <span className="s3name">Positive skills</span>
            <span className="s3name">General positive skills</span>
            <span className="s3name">good cook</span>
            <span className="s3name">good painter</span>
            <span className="s3name">fast reader</span>
            <span className="s3name">good with computers</span>
            <span className="s3name">fast typer</span>
            <span className="s3name">kindness</span>
            <span className="s3name">leadership</span>
            <span className="s3name">leadership</span>
            <span className="s3name">consideration</span>
            <span className="s3name">empathy</span>
            <span className="s3name">reliable</span>
            <span className="s3name">Positive intellectual traits</span>
            <span className="s3name">intelligent</span>
            <span className="s3name">innovative</span>
            <span className="s3name">thoughtful</span>
            <span className="s3name">conscientious</span>
            <span className="s3name">effective</span>
            <span className="s3name">Positive emotional traits</span>
            <span className="s3name">resilient</span>
            <span className="s3name">brave</span>
            <span className="s3name">calm</span>
            <span className="s3name">optimistic</span>
            <span className="s3name">humorous</span>
            <span className="s3name">Positive personal attributes</span>
            <span className="s3name">Positive appearance</span>
            <span className="s3name">pretty eyes</span>
            <span className="s3name">fit body</span>
            <span className="s3name">nice smile</span>
            <span className="s3name">nice smile</span>
            <span className="s3name">cute dimples</span>
            <span className="s3name">smooth legs</span>
            <span className="s3name">Positive bodily attributes</span>
            <span className="s3name">"good genes"</span>
            <span className="s3name">fast metabolism</span>
            <span className="s3name">flexible</span>
            <span className="s3name">fast runner</span>
            <span className="s3name">strong</span>
            <span className="s3name">Positive skills</span>
            <span className="s3name">General positive skills</span>
            <span className="s3name">good cook</span>
            <span className="s3name">good painter</span>
            <span className="s3name">fast reader</span>
            <span className="s3name">good with computers</span>
            <span className="s3name">fast typer</span>
            <span className="s3name">kindness</span>
            <span className="s3name">leadership</span>
            <span className="s3name">leadership</span>
            <span className="s3name">consideration</span>
            <span className="s3name">empathy</span>
            <span className="s3name">reliable</span>
            <span className="s3name">Positive intellectual traits</span>
            <span className="s3name">intelligent</span>
            <span className="s3name">innovative</span>
            <span className="s3name">thoughtful</span>
            <span className="s3name">conscientious</span>
            <span className="s3name">effective</span>
            <span className="s3name">Positive emotional traits</span>
            <span className="s3name">resilient</span>
            <span className="s3name">brave</span>
            <span className="s3name">calm</span>
            <span className="s3name">optimistic</span>
            <span className="s3name">humorous</span>
            <span className="s3name">Positive personal attributes</span>
            <span className="s3name">Positive appearance</span>
            <span className="s3name">pretty eyes</span>
            <span className="s3name">fit body</span>
            <span className="s3name">nice smile</span>
            <span className="s3name">nice smile</span>
            <span className="s3name">cute dimples</span>
            <span className="s3name">smooth legs</span>
            <span className="s3name">Positive bodily attributes</span>
            <span className="s3name">"good genes"</span>
            <span className="s3name">fast metabolism</span>
            <span className="s3name">flexible</span>
            <span className="s3name">fast runner</span>
            <span className="s3name">strong</span>
            <span className="s3name">Positive skills</span>
            <span className="s3name">General positive skills</span>
            <span className="s3name">good cook</span>
            <span className="s3name">good painter</span>
            <span className="s3name">fast reader</span>
            <span className="s3name">good with computers</span>
            <span className="s3name">fast typer</span>
          </div>
        </div> */}
          {/* <div id="box4"></div> */}
        </>
      </div>
    </div>
  );
}
