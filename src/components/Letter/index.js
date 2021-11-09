import styled from 'styled-components';

export const Wrapper = styled.div `
  [data-page-container]{
    background-color: skyblue;
    position: relative;
    width: 100vw;
    margin: 0 auto;
    min-height: 100vh;
    overflow-x: hidden;
    @media screen and (max-width: 760px){
         width: 100vw;
  }
}
`;


export const Intro = styled.section `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const IntroLetters = styled.div `
  width: 100%;
  max-width: 75vh;
  @media screen and (max-width: 760px){
       padding: 0 6vw;
       width: 400px;
       height: 400px;
  }
  @media screen and (max-width: 560px){
       padding: 0 6vw;
       width: 300px;
       height: 300px;
  }
`;


export const BorderTop = styled.div `
    width: 100%;
    height: 60px;
    background-color: #222222;
    transform: scaleX(0);
    transform-origin: 0 50%;
    margin-bottom: auto;
`;

export const BorderBottom = styled.div `
    width: 100%;
    height: 60px;
    background-color: #222222;
    transform: scaleX(0);
    transform-origin: 100% 50%;
    margin-top: auto;
`;

export const LettersGrid = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 100vh);
    justify-items: center;
`;

export const GridItem = styled.div `
    padding: 10vh 0;
    @media screen and (max-width: 760px){
       width: 100px;
       height: 100px;
  }
`;

export const LetterO = styled(GridItem) `
  grid-column-start: 2;
    align-self: center;
`;

export const LetterF = styled(GridItem) `
   align-self: end;
`
export const LetterC = styled(GridItem) `
  align-self: center;
`
export const LetterR = styled(GridItem) `
   align-self: end;
`
export const LetterO2 = styled(GridItem) `
   grid-column-start: 2;
    grid-row-start: 3;
`;

export const LetterL = styled(GridItem) `
   grid-column-start: 1;
    align-self: center;
    grid-row-start: 3;
`;

export const LetterI = styled(GridItem) `
   grid-column-start: 2;
    grid-row-start: 3;
    align-self: end;
`;

export const LetterN = styled(GridItem) `
  grid-row-start: 4;
    grid-column-start: 3;
`

export const LetterG = styled(GridItem) `
  grid-row-start: 4;
    grid-column-start: 2;
    align-self: center;
`

export const Header = styled.header `
  border-top: 10px solid #000;
    border-bottom: 10px solid #000;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    @media screen and (max-width: 760px){
        padding: 0 1rem;
    }
`

export const Logo = styled.div `
  width: 64px;
    height: 64px;
    background-color: #000;
    
@media screen and (max-width: 760px){
        width: 48px;
        height: 48px;
    }
`

export const Nav = styled.nav `
  display: flex;
    align-items: center;
    
`

export const NavItem = styled.a `
  display: inline-block;
    width: 40px;
    height: 40px;
    background-color: #000;
    border-radius: 50%;
    margin-right: 1.2rem;
    pointer-events: none;
    @media screen and (max-width: 760px){
        width: 32px;
        height: 32px;
        margin-right: 0.8rem;
    }
  `