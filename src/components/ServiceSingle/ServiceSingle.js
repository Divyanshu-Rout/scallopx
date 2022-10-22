import React from "react";
import { ServiceSingleStyle, ServiceSingleWrap, ServiceImage, ServiceContent, SubHeading, Heading, ListWrap, ListItem, ListIcon, ExtraService, CountryFlag } from "./ServiceSingle.styles";
import Fade from 'react-reveal/Fade';
import TiltPhaseSix from "../TiltPhaseSix/TiltPhaseSix";

const ServiceSingle = (props) => {

  return (
    <ServiceSingleStyle className={props.className} id={props.id}>
      <div className="container">
        <ServiceSingleWrap>
          <ServiceImage>
            <TiltPhaseSix>
              <Fade bottom delay={100}>
                <img src={props.serviceImg} alt={props.serviceAlt} />
              </Fade>
            </TiltPhaseSix>
          </ServiceImage>
          <ServiceContent>
            <Fade bottom>
              <SubHeading>{props.SubHeading}</SubHeading>
            </Fade>
            <Fade bottom delay={200}>
              <Heading>{props.Heading}</Heading>
            </Fade>
            <Fade bottom delay={300}>
              {props.List && <ListWrap>
                {props.List.map((list, i) => {
                  return (
                    <ListItem key={i}>
                      <ListIcon><img src={list.icon} alt="icon" /></ListIcon>
                      <span>{list.content}</span>
                    </ListItem>
                  )
                })}
              </ListWrap>
              }
            </Fade>
            <Fade bottom delay={800}>
              {props.extraTxt &&
                <ExtraService>
                  {props.extraTxt}
                  <CountryFlag>
                    {props.flagList.map((flag, i) => {
                      {props.linkList.map((links, i) => {
                        return (
                          <a href={links} target="_blank" >
                            <img src={flag} alt="" key={i} />
                          </a>
                        )
                      })}
                    })}
                  </CountryFlag>
                </ExtraService>
              }
            </Fade>
          </ServiceContent>
        </ServiceSingleWrap>
      </div>
    </ServiceSingleStyle>
  );
};

export default ServiceSingle;
