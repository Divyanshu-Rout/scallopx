import React,{useState} from "react";
import { images } from "../../config/images";
import { FeatureLogoStyle,ExtraService,ExpandWrapper,LogoSingleTop,
   Heading,MainHead,ExpandFeatured, FeatureLogoWrap, LogoSingle,SingleLogoImg,SideLines1,SideLines2,MainHeadWrapper, } from "./FeatureLogo.styles";
import Fade from 'react-reveal/Fade';

const Logos = [
  images.forbesFeatured,
  images.TelegraphSm,
  images.Bloomberg,
  images.yahoo,
  images.coinmarketSm,
  images.Nasdaq,
  images.gulfNews,
  images.InsiderFeatured,
  images.benzinga,
  images.investing,
]

const ExpandedLogosTop = [
  images.forbesFeatured,
  images.TelegraphSm,
  images.coinmarketSm,
]

const ExpandedLogos = [
  
  images.yahoo,
  images.Bloomberg,
  images.investing,
  images.Nasdaq,
  images.bitcoin,
  images.gulfNews,
  images.coinstate,
  images.newsb,
  images.benzinga,
  images.cointell,
  images.Coinpedia,
  images.Coinspeaker,
  images.InsiderFeatured,
  images.HODL,
  images.Utoday,
  images.Nulltx,
  images.Magazine,
  images.ZyCrypto,
  images.Cryptoslate,
  images.CryptoNewz,
  images.Blockonomi,
  images.CryptoPotato,
  images.Cryptonews,
  images.Blockmanity,
  images.Insidecrypto,
  images.Cryptoiscoming,
  images.Coinidol,
  images.Insider,
  images.Marketwatch,
]

const FeatureLogo = () => {

  const [expandStatus,setExpandStatus]=useState(false)
  return (
    <FeatureLogoStyle>
      <div className="container">
      <ExtraService>
        <Fade bottom>
          <Heading>
        <MainHeadWrapper>
            <SideLines1/>
            <MainHead>Featured in</MainHead>
            <SideLines2/>
            </MainHeadWrapper>
        </Heading>
        </Fade>
        {expandStatus&&<FeatureLogoWrap>
        {ExpandedLogosTop.map((logo, i)=> {
            return (
              <LogoSingleTop key={i}>
                <SingleLogoImg>
                <img src={logo} alt="" />
                </SingleLogoImg>
              </LogoSingleTop>
            )
          })}
          </FeatureLogoWrap>}
        {expandStatus?<FeatureLogoWrap>
          
          {ExpandedLogos.map((logo, i)=> {
            return (
              <LogoSingle key={i}>
                <SingleLogoImg>
                <img src={logo} alt="" />
                </SingleLogoImg>
              </LogoSingle>
            )
          })}

        </FeatureLogoWrap>:
        <FeatureLogoWrap>
          {Logos.map((logo, i)=> {
            return (
              <LogoSingle key={i}>
                <SingleLogoImg>
                <img src={logo} alt="" />
                </SingleLogoImg>
              </LogoSingle>
            )
          })}
        
        </FeatureLogoWrap>
        }
       {
        <ExpandWrapper>
        <ExpandFeatured onClick={()=>setExpandStatus(!expandStatus)}>{expandStatus?`See Less`:`See All`}</ExpandFeatured>
         </ExpandWrapper>
       } 
          {/* <FeatureLogoWrap>
          {Logos.map((logo, i) => {
            return (
              <LogoSingle key={i}>
                <img src={logo} alt="" />
              </LogoSingle>
            )
          })}
        </FeatureLogoWrap> */}
      </ExtraService>
      </div>
    </FeatureLogoStyle>
  );
};

export default FeatureLogo;
