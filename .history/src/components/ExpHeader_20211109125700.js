import React, {useEffect, useRef} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function ExpHeader() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + document.querySelector(".container").offsetWidth,
      },
    });

    // let time = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".panel",
    //         scrub: true,
    //         pin: true,
    //         markers: true,
    //         end: 'bottom bottom'
    //     }
    // });
    //
    // time.fromTo("#first-panel", {
    //     opacity: 0
    // }, {
    //     opacity: 1
    // })
    //     .fromTo("#second-panel", {
    //         opacity: 0
    //     }, {
    //         opacity: 1
    //     })
    //     .fromTo("#third-panel", {
    //         opacity: 0
    //     }, {
    //         opacity: 1
    //     })
    //     .fromTo("#fourth-panel", {
    //         opacity: 0
    //     }, {
    //         opacity: 1
    //     })
    //     .fromTo("#fifth-panel", {
    //         opacity: 0
    //     }, {
    //         opacity: 1
    // //     })
    // gsap.to("#first-panel", {
    //     scrollTrigger: {
    //         trigger: ".panel2",
    //         scrub: true,
    //     },
    //     color: "#fff",
    //     backgroundColor: "#000"
    // })
    // gsap.to("#absolute-panels", {
    //     scrollTrigger: {
    //         trigger: ".panel2",
    //         scrub: true,
    //     },
    //     position: "fixed",
    //     top: 10,
    //     left: 10,
    // })
  });
  return (
    <div style={{ backgroundColor: "black" }}>
      <>
        <>
          <Container className="container" ref={ref}>
            <Panel className="description panel blue">
              <PanelItem id="panel-item">
                <PanelItemText>About us</PanelItemText>
              </PanelItem>
            </Panel>
            <Panel className="description panel blue">
              <PanelItem id="panel-item">
                <PanelItemText>About us</PanelItemText>
              </PanelItem>
            </Panel>
            <Panel className="description panel blue">
              <PanelItem id="panel-item">
                <PanelItemText>About us</PanelItemText>
              </PanelItem>
            </Panel>
            <Panel className="description panel blue">
              <PanelItem id="panel-item">
                <PanelItemText>About us</PanelItemText>
              </PanelItem>
            </Panel>
            <Panel className="description panel blue">
              <PanelItem id="panel-item">
                <PanelItemText>About us</PanelItemText>
              </PanelItem>
            </Panel>
            {/*<Red className="panel2 panel">*/}
            {/*        <FirstPanelAbsolute id="first-panel">*/}
            {/*            Programming*/}
            {/*        </FirstPanelAbsolute>*/}
            {/*        <SecondPanelAbsolute id="second-panel">*/}
            {/*            Branding*/}
            {/*        </SecondPanelAbsolute>*/}
            {/*        <ThirdPanelAbsolute id="third-panel">*/}
            {/*            Design*/}
            {/*        </ThirdPanelAbsolute>*/}

            {/*    <FourthPanelAbsolute id="fourth-panel">*/}
            {/*        Smm*/}
            {/*    </FourthPanelAbsolute>*/}
            {/*    <FifthPanelAbsolute id="fifth-panel">*/}
            {/*        Logo*/}
            {/*    </FifthPanelAbsolute>*/}
            {/*</Red>*/}
          </Container>
        </>
      </>
    </div>
  );
}
