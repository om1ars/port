import React, { useEffect, useState } from "react";
import {
  Wrapper,
  SingleProjectHeading,
  SingleProjectContainer1,
  SingleProjectContainer2,
  ProjectsContainer,
  Container,
  SingleProjectImage,
  SingleProjectImg,
  SingleProjectText,
  CustomCursorBig,
  CustomCursorSmall,
} from "./style";
import { gsap } from "gsap";
import "./Porjects.scss";
// import './index'

const data = [
  {
    id: 1,
    img1: "https://www.somoswaka.com/wp-content/uploads/2018/10/WAKA-slider_Veolia.jpg",
    img2: "https://www.somoswaka.com/wp-content/uploads/2018/10/WAKA-slider_Veolia.jpg",
    text: "Space Academy",
    hoverImg1:
      "https://www.somoswaka.com/wp-content/uploads/2020/12/WAKA-slider_Frutality.jpg",
    hoverImg2:
      "https://www.somoswaka.com/wp-content/uploads/2018/10/WAKA-slider_Veolia.jpg",
  },
  {
    id: 2,
    img1: "https://www.somoswaka.com/wp-content/uploads/2018/10/WAKA-slider_Veolia.jpg",
    img2: "https://www.somoswaka.com/wp-content/uploads/2018/10/WAKA-slider_Veolia.jpg",
    text: "Space Academy",
    hoverImg1:
      "data:image/jpeg;base64,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",
    hoverImg2:
      "https://www.somoswaka.com/wp-content/uploads/2018/10/WAKA-slider_Veolia.jpg",
  },
  {
    id: 3,
    img1: "https://www.somoswaka.com/wp-content/uploads/2018/10/WAKA-slider_Veolia.jpg",
    img2: "https://www.somoswaka.com/wp-content/uploads/2018/10/WAKA-slider_Veolia.jpg",
    text: "Space Academy",
    hoverImg1:
      "data:image/jpeg;base64,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",
    hoverImg2:
      "https://www.somoswaka.com/wp-content/uploads/2018/10/WAKA-slider_Veolia.jpg",
  },
  {
    id: 4,
    img1: "https://www.somoswaka.com/wp-content/uploads/2018/10/WAKA-slider_Veolia.jpg",
    img2: "https://www.somoswaka.com/wp-content/uploads/2018/10/WAKA-slider_Veolia.jpg",
    text: "Space Academy",
    hoverImg1:
      "data:image/jpeg;base64,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",
    hoverImg2:
      "https://www.somoswaka.com/wp-content/uploads/2018/10/WAKA-slider_Veolia.jpg",
  },
];

export default function Porject() {
  const [image, setImage] = useState("");
  const [bgColor, setBgColor] = useState("#222");
  const [color, setColor] = useState("#f6f6f6");

  useEffect(() => {
    const cursorBig = document.getElementById("cursor-big"),
      cursorSmall = document.getElementById("cursor-small"),
      withClassHover = document.getElementsByClassName("cursor-hover"),
      withHover = [...withClassHover],
      backgroundColor = document.querySelector("#portfolio-projects"),
      textColor = document.querySelectorAll("#portfolio-projects-text");

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseHover);
    document.addEventListener("mouseup", onMouseHoverOut);

    withHover.forEach((element) => {
      element.addEventListener("mouseover", onMouseHover);
      element.addEventListener("mouseout", onMouseHoverOut);
    });

    function onMouseMove(e) {
      cursorSmall.style.opacity = 0;
      gsap.to(cursorBig, 0.4, {
        x: e.clientX - 10,
        y: e.clientY - 10,
      });
      gsap.to(cursorSmall, 0.1, {
        x: e.clientX - 4,
        y: e.clientY - 4,
      });
    }

    function onMouseHover() {
      gsap.to(cursorBig, {
        opacity: 1,
      });
      gsap.to(backgroundColor, {
        background: bgColor,
      });
      gsap.to(textColor, {
        color: color,
      });
    }

    function onMouseHoverOut() {
      gsap.to(cursorBig, {
        opacity: 0,
      });
      gsap.to(backgroundColor, {
        background: "#f6f6f6",
      });
      gsap.to(textColor, {
        color: "#222",
      });
    }
  });
  return (
    // <div className='port__container'>
    //   <div class="thumb">
    //     <a href="#">
    //       <span>Three-eyed Robot</span>
    //     </a>
    //   </div>
    //   <div class="thumb">
    //     <a href="#">
    //       <span>Three-eyed Robot</span>
    //     </a>
    //   </div>
    //   <div class="thumb">
    //     <a href="#">
    //       <span>Three-eyed Robot</span>
    //     </a>
    //   </div>
    //   <div class="thumb">
    //     <a href="#">
    //       <span>Three-eyed Robot</span>
    //     </a>
    //   </div>
    //   <div class="thumb">
    //     <a href="#">
    //       <span>Three-eyed Robot</span>
    //     </a>
    //   </div>
    //   <div class="thumb">
    //     <a href="#">
    //       <span>Three-eyed Robot</span>
    //     </a>
    //   </div>
    //   <div class="thumb">
    //     <a href="#">
    //       <span>Three-eyed Robot</span>
    //     </a>
    //   </div>
    //   <div class="thumb">
    //     <a href="#">
    //       <span>Three-eyed Robot</span>
    //     </a>
    //   </div>
    //   <div class="thumb">
    //     <a href="#">
    //       <span>Three-eyed Robot</span>
    //     </a>
    //   </div>
    //   <div class="thumb">
    //     <a href="#">
    //       <span>Three-eyed Robot</span>
    //     </a>
    //   </div>
    //   <div class="thumb">
    //     <a href="#">
    //       <span>Three-eyed Robot</span>
    //     </a>
    //   </div>
    //   <div class="thumb">
    //     <a href="#">
    //       <span>Three-eyed Robot</span>
    //     </a>
    //   </div>
    // </div>

    <>
      <Wrapper bgColor={() => setBgColor(bgColor)} id="portfolio-projects">
        <Container>
          {data.map((index) => (
            <ProjectsContainer key={index.id}>
              <SingleProjectContainer1>
                <SingleProjectImage>
                  <SingleProjectImg
                    onMouseOver={() => setImage(index.hoverImg1)}
                    src={index.img1}
                    className="cursor-hover"
                  />
                  <div className="custom-cursor">
                    <CustomCursorBig
                      id="cursor-big"
                      className="custom-cursor__ball custom-cursor__ball--big"
                      hoverImage={image}
                    />
                    <CustomCursorSmall
                      id="cursor-small"
                      className="custom-cursor__ball custom-cursor__ball--small"
                    />
                  </div>
                </SingleProjectImage>
                <SingleProjectText>
                  <SingleProjectHeading
                    id="portfolio-projects-text"
                    color={() => setColor(color)}
                  >
                    {index.text}
                  </SingleProjectHeading>
                </SingleProjectText>
              </SingleProjectContainer1>
              <SingleProjectContainer2>
                <SingleProjectImage>
                  <SingleProjectImg
                    onMouseOver={() => setImage(index.hoverImg2)}
                    src={index.img2}
                    className="cursor-hover"
                  />
                </SingleProjectImage>
                <SingleProjectText>
                  <SingleProjectHeading
                    id="portfolio-projects-text"
                    color={() => setColor(color)}
                  >
                    {index.text}
                  </SingleProjectHeading>
                </SingleProjectText>
              </SingleProjectContainer2>
            </ProjectsContainer>
          ))}
        </Container>
      </Wrapper>
    </>
  );
}
