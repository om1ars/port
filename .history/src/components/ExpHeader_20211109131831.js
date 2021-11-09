import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Panel, PanelItem, PanelItemText } from "./expHeaderStyle";

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
        <div style={{ backgroundColor: "pink" }}>
          <Container className="container" ref={ref}>
            <Panel className="description panel blue">
              <PanelItem id="panel-item">
                <PanelItemText>
                  <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" />
                </PanelItemText>
              </PanelItem>
            </Panel>
            <Panel className="description panel blue">
              <PanelItem id="panel-item">
                <PanelItemText>
                  <img src="	https://cdn.onlinewebfonts.com/svg/img_4048.png" />
                </PanelItemText>
              </PanelItem>
            </Panel>
            <Panel className="description panel blue">
              <PanelItem id="panel-item">
                <PanelItemText>
                  <img src="https://iconape.com/wp-content/png_logo_vector/javascript.png" />
                </PanelItemText>
              </PanelItem>
            </Panel>
            <Panel className="description panel blue">
              <PanelItem id="panel-item">
                <PanelItemText>
                  <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" />
                </PanelItemText>
              </PanelItem>
            </Panel>
            <Panel className="description panel blue">
              <PanelItem id="panel-item">
                <PanelItemText>
                    <img src='	https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…LOzHNDzgayQWpqQ7yn1sPzpkP1EdrQHQpeukKwu8&usqp=CAU'/>
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
          </Container>
        </div>
      </>
    </div>
  );
}
