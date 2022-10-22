import styled from "styled-components";
import { images } from "../../config/images";
import {
  lg,
  md,
  rem, sm, white,
} from "../../config/variables";


export const ExpandSectionStyle = styled.section`
  width: 100%;
  background: linear-gradient(63.99deg, #1D2D3C 65.92%, #00DECA 294.81%);
  padding-top: ${rem(93)};
  position: relative;
  margin-bottom: ${rem(142)};
  ${lg(`
    margin-bottom: ${rem(100)};
  `)}
  ${md(`
    padding-top: ${rem(60)};
    margin: ${rem(50)} 0 ${rem(90)};
  `)}
  ${sm(`
    margin: ${rem(50)} 0 ${rem(70)};
  `)}
  &:after{
    content: "";
    width: 100%;
    height: ${rem(151)};
    left: 0;
    right: 0;
    bottom: ${rem(-151)};
    background: url(${images.ExpandShadow}) no-repeat center center;
    position: absolute;
  }
`;

export const Heading = styled.div`
  max-width: ${rem(694)};
  width: 100%;
  margin: 0 auto;
  display: block;
  /* margin-bottom: ${rem(83)}; */
  text-align: center;
`;

export const H2 = styled.h2`
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, #323232 100%); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${rem(16)};
`;

export const Content = styled.p`
  color: ${white};
  margin: 0;
`;

export const ExpandWrapper = styled.div`
  display: block;
  overflow: hidden;
  width: 100%;
`;

export const GlobeImg = styled.figure`
  width: 100%;
  display: block;
  text-align: center;
  img{
    display: block;
    margin: 0 auto;
  }
`;