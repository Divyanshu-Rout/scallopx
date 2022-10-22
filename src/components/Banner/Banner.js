import React from "react";
import { images } from "../../config/images";
import { BannerStyle, BannerHeading, SubHeading, SmallHeading, Heading, Para, BannerImg, ExtraService, CountryFlag, Title, Figure } from "./Banner.styles";
import Fade from 'react-reveal/Fade';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const flagList = [images.flag2, images.flag1];

const Banner = () => {
  return (
    <BannerStyle>
      <div className="container">
        <BannerHeading>
          {/* <Fade bottom>
            <SubHeading>Introducing</SubHeading>
          </Fade> */}
          <Fade bottom delay={200}>
            {/* <Heading>
              World’s First
            <span>DeFi Powered Fiat Accounts</span>
            </Heading> */}
            <SmallHeading>
            Bank. <span>On Chain.</span>
              {/* <span>DeFi Powered Accounts</span> */}
            </SmallHeading>
          </Fade>
          {/* <Fade bottom delay={400}>
            <Para>One account to control all your financial assets - Crypto & Fiat.</Para>
          </Fade> */}
        </BannerHeading>
      </div>
      <BannerImg>
        <Figure>
          <video autoPlay loop muted className="bannerm">
            <source src={"https://scallop-bucket.s3.eu-west-1.amazonaws.com/upload_file/hero+animation0001-0460.mp4"} type="video/mp4" />
          </video>
          {/* <img src={images.banner} alt="" /> */}
          {/* <img src={images.bannerHover} className="hover-img" alt="" /> */}
          {/* <img src={images.bannerm} alt="" className="bannerm" /> */}
        </Figure>
        <ExtraService>
          {/* <Title>Coming soon to 747M users in :</Title> */}
          
            
          <a href="https://apps.apple.com/us/app/scallop/id1599717690" target="_blank" rel="noreferrer">
            <img src={images.ios} alt=""  className="imgw62" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.scallopxledger&hl=en&gl=US" target="_blank" rel="noreferrer">
            <img src={images.android} alt="" className="imgw62" />
          </a>
          
          
        </ExtraService>
      </BannerImg>
    </BannerStyle>
  );
};

export default Banner;
