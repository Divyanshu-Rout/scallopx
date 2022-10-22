import React from "react";
import { images } from "../../config/images";
import ServiceSingle from "../ServiceSingle/ServiceSingle";
import { ServiceFeatureSectionStyle } from "./ServiceFeatureSection.styles";

const ServiceData = [
 
  {
    id: "Chain",
    className: "leftObject",
    serviceImg: images.CrossChain,
    serviceAlt: "cross",
    SubHeading: "Scallop Chain",
    Heading: "Regulated, Low-Fee Banking Blockchain",
    List: [
      {
        icon: images.IconChain,
        content: (
          <>
            Scallop Chain is a blazingly fast Byzantine fault tolerance blockchain with a core KYC & AML module included in the consensus mechanism at the protocol level.
          </>
        ),
      },
      {
        icon: images.IconChain,
        content: (
          <>
            {/* Scallop plans to{" "}
            <strong>
              connect traditional banks with cross blockchain applications.
            </strong>
            Institutional partners work directly with Scallop, allowing them to
            create secure custody services, interest bearing savings accounts,
            debit cards and a fiat on-ramp to crypto. */}
            It is the world’s first licensed secured infrastructure providing a suite of banking products to empower millions of retail & business customers.
Scallop Chain uses zk rollups and offers selective asset privacy features on the chain.

          </>
        ),
      },
    ],
  },
];

const ServiceFeatureScallopChain = () => {
  return (
    <ServiceFeatureSectionStyle>
      {ServiceData.map((servicedata, i) => {
        return <ServiceSingle key={i} {...servicedata} />;
      })}
    </ServiceFeatureSectionStyle>
  );
};

export default ServiceFeatureScallopChain;
