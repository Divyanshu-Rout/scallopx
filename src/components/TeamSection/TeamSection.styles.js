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
  black,
  xl,
  lg,
  md,
  sm,
  xs,
} from "../../config/variables";

export const TeamSectionStyle = styled.section`
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

export const Heading = styled.div`
  width: 100%;
  max-width: ${rem(708)};
  margin: 0 auto;
  display: block;
  margin-bottom: ${rem(64)};
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

export const TeamTabs = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const TabsLeft = styled.ul`
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${rem(99)};
  ${sm(`
    margin-bottom: ${rem(50)};
  `)}
`;

export const TabsSingle = styled.li`
  background: ${white};
  border-radius: ${rem(8)};
  padding: ${rem(13)} ${rem(16)};
  ${font(rem(18), rem(30), dblack)};
  cursor: pointer;
  transition: ${SiteTransition};
  list-style: none;
  margin: 0 ${rem(15)};
  max-width: ${rem(248)};
  width: 100%;
  text-align: center;
  ${md(`
    font-size: ${rem(16)};
    line-height: ${rem(26)};
    margin: 0 ${rem(15)};
    margin-bottom: 0;
  `)}
  ${sm(`
    font-size: ${rem(15)};
    line-height: ${rem(25)};
  `)} 
  ${xs(`
    font-size: ${rem(14)};
    line-height: ${rem(22)};
    padding: ${rem(10)} ${rem(15)};
    margin: 0 ${rem(10)};
  `)}  
  &.active {
    color: ${primary};
    font-weight: 600;
    box-shadow: 0px 24px 50px rgba(67, 67, 68, 0.0705882);
  }
`;

export const TabsRight = styled.div`
  flex: 1;
`;

export const TabRightWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SocialMedia = styled.a`
  position: absolute;
  bottom: ${rem(36)};
  left: 50%;
  margin-left: ${rem(-12)};
  width: ${rem(24)};
  height: ${rem(24)};
  transition: ${SiteTransition};
  opacity: 0;
  visibility: hidden;
  background: url(${images.Linkdin});
  z-index: 2;
`;

export const MemberImg = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  padding-bottom: ${rem(18)};
  img {
    display: block;
    margin: 0 auto;
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 204px;
    background: url(${images.HoverMember}) no-repeat;
    left: 0;
    top: -19px;
    opacity: 0;
    visibility: hidden;
    transition: ${SiteTransition};
    background-size: 200px;
    z-index: 1;
    ${sm(`
      height: 150px;
      background-size: ${rem(120)};
      top: -11px;
      left: 10px;
    `)}
  }
  &:hover {
    &:after {
      opacity: 1;
      visibility: visible;
    }
    ${SocialMedia} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const SingleTeam = styled.div`
  max-width: ${rem(200)};
  width: 100%;
  margin: 0 ${rem(15)};
  margin-bottom: ${rem(72)};
  text-align: center;
  ${sm(`
    margin: 0 ${rem(8)};
    margin-bottom: ${rem(50)};
    max-width: ${rem(140)};
  `)}
  &.advisor {
    ${MemberImg} {
      &:after {
        display: none;
      }
    }
  }
`;

export const MemberName = styled.div`
  ${font(rem(16), rem(22), dblack)};
  background: linear-gradient(
    184deg,
    rgba(77, 157, 254, 1) 0%,
    rgba(26, 106, 244, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${rem(8)};
  font-weight: 600;
`;

export const MemberDesignation = styled.p`
  ${font(rem(14), rem(19), black)};
  margin: 0;
`;
