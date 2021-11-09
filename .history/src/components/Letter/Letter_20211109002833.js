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

    //
    // // Outro Animation
    //         const outro1Start = document.querySelector('#outro1');
    //         const outro2Start = document.querySelector('#outro2');
    //         const outro3Start = document.querySelector('#outro3');
    //         const outro4Start = document.querySelector('#outro4');
    //         const outro5Start = document.querySelector('#outro5');
    //         const outro6Start = document.querySelector('#outro6');
    //         const outro7Start = document.querySelector('#outro7');
    //         const outro8Start = document.querySelector('#outro8');
    //         const outro9Start = document.querySelector('#outro9');
    //         const outro10Start = document.querySelector('#outro10');
    //         const outro11Start = document.querySelector('#outro11');
    //         const outro1End = "M77.992.152H61.288C28.744.152.52 20.024.52 62.936v21.888c0 42.912 28.224 62.784 60.768 62.784h16.704c32.544 0 60.768-19.872 60.768-62.784V62.936c0-42.912-28.224-62.784-60.768-62.784zm34.848 80.064c0 25.92-10.368 42.624-43.2 42.624s-43.2-16.704-43.2-42.624V67.544c0-25.92 10.368-42.624 43.2-42.624s43.2 16.704 43.2 42.624v12.672z";
    //         const outro2End = "M77.368 25.288h28.8V.52H69.016c-25.632 0-47.808 14.112-47.808 57.024v9.216H.76v24.768h20.448V205h25.92V91.528h41.76V66.76h-41.76v-4.608c0-23.04 7.2-36.864 30.24-36.864z";
    //         const outro3End = "M131.696 101.24c0-25.344-14.4-38.304-66.528-43.488C41.84 55.448 31.76 52.28 31.76 40.76c0-9.504 12.384-16.704 31.104-16.704 22.464 0 31.104 6.912 33.984 16.992h28.8C119.312 13.112 94.544.152 65.744.152 27.728.152 5.84 16.856 5.84 43.064c0 21.024 11.808 33.12 50.688 37.728 40.896 4.896 49.248 7.776 49.248 20.16 0 9.792-5.472 21.888-38.304 21.888-27.072 0-36.288-9.504-38.592-19.584H.08c6.336 27.936 26.208 44.352 67.104 44.352 44.352 0 64.512-18.72 64.512-46.368z";
    //         const outro4End = "M.52 84.824c0 42.912 28.224 62.784 59.328 62.784h16.704c27.648 0 51.552-16.704 54.144-52.704h-26.784c-2.304 17.28-11.808 27.936-35.712 27.936-31.392 0-41.76-16.704-41.76-42.624V67.544c0-25.92 10.368-42.624 41.76-42.624 21.888 0 31.68 9.216 34.848 24.48h27.072C126.376 15.704 103.048.152 76.552.152H59.848C28.744.152.52 20.024.52 62.936v21.888z";
    //         const outro5End = "M72.904.76C54.76.76 35.176 11.992 25.96 26.392V.76H.04V139h25.92V74.2c0-35.424 24.192-48.672 38.592-48.672h27.936V.76H72.904z";
    //         const outro6End = "M77.992.152H61.288C28.744.152.52 20.024.52 62.936v21.888c0 42.912 28.224 62.784 60.768 62.784h16.704c32.544 0 60.768-19.872 60.768-62.784V62.936c0-42.912-28.224-62.784-60.768-62.784zm34.848 80.064c0 25.92-10.368 42.624-43.2 42.624s-43.2-16.704-43.2-42.624V67.544c0-25.92 10.368-42.624 43.2-42.624s43.2 16.704 43.2 42.624v12.672z";
    //         const outro7End = "M.04.912V210h25.92V.912H.04z";
    //         const outro8End = "M.04.912V210h25.92V.912H.04z";
    //         const outro9End = "M18.272 35.472c9.504 0 17.28-7.488 17.28-16.992 0-9.504-7.776-17.568-17.28-17.568C8.768.912.992 8.976.992 18.48c0 9.504 7.776 16.992 17.28 16.992zM5.312 210h25.92V71.76H5.312V210z";
    //         const outro10End = "M72.904.152c-17.568 0-38.88 11.232-48.672 27.36V4.76H.04V143h25.92V70.712c0-35.424 24.192-45.792 38.592-45.792 24.192 0 34.56 10.944 34.56 36.864V143h25.92V57.176c0-42.912-28.224-57.024-52.128-57.024z";
    //         const outro11End = "M108.672 4.76v24.768C99.744 12.536 79.872.152 61.728.152 29.184.152.96 20.024.96 62.936V79.64C.96 122.552 29.184 143 61.728 143c18.144 0 38.88-9.792 46.944-26.208v18.144c0 25.92-4.032 42.624-39.744 42.624-25.632 0-31.968-6.048-36.864-16.128H2.976c8.064 27.936 31.68 40.896 57.888 40.896H75.84c33.984 0 58.752-19.584 58.752-62.784V4.76h-25.92zM70.08 118.232c-32.832 0-43.2-17.28-43.2-43.2v-7.488c0-25.92 10.368-42.624 43.2-42.624 14.4 0 38.592 10.368 38.592 45.792v4.32c0 35.424-24.192 43.2-38.592 43.2z";
    //
    //
    //         const outroStep1 = polymorph.interpolate([outro1Start, outro1End], {
    //             addPoints: 2,
    //             origin: {x: 0, y: 0},
    //             optimize: 'fill',
    //             precision: 4
    //         })
    //         const outroStep2 = polymorph.interpolate([outro2Start, outro2End], {
    //             addPoints: 4,
    //             origin: {x: 0, y: 0},
    //             optimize: 'fill',
    //             precision: 4
    //         })
    //         let val3 = {
    //             prop: 0
    //         }
    //         let val4 = {
    //             prop: 0
    //         }
    //
    //         let outroLetters1 = gsap.timeline({defaults: {ease: 'power1.inOut'}})
    //         outroLetters1.to(val3, {
    //             prop: 1,
    //             onUpdate: function () {
    //                 outro1Start.setAttribute("d", outroStep1(val3.prop));
    //             }
    //         })
    //             .to(val4, {
    //                 prop: 1,
    //                 onUpdate: function () {
    //                     outro2Start.setAttribute("d", outroStep2(val4.prop));
    //                 }
    //             }, 0.2)
    //
    //         ScrollTrigger.create({
    //             trigger: '#outro',
    //             animation: outroLetters1,
    //             pin: true,
    //             scrub: 0.6,
    //             start: 'top top',
    //             end: '+=70%'
    //         })
    //
    // const outroStep3 = polymorph.interpolate([outro3Start, outro3End], {
    //     addPoints: 4,
    //     origin: {x: 50, y: 50},
    //     optimize: 'fill',
    //     precision: 4
    // })
    // const outroStep4 = polymorph.interpolate([outro4Start, outro4End], {
    //     addPoints: 20,
    //     origin: {x: 20, y: 20},
    //     optimize: 'fill',
    //     precision: 4
    // })
    // const outroStep5 = polymorph.interpolate([outro5Start, outro5End], {
    //     addPoints: 0,
    //     origin: {x: 0, y: 0},
    //     optimize: 'fill',
    //     precision: 4
    // })
    // let val5 = {
    //     prop: 0
    // }
    // let val6 = {
    //     prop: 0
    // }
    // let val7 = {
    //     prop: 0
    // }
    // let outroLetters2 = gsap.timeline({defaults: {ease: 'power1.inOut'}})
    // outroLetters2.to(val5, {
    //     prop: 1,
    //     onUpdate: function () {
    //         outro3Start.setAttribute("d", outroStep3(val5.prop));
    //     }
    // })
    //     .to(val6, {
    //         prop: 1,
    //         onUpdate: function () {
    //             outro4Start.setAttribute("d", outroStep4(val6.prop));
    //         }
    //     }, 0.2)
    //     .to(val7, {
    //         prop: 1,
    //         onUpdate: function () {
    //             outro5Start.setAttribute("d", outroStep5(val7.prop));
    //         }
    //     }, 0.4)
    //
    // ScrollTrigger.create({
    //     trigger: '#outro',
    //     animation: outroLetters2,
    //     pin: true,
    //     scrub: 0.6,
    //     start: '+=25%',
    //     end: '+=70%'
    // })
    //
    // const outroStep6 = polymorph.interpolate([outro6Start, outro6End], {
    //     addPoints: 0,
    //     origin: {x: 0, y: 0},
    //     optimize: 'fill',
    //     precision: 4
    // })
    // const outroStep7 = polymorph.interpolate([outro7Start, outro7End], {
    //     addPoints: 0,
    //     origin: {x: 50, y: 50},
    //     optimize: 'fill',
    //     precision: 4
    // })
    // const outroStep8 = polymorph.interpolate([outro8Start, outro8End], {
    //     addPoints: 0,
    //     origin: {x: 0, y: 0},
    //     optimize: 'fill',
    //     precision: 4
    // })
    // const outroStep9 = polymorph.interpolate([outro9Start, outro9End], {
    //     addPoints: 0,
    //     origin: {x: 0, y: 0},
    //     optimize: 'fill',
    //     precision: 4
    // })
    // let val8 = {
    //     prop: 0
    // }
    // let val9 = {
    //     prop: 0
    // }
    // let val10 = {
    //     prop: 0
    // }
    // let val11 = {
    //     prop: 0
    // }
    // let outroLetters3 = gsap.timeline({defaults: {ease: 'power1.inOut'}})
    // outroLetters3.to(val8, {
    //     prop: 1,
    //     onUpdate: function () {
    //         outro6Start.setAttribute("d", outroStep6(val8.prop));
    //     }
    // })
    //     .to(val9, {
    //         prop: 1,
    //         onUpdate: function () {
    //             outro7Start.setAttribute("d", outroStep7(val9.prop));
    //         }
    //     }, 0.2)
    //     .to(val10, {
    //         prop: 1,
    //         onUpdate: function () {
    //             outro8Start.setAttribute("d", outroStep8(val10.prop));
    //         }
    //     }, 0.3)
    //     .to(val11, {
    //         prop: 1,
    //         onUpdate: function () {
    //             outro9Start.setAttribute("d", outroStep9(val11.prop));
    //         }
    //     }, 0.5)
    //
    // ScrollTrigger.create({
    //     trigger: '#outro',
    //     animation: outroLetters3,
    //     pin: true,
    //     scrub: 0.6,
    //     start: '+=50%',
    //     end: '+=70%'
    // })
    //
    // const outroStep10 = polymorph.interpolate([outro10Start, outro10End], {
    //     addPoints: 0,
    //     origin: {x: 100, y: 20},
    //     optimize: 'fill',
    //     precision: 4
    // })
    // const outroStep11 = polymorph.interpolate([outro11Start, outro11End], {
    //     addPoints: 20,
    //     origin: {x: 100, y: 20},
    //     optimize: 'fill',
    //     precision: 4
    // })
    //
    //
    // let val12 = {
    //     prop: 0
    // }
    // let val13 = {
    //     prop: 0
    // }
    // let outroLetters4 = gsap.timeline({defaults: {ease: 'power1.inOut'}})
    // outroLetters4.to(val12, {
    //     prop: 1,
    //     onUpdate: function () {
    //         outro10Start.setAttribute("d", outroStep10(val12.prop));
    //     }
    // })
    //     .to(val13, {
    //         prop: 1,
    //         onUpdate: function () {
    //             outro11Start.setAttribute("d", outroStep11(val13.prop));
    //         }
    //     }, 0.2)
    //     .to('#outro .border-bottom', {
    //         scaleX: 1
    //     }, 0.5)
    //
    // ScrollTrigger.create({
    //     trigger: '#outro',
    //     animation: outroLetters4,
    //     pin: true,
    //     scrub: 0.6,
    //     start: '+=75%',
    //     end: '+=40%'
    // })
    //
    //
    // const t1 = just.animate({
    //     targets: '#target',
    //     duration: 7000,
    //     props: {
    //         d: {
    //             interpolate: svgMorph,
    //             easing: 'cubic-bezier(.5,0,.5,1)',
    //             value: [
    //                 '#lightbulb path',
    //                 '#check path',
    //                 '#heart path',
    //                 '#building path',
    //                 '#mind path'
    //             ]
    //         }
    //     }
    // })

    // t1.play()
  });
  return (
    <div>
      <Wrapper>
        <div data-page-container>
          {/*<Header>*/}
          {/*    <Logo className="logo"/>*/}
          {/*    <Nav>*/}
          {/*        <NavItem href=""/>*/}
          {/*        <NavItem href=""/>*/}
          {/*        <NavItem href=""/>*/}
          {/*        <NavItem href=""/>*/}
          {/*        <NavItem href=""/>*/}
          {/*    </Nav>*/}
          {/*</Header>*/}
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
            {/* <BorderBottom className="border-bottom" /> */}
          </Intro>

          {/*<section data-page-section="two" id="outro">*/}
          {/*    <LettersGrid id="letters-grid">*/}
          {/*        <LetterO className="grid-item o">*/}
          {/*            <div className="letter-wrap">*/}
          {/*                <svg xmlns="http://www.w3.org/2000/svg" width="139" height="148" fill="none"*/}
          {/*                     viewBox="0 0 139 148">*/}
          {/*                    <path id="outro1" fill="#000"*/}
          {/*                          d="M138.74 0H.5v147.456h138.24V0zm-25.92 80.064h-86.4V67.392h86.4v12.672z"/>*/}
          {/*                </svg>*/}
          {/*            </div>*/}
          {/*        </LetterO>*/}
          {/*        <LetterF className="grid-item f">*/}
          {/*            <div className="letter-wrap f">*/}
          {/*                <svg xmlns="http://www.w3.org/2000/svg" width="107" height="205" fill="none"*/}
          {/*                     viewBox="0 0 107 205">*/}
          {/*                    <path id="outro2" fill="#000"*/}
          {/*                          d="M106.168 62.152V.52h-84.96v66.24H.76V205h88.128V66.76h-41.76v-4.608h59.04z"/>*/}
          {/*                </svg>*/}
          {/*            </div>*/}
          {/*        </LetterF>*/}
          {/*        <GridItem className="grid-item s">*/}
          {/*            <div className="letter-wrap">*/}
          {/*                <svg xmlns="http://www.w3.org/2000/svg" width="132" height="148" fill="none"*/}
          {/*                     viewBox="0 0 132 148">*/}
          {/*                    <path id="outro3" fill="#000"*/}
          {/*                          d="M120.648 57.752H41V41.048h79.648C114.312 13.112 89.544.152 60.744.152 22.728.152.84 43.064.84 43.064L52 79l32.5 21.5 1.144-.832-50.972-32.84L.84 43.064s61.632 104.543 61.344 104.544c-.58-.412 58.464-62.208 58.464-89.856z"/>*/}
          {/*                </svg>*/}
          {/*            </div>*/}
          {/*        </GridItem>*/}
          {/*        <LetterC className="grid-item c">*/}
          {/*            <div className="letter-wrap">*/}
          {/*                <svg xmlns="http://www.w3.org/2000/svg" width="131" height="148" fill="none"*/}
          {/*                     viewBox="0 0 131 148">*/}
          {/*                    <path id="outro4" fill="#000"*/}
          {/*                          d="M.52 84.824l59.328 62.784h44.064V67.544H68V126L26.44 80.216V67.544H103.912V.152H.52v84.672z"/>*/}
          {/*                </svg>*/}
          {/*            </div>*/}
          {/*        </LetterC>*/}
          {/*        <LetterR className="grid-item r">*/}
          {/*            <div className="letter-wrap">*/}
          {/*                <svg xmlns="http://www.w3.org/2000/svg" width="93" height="139" fill="none"*/}
          {/*                     viewBox="0 0 93 139">*/}
          {/*                    <path id="outro5" fill="#000" d="M72.904.76H.04V139h25.92V74.2H92.488V.76H72.904z"/>*/}
          {/*                </svg>*/}
          {/*            </div>*/}
          {/*        </LetterR>*/}
          {/*        <LetterO2 className="grid-item o2">*/}
          {/*            <div className="letter-wrap">*/}
          {/*                <svg xmlns="http://www.w3.org/2000/svg" width="139" height="148" fill="none"*/}
          {/*                     viewBox="0 0 139 148">*/}
          {/*                    <path id="outro6" fill="#000"*/}
          {/*                          d="M138.74 0H.5v147.456h138.24V0zm-25.92 80.064h-86.4V67.392h86.4v12.672z"/>*/}
          {/*                </svg>*/}
          {/*            </div>*/}
          {/*        </LetterO2>*/}

          {/*        <LetterL className="grid-item l">*/}
          {/*            <div className="letter-wrap">*/}
          {/*                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="210" fill="none"*/}
          {/*                     viewBox="0 0 26 210">*/}
          {/*                    <path id="outro7" fill="#000" d="M.04.5V92h25.92V.5H.04z"/>*/}
          {/*                </svg>*/}
          {/*                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="210" fill="none"*/}
          {/*                     viewBox="0 0 26 210">*/}
          {/*                    <path id="outro8" fill="#000" d="M.04.912V26.5h25.92V.912H.04z"/>*/}
          {/*                </svg>*/}
          {/*            </div>*/}
          {/*        </LetterL>*/}
          {/*        <LetterI className="grid-item i">*/}
          {/*            <div className="letter-wrap">*/}
          {/*                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="210" fill="none"*/}
          {/*                     viewBox="0 0 36 210">*/}
          {/*                    <path id="outro9" fill="#000"*/}
          {/*                          d="M18.272 35.472l17.28-16.992L18.272.912.992 18.48l17.28 16.992zM5.312 210h25.92v-31H5.312v31z"/>*/}
          {/*                </svg>*/}
          {/*            </div>*/}
          {/*        </LetterI>*/}
          {/*        <LetterN className="grid-item n">*/}
          {/*            <div className="letter-wrap">*/}
          {/*                <svg xmlns="http://www.w3.org/2000/svg" width="126" height="143" fill="none"*/}
          {/*                     viewBox="0 0 126 143">*/}
          {/*                    <path id="outro10" fill="#000"*/}
          {/*                          d="M72.5.76H.04V139h25.92V66.712h73.152V139h25.92V.76H72.5z"/>*/}
          {/*                </svg>*/}

          {/*            </div>*/}
          {/*        </LetterN>*/}
          {/*        <LetterG className="grid-item g">*/}
          {/*            <div className="letter-wrap">*/}
          {/*                <svg xmlns="http://www.w3.org/2000/svg" width="135" height="203" fill="none"*/}
          {/*                     viewBox="0 0 135 203">*/}
          {/*                    <path id="outro11" fill="#000"*/}
          {/*                          d="M108.672.76H.96v197.568h133.632V.76h-25.92zM70.08 114.232c-32.832 0-43.2-17.28-43.2-43.2v-7.488c0-25.92 10.368-42.624 43.2-42.624 14.4 0 38.592 10.368 38.592 45.792v4.32c0 35.424-24.192 43.2-38.592 43.2z"/>*/}
          {/*                </svg>*/}
          {/*            </div>*/}
          {/*        </LetterG>*/}
          {/*    </LettersGrid>*/}
          {/*    <BorderBottom className="border-bottom" />*/}
          {/*</section>*/}
        </div>
      </Wrapper>
    </div>
  );
}
