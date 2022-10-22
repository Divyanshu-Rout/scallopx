import React from "react";
import { images } from "../../config/images";
import {
  CoinSectionStyle,
  CoinWrap,
  CoinImage,
  CoinContent,
  Tokenomics,
  SubHeading,
  Heading,
  Content,
  CoinListItem,
  ListSingle,
  CoinTitle
} from "./CoinSection.styles";

const CoinSection = () => {
  return (
    <CoinSectionStyle id="Token">
      <div className="container">
        <CoinWrap>
          <CoinImage>
            <img src={images.SCoin} alt="" />
            <CoinTitle>SCLP</CoinTitle>
          </CoinImage>
          <CoinContent>
            {/* <SubHeading>Introducing</SubHeading> */}
            <Heading>Scallop Coin</Heading>
            <Content>
             <>
             Scallop Coin is a native token of Scallop Chain and it is also available on a Binance smart chain with the world’s first biometrics authentication bridge in the scallop coin description</>
            </Content>
            <CoinListItem>
              <ListSingle>
                For receiving trading bonus payments and much more
              </ListSingle>
              <ListSingle>
                Stake SCLP to open accounts and access services
              </ListSingle>
              <ListSingle>Payment of transaction fees</ListSingle>
              <ListSingle>Transaction fees, exchange fees and monthly management fees</ListSingle>
              <ListSingle>Stake SCLP and become a node validator on Scallop Chain to secure the network</ListSingle>
            </CoinListItem>

            {/* <Tokenomics
              href="https://scallop-docs.s3-eu-west-1.amazonaws.com/Scallop+Token+Distribution.pdf"
              target="_blank"
            >
              Tokenomics
            </Tokenomics> */}
          </CoinContent>
        </CoinWrap>
      </div>
    </CoinSectionStyle>
  );
};

export default CoinSection;
