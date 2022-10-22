import styled from "styled-components";
import {
  rem,
  white,
  SiteTransition,
  font,
  grey,
  black,
  primary,
  mblack,
  xl,
  lg,
  md,
  sm,
  xs,
} from "../../config/variables";
import { images } from "../../config/images";

export const FooterStyle = styled.footer`
  padding: ${rem(162)} 0 ${rem(200)};
  position: relative;
  ${xl(`
    padding: ${rem(150)} 0 ${rem(180)};
  `)}
  ${lg(`
    padding: ${rem(120)} 0 ${rem(150)};
  `)}
  ${md(`
    padding: ${rem(100)} 0 ${rem(130)};
  `)}
  ${sm(`
    padding: ${rem(90)} 0 ${rem(110)};
  `)}
  ${xs(`
    padding: ${rem(60)} 0 ${rem(100)};
  `)}
  &:before {
    content: "";
    width: ${rem(210)};
    height: ${rem(172)};
    background: url(${images.SideRight});
    top: ${rem(70)};
    right: 0;
    position: absolute;
    z-index: -1;
    ${md(`
      top: 0;
    `)}
    ${sm(`
      width: ${rem(180)};
      height: ${rem(150)};
    `)}
  }
  &:after {
    content: "";
    width: ${rem(717)};
    height: ${rem(197)};
    background: url(${images.Footer});
    bottom: ${rem(0)};
    left: 50%;
    transform: translateX(-65%);
    position: absolute;
    z-index: -1;
    ${lg(`
      width: ${rem(650)};
      height: ${rem(180)};
      background-size: cover;
    `)}
    ${md(`
      width: ${rem(490)};
      height: ${rem(120)};
      background-size: cover;
    `)}
    ${sm(`
      width: ${rem(350)};
      height: ${rem(90)};
    `)}
    ${xs(`
      width: 100%;
      height: ${rem(90)};
    `)}
  }
`;

export const CTABlock = styled.div`
  background: linear-gradient(
    270deg,
    rgba(0, 222, 202, 1) 0%,
    rgba(99, 84, 255, 1) 100%
  );
  border-radius: ${rem(16)};
  padding: ${rem(83)} ${rem(64)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: ${rem(139)};
  ${md(`
    padding: ${rem(30)} ${rem(40)};
    margin-bottom: ${rem(100)};
  `)}
  ${sm(`
    padding: ${rem(20)} ${rem(30)} ${rem(30)};
    margin-bottom: ${rem(80)};
    flex-wrap: wrap;
  `)}
  ${xs(`
    margin-bottom: ${rem(50)};
  `)}
  &:after {
    content: "";
    width: ${rem(1055)};
    height: ${rem(578)};
    background: url(${images.CtaShadow});
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
    ${lg(`
      width: 100%;
    `)}
    ${md(`
      width: 100%;
      height: ${rem(400)};
      background-size: cover;
    `)}
    ${sm(`
      display: none;
    `)}
  }
`;

export const CtaText = styled.div`
  ${font(rem(32), rem(48), white)};
  font-weight: 800;
  ${md(`
    font-size: ${rem(28)};
    line-height: ${rem(42)};
  `)}
  ${sm(`
    font-size: ${rem(24)};
    line-height: ${rem(38)};
    width: 100%;
    margin-bottom: ${rem(20)};
  `)}
`;

export const CtaForm = styled.div`
  max-width: ${rem(483)};
  width: 100%;
  ${md(`
    max-width: ${rem(400)};
  `)}
`;

export const InputField = styled.div`
  display: block;
  position: relative;
  input {
    background: ${white};
    border-radius: ${rem(32)};
    padding: ${rem(15)} ${rem(20)};
    padding-right: ${rem(180)};
    ${font(rem(14), rem(18), "#8B959E")};
    font-weight: 600;
    border: 0;
    width: 100%;
    ${sm(`
      border-radius: ${rem(25)};
      padding: ${rem(12)} ${rem(20)};
    `)}
  }
  button {
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    position: relative;
    border-radius: ${rem(32)};
    overflow: hidden;
    padding: 0 1px 1px 0;
    transition: ${SiteTransition};
    background: ${mblack};
    padding: ${rem(13)} ${rem(23)};
    ${font(rem(16), rem(21), white)};
    position: absolute;
    right: 0;
    top: 0;
    height: ${rem(48)};
    border: 0;
    ${md(`
      font-size: ${rem(15)};
      line-height: ${rem(22)};
    `)}
    ${sm(`
      border-radius: ${rem(25)};
      font-size: ${rem(14)};
      padding: ${rem(11)} ${rem(20)};
      height: auto;
    `)}
    &:hover {
      background: ${primary};
    }
  }
  .msg-alert {
    position: absolute;
    font-size: 14px;

    p {
      color: white !important;
    }
  }
`;

export const FooterMain = styled.div`
  display: flex;
  align-items: flex-start;
  ${sm(`
    flex-wrap: wrap;
  `)}
`;

export const CopyrightBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${xs(`
    flex-wrap: wrap;
    justify-content: center;
  `)}
