import styled from "styled-components";
import {
  rem,
  white,
  lg,
  md,
  xl,
  xxl,
  sm,
  xxs,
  SiteTransition,
  black,
  font,
  grey,
  dblack,
  customScroll,
  headblue,
  lblue,
  ctaWidth,
  ctaPadding,
  ctaRadius,
  ctaAlingment,
  ctaHover,
} from "../../config/variables";

export const NavbarStyle = styled.header`
  width:100%;
  background:#FCFBFC;
  position: sticky;
  top: 0;
  z-index: 200;
  border-bottom: 2px solid #EFEFEF;
${sm(`
  padding:${rem(10)} ${rem(15)} ${rem(10)} ${rem(15)};
  `)}
  ${md(`
  padding:${rem(14)} ${rem(30)} ${rem(12)} ${rem(30)};
  `)}
  ${lg(`
  padding:${rem(14)} ${rem(20)} ${rem(14)} ${rem(20)};
  `)}
  ${xl(`
  padding:${rem(18)} ${rem(50)} ${rem(18)} ${rem(100)};
  `)}
  ${xxl(`
  padding:${rem(18)} ${rem(50)} ${rem(18)} ${rem(80)};
  `)}
  `

export const LogoStyle = styled.div`
  max-width: ${rem(256)};
  width: 100%;
  display: flex;
align-items: center;
  ${lg(`
    max-width: ${rem(200)};
  `)}
  ${md(`
    max-width: ${rem(150)};
  `)}
  ${sm(`
    max-width: ${rem(130)};
  `)}
  ${xxs(`
    max-width: ${rem(115)};
  `)}
  a {
    display: block;
    img {
      display: block;
    }
  }
`;

export const WrapperNavStyle = styled.div`
display: flex;
justify-content:space-between;
`
export const MenuBlockStyle = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
${md(`display:none;`)}
`
export const MenuItemStyle = styled.div`
color: #8F92A1;
cursor:pointer;
padding:0 ${rem(15)};
transition: ${SiteTransition};
&:hover {
    color: #1A1D1F;
  }
`

export const ButtonWrapperStyle = styled.div`
display:flex;
align-items: center;
${md(`display:none;`)}
`
export const JoinCtaStyle = styled.div`
border-radius:${ctaRadius};
width:${ctaWidth};
padding:${ctaPadding};
${ctaAlingment}
background:${headblue};
${ctaHover}
color:#fff;
`

export const DownloadCtaStyle = styled.div`
margin-left:${rem(10)};
border-radius:${ctaRadius};
width:${ctaWidth};
padding:${ctaPadding};
${ctaAlingment};
color:${headblue};
${ctaHover}
`

export const HamburgerMenuStyle = styled.div`
display: none;
cursor:pointer;
${ctaHover}
${md(`
display: block;
`)}
`