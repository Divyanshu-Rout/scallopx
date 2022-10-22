import styled from "styled-components";
import {
  font, rem, grey, xl, lg, md, sm, xs,dblack,white,lblue
} from "../../config/variables";

export const FeatureLogoStyle = styled.section`
  width: 100%;
  display: block;
  padding: ${rem(35)} ${rem(38)};
  justify-content: center;
  margin-bottom: ${rem(136)};
  ${xl(`
    margin-bottom: ${rem(100)};
  `)}
  ${lg(`
    margin-bottom: ${rem(90)};
  `)}
  ${md(`
    padding: ${rem(46)} ${rem(0)};
    margin-bottom: ${rem(70)};
  `)}
  ${sm(`
    padding: ${rem(40)} ${rem(0)};
    margin-bottom: ${rem(50)};
  `)}
  ${xs(`
    padding: ${rem(40)} ${rem(0)} 0;
  `)}
`;

export const ExtraService = styled.div`
  
  align-items: center;
  box-shadow: 1px 1px 40px rgba(0, 0, 0, 0.08);
  background: ${white};
   padding: ${rem(60)} ${rem(20)} ${rem(10)} ;
  width: 100%;
  border-radius: ${rem(16)};  
  ${sm(`
    flex-wrap: wrap;
    max-width: 100%;
    justify-content: center;
  `)}
`;

export const Heading = styled.div`
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

export const FeatureLogoWrap = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 100%;
width: 100%;
margin: 0 auto;
align-items:center;
justify-content: center;

`;
export const LogoSingle = styled.div`
margin: 0 ${rem(32)};
max-width: ${rem(150)};
width: 100%;

 margin-bottom: ${rem(40)};
// &:first-child{
//   margin-left: ${rem(45)};
// }
${lg(`
max-width: ${rem(120)};
  margin-bottom: ${rem(45)};
  &:first-child{
    margin-left: ${rem(35)};
  }
`)}
${sm(`
max-width: ${rem(100)};
  margin: 0 ${rem(20)};
  margin-bottom: ${rem(45)};
  &:first-child{
    margin-left: ${rem(20)};
  }
`)}
`;
export const LogoSingleTop = styled.div`
margin: 0 ${rem(32)};
max-width: ${rem(180)};
width: 100%;

 margin-bottom: ${rem(40)};
// &:first-child{
//   margin-left: ${rem(45)};
// }
${lg(`
max-width: ${rem(120)};
  margin-bottom: ${rem(45)};
  &:first-child{
    margin-left: ${rem(35)};
  }
`)}
${sm(`
max-width: ${rem(100)};
  margin: 0 ${rem(20)};
  margin-bottom: ${rem(45)};
  &:first-child{
    margin-left: ${rem(20)};
  }
`)}
`;
export const ExpandWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content:flex-end;
padding-right:${rem(25)};
`;
export const ExpandFeatured = styled.h5`
  ${font(rem(18), rem(26), lblue)};
  background: linear-gradient(
    90deg,
    #1164F4 25%,
    #1164F4 95%
  );
  align-item:flex-end
  margin-right:${rem(25)};
  margin-left:${rem(25)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${lg(`

  `)}
  ${md(`
    font-size: ${rem(16)};
    line-height: ${rem(24)};
  `)}
  ${sm(`
    font-size: ${rem(12)};
    line-height: ${rem(20)};
    
  `)}
`;

export const SingleLogoImg = styled.div`
  width: 100%;
  img{
    display: block;
    margin: 0 auto;
  }
`;
