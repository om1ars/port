import React, {useEffect}from 'react'
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {
    GridLayer,
    GridContainer,
    GridBlock1,
    Grid,
    GridBlock2,
    GridBlock3,
    GridBlock4,
    GridBlock5,
    GridBlock6,
    GridBlock7,
    GridBlock8,
    GridBlock9
} from "./style";
import './Gallery.css'

export default function Gallery() {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {

        gsap.timeline({
            scrollTrigger: {
                trigger: ".grid-container",
                start: "top top",
                end: () => window.innerHeight * 4,
                scrub: true,
                pin: ".grid",
                anticipatePin: 1
            }
        })
            .set(".gridBlock:not(.centerBlock)", {autoAlpha: 0})
            .to(".gridBlock:not(.centerBlock)", {duration: 0.1, autoAlpha: 1}, 0.001)
            .from(".gridLayer", {
                scale: 3.3333,
                ease: "none",
            });

        const size = Math.max(window.innerWidth, window.innerHeight);
        // gsap.set('.gridBlock', {backgroundImage: i => `url(https://picsum.photos/${size}/${size}?random=${i})`});

        const bigImg = new Image();
        bigImg.addEventListener("load", function () {
            gsap.to(".centerPiece .gridBlock", {autoAlpha: 1, duration: 0.5});
        });
        bigImg.src = `https://picsum.photos/${size}/${size}?random=50`;
    })
    return (
        <div>
                <GridContainer className="grid-container">
                <Grid className="grid">
                    <GridLayer className="gridLayer">
                        <GridBlock1 className="gridBlock"/>
                    </GridLayer>
                    <GridLayer className="gridLayer">
                        <GridBlock2 className="gridBlock"/>
                    </GridLayer>
                    <GridLayer className="gridLayer">
                        <GridBlock3 className="gridBlock"/>
                    </GridLayer>
                    <GridLayer className="gridLayer centerPiece">
                        <GridBlock4 className="gridBlock centerBlock"/>
                    </GridLayer>
                    <GridLayer className="gridLayer">
                        <GridBlock5 className="gridBlock"/>
                    </GridLayer>
                    <GridLayer className="gridLayer">
                        <GridBlock6 className="gridBlock"/>
                    </GridLayer>
                    <GridLayer className="gridLayer">
                        <GridBlock7 className="gridBlock"/>
                    </GridLayer>
                    <GridLayer className="gridLayer">
                        <GridBlock8 className="gridBlock"/>
                    </GridLayer>
                    <GridLayer className="gridLayer">
                        <GridBlock9 className="gridBlock"/>
                    </GridLayer>
                </Grid>
            </GridContainer>
        </div>
    )
}
