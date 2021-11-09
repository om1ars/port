import React, { useEffect } from "react";
import * as polymorph from "polymorph-js";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Wrapper, BorderBottom, BorderTop, Intro, IntroLetters } from "./index";

export default function Letter() {
  useEffect(() => {
    // Intro Animation
    const letterA = document.querySelector("#letters");
    const letterR =
      "M54 426V269.4h136.2l90 156.6H342l-95.4-163.2C294 249 331.2 213 331.2 135c0-99.6-67.8-135-135.6-135H0v426h54zm130.2-208.2H54V52.2h130.2c68.4 0 90 34.8 90 82.8s-21.6 82.8-90 82.8z";
    const letterT = "M192 426V51.6h138V0H0v51.6h138V426z";

    const introStep1 = polymorph.interpolate([letterA, letterR], {
      addPoints: 0,
      origin: { x: 0, y: 0 },
      optimize: "fill",
      precision: 4,
    });
    const introStep2 = polymorph.interpolate([letterR, letterT], {
      addPoints: 0,
      origin: { x: 0, y: 0 },
      optimize: "fill",
      precision: 4,
    });

    let val = {
      prop: 0,
    };
    let val2 = {
      prop: 0,
    };

    let introLetters = gsap.timeline({
      defaults: { duration: 4, ease: "power1.inOut" },
    });

    introLetters
      .to(val, {
        prop: 1,
        onUpdate: function () {
          letterA.setAttribute("d", introStep1(val.prop));
        },
      })
      .to(val2, {
        prop: 1,
        onUpdate: function () {
          letterA.setAttribute("d", introStep2(val2.prop));
        },
      })
      .to(
        ".border-top",
        {
          scaleX: 1,
          duration: 8,
        },
        0
      )
      .to(
        "#intro .border-bottom",
        {
          scaleX: 1,
          duration: 8,
        },
        0
      );

    ScrollTrigger.create({
      trigger: "#intro",
      pin: true,
      animation: introLetters,
      scrub: 0.6,
    });


  });
  return (
    <div>
      <Wrapper>
        <div data-page-container>
     
          <Intro data-page-section="one" id="intro">
            <BorderTop className="border-top" />
            <IntroLetters className="intro-letters">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="auto"
                height="auto"
                viewBox="0 0 398 426"
              >
                <path
                  id="letters"
                  d="M57 426l47.4-134.4h189L340.8 426h57L248.4 0h-99L0 426h57zm218.4-186h-153l66-188.4h21l66 188.4z"
                  fill="#222222"
                  fillRule="nonzero"
                />
              </svg>
            </IntroLetters>
            <BorderBottom className="border-bottom" />
          </Intro>

        </div>
      </Wrapper>
    </div>
  );
}
