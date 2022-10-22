import styled from "styled-components";
import { images } from "../../config/images";
import { rem, font, SiteTransition, xl, lg, md, sm, xs,dblack } from "../../config/variables";

export const KeyFeatureSectionStyle = styled.section`
  width: 100%;
  padding: 0 0 ${rem(96)} 0;
  margin-bottom: ${rem(96)};
  ${xl(`
    padding: 0 0 ${rem(85)} 0;
    margin-bottom: ${rem(85)};
  `)}
  ${lg(`
    padding: 0 0 ${rem(75)} 0;
    margin-bottom: ${rem(75)};
  `)}
  ${md(`
    padding: 0 0 ${rem(70)} 0;
    margin-bottom: ${rem(70)};
  `)}
  ${sm(`
    padding: 0 0 ${rem(40)} 0;
    margin-bottom: ${rem(50)};
  `)}
  .container {
    max-width: ${rem(1256)};
  }
`;

export const Heading = styled.div`
  width: 100%;
  margin: 0 auto;
  display: block;
  margin-bottom: ${rem(63)};
  text-align: center;
  ${lg(`
    margin-bottom: ${rem(55)};
  `)}
  ${md(`
    margin-bottom: ${rem(50)};
  `)}
  ${xs(`
    margin-bottom: ${rem(30)};
  `)}
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
margin-bottom: ${rem(54)};
${lg(`
  margin-bottom: ${rem(40)};
`)}
${md(`
  font-size: ${rem(20)};
  line-height: ${rem(30)};
  margin-bottom: ${rem(30)};
`)}
${sm(`
  font-size: ${rem(18)};
  line-height: ${rem(28)};
  margin-bottom: ${rem(30)};
`)}
`;
export const SideLines2 = styled.div`
background: linear-gradient(
  270deg,
  #FFFFFF 10%,
  #1164F4 100%
);
width:${rem(150)};
height:${rem(2)};
margin-bottom: ${rem(54)};
${lg(`
  margin-bottom: ${rem(40)};
`)}
${md(`
  font-size: ${rem(20)};
  line-height: ${rem(30)};
  margin-bottom: ${rem(30)};
`)}
${sm(`
  font-size: ${rem(18)};
  line-height: ${rem(28)};
  margin-bottom: ${rem(30)};
`)}
`;


export const MainHead = styled.h5`
  ${font(rem(24), rem(33), dblack)};
  background: linear-gradient(
    90deg,
    #1164F4 25%,
    #00DECA 95%
  );
  margin-right:${rem(25)};
  margin-left:${rem(25)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${rem(54)};
  ${lg(`
    margin-bottom: ${rem(40)};
  `)}
  ${md(`
    font-size: ${rem(20)};
    line-height: ${rem(30)};
    margin-bottom: ${rem(30)};
  `)}
  ${sm(`
    font-size: ${rem(18)};
    line-height: ${rem(28)};
    margin-bottom: ${rem(30)};
  `)}
`;

export const Content = styled.p`
  color: #4F4F4F;
  margin: 0;
`;

export const FeatureList = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 ${rem(-18)};
  ${lg(`
    margin: 0 ${rem(-12)};
  `)}
  ${md(`
    margin: 0 ${rem(-12)};
    flex-wrap: wrap;
  `)}
  ${xs(`
    margin: 0;
    flex-wrap: wrap;
  `)}
`;

export const SingleFeature = styled.div`
  padding: ${rem(49)} ${rem(36)};
  box-shadow: 16px 16px 50px rgba(0, 0, 0, 0.02);
  border-radius: ${rem(8)};
  max-width: ${rem(381)};
  width: 100%;
  margin: 0 ${rem(18)};
  transition: ${SiteTransition};
  ${lg(`
    margin: 0 ${rem(12)};
    padding: ${rem(25)} ${rem(20)};
  `)}
  ${md(`
    margin: 0 ${rem(12)};
    padding: ${rem(25)} ${rem(20)};
    margin-bottom: ${rem(25)};
    max-width: 45%;
  `)}
  ${xs(`
    margin: 0;
    padding: ${rem(25)} ${rem(20)};
    margin-bottom: ${rem(25)};
    max-width: 100%;
  `)}
  &:hover{
    box-shadow: 16px 16px 50px rgba(0, 0, 0, 0.1);
  }
`;

export const FeatureHead = styled.div`
  display: flex;
  margin-bottom: ${rem(16)};
  align-items: flex-start;
  ${sm(`
    margin-bottom: ${rem(10)};
  `)}
`;

export const FeatureImg = styled.div`
  margin-right: ${rem(-40)};
  flex: 0 0 ${rem(150)};
  ${sm(`
    flex: 0 0 ${rem(100)};
    margin-right: ${rem(-20)};
  `)}
`;

export const FeatureTitle = styled.div`  
  ${font(rem(20), rem(27), '#162647')};
  font-weight: 700;
  padding-top: ${rem(7)};
  ${md(`
    font-size: ${rem(18)};
    line-height: ${rem(25)};
  `)}
  ${sm(`
    font-size: ${rem(16)};
    line-height: ${rem(23)};
  `)}
`;

export const FeatureContent = styled.div`
  ${font(rem(18), rem(28), '#4F4F4F')};
  background: url(${images.RightBlue}) 0 10px no-repeat;
  padding-left: ${rem(29)};
  ${md(`
    font-size: ${rem(16)};
    line-height: ${rem(26)};
  `)}
  ${sm(`
    font-size: ${rem(14)};
    line-height: ${rem(24)};
  `)}
`;