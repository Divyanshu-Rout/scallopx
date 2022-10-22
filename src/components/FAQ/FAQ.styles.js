import styled from "styled-components";
import { images } from "../../config/images";
import {
  rem,
  grey,
  white,
  dblack,
  primary,
  SiteTransition,
  font,
  black,mblack,
  xl,
  lg,
  md,
  sm,
  xs,
} from "../../config/variables";

export const FAQStyle = styled.section`
  width: 100%;
  margin-bottom: ${rem(118)};
  padding-top: ${rem(114)};
  position: relative;
  overflow: hidden;
  ${xl(`
    margin-bottom: ${rem(100)};
    padding-top: ${rem(100)};
  `)}
  ${lg(`
    margin-bottom: ${rem(90)};
    padding-top: ${rem(90)};
  `)}
  ${md(`
    padding-top: ${rem(60)};
    margin-bottom: ${rem(60)};
  `)}
  ${sm(`
    padding-top: ${rem(40)};
    margin-bottom: ${rem(50)};
  `)}
  ${xs(`
    padding-top: ${rem(80)};
    margin-bottom: ${rem(10)};
  `)}
  &:after {
    content: "";
    width: ${rem(210)};
    height: ${rem(172)};
    background: url(${images.SideRight});
    top: ${rem(50)};
    right: -90px;
    position: absolute;
    ${md(`
      top: ${rem(100)};
    `)}
    ${sm(`
      top: ${rem(130)};
      width: ${rem(70)};
      height: ${rem(85)};
      right: 0;
      background-size: cover;
    `)}
  }
  &:before {
    content: "";
    width: ${rem(274)};
    height: ${rem(328)};
    background: url(${images.SideLeft});
    bottom: ${rem(50)};
    left: -200px;
    position: absolute;
  }
`;


