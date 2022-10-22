import styled, { keyframes } from "styled-components";
import { images } from "../../config/images";
import {
  font, rem, grey, white, xl, lg, md, sm, xs, primary,
  black,
  lblue,
  green,
  lgreen,xxs
} from "../../config/variables";



export const WhyImage = styled.figure`
   max-width: 100%;
   width: 100%;
   margin: 0 auto;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content:center;
//   padding-bottom: ${rem(99)};
//   ${lg(`
//     padding-bottom: ${rem(80)};
//   `)}
//   ${md(`
//     padding-bottom: ${rem(60)};
//   `)}
//   ${xs(`
//     padding-bottom: ${rem(40)};
//   `)}

  .looperr{
    z-index: 0;
    -webkit-animation: spin 20s linear infinite;
    -moz-animation: spin 20s linear infinite;
    animation: spin 20s linear infinite;
    ${xs(`
    margin-left:${rem(60)};
    max-width: 70%;
    `)}
    ${xxs(`
    margin-left:${rem(60)};
    max-width: 70%;
    `)}
  }
  .vid{
    width: ${rem(800)};
    height: ${rem(600)};
    ${lg(`
    width: ${rem(800)};
    height: ${rem(600)};
  `)}
  ${md(`
  width: ${rem(400)};
  height: ${rem(500)};
  `)}
  ${xs(`
 
  width: ${rem(300)};
  height: ${rem(350)};
  `)}
  ${xxs(`
 
  width: ${rem(150)};
  height: ${rem(300)};
  `)}
  }

  .img-wrap{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:1;
    margin-left: ${rem(40)};
    margin-top: ${rem(120)};
  ${lg(`
  
    margin-left: ${rem(40)};
    margin-top: ${rem(120)};
  `)}
  ${md(`
    margin-left: ${rem(70)};
    margin-top: ${rem(50)};
  `)}
  ${xs(`
    
    margin-left: ${rem(60)};
    margin-top: ${rem(20)};
  `)}
  ${xxs(`
      margin-left: ${rem(120)};
    margin-top: ${rem(0)};
  `)}
  }
  
`;


export const VideoTransition = styled.div`
  
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
  
`;


export const ServiceImage = styled.figure`
  max-width: 50%;
  width: 100%;
  position: relative;
  text-align: center;
  perspective: 1000px;
  ${sm(`
    max-width: ${rem(400)};
    margin-bottom: ${rem(30)};
  `)}
`;

export const ServiceContent = styled.div`
  width: 100%;
  padding: 0 ${rem(72)} 0 ${rem(26)};
  ${lg(`
    padding: 0 ${rem(65)} 0 ${rem(20)};
  `)}
  ${md(`
    padding: 0 0 0 ${rem(20)};
  `)}
  ${sm(`
    padding: 0;
    max-width: ${rem(400)};
  `)}
`;

export const SubHeading = styled.h5`
  ${font(rem(22), rem(30), primary)};
  margin-bottom: ${rem(16)};
  ${md(`
    font-size: ${rem(20)};
    line-height: ${rem(28)};
  `)}
  ${sm(`
    font-size: ${rem(18)};
    line-height: ${rem(26)};
  `)}
  ${xs(`
    font-size: ${rem(16)};
    line-height: ${rem(24)};
    margin-bottom: ${rem(12)};
  `)}
`;

export const Heading = styled.h2`
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(17, 100, 244, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${rem(16)};
`;

export const ListWrap = styled.ul`
  display: block;
`;

export const ListItem = styled.li`
  ${font(rem(18), rem(28), black)};
  margin-bottom: ${rem(16)};
  list-style: none;
  display: flex;
  align-items: flex-start;
  ${md(`
    font-size: ${rem(16)};
    line-height: ${rem(25)};
  `)}
  ${sm(`
    font-size: ${rem(15)};
    line-height: ${rem(24)};
  `)}
  ${xs(`
    font-size: ${rem(14)};
    line-height: ${rem(22)};
  `)}
`;

export const ListIcon = styled.div`
  flex: 0 0 ${rem(32)};
  width: ${rem(32)};
  height: ${rem(32)};
  background: ${lblue};
  border-radius: 50%;
  margin-right: ${rem(24)};
  display: flex;
  align-items: center;
  justify-content: center;
  ${xs(`
    flex: 0 0 ${rem(28)};
    width: ${rem(28)};
    height: ${rem(28)};
    margin-right: ${rem(16)};
  `)}
  img {
    display: block;
  }
`;

export const ServiceSingleWrap = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  ${sm(`
  margin-top:${rem(30)};
  width: 80%;
    flex-direction: column;

  `)}
`;

export const ServiceSingleStyle = styled.div`
display: flex;
flex-direction: row;
width: 80%;
  padding: ${rem(96)} 0;
  align-items: center;
  justify-content: space-around;
  ${xl(`
    padding: ${rem(85)} 0;
  `)}
  ${lg(`
    padding: ${rem(75)} 0;
  `)}
  ${md(`
    padding: ${rem(60)} 0;
  `)}
  ${sm(`
 
  flex-direction: column;
  `)}


  &.rightObject {
    &:after {
      content: "";
      width: ${rem(210)};
      height: ${rem(172)};
      background: url(${images.SideRight});
      top: ${rem(-50)};
      right: 0;
      position: absolute;
      ${lg(`
        width: ${rem(180)};
        height: ${rem(150)};
        background-size: cover;
      `)}
      ${md(`
        width: ${rem(120)};
        height: ${rem(130)};
        background-size: ${rem(120)};
        top: 0;
      `)}
    }
  }


  .vid{
    width: ${rem(350)};
    height: ${rem(600)};
    ${lg(`
    width: ${rem(350)};
    height: ${rem(600)};
  `)}
  ${md(`
  width: ${rem(250)};
  height: ${rem(500)};
  `)}
  ${xs(`
  margin-right:${rem(90)};
  width: ${rem(200)};
  height: ${rem(400)};
  `)}
  // ${xxs(`
  // //margin-left: ${rem(10)};
  // width: ${rem(150)};
  // height: ${rem(250)};
  // `)}
  }


  .vidStyle1{

  }
  .vidStyle2{
     padding-left: 10px;
     padding-bottom: 5px;
  }
  .vidStyle3{
 
  }
  .vidStyle4{

  }



`;

export const ExtraService = styled.div`
  ${font(rem(18), rem(28), "#4F4F4F")};
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding-left: ${rem(55)};
  ${md(`
    font-size: ${rem(16)};
    line-height: ${rem(25)};
  `)}
  ${sm(`
    flex-wrap: wrap;
    white-space: normal;
    padding-left: ${rem(42)};
    font-size: ${rem(14)};
    line-height: ${rem(22)};
  `)}
`;

export const CountryFlag = styled.div`
  display: flex;
  margin-left: ${rem(23)};
  align-items: center;
  ${sm(`
    margin-left: 0;
    margin-top: ${rem(10)};
    width: 100%;
  `)}
  img {
    margin-right: ${rem(16)};
  }
`;
