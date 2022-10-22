import React from "react";
import { RoadMapSectionStyle, Heading, MainHead, Content,SideLines1,SideLines2,MainHeadWrapper } from "./RoadMapSection.styles";
import Fade from 'react-reveal/Fade';
import RoadMapProcess from "../RoadMapProcess/RoadMapProcess";

const RoadMapSection = () => {
  return (
    <RoadMapSectionStyle>
      {/* <div className="container">
        <Heading>
          <Fade bottom>
            <MainHeadWrapper>
            <SideLines1/>
            <MainHead>Roadmap</MainHead>
            <SideLines2/>
            </MainHeadWrapper>
          </Fade>
          <Fade bottom delay={400}>
            <Content>The path to global crypto adoption</Content>
          </Fade>
        </Heading>
        <RoadMapProcess />
      </div> */}
    </RoadMapSectionStyle>
  );
};

export default RoadMapSection;
