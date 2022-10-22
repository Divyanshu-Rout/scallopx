import React from "react";
import { images } from "../../config/images";
import ServiceSingle from "../ServiceSingle/ServiceSingle";
import { ServiceSectionStyle } from "./ServiceSection.styles";

const ServiceData = [
  {
    id: "Earn",
    className: "rightObject",
    serviceImg: images.Defirewars,
    serviceAlt: "Defi",
    SubHeading: "Scallop Earn",
    Heading: "Earn interest on Fiat deposits",
    List: [
      {
        icon: images.sale,
        content: <>Also put your crypto to work & earn high yields on DeFi protocols{' '}
          </>
      }
    ]
  },
  // {
  //   id: "Nft",
  //   className: "green odd",
  //   serviceImg: images.bankNft,
  //   serviceAlt: "Defi",
  //   SubHeading: "Scallop NFT",
  //   Heading: "No need for crypto to buy NFTs",
  //   List: [
  //     {
  //       icon: images.chartPie,
  //       content: <>An NFT marketplace for you to trade NFTs with Fiat easily and securely</>
  //     }
  //   ]
  // },
  {
    id: "Exchange",
    className: "green leftObject",
    serviceImg: images.FiatCurrency,
    serviceAlt: "Defi",
    SubHeading: "Scallop Exchange",
    Heading: "Instant transactions and conversions",
    List: [
      {
        icon: images.Exchange,
        content: <><strong>Exchange</strong> crypto and defi <strong>tokens to fiat</strong> and vice versa through a direct link to Uniswap for seamless trading.</>
      }
    ]
  },
  {
    className: "odd",
    serviceImg: images.Secured,
    serviceAlt: "Defi",
    SubHeading: "Scallop Guarantee",
    Heading: "Licensed, Regulated & Insured",
    List: [
      {
        icon: images.IconSecure,
        content: (
          <>
            Authorised by the Estonian regulator and Scallop EU OU is lawfully
             entitled to provide virtual currency exchange and wallet services in the EU.
          </>
        ),
      },
      {
        icon: images.IconSecure,
        content: (
          <>
           Successfully secured UK EMD license, MSB License and VARA license.
          </>
        ),
      },
      {
        icon: images.IconSecure,
        content: (
          <>
            Scallop cold/hot storages are insured by our partners against loss
            by up to <strong>$100 million.</strong>
          </>
        ),
      },
      {
        icon: images.IconSecure,
        content: (
          // <>
          //   Fiat funds are stored under <strong>FCA</strong> regulation with all
          //   money safeguarded by licensed banks.
          // </>
 <>
 Fiat funds are stored as per regulation with all
 money safeguarded by licensed banks.
</>
        ),
      },
    ],
  },
]

const ServiceSection = () => {
  return (
    <ServiceSectionStyle>
      {ServiceData.map((servicedata, i) => {
        return (
          <ServiceSingle key={i} {...servicedata} />
        )
      })}
    </ServiceSectionStyle>
  );
};

export default ServiceSection;
