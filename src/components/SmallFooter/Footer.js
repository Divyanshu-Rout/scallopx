import React from "react";
import { images } from "../../config/images";
import {
  FooterStyle,
  CTABlock,
  CtaText,
  CtaForm,
  InputField,
  FooterMain,
  CopyrightBlock,
  CopyrightText, CopyrightText2,
  FooterLinks,
  FooterLinkItem,
  FooterInfo,
  Logo,
  NormalTxt,
  DownalodBtn,
  SocialList,
  SocialIcon,
  SocialLink,
  FooterRightblock,
  Title,
  LinkList,
  LinkListSingle,
  ListSingleLink,
} from "./Footer.styles";
import Mailchimp from "react-mailchimp-form";
import CompaniesLogo from "../../components/CompaniesLogo/CompaniesLogo";
const SocialIcons = [
  {
    img: images.Flinked,
    link: "https://www.linkedin.com/company/scallopx",
  },
  {
    img: images.Pin,
    link: "https://t.me/Scallop_Official",
  },
  {
    img: images.Iconm,
    link: "https://medium.com/scallopx",
  },
  {
    img: images.Twitter,
    link: "https://twitter.com/ScallopDefiBank",
  },
  {
    img: images.Insta,
    link: "https://www.instagram.com/scallop_app/",
  },
];

const footerMainLink = [
  {
    title: "Products",
    Submenu: [
      {
        name: "Earn",
        link: "https://scallopx.com/#Earn",
        target: "blank",
      },
      {
        name: "NFT",
        link: "https://scallopx.com/#Nft",
        target: "blank",
      },
      {
        name: "Token",
        link: "https://scallopx.com/#Token",
        target: "blank",
      },
      {
        link: "https://scallopchain.com/",
        name: "Scallop Chain",
        target: "blank",
      },
      {
        link: "https://app.scallopchain.com/",
        name: "Scallop Stake",
        target: "blank",
      },
      {
        link: "https://scallopchain.com/",
        name: "Scallop Swap",
        target: "blank",
      },
      {
        link: "/app-landing",
        name: "Scallop App",
        target: "blank",
      }
    ],
  },
  {
    title: "Banking",
    Submenu: [
      {
        name: "Accounts",
        link: "https://scallopx.com/#Account",
        target: "blank",
      },
      {
        name: "Cards",
        link: "https://scallopx.com/#Card",
        target: "blank",
      },
      {
        name: "Exchange",
        link: "https://scallopx.com/#Exchange",
        target: "blank",
      },
      {
        name: "Hardware Wallet",
        link: "https://scallopx.com/#Hardware",
        target: "blank",
      },
      {
        name: "Payments",
        link: "https://scallopx.com/#Payment",
        target: "blank",
      },
    ],
  },
  {
    title: "About",
    Submenu: [
      {
        name: "Team",
        link: "https://scallopx.com/#Team",
        target: "blank",
      },
      {
        name: "Backed by",
        link: "https://scallopx.com/#Backed",
        target: "blank",
      },
      {
        link: "/contact-us",
        name: "Contact Us",
        target: "blank",
      },
    ],
  },
];

