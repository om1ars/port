import React from "react";
import "./Porjects.scss";

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
