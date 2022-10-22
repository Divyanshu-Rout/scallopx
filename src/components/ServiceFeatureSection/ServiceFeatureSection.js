import React from "react";
import { images } from "../../config/images";
import ServiceSingle from "../ServiceSingle/ServiceSingle";
import { ServiceFeatureSectionStyle } from "./ServiceFeatureSection.styles";

const ServiceData = [
  {
    id: "Card",
    className: "green",
    serviceImg: images.Card,
    serviceAlt: "The only  card you’ll ever need",
    SubHeading: "Scallop Cards",
    Heading: "The only  card you’ll ever need",
    List: [
      {
        icon: images.IconCard,
        content: <>Your crypto wallet address is now your bank account number.</>,
      },
      {
        icon: images.IconCard,
        content: <>Pay with fiat or crypto, anywhere, online or in store.</>,
      },
      {
        icon: images.IconCard,
        content: (
          <>
            Goodbye plastic, hello metal! <strong>Titanium metal cards</strong>{" "}
            for Elite members.
          </>
        ),
      },
    ],
  },
  {
    id: "Payment",
    className: "green odd",
    serviceImg: images.SendRecieve,
    serviceAlt: "Defi",
    SubHeading: "Scallop Pay",
    Heading: "Send & receive fiat & crypto in a click",
    List: [
      {
        icon: images.IconSend,
        content: (
          <>
            Send & receive money in{" "}
            <strong>all major currencies and tokens.</strong>
          </>
        ),
      },
      {
        icon: images.IconSend,
        content: (
          <>
            Make your <strong>payments</strong> to any service with{" "}
            <strong>any token or currency</strong> in your wallet.
          </>
        ),
      },
      {
        icon: images.IconSend,
        content: (
          <>
            Global money transfer and remittance, send and receive crypto & fiat to your loved ones around the world
          </>
        ),
      },
    ],
  },
  // {
  //   id: "Hardware",
  //   className: "rightObject",
  //   serviceImg: images.CryptoKeys,
  //   serviceAlt: "Defi",
  //   SubHeading: "Scallop Hardware Wallet",
  //   Heading: "Full control of your crypto and your keys",
  //   List: [
  //     {
  //       icon: images.IconCKey,
  //       content: <>Store and trade your crypto using Scallop cold wallets.</>,
  //     },
  //     {
  //       icon: images.IconCKey,
  //       content: (
  //         <>
  //           Equipped with Infineon Chip <strong>CC EAL 6+ Secure</strong>{" "}
  //           Element, the highest grade for the financial industry to protect
  //           your private keys.
  //         </>
  //       ),
  //     },
  //   ],
  // },
 

];

const ServiceFeatureSection = () => {
  return (
    <ServiceFeatureSectionStyle>
      {ServiceData.map((servicedata, i) => {
        return <ServiceSingle key={i} {...servicedata} />;
      })}
    </ServiceFeatureSectionStyle>
  );
};

export default ServiceFeatureSection;