const Footer = () => {
  const getElementOffset = (el) => {
    let rect = el.getBoundingClientRect();
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  };

  const scrollClick = (e, id) => {
    e.preventDefault();

    // let header = document.querySelector('header')
    let element = document.getElementById(id);
    console.log(element, "element");
    window.scrollTo({
      behavior: "smooth",
      top: getElementOffset(element).top,
    });
  };

  return (
    <FooterStyle id="cta">
      <div className="container">
        {/* <CTABlock>
          <CtaText>Stay up to date with Scallop</CtaText>
          <CtaForm>
            <InputField>
              <Mailchimp
                action="https://scallopx.us1.list-manage.com/subscribe/post?u=e5c550f286d009c4492fce9cf&amp;id=d20bd2daaf"
                fields={[
                  {
                    name: "EMAIL",
                    placeholder: "Email",
                    type: "email",
                    required: true,
                    className: "customInput",
                  },
                ]}
                messages={{
                  sending: "Applying...",
                  success: "Thank you for applying!",
                  error: "An unexpected internal error has occurred.",
                  empty: "You must write an e-mail.",
                  duplicate:
                    "Too many subscribe attempts for this email address",
                  button: "Get early Access",
                }}
              />
            </InputField>
          </CtaForm>
        </CTABlock> */}
        <FooterMain>
          <FooterInfo>
            <Logo>
              <img src={images.logo} alt="" />
            </Logo>
            <NormalTxt>Banking as a service, the way it should be.</NormalTxt>
            <DownalodBtn
              href="https://scallop-bucket.s3.eu-west-1.amazonaws.com/upload_file/SCALLOP1/Scallop+Whitepaper.pdf"
              // href="/policy/Scallop_Litepaper.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download Light paper
            </DownalodBtn>
            <SocialList>
              {SocialIcons.map((sociallink, i) => {
                return (
                  <SocialIcon key={i}>
                    <SocialLink
                      target="_blank"
                      rel="noreferrer"
                      href={sociallink.link}
                    >
                      <img src={sociallink.img} alt="" />
                    </SocialLink>
                  </SocialIcon>
                );
              })}
            </SocialList>
          </FooterInfo>
          {footerMainLink.map((footerLink, i) => {
            return (
              <FooterRightblock key={i}>
                <Title>{footerLink.title}</Title>
                <LinkList>
                  {footerLink.Submenu.map((sublink) => {
                    return (
                      <LinkListSingle key={sublink.name}>
                        {
                          sublink.target ? (
                            <ListSingleLink
                              target="_blank"
                              rel="noreferrer"
                              href={sublink.link}
                            >
                              {sublink.name}
                            </ListSingleLink>
                          ) :
                            <ListSingleLink
                              onClick={(e) => scrollClick(e, sublink.link)}
                              href={sublink.link}
                            >
                              {sublink.name}
                            </ListSingleLink>
                        }

                      </LinkListSingle>
                    );
                  })}
                  {/* {i === 2 && (
                    <LinkListSingle>
                      <ListSingleLink
                        target="_blank"
                        rel="noreferrer"
                        href="https://mahadao.com/"
                      >
                        MahaDAO
                      </ListSingleLink>
                    </LinkListSingle>
                  )} */}
                </LinkList>
              </FooterRightblock>
            );
          })}
        </FooterMain>
        <CopyrightBlock>
          <div style={{ flexDirection: 'row' }}>
            <div style={{ paddingBottom: 10 }}>
              <CopyrightText2>
                This website is owned by Scallop Group EU OU  based in Estonia.
              </CopyrightText2>
            </div>
            <div style={{ paddingBottom: 10 }}>
              <CopyrightText2>
                Licensed to provide crypto activities in EU with Licence number : FVT000512
              </CopyrightText2>
            </div>
            <div style={{ paddingBottom: 10 }}>
              <CopyrightText2>
                Scallop Fintech Inc is license to provide Fiat and Crypto activities in Canada
              </CopyrightText2>
              <CopyrightText2>
                with MSB registration number: M21059242
              </CopyrightText2>


            </div>
            <div style={{ paddingBottom: 25 }}>
              <CopyrightText2>
                Please visit our terms and conditions for more details.
              </CopyrightText2>
            </div>
            <CopyrightText>
              © 2021 Scallop Group. All Rights Reserved
            </CopyrightText>
          </div>
          <div style={{ flexDirection: 'row' }}>
            <CompaniesLogo />
            <FooterLinks>
              <FooterLinkItem>
                <a
                  href="/policy/privacy_policy.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
              </FooterLinkItem>
              <FooterLinkItem>
                <a
                  href="https://scallop-docs.s3.eu-west-1.amazonaws.com/Scallop_TnC.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms & Conditions
                </a>
              </FooterLinkItem>
              <FooterLinkItem>
                <a
                  href="/policy/GDPR_policy.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  GDPR Policy
                </a>
              </FooterLinkItem>
            </FooterLinks>
          </div>
        </CopyrightBlock>
      </div>
    </FooterStyle>
  );
};

export default Footer;
