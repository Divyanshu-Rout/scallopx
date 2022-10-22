import styled from "styled-components";
import { images } from "../../config/images";
import {
  font,
  lg,
  md,
  rem,
  SiteTransition,
  sm,
  white,
  xl,
  xs,
} from "../../config/variables";

export const CoinSectionStyle = styled.section`
  width: 100%;
  padding: ${rem(96)} 0;
  ${xl(`
    padding: ${rem(85)} 0;
  `)}
  ${lg(`
    padding: ${rem(75)} 0;
  `)}
  ${md(`
    padding: ${rem(70)} 0 0;
  `)}
  .container {
    max-width: ${rem(1256)};
  }
`;

export const CoinWrap = styled.div`
  background: linear-gradient(63.99deg, #1d2d3c 65.92%, #00deca 294.81%);
  width: 100%;
  border-radius: ${rem(16)};
  display: flex;
  align-items: center;
  justify-content: center;
  ${sm(`
    flex-direction: column;
  `)}
`;

export const CoinImage = styled.figure`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: ${rem(-100)};
  }
  ${sm(`
    max-width: ${rem(300)};
    width: 100%;
    margin-bottom: ${rem(40)};
  `)}
  img {
    max-width: ${rem(233)};
    ${sm(`
      max-width: ${rem(168)};
      margin-top: ${rem(-50)};
    `)}
  }
`;

export const CoinTitle = styled.h5`
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, #607d8b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${rem(0)};
  margin-top: ${rem(32)};
`;

export const CoinContent = styled.div`
  width: 55%;
  padding: ${rem(50)} 0;
  padding-right: ${rem(100)};
  ${md(`
    padding-right: ${rem(20)};
  `)}
  ${sm(`
    max-width: ${rem(600)};
    width: 100%;
    padding: 0 ${rem(30)};
    margin-bottom: ${rem(50)};
  `)}
  ${xs(`
    padding: 0 ${rem(15)};
    margin-bottom: ${rem(40)};
  `)}
`;

export const SubHeading = styled.h5`
  ${font(rem(20), rem(27), white)};
  margin-bottom: ${rem(16)};
  ${md(`
    font-size: ${rem(18)};
    line-height: ${rem(25)};
  `)}
  ${sm(`
    font-size: ${rem(16)};
    line-height: ${rem(23)};
  `)}
  ${xs(`
    margin-bottom: ${rem(12)};
  `)}
`;

export const Heading = styled.h2`
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, #323232 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${rem(16)};
`;

export const Content = styled.p`
  color: ${white};
  margin-bottom: ${rem(16)};
`;

export const CoinListItem = styled.ul`
  display: block;
  margin-bottom: ${rem(10)};
`;

export const ListSingle = styled.li`
  position: relative;
  padding: ${rem(7)} 0;
  padding-left: ${rem(55)};
  ${font(rem(16), rem(18), white)};
  margin-bottom: ${rem(16)};
  list-style: none;
  ${sm(`
    font-size: ${rem(15)};
    line-height: ${rem(18)};
  `)}
  ${sm(`
    font-size: ${rem(14)};
    line-height: ${rem(18)};
    padding-top: 0;
  `)}
  &:before {
    content: "";
    width: ${rem(32)};
    height: ${rem(32)};
    background: #2b4257 url(${images.Tick}) no-repeat center center;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
  }
`;

export const Tokenomics = styled.a`
  display: inline-block;
  padding: ${rem(13)} ${rem(39)};
  border-radius: ${rem(32)};
  border: 1px solid ${white};
  ${font(rem(16), rem(21), white)};
  font-weight: 700;
  transition: ${SiteTransition};
  margin-top: ${rem(10)};
  &:hover {
    background: #2b4257;
  }
`;
