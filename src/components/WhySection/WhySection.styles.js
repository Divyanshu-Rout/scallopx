
import styled, { keyframes } from "styled-components";
import {
  font, rem, grey, white, xl, lg, md, sm, xs,dblack
} from "../../config/variables";

const rip = keyframes`
	0%  {
    border-color: rgba(112,112,112,0);
    width: 50px;
    height: 50px;
  }
  20%  {    
    border-color: rgba(112,112,112,0.1);
    width: 100px;
    height: 100px;
  }
  40%  {    
    border-color: rgba(112,112,112,0.2);
    width: 150px;
    height: 150px;
  }
  60%  {    
    border-color: rgba(112,112,112,0.2);
    width: 200px;
    height: 200px;
  }
  80%  {    
    border-color: rgba(112,112,112,0.1);
    width: 250px;
    height: 250px;
  }
  100%  {    
    border-color: rgba(112,112,112,0);
    width: 300px;
    height: 300px;
  }
`

export const WhySectionStyle = styled.section`
  width: 100%;
  display: block;
  margin-bottom: ${rem(146)};
  text-align: center;
  background: ${white};
  position: relative;
  ${xl(`
    margin-bottom: ${rem(110)};
  `)}
  ${lg(`
    margin-bottom: ${rem(90)};
  `)}
  ${md(`
    margin-bottom: ${rem(90)};
  `)}
  ${sm(`
    margin-bottom: ${rem(60)};
  `)}
  &:after{
    content: '';
    position: absolute;
    width: 80%;
    height: ${rem(372)};
    bottom: ${rem(-56)};
    left:0;
    right: 0;
    margin: 0 auto;
    background: #1164F4;
    opacity: 0.1;
    filter: blur(100px);
    backdrop-filter: blur(4px);
    z-index: -1;
  }
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
margin-bottom: ${rem(54)};
${lg(`
  margin-bottom: ${rem(40)};
`)}
${md(`
  font-size: ${rem(20)};
  line-height: ${rem(30)};
  margin-bottom: ${rem(30)};
`)}
${sm(`
  font-size: ${rem(18)};
  line-height: ${rem(28)};
  margin-bottom: ${rem(30)};
`)}
`;
export const SideLines2 = styled.div`
background: linear-gradient(
  270deg,
  #FFFFFF 10%,
  #1164F4 100%
);
width:${rem(150)};
height:${rem(2)};
margin-bottom: ${rem(54)};
${lg(`
  margin-bottom: ${rem(40)};
`)}
${md(`
  font-size: ${rem(20)};
  line-height: ${rem(30)};
  margin-bottom: ${rem(30)};
`)}
${sm(`
  font-size: ${rem(18)};
  line-height: ${rem(28)};
  margin-bottom: ${rem(30)};
`)}
`;

export const SubHeading = styled.h5`  
${font(rem(24), rem(33), dblack)};
background: linear-gradient(
  90deg,
  #1164F4 25%,
  #00DECA 95%
);
margin-right:${rem(25)};
margin-left:${rem(25)};
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin-bottom: ${rem(54)};
${lg(`
  margin-bottom: ${rem(40)};
`)}
${md(`
  font-size: ${rem(20)};
  line-height: ${rem(30)};
  margin-bottom: ${rem(30)};
`)}
${sm(`
  font-size: ${rem(18)};
  line-height: ${rem(28)};
  margin-bottom: ${rem(30)};
`)}
`;

export const Heading = styled.h2`
  color: #000000;
  margin-bottom: ${rem(16)};
  ${md(`
  font-size: ${rem(32)};
`)}
${sm(`
font-size: ${rem(26)};
    `)}
  ${xs(`
  font-size: ${rem(22)};
  `)}
`;

export const Content = styled.p`
  color: ${grey};
  margin: 0 auto;
  margin-bottom: ${rem(85)};
  max-width: ${rem(1021)};
  width: 100%;
  ${md(`
    margin-bottom: ${rem(60)};
  `)}
  ${sm(`
    margin-bottom: ${rem(30)};
  `)}
`;

export const WhyImage = styled.figure`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding-bottom: ${rem(99)};
  ${lg(`
    padding-bottom: ${rem(80)};
  `)}
  ${md(`
    padding-bottom: ${rem(60)};
  `)}
  ${xs(`
    padding-bottom: ${rem(40)};
  `)}
  .wholem{
    display: none;
    ${sm(`
      display: block;
      margin: 0 auto;
    `)}
  }
  img{
    ${sm(`
      display: none;
    `)}
  }  
  .img-wrap{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .ripple, .ripple:before, .ripple:after {
      display: block;
      border-radius: 50%;
      border: 2px solid transparent;
      width: 50px;
      height: 50px;
      animation: ${rip} 6s infinite linear;
      transition: all 0.3s linear;
    }
    .ripple {
      position: absolute;
      z-index: 0;
      margin-top: 15px;
      margin-left: -3px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:before, &:after{
        content: '';
        position: absolute;
        transform-origin: center;
        animation-delay: 1.5s;
      }
      &:after{
        animation-delay: 3s;
      }
    }
  }
`;