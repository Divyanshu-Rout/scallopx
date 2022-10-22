import styled from "styled-components";
import { images } from "../../config/images";
import { font, lg, md, rem, sm, white } from "../../config/variables";

export const RoadMapProcesstyle = styled.div`
  width: 100%;
  position: relative;
  z-index:1;
  ${lg(`
    overflow: hidden;
  `)}
  ${md(`
    overflow: hidden;
  `)}
  ${sm(`
    overflow: initial;
  `)}
`;

export const RoadMapWrapRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  ${sm(`
    flex-wrap: wrap;
  `)}
  &:nth-child(2n){
    flex-direction: row-reverse;
  }
`;

export const RoadMapWrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: ${rem(1110)};
  ${lg(`
    transform: scale(0.8);
    transform-origin: 4% 0%;
  `)}
  ${md(`
    transform: scale(0.62);
    transform-origin: 0% 0%;
    margin-bottom: ${rem(-200)};
  `)}
  ${sm(`
    transform: scale(1);
    margin-bottom: ${rem(0)};
    width: 100%;
    max-width: ${rem(303)};
    padding-left: ${rem(30)};    
    &:before{
      content: "";
      width: 1px;
      height: calc(100% - 85px);
      position: absolute;
      left: 7px;
      top: 30px;
      background: #1164F4;
    }
  `)}
  &:after{
    content: "";
    width: ${rem(1132)};
    height: ${rem(467)};
    background: url(${images.timeline}) no-repeat;
    top: ${rem(193)};
    left: ${rem(7)};
    position: absolute;
    z-index: -1;
    ${sm(`
      display: none;
    `)}
  }  
`;

export const SingleRoad = styled.div`
  width: 100%;
  max-width: ${rem(200)};
  background: ${white};
  border-radius: ${rem(15)};
  padding: ${rem(35)} ${rem(36)} ${rem(27)};
  box-shadow: 0px 25px 50px rgba(67, 67, 68, 0.05);
  margin: 0 ${rem(32)};
  text-align: center;
  height: ${rem(150)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${rem(80)};
  position: relative;
  ${sm(`    
    max-width: 100%;
    margin: 0;
    margin-bottom: ${rem(30)};
    text-align: left;
    padding: ${rem(14)} ${rem(22)};
    height: auto;
    margin-bottom: ${rem(16)};
  `)}
  &:after{
    content: "";
    width: ${rem(13.5)};
    height: ${rem(13.5)};
    background: radial-gradient(40.07% 40.33% at 50% 50%, #1161F4 0%, #277DFE 100%);
    bottom: ${rem(-50)};
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    border-radius: 50%;
    ${sm(`    
      top: 50%;
      bottom: initial;
      left: ${rem(-30)};
      margin-top: ${rem(-7)};
      transform: inherit;
    `)}
  }
  &.active{
    background-clip: padding-box;
    border: 1px solid transparent;
    box-shadow: 6px 14px 15px rgba(0, 0, 0, 0.07);
      &:before {
      content: '';
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      z-index: -1;
      margin: -1px;
      border-radius: inherit;
      background: linear-gradient(180deg, rgba(17,100,244,1) 5%, rgba(17,100,244,0.24) 100%);
    }
  }
  &.future{
    &:after{
      width: ${rem(24)};
      height: ${rem(24)};
      background: url(${images.bullet});
      bottom: ${rem(-56)};
      background-size: ${rem(24)};
      ${sm(`    
        top: 50%;
        bottom: initial;
        left: ${rem(-35)};
        margin-top: ${rem(-7)};
      `)}
    }
  }  
`;

export const Title = styled.p`
  width: 100%;
  ${font(rem(14), rem(22), '#4F4F4F')};
  margin-bottom: ${rem(19)};
  ${sm(`  
    margin-bottom: ${rem(13)};
  `)}
`;

export const Month = styled.div`
  width: 100%;
  ${font(rem(16), rem(25), '#474A4E')};
  font-weight: 600;
`;