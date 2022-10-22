import styled from "styled-components";
import {
  rem,
  white,
  lg,
  md,
  sm,
  xxs,
  SiteTransition,
  black,
  font,
  grey,
  dblack,
  customScroll,
  headblue,lblue
} from "../../config/variables";

export const HeaderStyle = styled.header`
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  position: sticky;
  top: 0;
  z-index: 99;
  backdrop-filter: blur(10px);
  ${sm(`
    padding: ${rem(15)} 0;
  `)}
  .container {
    max-width: 1256px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  max-width: ${rem(256)};
  width: 100%;
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
    margin-top: ${rem(2)};
  `)}
  a {
    display: block;
    img {
      display: block;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  ${sm(`
    display: none;
  `)}
`;

export const MenuList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  margin-right: ${rem(20)};
`;

export const SubMenuList = styled.div`
  width: 50%;
`;

export const SubMenu = styled.div`
  position: absolute;
  top: 100%;
  width: ${rem(376)};
  border-radius: ${rem(4)};
  padding: ${rem(18)} ${rem(24)};
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: ${SiteTransition};
  margin-top: 15px;
  z-index: 99;
  background: ${white};
  ${md(`
    padding: ${rem(15)} ${rem(20)};
    ${font(rem(15), rem(20), white)};
  `)}
  &.about-menu{
    width: ${rem(200)};
    ${SubMenuList}{
      width: 100%;
    }
  }
`;

export const MenuItem = styled.li`
  margin: 0 ${rem(20)};
  list-style: none;
  display: flex;
  align-items: center;
  position: relative;
  ${lg(`
    margin: 0 ${rem(15)};
  `)}
  ${md(`
    margin: 0 ${rem(10)};
  `)}
  &:hover {
    ${SubMenu} {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      margin-top: 0;
    }
  }
`;

export const ItemLink = styled.a`
  ${font(rem(16), rem(18), black)};
  font-weight: 600;
  transition: ${SiteTransition};
  display: flex;
  align-items: center;
  padding: ${rem(36)} 0;
  ${md(`
    padding: ${rem(25)} 0;
  `)}
  .menu-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${rem(8)};
  }
`;

export const SubMenuListTitle = styled.div`
  display: flex;
  align-items: center;
  ${font(rem(10), rem(18), grey)};
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: ${rem(23)};
`;

export const SubMenuListIcon = styled.div`
  max-width: ${rem(24)};
  margin-right: ${rem(8)};
  img {
    display: block;
  }
`;

export const SubMenuListWrap = styled.ul`
  display: block;
`;

export const SubMenuListMenu = styled.div`
  margin-bottom: ${rem(30)};
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SubMenuItem = styled.a`
  ${font(rem(16), rem(18), grey)};
  font-weight: 600;
  display: block;
  transition: ${SiteTransition};
  ${md(`
    ${font(rem(15), rem(17), grey)};
  `)}
  &:hover {
    color: ${black};
  }
`;


export const MobileMenu = styled.div`
  display: none;
  ${sm(`
    display: flex;
  `)}
`;

export const MobileButton = styled.div`
  width: ${rem(24)};
  height: ${rem(20)};
  border-radius: ${rem(5)};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${rem(15)};
  cursor: pointer;
  span {
    position: absolute;
    width: ${rem(24)};
    height: ${rem(2)};
    border-radius: ${rem(2)};
    background: ${black};
    &:before {
      content: "";
      position: absolute;
      width: ${rem(24)};
      height: ${rem(2)};
      border-radius: ${rem(2)};
      background: ${black};
      left: 0;
      top: ${rem(-7)};
    }
    &:after {
      content: "";
      position: absolute;
      width: ${rem(24)};
      height: ${rem(2)};
      border-radius: ${rem(2)};
      background: ${black};
      left: 0;
      bottom: ${rem(-7)};
    }
  }
`;

export const MobileMenuWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: ${white};
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.3, 0.4, 0.7, 1);
  &.open {
    transform: translateX(0);
  }
`;

export const MobileHeader = styled.div`
  padding: ${rem(15)} ${rem(15)};
  background: ${white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,0.2);
`;

export const CloseButton = styled.div`
  width: ${rem(42)};
  height: ${rem(32)};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${rem(13)};
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    width: ${rem(24)};
    height: ${rem(2)};
    border-radius: ${rem(2)};
    background: ${black};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
    content: "";
    position: absolute;
    width: ${rem(24)};
    height: ${rem(2)};
    border-radius: ${rem(2)};
    background: ${black};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const Mobilecontent = styled.div`
  flex: 1;
  overflow: auto;
  ${customScroll};
  ${MenuList} {
    display: block;
    padding: ${rem(30)} ${rem(20)};
    margin: 0;
    height: 100%;
  }
  ${MenuItem} {
    margin: 0;
    padding: 0;
    display: block;
    padding-bottom: ${rem(15)};
    &:last-child {
      border: 0;
    }
  }
  ${ItemLink} {
    ${font(rem(16), rem(24), dblack)};
    padding: 0;
    &:after,
    &:before {
      display: none;
    }
    &.active + {
      ${SubMenu}{
        display: flex;
      }
    }    
  }
  ${SubMenu}{
    position:static;
    opacity: 1;
    visibility: visible;
    box-shadow: inherit;
    max-width: 100%;
    width: 100%;
    left: 0;
    transform: initial;
    margin: 0;
    display: none;
    padding: ${rem(20)} 0;
  }

  ${SubMenuListMenu}{
    margin-bottom: ${rem(15)};
  }
`;

export const EarlyWrap = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  padding: ${rem(10)};
  border-top: 1px solid rgba(0,0,0,0.2);
`;


export const SCLPChain = styled.div`
display: flex;
margin-left:-${rem(120)};
width: ${rem(1500)};
height: 20%;
padding-top:${rem(10)};
cursor:pointer;
align-items: center;
justify-content:center;
// background: ${headblue};
background: linear-gradient(to right, #1164F4, #519EFB);

${lg(`

  `)}
  ${md(`
  margin-left:-${rem(0)};
  width: 100%
  `)}
  ${sm(`
  margin-left:-${rem(0)};
  width: 100%
    
  `)}
`;



export const SCLPChainText = styled.h5`
   ${font(rem(14), rem(16), white)};
  align-item:center
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;

  ${lg(`

  `)}
  ${md(`
    font-size: ${rem(16)};
    line-height: ${rem(18)};
  `)}
  ${sm(`
    font-size: ${rem(8)};
    line-height: ${rem(14)};
    
  `)}
`;