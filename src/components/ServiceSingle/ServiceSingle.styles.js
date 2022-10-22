import styled from "styled-components";
import { images } from "../../config/images";
import {
  font,
  rem,
  primary,
  black,
  lblue,
  green,
  lgreen,
  xl,
  lg,
  md,
  sm,
  xs,
} from "../../config/variables";

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
  max-width: 50%;
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
  width: 100%;
  ${sm(`
    flex-direction: column;
  `)}
`;

export const ServiceSingleStyle = styled.div`
  padding: ${rem(96)} 0;
  position: relative;
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
    padding: ${rem(60)} 0 0;
  `)}
  &.odd {
    ${ServiceSingleWrap} {
      flex-direction: row-reverse;
      ${sm(`
        flex-direction: column;
      `)}
    }
    ${ServiceContent} {
      padding-right: ${rem(110)};
      ${lg(`
        padding-right: ${rem(100)};
      `)}
      ${md(`
        padding-right: ${rem(30)};
      `)}
      ${sm(`
        padding: 0;
      `)}
    }
  }
  &.green {
    ${SubHeading} {
      color: ${green};
    }
    ${Heading} {
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(45, 202, 140, 1) 100%
      );
      -webkit-background-clip: text;
    }
    ${ListIcon} {
      background: ${lgreen};
    }
  }
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
  &.leftObject {
    &:before {
      content: "";
      width: ${rem(274)};
      height: ${rem(328)};
      background: url(${images.SideLeft});
      top: ${rem(-200)};
      left: ${rem(-50)};
      position: absolute;
      ${lg(`
        width: ${rem(193)};
        height: ${rem(231)};
        background-size: cover;
      `)}
      ${md(`
        width: ${rem(127)};
        height: ${rem(151)};
        background-size: ${rem(127)};
        top: ${rem(-116)};
      `)}
      ${xs(`
        top: ${rem(-80)};
      `)}
    }
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
