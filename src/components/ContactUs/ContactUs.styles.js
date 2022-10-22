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
  black,mblack,
  xl,
  lg,
  md,
  sm,
  xs,
} from "../../config/variables";

export const ContactUsStyle = styled.section`
  width: 100%;
 
  padding-top: ${rem(114)};
  position: relative;
  overflow: hidden;
  ${xl(`
   
    padding-top: ${rem(100)};
  `)}
  ${lg(`
  
    padding-top: ${rem(90)};
  `)}
  ${md(`
    padding-top: ${rem(60)};
  
  `)}
  ${sm(`
    padding-top: ${rem(40)};
   
  `)}
  ${xs(`
    padding-top: ${rem(80)};
    
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


export const ContactUsWrapper = styled.div`
display: flex;
flex-direction: row;
${md(`
align-items:center;
flex-direction: column;
`)}
${sm(`
align-items:center;
flex-direction: column;
`)}
`;

export const FormWrapper = styled.div`

`;
export const ContactUsLocations = styled.div`
margin-left:${rem(100)};
padding-bottom:${rem(270)};
${md(`
margin-left:${rem(0)};
`)}
${sm(`
margin-left:${rem(80)};
margin-right:${rem(80)};
`)}
`;

export const ContactTitleWrapper = styled.div`
display: flex;
flex-direction: row;
`;

export const ContactTitle = styled.div`  
  ${font(rem(27), rem(34), '#162647')};
  font-weight: 700;
  margin-left: 55px;
  margin-top:${rem(50)};
  width: ${rem(150)};
  ${md(`
    font-size: ${rem(18)};
    line-height: ${rem(25)};
  `)}
  ${sm(`
    font-size: ${rem(16)};
    line-height: ${rem(23)};
  `)}
`;
export const SingleLocation1 = styled.div`
width:${rem(300)};
  margin-left:${rem(100)};
height:${rem(60)};
${md(`
width:${rem(300)};
height:${rem(60)};
`)}
${sm(`
margin-left:${rem(10)};
width:${rem(220)};
height:${rem(60)};
`)}
`;
export const SingleLocation2 = styled.div`
margin-top:${rem(100)};
width:${rem(300)};
height:${rem(60)};
${md(`
width:${rem(300)};
height:${rem(60)};
`)}
${sm(`
margin-left:${rem(10)};
width:${rem(220)};
height:${rem(60)};
`)}
`;
export const SingleLocation3 = styled.div`
margin-top:${rem(140)};
width:${rem(300)};
 margin-left:${rem(300)};
height:${rem(60)};
${md(`
width:${rem(300)};
height:${rem(60)};
`)}
${sm(`
margin-top:${rem(120)};
width:${rem(220)};
height:${rem(60)};
margin-left:${rem(200)};
`)}
`;

export const SingleLocation4 = styled.div`
position: absolute;
margin-top:${rem(100)};
margin-left:${rem(50)};
width:${rem(500)};
height:${rem(200)};
${md(`
margin-left:${rem(0)};
width:${rem(400)};
height:${rem(100)};
`)}
${sm(`
margin-left:${rem(0)};
width:${rem(400)};
height:${rem(100)};
`)}
`;


export const Heading = styled.div`
  width: 100%;
  max-width: ${rem(708)};
  margin: 0 auto;
  display: block;
  margin-bottom: ${rem(64)};
  text-align: center;
  ${md(`
  font-size: ${rem(18)};
  line-height: ${rem(25)};
`)}
${sm(`
  font-size: ${rem(16)};
  line-height: ${rem(23)};
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


export const FormTitle = styled.div`  
  ${font(rem(27), rem(34), '#162647')};
  font-weight: 700;
  margin-bottom: 30px;
  margin-left: 10px;
  margin-top: 30px;
  ${md(`
    font-size: ${rem(18)};
    line-height: ${rem(25)};
  `)}
  ${sm(`
    font-size: ${rem(16)};
    line-height: ${rem(23)};
  `)}
`;






