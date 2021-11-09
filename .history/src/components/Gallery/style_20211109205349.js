import styled from 'styled-components';

import image1 from '../../assets/images/me.png'
import image2 from '../../assets/images/me.png'
import image3 from '../../assets/images/me.png'
import image4 from '../../assets/images/me.png'
import image5 from '../../assets/images/me.png'
import image6 from '../../assets/images/me.png'
import image7 from '../../assets/images/me.png'
import image8 from '../../assets/images/me.png'
import image9 from '../../assets/images/me.png'
import image10 from '../../assets/images/me.png'
import image11 from '../../assets/images/me.png'
import image12 from '../../assets/images/me.png'
import image13 from '../../assets/images/me.png'
import image14 from '../../assets/images/me.png'
import image15 from '../../assets/images/me.png'


export const GridBlock1 = styled.div`
  opacity: 0;
      background-size: cover;
    background-color: darkgray;
        display: block;
    position: absolute;
    background-image: url(${image1});
`;
export const GridBlock2 = styled.div`
  opacity: 0;
      background-size: cover;
    background-color: darkgray;
        display: block;
    position: absolute;
        background-image: url(${image2});

`;
export const GridBlock3 = styled.div`
  opacity: 0;
      background-size: cover;
    background-color: darkgray;
        display: block;
    position: absolute;
        background-image: url(${image3});

`;
export const GridBlock4 = styled.div`
  opacity: 0;
      background-size: cover;
    background-color: darkgray;
        display: block;
    position: absolute;
        background-image: url(${image4});

`;
export const GridBlock5 = styled.div`
  opacity: 0;
      background-size: cover;
    background-color: darkgray;
        display: block;
    position: absolute;
        background-image: url(${image5});

`;
export const GridBlock6 = styled.div`
  opacity: 0;
      background-size: cover;
    background-color: darkgray;
        display: block;
    position: absolute;
        background-image: url(${image6});

`;
export const GridBlock7 = styled.div`
  opacity: 0;
      background-size: cover;
    background-color: darkgray;
        display: block;
    position: absolute;
        background-image: url(${image7});

`;
export const GridBlock8 = styled.div`
  opacity: 0;
      background-size: cover;
    background-color: darkgray;
        display: block;
    position: absolute;
        background-image: url(${image8});

`;
export const GridBlock9 = styled.div`
  opacity: 0;
      background-size: cover;
    background-color: darkgray;
        display: block;
    position: absolute;
        background-image: url(${image9});

`;
export const GridBlock10 = styled.div`
  opacity: 0;
      background-size: cover;
    background-color: darkgray;
        display: block;
    position: absolute;
        background-image: url(${image10});

`;
export const GridBlock11 = styled.div`
  opacity: 0;
      background-size: cover;
    background-color: darkgray;
        display: block;
    position: absolute;
        background-image: url(${image9});

`;
export const GridBlock9 = styled.div`
  opacity: 0;
      background-size: cover;
    background-color: darkgray;
        display: block;
    position: absolute;
        background-image: url(${image9});

`;
export const GridBlock9 = styled.div`
  opacity: 0;
      background-size: cover;
    background-color: darkgray;
        display: block;
    position: absolute;
        background-image: url(${image9});

`;
export const GridBlock9 = styled.div`
  opacity: 0;
      background-size: cover;
    background-color: darkgray;
        display: block;
    position: absolute;
        background-image: url(${image9});

`;
export const GridBlock9 = styled.div`
  opacity: 0;
      background-size: cover;
    background-color: darkgray;
        display: block;
    position: absolute;
        background-image: url(${image9});

`;
export const GridBlock9 = styled.div`
  opacity: 0;
      background-size: cover;
    background-color: darkgray;
        display: block;
    position: absolute;
        background-image: url(${image9});

`;

export const GridContainer = styled.div`
  width: 100vw;
  height: 400vh;
  position: relative;
  overflow-x: hidden;
`;

export const Grid = styled.div`
  top: 0;
  left: 0;
  z-index: 1;
  width: 70vw;
  height: 60vw;
  margin: 0 calc(100vw / 20 * 3);
    position: absolute;
    
    @media only screen and (max-width: 580px) {
        margin: 0;
        width: 100vw;
        height: 89.444vw;
    }
`;

export const GridLayer = styled.div`
      top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    will-change: transform;
    transform-origin: 44.951% 50%;
    :nth-child(1) .gridBlock {
      top: 5vw;
        left: 20vw;
        width: 10vw;
        height: 10vw;
    @media only screen and (max-width: 580px) {
        top: 11.111vw;
        left: 23.889vw;
        width: 15vw;
        height: 15vw;
    }
    }
    :nth-child(2) .gridBlock {
      top: 0;
    left: 32.5vw;
    width: 15vw;
    height: 15vw;
    @media only screen and (max-width: 580px) {
        top: 0;
        left: 43.333vw;
        width: 26.389vw;
        height: 26.389vw;
    }
    }
    :nth-child(3) .gridBlock {
      left: 0;
    top: 25vw;
    width: 15vw;
    height: 15vw;
    @media only screen and (max-width: 580px) {
        top: 30.278vw;
        left: 0;
        width: 26.389vw;
        height: 26.389vw;
    }
    }
    .gridLayer:nth-child(4) .gridBlock {
    top: 17.5vw;
    left: 17.5vw;
    width: 30vw;
    height: 30vw;
}
@media only screen and (max-width: 580px) {
    .gridLayer:nth-child(4) .gridBlock {
        top: 30.278vw;
        left: 30.278vw;
        width: 39.444vw;
        height: 39.444vw;
    }
}
.gridLayer:nth-child(5) {
    z-index: 1;
}
.gridLayer:nth-child(5) .gridBlock {
    top: 20vw;
    left: 50vw;
    width: 5vw;
    height: 5vw;
}
@media only screen and (max-width: 580px) {
    .gridLayer:nth-child(5) .gridBlock {
        top: 23.889vw;
        left: 73.889vw;
        width: 15.278vw;
        height: 15.278vw;
    }
}
.gridLayer:nth-child(5) a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.gridLayer:nth-child(5) svg {
    width: 1.75vw;
}
@media only screen and (max-width: 580px) {
    .gridLayer:nth-child(5) svg {
        width: 4.722vw;
    }
}
.gridLayer:nth-child(6) .gridBlock {
    left: 50vw;
    top: 27.5vw;
    width: 20vw;
    height: 20vw;
}
@media only screen and (max-width: 580px) {
    .gridLayer:nth-child(6) .gridBlock {
        top: 43.889vw;
        left: 73.889vw;
        width: 26.389vw;
        height: 26.389vw;
    }
}
.gridLayer:nth-child(7) .gridBlock {
    left: 10vw;
    top: 42.5vw;
    width: 5vw;
    height: 5vw;
}
@media only screen and (max-width: 580px) {
    .gridLayer:nth-child(7) .gridBlock {
        display: none;
    }
}
.gridLayer:nth-child(8) .gridBlock {
    bottom: 5vw;
    left: 42.5vw;
    width: 5vw;
    height: 5vw;
}
@media only screen and (max-width: 580px) {
    .gridLayer:nth-child(8) .gridBlock {
        display: none;
    }
}
.gridLayer:nth-child(9) .gridBlock {
    bottom: 0;
    left: 50vw;
    width: 10vw;
    height: 10vw;
@media only screen and (max-width: 580px) {
        top: 73.889vw;
        left: 58.889vw;
        width: 15.278vw;
        height: 15.278vw;
    }
    }
`;


