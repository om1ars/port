import React from "react";

export default function Carousel() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        function shuffle(array) {
            let currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }

// find all s3 names, put them in nodelist
        const s3names = document.querySelectorAll('.s3name');

// convert nodelist to Array
        const s3namesArray = Array.from(s3names);

        shuffle(s3namesArray);

// Set their ids
        for (let i = 0; i < s3namesArray.length; i++){
            s3namesArray[i].id = 's3name-' + i;
            s3namesArray[i].style.opacity = 0;
        }

// find all images, put them in node-list

// The american flag
        gsap.to('#s2d0', {
            autoAlpha:1,
            scrollTrigger: {
                trigger: "#box1",
                scrub: true,
                start: "top top",
                end: "bottom top",
            }
        })


// The text in section 2
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#box2",
                scrub: true,
                start: "-=300",
                end: "bottom top",
            }
        });


        // tl.to('#s2d1', {autoAlpha: 1});
        // tl.to('#s2d1', {autoAlpha: 0, delay: 1});
        // tl.to('#s2d2', {autoAlpha: 1});
        // tl.to('#s2d2', {autoAlpha: 0, delay: 1});
        // tl.to('#s2d3', {autoAlpha: 1});
        // tl.to('#s2d3', {autoAlpha: 0, delay: 1});
        // tl.to('#s2d4', {autoAlpha: 1});
        // tl.to('#s2d4', {autoAlpha: 0, delay: 1});
        tl.to('#s2d5', {autoAlpha: 1});
        tl.to('#s2d5', {autoAlpha: 0})
            .to("#box2", {
                backgroundColor: "#f6f6f6",

            })
        // tl.to("#box2", {
        //     backgroundColor: "#f6f6f6"
        // })
// countless lives
        gsap.to('#s3d1', {
            autoAlpha:1,
            scrollTrigger: {
                trigger: "#box3",
                scrub: true,
                start: "top center",
                end: "+=500",
            }
        })

// The list of names timeline
        const tlNames = gsap.timeline({
            scrollTrigger: {
                trigger: "#box3",
                scrub: true,
                start: "+=250",
                end: "bottom bottom",
                pin: true
            }
        });

        tlNames.set("#s3names", {display:'visible'});
// add all names from array into timeline
        for (let i = 0; i < s3names.length; i++){
            tlNames.to(s3namesArray[i], {autoAlpha: 1});
        }

// hide both at the end
        gsap.to(['#s3d1','#s3names'], {
            autoAlpha: 0,
            scrollTrigger: {
                trigger: "#box4",
                scrub: true,
                start: "top top",
                end: "+=500",
            }
        })
    })
  return <div style={{ backgroundColor: "red", width: "100%" }}>
      hello
  </div>;
}
