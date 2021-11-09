import React from 'react'


export default function ImageContainer() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let viewHeight = window.innerHeight;

        let textContainers = document.querySelectorAll('.text-container');

        textContainers.forEach((element, index) => {
            let top = element.getBoundingClientRect().top;
            let start = viewHeight - top;

            let firstText = element.querySelector('.parallax-text:first-child');
            let secondText = element.querySelector('.parallax-text:last-child');

            gsap.to(firstText, {
                scrollTrigger: {
                    trigger: element,
                    scrub: true,
                    start: start + "px bottom" * 4,
                    end: "bottom top"
                },
                x: '-84vw',
                transformOrigin: "left center",
                ease: "none"
            });
            gsap.to(secondText, {
                scrollTrigger: {
                    trigger: element,
                    scrub: true,
                    start: start + "px bottom" * 4,
                    end: "bottom top"
                },
                x: '82vw',
                transformOrigin: "left center",
                ease: "none"
            });
        });
    return (
        <div>
           d 
        </div>
    )
}
