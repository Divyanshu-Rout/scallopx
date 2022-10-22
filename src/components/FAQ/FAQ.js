import React, { useState } from "react";
import { images } from "../../config/images";
import {
  FAQStyle,
  Heading,
  MainHeadWrapper,
  SideLines1,
  MainHead,
  SideLines2
} from "./ContactUs.styles";
import Fade from "react-reveal/Fade";
import styled from "styled-components";



const FAQ = () => {

  return (
    <FAQStyle id="Team">
      <div className="container">
      <Heading>
          <Fade bottom>
            <MainHeadWrapper>
            <SideLines1/>
            <MainHead>Contact Us</MainHead>
            <SideLines2/>
            </MainHeadWrapper>
          </Fade>
        </Heading>
     </div>
    </FAQStyle>
  );
};

export default ContactUs;
