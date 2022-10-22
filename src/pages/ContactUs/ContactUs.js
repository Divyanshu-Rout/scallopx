import React from "react";
import BackedSection from "../../components/BackedSection/BackedSection";
import Banner from "../../components/Banner/Banner";
import CoinSection from "../../components/CoinSection/CoinSection";
import CompaniesLogo from "../../components/CompaniesLogo/CompaniesLogo";
import ExpandSection from "../../components/ExpandSection/ExpandSection";
import FeatureLogo from "../../components/FeatureLogo/FeatureLogo";
import KeyFeatureSection from "../../components/KeyFeatureSection/KeyFeatureSection";
import RoadMapSection from "../../components/RoadMapSection/RoadMapSection";
import ServiceFeatureSection from "../../components/ServiceFeatureSection/ServiceFeatureSection";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import WhySection from "../../components/WhySection/WhySection";
import SmallLayout from "../../SmallLayout";
import ContactUs from "../../components/ContactUs/ContactUs";
import { ContactUsStyle } from "./ContactUs.styles";

const ContactUsComp = () => {
    return (
    <SmallLayout mainClass="home-page">

        <ContactUsStyle >

          <ContactUs />

          {/* <CompaniesLogo /> */}

        </ContactUsStyle >

    </SmallLayout >

    );
  };
  
  export default ContactUsComp;