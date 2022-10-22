import React from "react";
import { images } from "../../config/images";
import {
  KeyFeatureSectionStyle,
  Heading,
  MainHead,
  Content,
  FeatureList,
  SingleFeature,
  FeatureHead,
  FeatureImg,
  FeatureTitle,
  FeatureContent,
  MainHeadWrapper,
  SideLines1,
  SideLines2
} from "./KeyFeatureSection.styles";
import Fade from "react-reveal/Fade";

const Features = [
  {
    img: images.Store,
    alt: "store",
    title: "One Account",
    content: "Store your crypto and fiat in one place, to spend them just as easily",
  },
  {
    img: images.Access,
    alt: "access",
    title: "Ultra-Fast",
    content: "Spend any digital coin/token in real-time without top-ups or conversion",
  },
  {
    img: images.Shield,
    alt: "shield",
    title: "Insured Account",
    content:
      "Scallop has you covered, your account is secured and insured",
  },
];

const KeyFeatureSection = () => {
  return (
    <KeyFeatureSectionStyle>
      <div className="container">
        <Heading>
          <Fade bottom>
          <MainHeadWrapper>
            <SideLines1/>
            <MainHead>Key Banking App Features</MainHead>
            <SideLines2/>
            </MainHeadWrapper>
          </Fade>
          <Fade bottom delay={400}>
            <Content>Future of Banking is here</Content>
          </Fade>
        </Heading>
        <FeatureList>
          {Features.map((feature, i) => {
            return (
              <SingleFeature key={i}>
                <FeatureHead>
                  <FeatureImg>
                    <img src={feature.img} alt={feature.alt} />
                  </FeatureImg>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                </FeatureHead>
                <FeatureContent>{feature.content}</FeatureContent>
              </SingleFeature>
            );
          })}
        </FeatureList>
      </div>
    </KeyFeatureSectionStyle>
  );
};

export default KeyFeatureSection;
