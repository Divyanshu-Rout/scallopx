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
import ServiceFeatureScallopChain from "../../components/ServiceFeatureScallopChain/ServiceFeatureScallopChain";
import ServiceFeatureAccount from "../../components/ServiceFeatureAccount/ServiceFeatureAccount";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import WhySection from "../../components/WhySection/WhySection";
import Layout from "../../Layout";
import ContactUs from "../../components/ContactUs/ContactUs";
import { HomeStyle } from "./Home.styles";

const Home = () => {
  return (
    <Layout mainClass="home-page">
      <HomeStyle>
        <Banner />
        <KeyFeatureSection /> 
        <ServiceFeatureScallopChain />
        <CoinSection />
        <ServiceFeatureAccount />
        <ServiceFeatureSection />
        <ServiceSection />
        <ExpandSection />
        <FeatureLogo />
        {/* <WhySection /> */}
        <RoadMapSection />
        <TeamSection />
        <BackedSection />
        {/* <CompaniesLogo /> */}
      </HomeStyle>
    </Layout>
  );
};

export default Home;
