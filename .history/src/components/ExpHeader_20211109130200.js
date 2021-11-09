import React, {useEffect, useRef} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {
    Container,
    Panel,
    PanelItem,
    PanelItemText,
} from "./expHeaderStyle";

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

 
  });
  return (
    <div style={{ backgroundColor: "black" }}>
      <>
        <>
          <Container className="container" ref={ref}>
            <Panel className="description panel blue">
              <PanelItem id="panel-item">
                <PanelItemText>
                    <img src={http://thecodeplayer.com/u/m/i1.png} />
                </PanelItemText>
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
