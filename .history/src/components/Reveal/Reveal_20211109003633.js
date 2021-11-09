import './Reveal.css'
import React, {useEffect} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";


export default function Reveal() {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        gsap.to(".text-section", {
            scrollTrigger: {
                trigger: '.text-section',
                scrub: 1,
                pin: true
            },
            duration: 1,
            backgroundColor: '#f6f6f6',
            ease: 'easeInOut',
        })

        let viewHeight = window.innerHeight;

        let textContainers = document.querySelectorAll('.text-section');

        textContainers.forEach((element, index) => {
            let top = element.getBoundingClientRect().top;
            let start = viewHeight - top;

            let firstText = element.querySelector('.text-section-reveal');

            gsap.to(firstText, {
                scrollTrigger: {
                    trigger: element,
                    scrub: true,
                    start: start + "px bottom" * 8,
                    end: "bottom top"
                },
                x: '-84vw',
                transformOrigin: "left center",
                ease: "none"
            });
        })
    })
    return (
        <div>
                <>
                <section className="text-section">
                    {/*<div>*/}
                    {/*    <h2 className="reveal">Be part of us</h2>*/}
                    {/*    <h2 className="reveal">Lorem ipsum dolor sit amet.</h2>*/}
                    {/*</div>*/}
                    <h2 className="text-section-reveal"></h2>
                </section>
            </>
        </div>
    )
}
