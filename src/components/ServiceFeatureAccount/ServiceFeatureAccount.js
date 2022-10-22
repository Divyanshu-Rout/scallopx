import React from "react";
import { images } from "../../config/images";
import ServiceSingle from "../ServiceSingle/ServiceSingle";
import { ServiceFeatureSectionStyle } from "./ServiceFeatureSection.styles";

const ServiceData = [
  {
    id: "Account",
    className: "odd",
    serviceImg: images.globalBanking,
    serviceAlt: "Defi",
    SubHeading: " Scallop Accounts",
    Heading: "Your Global Fiat accounts",
    List: [
      {
        icon: images.IconGBanking,
        content: (
          <>
            Open <strong>GBP</strong> and <strong>IBAN accounts</strong> for
            daily use, for both personal and business users.
          </>
        ),
      },
      // {
      //   icon: images.IconGBanking,
      //   content: (
      //     <>
      //       Over 15 multi currency fiat wallets which can accumulate interest
      //       through Scallop Earn.
      //     </>
      //   ),
      // },
    ],
    // extraTxt: "Coming soon to 747M users in :",
    extraTxt: <>&nbsp;</>,
    flagList: [images.ios,images.android],
    linkList: ['https://www.google.com/','https://scallopx.com/'],
  },
  

];

const ServiceFeatureAccount = () => {
  return (
    <ServiceFeatureSectionStyle>
      {ServiceData.map((servicedata, i) => {
        return <ServiceSingle key={i} {...servicedata} />;
      })}
    </ServiceFeatureSectionStyle>
  );
};

export default ServiceFeatureAccount;