export const FormText = styled.div`  
  
  ${font(rem(16), rem(18), black)};
  font-weight: 600;
  margin-left: 10px;
  margin-bottom:10px;
  ${md(`
    font-size: ${rem(18)};
    line-height: ${rem(25)};
  `)}
  ${sm(`
    font-size: ${rem(16)};
    line-height: ${rem(23)};
  `)}
`;

export const FormErrorText = styled.div`  
  ${font(rem(12), rem(25), '#cc3300')};
  font-weight: 600;
  margin-bottom:15px;
  margin-left: 15px;
  ${md(`
    font-size: ${rem(10)};
    line-height: ${rem(25)};
  `)}
  ${sm(`
    font-size: ${rem(8)};
    line-height: ${rem(23)};
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

export const Input = styled.input`
  font-size: 14px;
  padding: 10px;
  border-width:2px;
  border-color: #d9d9d9;
  width:400px;
  margin-left: 10px;
  border-style: solid;
  border-radius: 10px;
  ::placeholder {
    font-size: 14px;
    color: grey;
  }
  ${sm(`
  width: ${rem(250)};
 
`)}
`;

export const SubmitButton = styled.input`
  font-size: 14px;
  padding: 10px;
  cursor:pointer;
  margin: 10px;
  border-width:2px;
  width:400px;
  border-color: #1A6AF4;
  color:#1A6AF4;
  border-style: solid;
  border-radius: 20px;
  background:white;
  ${sm(`
  width: ${rem(250)};
 
`)}
`;

export const StyledTextarea = styled.textarea`
font-size: 14px;
padding: 10px;
border-width:2px;
border-color: #d9d9d9;
margin-left: 10px;
resize: none;
width:400px;
height:200px;
border-style: solid;
border-radius: 10px;
::placeholder {
  font-size: 14px;
  color: grey;
}
${sm(`
  width: ${rem(250)};
 
`)}
  `;
  export const Form = styled.form`
`;


export const ThankYouImage = styled.figure`
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: ${rem(0)};
  img {

  }
  ${sm(`
    max-width: ${rem(300)};
    width: 100%;
    margin-left: ${rem(10)};
  `)}
  img {
    max-width: ${rem(233)};
    ${sm(`
      max-width: ${rem(168)};
   
    `)}
  }
`;


export const ThankYouTitle = styled.div`  
  ${font(rem(27), rem(34), '#162647')};
  font-weight: 700;
  margin-bottom: 30px;
  margin-left: ${rem(20)};
  margin-top: 30px;
  ${md(`
    font-size: ${rem(18)};
    line-height: ${rem(25)};
    margin-left: ${rem(20)};
  `)}
  ${sm(`
  margin-left: ${rem(25)};
    font-size: ${rem(16)};
    line-height: ${rem(23)};
  `)}
`;

export const ThankYouMessage = styled.div`  
  ${font(rem(15), rem(24), '#162647')};
  font-weight: 400;
  margin-bottom: 30px;
  align-items:center;
  justify-content:center;
  margin-left: ${rem(100)};
  margin-top: 30px;
  
  ${md(`
    font-size: ${rem(14)};
    line-height: ${rem(25)};
    margin-left: ${rem(40)};
  `)}
  ${sm(`
    font-size: ${rem(12)};
    line-height: ${rem(23)};
    margin-left: ${rem(50)};
  `)}
`;

export const ThankYouMessageWrapper = styled.div`
  
  align-items:center;
 
  justify-content:center;

`;


export const SubmitButtonSmall = styled.button`
  font-size: 14px;
  padding: 10px;
  cursor:pointer;
  margin: 10px;
  border-width:2px;
  margin-left: ${rem(125)};
  width:150px;
  border-color: #1A6AF4;
  color:#1A6AF4;
  border-style: solid;
  border-radius: 20px;
  background:white;
  ${sm(`
  width: ${rem(100)};
  margin-left: ${rem(10)};
`)}
  ${md(`
  width: ${rem(100)};
  margin-left: ${rem(90)};
 `)}
`;