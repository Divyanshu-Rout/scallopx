import React, { useState } from "react";
import { images } from "../../config/images";
import {
  TeamSectionStyle,
  Heading,
  MainHead,
  Content,
  TeamTabs,
  TabsLeft,
  TabsRight,
  TabsSingle,
  TabRightWrap,
  SingleTeam,
  MemberImg,
  MemberName,
  MemberDesignation,
  SocialMedia,
  SideLines1,SideLines2,MainHeadWrapper
} from "./TeamSection.styles";
import Fade from "react-reveal/Fade";

const coreTeam = [
  {
    img: images.Raj,
    alt: "raj",
    name: "Raj Bagadi",
    designation: "Founder & CEO",
    link: "https://www.linkedin.com/in/bnkumar1/",
  },
  {
    img: images.Minay,
    alt: "Minay",
    name: "Mindy Bejawn",
    designation: "Co-Founder & COO",
    link: "https://www.linkedin.com/in/mindybejawn/",
  },
  {
    img: images.Soren,
    alt: "Soren Stammers",
    name: "Soren Stammers",
    designation: "CTO",
    link: "https://www.linkedin.com/in/ministryofsoftware",
  },
  {
    img: images.Erion,
    alt: "erion",
    name: "Erion Andoni",
    designation: "MLRO",
    link: "https://www.linkedin.com/in/erion-andoni-ica-llm-llb-gdpr-ab4a3b211/",
  },
  {
    img: images.Amrit,
    alt: "Amrit",
    name: "Amrit Mirchandani",
    designation: "Head of PR",
    link: "https://www.linkedin.com/in/amrit-mirchandani/",
  },
  {
    img: images.Shivangini,
    alt: "Shivangini",
    name: "Shivangini Agarwal",
    designation: "Brand Manager",
    link: "https://www.linkedin.com/in/shivangini-agarwal/",
  },
  // {
  //   img: images.Gajapathi,
  //   alt: "Gajapathi",
  //   name: "Gajapathi Raju",
  //   designation: "HR Manager",
  //   link: "https://in.linkedin.com/in/gajapathi-rama-raju-cheedi-a9168484",
  // },
  {
    img: images.dhaval,
    alt: "dhaval",
    name: "Dhaval Kalsariya",
    designation: "Head of Design",
    link: "https://in.linkedin.com/in/geekslab",
  },
  // {
  //   img: images.karampal,
  //   alt: "karampal",
  //   name: "Karampal Singh",
  //   designation: "Head of Marketing",
  //   link: "https://www.linkedin.com/in/karampal-singh-13266a144/",
  // },
  // {
  //   img: images.urmas,
  //   alt: "Urmas Rooba",
  //   name: "Urmas Rooba",
  //   designation: "LD/AML - Europe",
  // },
];

const AdvisorTeam = [
  {
    img: images.Gilbert,
    alt: "Gupta",
    name: "Gilbert Vanroon",
    designation: "Regulatory",
  },
  {
    img: images.Kayna,
    alt: "kayna",
    name: "Kayne Osbourne",
    designation: "Compliance",
  },
  {
    img: images.Mya,
    alt: "Nicodemus",
    name: "Nicodemus Nyamipachitu",
    designation: "Fintech",
  },
  {
    img: images.Pranay,
    alt: "Pranay",
    name: "Pranay Sanghavi",
    designation: "Business",
  },
  {
    img: images.Steven,
    alt: "Steben",
    name: "Steven Enamakel",
    designation: "Technology",
  },
  {
    img: images.Dalpat,
    alt: "Dalpat",
    name: "Dalpat Prajapati",
    designation: "Design",
  },
  {
    img: images.Lim,
    alt: "Lim",
    name: "Lester Lim",
    designation: "Crypto",
  },
  {
    img: images.Matt,
    alt: "Matt",
    name: "Matt",
    designation: "General Crypto",
  },
  {
    img: images.Wolf,
    alt: "Wolf",
    name: "Winston Wolf",
    designation: "DeFi",
  },
  {
    img: images.CryptoDaku,
    alt: "CryptoDaku",
    name: "Crypto Daku",
    designation: "",
  },
  {
    img: images.Gaffoor,
    alt: "Gafoor Khan",
    name: "Gafoor Khan",
    designation: "Marketing Advisor",
  }
  
];

const TeamSection = () => {
  const [core, setCore] = useState(true);
  const [advisor, setAdvisor] = useState(false);

  const handleClick = () => {
    setCore(true);
    setAdvisor(false);
  };

  const handleAClick = () => {
    setAdvisor(true);
    setCore(false);
  };

  return (
    <TeamSectionStyle id="Team">
      <div className="container">
        <Heading>
          <Fade bottom>
            <MainHeadWrapper>
            <SideLines1/>
            <MainHead>Team</MainHead>
            <SideLines2/>
            </MainHeadWrapper>
          </Fade>
          <Fade bottom delay={400}>
            <Content>
              Domain experts from technology, finance and compliance coming
              together to pioneer crypto-first banking.
            </Content>
          </Fade>
        </Heading>
        <TeamTabs>
          <TabsLeft>
            <TabsSingle className={core ? "active" : ""} onClick={handleClick}>
              Core Team
            </TabsSingle>
            <TabsSingle
              className={advisor ? "active" : ""}
              onClick={handleAClick}
            >
              Advisory Team
            </TabsSingle>
          </TabsLeft>
          <TabsRight>
            <TabRightWrap>
              {core &&
                coreTeam.map((team, i) => {
                  return (
                    <SingleTeam key={i}>
                      <MemberImg>
                        <img src={team.img} alt={team.alt} />
                        {team.link && <SocialMedia target="_blank" href={team.link} />}
                      </MemberImg>
                      <MemberName>{team.name}</MemberName>
                      <MemberDesignation>{team.designation}</MemberDesignation>
                    </SingleTeam>
                  );
                })}
              {advisor &&
                AdvisorTeam.map((team, j) => {
                  return (
                    <SingleTeam key={j} className="advisor">
                      <MemberImg>
                        <img src={team.img} alt={team.alt} />
                        {team.link && (
                          <SocialMedia target="_blank" href={team.link} />
                        )}
                      </MemberImg>
                      <MemberName>{team.name}</MemberName>
                      <MemberDesignation>{team.designation}</MemberDesignation>
                    </SingleTeam>
                  );
                })}
            </TabRightWrap>
          </TabsRight>
        </TeamTabs>
      </div>
    </TeamSectionStyle>
  );
};

export default TeamSection;
