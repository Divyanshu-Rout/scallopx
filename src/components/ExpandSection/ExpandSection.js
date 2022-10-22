import React from "react";
import Globe from "../Globe/Globe";
import { ExpandSectionStyle, Heading, H2, Content, ExpandWrapper } from "./ExpandSection.styles";
import Fade from 'react-reveal/Fade';

const ExpandSection = () => {
  return (
    <ExpandSectionStyle>
      <ExpandWrapper>
        <div className="container">
          <Heading>
            <Fade bottom>
              <H2>Next generation of cross-chain banking platform</H2>
            </Fade>
            <Fade bottom delay={400}>
              <Content>First ever banking chain with KYC-AML chain integrated at the protocol consensus level</Content>
            </Fade>
          </Heading>
        </div>
        <Globe />
      </ExpandWrapper>
    </ExpandSectionStyle>
  );
};

export default ExpandSection;
