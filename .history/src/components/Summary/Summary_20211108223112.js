import React from "react";
import "./Summary.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default function Summary() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "power2.inOut" });

  gsap.registerEffect({
    name: "fade",
    effect: (targets, config) => {
      return gsap.to(targets, {
        duration: config.duration,
        opacity: 1,
      });
    },
    defaults: { duration: 2 },
    extendTimeline: true,
  });

  gsap.registerEffect({
    name: "fadeOut",
    effect: (targets, config) => {
      return gsap.to(targets, {
        duration: config.duration,
        opacity: 0,
      });
    },
    defaults: { duration: 2 },
    extendTimeline: true,
  });

  gsap.set(".content", { opacity: 0 });
  gsap.set(".brand__header", { y: "200%" });
  gsap.set(".brand__header > *", { opacity: 0 });
  gsap.set(".align__left", { x: "40%" });
  gsap.set(".asterisk", { x: "250%" });
  gsap.set(".arrow-down", { opacity: 0 });

  function first() {
    let tl = gsap.timeline();
    tl.fade(".asterisk", { duration: 1 }).fadeOut(".asterisk", { duration: 1 });

    return tl;
  }

  function second() {
    let tl = gsap.timeline();

    tl.fade(".asterisk", { duration: 1 })
      .fade(".align__left", { duration: 2 })
      .fromTo(".asterisk", 1, { x: "250%" }, { rotation: 360, x: "200%" })
      .fade(".align__right")
      .fromTo(".align__right", { x: "-250%" }, { x: "-250%" });
    return tl;
  }

  function third() {
    let tl = gsap.timeline();
    tl.to(".asterisk", 1, { x: 0 })
      .to(".align__right", 1, { x: 0, delay: -1 })
      .to(".align__left", 1, { x: 0, delay: -1 })
      .to(".brand__header", 1, { x: 0, y: 0, delay: -1 })
      .to(".content", 1, {
        opacity: 1,
        onComplete: () =>
          document.querySelector("body").classList.remove("is-loading"),
      })
      .to(".arrow-down", 1, { opacity: 1 });

    return tl;
  }

  function rotate() {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: "body",
          scrub: 0.26,
          start: "top top",
          end: "+=10000",
        },
      })
      .to(".asterisk", {
        rotation: 360 * 5,
        duration: 1,
        ease: "none",
      });
    return tl;
  }

  function flipArrow() {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: "body",
          start: "bottom bottom+=400px",
          toggleActions: "play none none reverse",
        },
      })
      .to(".arrow-down", {
        rotation: 180,
        duration: 1,
      });
    return tl;
  }

  let master = gsap.timeline();

  master.add(first().repeat(1));
  master.add(second());
  master.add(third());
  master.add(rotate);
  master.add(flipArrow);

  const button = (e) => {
    e.preventDefault();
    let destination = document.querySelector("body");
    if (button.style.transform === "rotate(180deg)") {
      destination.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      destination.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    // <div>
    <div class="app ">
      <div class="brand__header">
        <div class="align__right">
          <span>
            real estate
            <br />
            for human beings
          </span>
          <span class="rotated">variance.co</span>
        </div>
        <div class="asterisk">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 72 72"
          >
            <title>Asset 244</title>
            <g fill="#fafafa">
              <g id="Layer_2" data-name="Layer 2">
                <path
                  d="M38.49.5V30l.85-.86 20-20 3.52 3.52-20 20-.86.85h29.5v5H42l.86.85 20 20-3.52 3.52-20-20-.85-.88v29.5h-5V42l-.85.86-20 20-3.5-3.52 20-20 .86-.85H.5v-5H30l-.86-.85-20-20 3.52-3.52 20 20 .85.86V.5h5M39 0h-6v28.78L12.66 8.43l-4.23 4.23L28.78 33H0v6h28.78L8.43 59.34l4.23 4.23L33 43.22V72h6V43.22l20.34 20.35 4.23-4.23L43.22 39H72v-6H43.22l20.35-20.34-4.23-4.23L39 28.78V0z"
                  id="Symbols"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="content__wrap">
        <main class="content">
          <div class="section reverse">
            <div class="section__image">
              <img
                src="https://images.unsplash.com/photo-1590560008788-262e693f7a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTgwOTN8MHwxfHNlYXJjaHwxMnx8bWlkJTIwY2VudHVyeXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080"
                alt=""
              />
            </div>
            <div class="section__body">
              <div class="section__body__header">
                <h2>Sustainable</h2>
                <span class="reverse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                  >
                    <title>Asset 202</title>
                    <g fill="#fafafa">
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Symbols">
                          <path d="M48.34.5V20H20v28.3H.5V.5h47.84m.5-.5H0v48.8h20.47V20.47h28.37V0z"></path>
                          <path d="M52 1.21l19.5 19.47V71.5H20.68L1.21 52H52V1.21M51.54 0v51.53H0L20.47 72H72V20.47L51.54 0z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>

              <div class="section__body__text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, quidem. Cum maxime sed ut, vel excepturi ad quo
                  quisquam beatae, esse ex, praesentium necessitatibus maiores
                  natus sequi doloribus dolores porro.
                </p>
              </div>
            </div>
          </div>
          <div class="section">
            <div class="section__image">
              <img
                src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTgwOTN8MHwxfHNlYXJjaHwxMHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080"
                alt=""
              />
            </div>
            <div class="section__body">
              <div class="section__body__header">
                <h2>Modern</h2>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                  >
                    <title>Asset 202</title>
                    <g fill="#fafafa">
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Symbols">
                          <path d="M48.34.5V20H20v28.3H.5V.5h47.84m.5-.5H0v48.8h20.47V20.47h28.37V0z"></path>
                          <path d="M52 1.21l19.5 19.47V71.5H20.68L1.21 52H52V1.21M51.54 0v51.53H0L20.47 72H72V20.47L51.54 0z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
              <div class="section__body__text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, quidem. Cum maxime sed ut, vel excepturi ad quo
                  quisquam beatae, esse ex, praesentium necessitatibus maiores
                  natus sequi doloribus dolores porro.
                </p>
              </div>
            </div>
          </div>
          <div class="section reverse">
            <div class="section__image">
              <img
                src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTgwOTN8MHwxfHNlYXJjaHwzNHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080"
                alt=""
              />
            </div>
            <div class="section__body">
              <div class="section__body__header">
                <h2>Futurist</h2>
                <span class="reverse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                  >
                    <title>Asset 202</title>
                    <g fill="#fafafa">
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Symbols">
                          <path d="M48.34.5V20H20v28.3H.5V.5h47.84m.5-.5H0v48.8h20.47V20.47h28.37V0z"></path>
                          <path d="M52 1.21l19.5 19.47V71.5H20.68L1.21 52H52V1.21M51.54 0v51.53H0L20.47 72H72V20.47L51.54 0z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>

              <div class="section__body__text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, quidem. Cum maxime sed ut, vel excepturi ad quo
                  quisquam beatae, esse ex, praesentium necessitatibus maiores
                  natus sequi doloribus dolores porro.
                </p>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <a href="#">variance.co</a>
          <div class="arrow-down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <title>ic_arrow_downward_48px</title>
              <g fill="#fafafa">
                <path
                  fill="#fafafa"
                  d="M40 24l-2.82-2.82L26 32.34V8h-4v24.34L10.84 21.16 8 24l16 16 16-16z"
                ></path>
              </g>
            </svg>
          </div>
        </footer>
      </div>
    </div>
  );
}
