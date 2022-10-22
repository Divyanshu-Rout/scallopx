import styled from "styled-components";
import { images } from "../../config/images";
import {
  rem, grey, lg, sm, md, xs,black
} from "../../config/variables";


export const RoadMapSectionStyle = styled.section`
  width: 100%;
  margin-bottom: ${rem(96)};
  position: relative;
  ${lg(`
    margin-bottom: ${rem(75)};
  `)}
  ${md(`
    margin-bottom: ${rem(0)};
  `)}
  ${sm(`
    margin-bottom: ${rem(10)};
  `)}
  // &:after{
  //   content: "";
  //   width: ${rem(210)};
  //   height: ${rem(172)};
  //   background: url(${images.SideRight});
  //   top: ${rem(50)};
  //   right: 0;
  //   position: absolute;
    ${lg(`
      width: ${rem(180)};
      height: ${rem(150)};
      background-size: cover;
    `)}
    ${sm(`
      width: ${rem(120)};
      height: ${rem(100)};
      background-size: cover;
    `)}
    ${xs(`
      top: ${rem(50)};
      width: ${rem(80)};
      height: ${rem(90)};
    `)}
  }
  // &:before{
  //   content: "";
  //   width: ${rem(87)};
  //   height: ${rem(223)};
  //   background: url(${images.RoadLeft});
  //   bottom: ${rem(20)};
  //   left: 0;
  //   position: absolute;
    ${sm(`
      width: ${rem(50)};
      height: ${rem(120)};
      background-size: cover;
    `)}
    ${xs(`
      bottom: 0;
      width: ${rem(30)};
      height: ${rem(80)};
    `)}
  }
`;



export const Heading = styled.div`
  width: 100%;
  margin: 0 auto;
  display: block;
  margin-bottom: ${rem(46)};
  text-align: center;
`;


export const MainHeadWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content:center;
`;

export const SideLines1 = styled.div`
background: linear-gradient(
  90deg,
  #FFFFFF 10%,
  #1164F4 100%
);
width:${rem(150)};
height:${rem(2)};
margin-bottom: ${rem(16)};
`;
export const SideLines2 = styled.div`
background: linear-gradient(
  270deg,
  #FFFFFF 10%,
  #1164F4 100%
);
width:${rem(150)};
height:${rem(2)};
margin-bottom: ${rem(16)};
`;


export const MainHead = styled.h3`
background: linear-gradient(
  90deg,
  #1164F4 25%,
  #00DECA 95%
);
margin-right:${rem(25)};
margin-left:${rem(25)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${rem(16)};
`;

export const Content = styled.p`
  color: ${grey};
  margin: 0;
`;

export const RoadImg = styled.figure`
  width: 100%;
  display: block;
  text-align: center;
  img{
    display: block;
    margin: 0 auto;
  }
  .roadmapm{
    display: none;
    ${sm(`
      display: block;
      max-width: ${rem(320)};
    `)}
  }
  img{
    ${sm(`
      display: none;
    `)}
  }
`;