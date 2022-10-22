import { createGlobalStyle } from "styled-components";
import {
  dblack,
  rem,
  font,
  customScroll,
  xl,
  lg,
  md,
  sm,
  xs,
  PrimaryFont,
  primary
} from "./config/variables";
// import { images } from "./config/images";

export const GlobalStyles = createGlobalStyle` 
  /*----------Default-CSS--------------*/
  body {
    ${font(rem(18), rem(28), dblack, PrimaryFont)};
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    ${customScroll};
    ${md(`
      font-size: ${rem(16)};
      line-height: ${rem(26)};
    `)}
    ${sm(`
      font-size: ${rem(15)};
      line-height: ${rem(24)};
    `)}
  }
  body.over-hidden{
    overflow: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:after, *:before{
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 800;
    margin-bottom: ${rem(20)};
  }

  h1{
    ${font(rem(96), rem(96), primary)};
    ${xl(`
      font-size: ${rem(80)};
      line-height: ${rem(80)};
    `)}
    ${lg(`
      font-size: ${rem(70)};
      line-height: ${rem(70)};
    `)}
    ${md(`
      font-size: ${rem(56)};
      line-height: ${rem(56)};
    `)}
    ${sm(`
      font-size: ${rem(48)};
      line-height: ${rem(48)};
    `)}
    ${xs(`
      font-size: ${rem(36)};
      line-height: ${rem(36)};
    `)}
  }

  h2{
    ${font(rem(48), rem(65), primary)};
    ${xl(`
      font-size: ${rem(44)};
      line-height: ${rem(54)};
    `)}
    ${lg(`
      font-size: ${rem(38)};
      line-height: ${rem(48)};
    `)}
    ${md(`
      font-size: ${rem(32)};
      line-height: ${rem(40)};
    `)}
    ${sm(`
      font-size: ${rem(28)};
      line-height: ${rem(34)};
    `)}
  }

  h3{
    ${font(rem(32), rem(43), primary)};
    ${xl(`
      font-size: ${rem(30)};
      line-height: ${rem(41)};
    `)}
    ${lg(`
      font-size: ${rem(28)};
      line-height: ${rem(38)};
    `)}
    ${md(`
      font-size: ${rem(24)};
      line-height: ${rem(30)};
    `)}
  }

  h4{
    ${font(rem(28), rem(34), primary)};
    ${xl(`
      font-size: ${rem(26)};
      line-height: ${rem(32)};
    `)}
    ${lg(`
      font-size: ${rem(22)};
      line-height: ${rem(28)};
    `)}
    ${md(`
      font-size: ${rem(20)};
      line-height: ${rem(24)};
    `)}
  }

  h5{
    ${font(rem(24), rem(30), primary)};
    ${xl(`
      font-size: ${rem(22)};
      line-height: ${rem(28)};
    `)}
    ${lg(`
      font-size: ${rem(20)};
      line-height: ${rem(26)};
    `)}
    ${md(`
      font-size: ${rem(18)};
      line-height: ${rem(22)};
    `)}
  }

  h6{
    ${font(rem(22), rem(26), primary)};
    ${xl(`
      font-size: ${rem(20)};
      line-height: ${rem(24)};
    `)}
    ${lg(`
      font-size: ${rem(18)};
      line-height: ${rem(22)};
    `)}
    ${md(`
      font-size: ${rem(16)};
      line-height: ${rem(20)};
    `)}
  }

  p {
    margin-bottom: ${rem(20)};
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
  
  .container {
    max-width: ${rem(1184)};
    margin: 0 auto;
    padding: 0 ${rem(20)};
    width: 100%;
    ${md(`
      padding: 0 ${rem(15)};
    `)}
  }
`;
