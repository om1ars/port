import styled from 'styled-components';

export const Wrapper = styled.div `
  width: 100vw;
  height: fit-content;
  background: url(${props => props.bgColor});
  transition: background-color .3s ease;
`;

export const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

export const ProjectsContainer = styled.div `
    display: flex;
    height: fit-content;
    margin-bottom: 150px;
    width: 100%;
    @media screen and (max-width: 1400px) {
      margin-bottom: 50px;
    }
    @media screen and (max-width: 1200px) {
      margin-bottom: 0;
    }
    
  @media screen and (max-width: 980px) {
    display: flex;
    flex-direction: column;
    
  }
`;

export const SingleProjectContainer1 = styled.div `
  display: flex;
  flex-direction: column;
  height: 400px;
  margin-right: 5.5%;
  @media screen and (min-width: 981px) {
    width: 47.25%;
  };
  @media screen and (max-width: 980px) {
    width: 100%;
    height: 100%;
`;

export const SingleProjectContainer2 = styled.div `
  display: flex;
  flex-direction: column;
  height: 400px;
  margin-right: 0;
  @media screen and (min-width: 981px) {
    width: 47.25%;
  };
  @media screen and (max-width: 980px) {
    width: 100%;
    height: 100%;
  };
`;

export const SingleProjectImage = styled.div `
  width: 100%;
  height: auto;
`;

export const SingleProjectImg = styled.img `
  width: 100%;
`;

export const SingleProjectText = styled.div `
  width: 100%;
  height: 50px;
  display: flex;
  @media screen and (max-width: 700px) {
    #portfolio-projects-text {
      font-size: 25px; 
    }
  }
`;

export const SingleProjectHeading = styled.h1 `
  font-size: 40px;
  margin-right: 5px;
  text-decoration: underline;
  color: ${props => props.color};
  //&:after {
  //position: absolute;
  // content: "\2197";
  // color: #f6f6f6;
  // font-size: 42px;
  // font-family: "Couture Bold", sans-serif;
  // font-weight: 700;
  //}
  @media screen and (max-width: 700px) {
    font-size: 25px;
  }
`;

export const CustomCursorBall = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease ;
`;

export const CustomCursorBig = styled(CustomCursorBall) `
    content: "";
    width: 300px;
    height: 300px;
    background-image: url(${props => props.hoverImage});
`;

export const CustomCursorSmall = styled(CustomCursorBall) `
    content: "";
    width: 6px;
    height: 6px;
    background: #78fff1;
    border-radius: 50%;
`;


