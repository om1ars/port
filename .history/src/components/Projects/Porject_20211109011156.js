import React from "react";
import "./Porjects.scss";

export default function Porject() {
    
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