`;

export const CopyrightText = styled.div`
  ${font(rem(18), rem(22), "#898A8E")};
  font-weight: 500;
  ${md(`
    font-size: ${rem(15)};
    line-height: ${rem(20)};
  `)}
  ${sm(`
    font-size: ${rem(14)};
    line-height: ${rem(19)};
  `)}
  ${xs(`
    margin-bottom: ${rem(20)};
  `)}
`;

export const CopyrightText2 = styled.div`
  ${font(rem(14), rem(16), "#898A8E")};
  font-weight: 500;
  ${md(`
    font-size: ${rem(13)};
    line-height: ${rem(17)};
  `)}
  ${sm(`
    font-size: ${rem(12)};
    line-height: ${rem(16)};
  `)}
  ${xs(`
    margin-bottom: ${rem(20)};
  `)}
`;


export const FooterLinks = styled.ul`
  display: flex;
  align-items: center;
  ${xs(`
    flex-wrap: wrap;
  `)}
`;

export const FooterLinkItem = styled.li`
  margin: 0 ${rem(15)};
  list-style: none;  
  ${sm(`
    margin: 0 ${rem(8)};
  `)}
  a {
    ${font(rem(16), rem(18), "#8B959E")};
    font-weight: 500;
    text-decoration: none;
    transition: ${SiteTransition};
    ${md(`
      font-size: ${rem(14)};
      line-height: ${rem(18)};
    `)}
    ${sm(`
      white-space: nowrap;
    `)}
    ${xs(`
      white-space: normal;
    `)}
    &:hover {
      color: #000;
    }
  }
`;

export const FooterInfo = styled.div`
  max-width: ${rem(686)};
  width: 100%;
  padding-right: ${rem(20)};
  ${md(`
    max-width: 100%;
  `)}
`;

export const Logo = styled.div`
  max-width: ${rem(156)};
  width: 100%;
  margin-bottom: ${rem(16)};
  ${md(`
    max-width: ${rem(140)};
  `)}
  ${sm(`
    max-width: ${rem(120)};
  `)}
  img {
    display: block;
  }
`;

export const NormalTxt = styled.div`
  ${font(rem(18), rem(35), "#8B959E")};
  font-weight: 600;
  margin-bottom: ${rem(28)};
  ${md(`
    font-size: ${rem(16)};
    line-height: ${rem(20)};
  `)}
  ${sm(`
    font-size: ${rem(14)};
    line-height: ${rem(18)};
  `)}
`;

export const DownalodBtn = styled.a`
  padding: ${rem(12)} ${rem(16)};
  padding-left: ${rem(56)};
  background: #e5f1ff url(${images.Download}) 16px center no-repeat;
  ${font(rem(16), rem(18), "#1164F4")};
  display: inline-block;
  border-radius: ${rem(32)};
  margin-bottom: ${rem(41)};
  transition: ${SiteTransition};
  ${md(`
    font-size: ${rem(15)};
    line-height: ${rem(18)};
    margin-bottom: ${rem(35)};
  `)}
  ${sm(`
    font-size: ${rem(14)};
    line-height: ${rem(18)};
    margin-bottom: ${rem(35)};
  `)}
  &:hover {
    opacity: 0.8;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  margin-bottom: ${rem(96)};
  ${md(`
    margin-bottom: ${rem(70)};
  `)}
  ${sm(`
    margin-bottom: ${rem(50)};
  `)}
`;

export const SocialIcon = styled.li`
  margin-right: ${rem(25)};
  list-style: none;
  ${md(`
    margin-right: ${rem(15)};
  `)}
`;

export const SocialLink = styled.a`
  display: block;
  width: ${rem(50)};
  height: ${rem(50)};
  border-radius: ${rem(10)};
  background: #f5f6fa;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${SiteTransition};
  ${md(`
    width: ${rem(40)};
    height: ${rem(40)};
  `)}
  &:hover {
    opacity: 0.8;
  }
  img {
    display: block;
    ${md(`
      max-width: 50%;
    `)}
  }
`;

export const FooterRightblock = styled.div`
  max-width: ${rem(200)};
  width: 100%;
  padding-right: ${rem(75)};
  ${md(`
    padding-right: ${rem(20)};
  `)}
  ${sm(`
    padding-right: ${rem(20)};
    margin-bottom: ${rem(30)};
  `)}
  ${xs(`
    max-width: 50%;
  `)}
`;

export const Title = styled.h4`
  ${font(rem(24), rem(29), "#333333")};
  font-weight: 600;
  margin-bottom: ${rem(26)};
  ${md(`
    font-size: ${rem(20)};
    line-height: ${rem(25)};
  `)}
`;

export const LinkList = styled.ul`
  display: block;
`;

export const LinkListSingle = styled.li`
  margin-bottom: ${rem(26)};
  display: block;
  list-style: none;
  ${md(`
    margin-bottom: ${rem(15)};
  `)}
`;

export const ListSingleLink = styled.a`
  ${font(rem(16), rem(18), grey)};
  display: block;
  transition: ${SiteTransition};
  ${md(`
    font-size: ${rem(14)};
    line-height: ${rem(16)};
  `)}
  &:hover {
    color: ${black};
  }
`;
