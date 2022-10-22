import React from "react";
import { images } from "../../config/images";
import { WhySectionStyle, SubHeading, Heading, 
  Content, WhyImage,MainHeadWrapper,SideLines1,SideLines2 } from "./WhySection.styles";
import Fade from 'react-reveal/Fade';

const WhySection = () => {
  return (
    <WhySectionStyle>
      <div className="container">
        <Fade bottom>
        <MainHeadWrapper>
            <SideLines1/>
            <SubHeading>Why Scallop?</SubHeading>
            <SideLines2/>
            </MainHeadWrapper>
        </Fade>
        <Fade bottom delay={200}>
          <Heading>The simplest way to manage digital money.</Heading>
        </Fade>
        <Fade bottom delay={300}>
          <Content>
            Enhance and simplify your crypto journey. Everyday crypto banking. Flexible and accessible.
        </Content>
        </Fade>
        <WhyImage>
          <div className="img-wrap">
            <div className="ripple"></div>
            <img src={images.WholeShell} alt="why" />
            <img src={images.WholeShellm} alt="" className="wholem" />
          </div>
        </WhyImage>
      </div>
    </WhySectionStyle>
  );
};

export default WhySection;
