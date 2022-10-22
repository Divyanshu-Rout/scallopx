import styled from "styled-components";
import {
  rem, dblack, font, xl, lg, md, sm
} from "../../config/variables";


export const BackedSectionStyle = styled.section`
  width: 100%;
  margin-bottom: ${rem(118)};
  padding-top: ${rem(114)};
  ${xl(`
    margin-bottom: ${rem(100)};
    padding-top: ${rem(100)};
  `)}
  ${lg(`
    margin-bottom: ${rem(90)};
    padding-top: ${rem(90)};
  `)}
  ${md(`
    margin-bottom: ${rem(60)};
    padding-top: ${rem(60)};
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
margin-bottom: ${rem(64)};
${lg(`
  margin-bottom: ${rem(50)};
`)}
${md(`
  font-size: ${rem(20)};
  line-height: ${rem(30)};
  margin-bottom: ${rem(40)};
`)}
${sm(`
  font-size: ${rem(18)};
  line-height: ${rem(28)};
  margin-bottom: ${rem(40)};
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
margin-bottom: ${rem(64)};
${lg(`
  margin-bottom: ${rem(50)};
`)}
${md(`
  font-size: ${rem(20)};
  line-height: ${rem(30)};
  margin-bottom: ${rem(40)};
`)}
${sm(`
  font-size: ${rem(18)};
  line-height: ${rem(28)};
  margin-bottom: ${rem(40)};
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
  margin-bottom: ${rem(64)};
  ${lg(`
    margin-bottom: ${rem(50)};
  `)}
  ${md(`
    font-size: ${rem(20)};
    line-height: ${rem(30)};
    margin-bottom: ${rem(40)};
  `)}
  ${sm(`
    font-size: ${rem(18)};
    line-height: ${rem(28)};
    margin-bottom: ${rem(40)};
  `)}
`;

export const IncubatedLogo = styled.div`
  max-width: ${rem(259)};
  
  display: block;
  margin: 0 auto;
  margin-bottom: ${rem(64)};
  ${lg(`
    margin-bottom: ${rem(50)};
  `)}
  ${md(`
    max-width: ${rem(200)};
    margin-bottom: ${rem(40)};
  `)}
  ${sm(`
    max-width: ${rem(180)};
    margin-bottom: ${rem(40)};
  `)}
  img{
    display: block;
  }
`;

export const SupportedBy = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
`;

export const BackedList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
`;

export const PartnersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
`;

export const SingleBacked = styled.div`
  margin: 0 ${rem(32)};
  max-width: ${rem(125)};
  width: 100%;
  margin-bottom: ${rem(54)};
  // &:first-child{
  //   margin-left: ${rem(45)};
  // }
  ${lg(`
    margin-bottom: ${rem(45)};
    &:first-child{
      margin-left: ${rem(35)};
    }
  `)}
  ${sm(`
    margin: 0 ${rem(20)};
    margin-bottom: ${rem(45)};
    &:first-child{
      margin-left: ${rem(20)};
    }
  `)}
`;

export const SinglePartner = styled.div`
  margin: 0 ${rem(32)};
  max-width: ${rem(259)};
  // width: 100%;
  margin-bottom: ${rem(54)};
  // &:first-child{
  //   margin-left: ${rem(45)};
  // }
  ${lg(`
  max-width: ${rem(150)};
    margin-bottom: ${rem(45)};
    &:first-child{
      margin-left: ${rem(35)};
    }
  `)}
  ${sm(`
  max-width: ${rem(120)};
    margin: 0 ${rem(20)};
    margin-bottom: ${rem(45)};
    &:first-child{
      margin-left: ${rem(20)};
    }
  `)}
`;

export const SingleBackedImg = styled.div`
  margin-bottom: ${rem(17)};
  width: 100%;
  img{
    display: block;
    margin: 0 auto;
  }
`;

export const SinglePartnerImg = styled.div`
  margin-bottom: ${rem(17)};
  width: 100%;
  img{
    display: block;
    margin: 0 auto;
  }
`;

export const SingleBackedTitle = styled.p`
  ${font(rem(16), rem(28), '#81838C')};
  letter-spacing: -0.53px;
  margin: 0;
  text-align: center;
  ${md(`
    font-size: ${rem(15)};
    line-height: ${rem(27)};
  `)}
  ${sm(`
    font-size: ${rem(14)};
    line-height: ${rem(27)};
  `)}
`;
