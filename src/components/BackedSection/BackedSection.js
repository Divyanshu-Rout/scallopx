import React from "react";
import { images } from "../../config/images";
import { BackedSectionStyle, Heading, MainHead, IncubatedLogo, BackedList, SingleBacked, SingleBackedImg, SingleBackedTitle,SupportedBy,
  SideLines1,SideLines2,MainHeadWrapper,PartnersList,SinglePartner,SinglePartnerImg } from "./BackedSection.styles";

const backedList = [
  {
    img: images.KuCoinLabs,
    alt: "Kucoin",
    name: "Kucoin Labs"
  },
  {
    img: images.ExchangeBacked,
    alt: "Bitcoin.com",
    name: "Bitcoin.com Exchange"
  },
  {
    img: images.NetZeroCapital,
    alt: "NetZero Capital",
    name: "NetZero Capital"
  },
  {
    img: images.X21,
    alt: "x21",
    name: "X21 Digital"
  },
  {
    img: images.Blackedge,
    alt: "Blackedge",
    name: "Blackedge Capital"
  },
  {
    img: images.Mahdao,
    alt: "MahaDAO",
    name: "MahaDAO"
  },
  {
    img: images.Magnus,
    alt: "Magnus Capital",
    name: "Magnus Capital"
  },
  // {
  //   img: images.unilend,
  //   alt: "UniLend",
  //   name: "UniLend"
  // },
  {
    img: images.across,
    alt: "Market Across",
    name: "Market Across"
  },{
    img: images.j8venture,
    alt: "J8 Ventures",
    name: "J8 Ventures"
  },
  {
    img: images.AU21,
    alt: "au21",
    name: "AU21 Capital"
  },{
    img: images.blackDragon,
    alt: "Black Dragon",
    name: "Black Dragon"
  },{
    img: images.oracles,
    alt: "Oracles Investment Group",
    name: "Oracles Investment Group"
  },
  {
    img: images.SparkDigital,
    alt: "Spark Digital Capital",
    name: "Spark Digital Capital"
  },{
    img: images.Ethdesign,
    alt: "Ethdesign",
    name: "ETHDesign"
  },
  {
    img: images.StakezCapital,
    alt: "Stakez Capital",
    name: "Stakez Capital"
  }
  ,
  {
    img: images.BanterCapital,
    alt: "Banter Capital",
    name: "Banter Capital"
  },
  {
    img: images.Amesten,
    alt: "Amesten",
    name: "Amesten Capital"
  },
  {
    img: images.BasicsCapital,
    alt: "Basics Capital",
    name: "Basics Capital"
  },
  {
    img: images.OctopusCrypto,
    alt: "Octopus Crypto Capital",
    name: "Octopus Crypto Capital"
  },
  // {
  //   img: images.btcExchange,
  //   alt: "Bitcoin.com Exchange",
  //   name: "Bitcoin.com Exchange"
  // },
  {
    img: images.zbs,
    alt: "ZBS Capital",
    name: "ZBS Capital"
  },
  // {
  //   img: images.nord,
  //   alt: "Nord Finance",
  //   name: "Nord Finance"
  // },
  
  
  
  
  {
    img: images.CTSCapital,
    alt: "CTS Capital",
    name: "CTS Capital"
  }
  

]

const partnerList = [
  // {
  //   img: images.UniLendPartner,
  //   alt: "au21",
  // },
  {
    img: images.ledgerPartner,
    alt: "au21",
  },
  {
    img: images.chainalysisPartner,
    alt: "au21",
  },
  {
    img: images.marketAcrossPartner,
    alt: "au21",
  },
  {
    img: images.token2049Partner,
    alt: "au21",
  },
  


]

const BackedSection = () => {
  return (
    <BackedSectionStyle id="Backed">
      <div className="container">
        <Heading>
        <MainHeadWrapper>
            <SideLines1/>
            <MainHead>Exchanges</MainHead>
            <SideLines2/>
            </MainHeadWrapper>
        </Heading>
        <SupportedBy>
        <IncubatedLogo>
            <img src={images.KucoinSupported} alt="" />
          </IncubatedLogo>
        <IncubatedLogo>
            <img src={images.gateio} alt="" />
          </IncubatedLogo>
          <IncubatedLogo>
            <img src={images.MEXCGlobal} alt="" />
          </IncubatedLogo>
         
          {/* <IncubatedLogo>
            <img src={images.BtcExSupported} alt="" />
          </IncubatedLogo> */}
          
         
          
        </SupportedBy>
         
        <Heading>
        <MainHeadWrapper>
            <SideLines1/>
            <MainHead>Incubated by</MainHead>
            <SideLines2/>
            </MainHeadWrapper>
        </Heading>
      
          <IncubatedLogo>
            <img src={images.Mahdod} alt="" />
          </IncubatedLogo>
          <Heading>
        <MainHeadWrapper>
            <SideLines1/>
            <MainHead>Partners</MainHead>
            <SideLines2/>
            </MainHeadWrapper>
        </Heading>

        <PartnersList>
          {partnerList.map((partner, i) => {
            return (
              <SinglePartner key={i}>
                <SinglePartnerImg>
                <img src={partner.img} alt={partner.alt} />
                </SinglePartnerImg>
              </SinglePartner>
            )
          })}
        </PartnersList>
          <Heading>
        <MainHeadWrapper>
            <SideLines1/>
            <MainHead>Backed by</MainHead>
            <SideLines2/>
            </MainHeadWrapper>
        </Heading>
        
        <BackedList>
          {backedList.map((backlist, i) => {
            return (
              <SingleBacked key={i}>
                <SingleBackedImg>
                  <img src={backlist.img} alt={backlist.alt} />
                </SingleBackedImg>
                <SingleBackedTitle>{backlist.name}</SingleBackedTitle>
              </SingleBacked>
            )
          })}

        </BackedList>
      </div>
    </BackedSectionStyle>
  );
};

export default BackedSection;
