import React from "react";
import { RoadMapProcesstyle, SingleRoad, Title, Month, RoadMapWrap, RoadMapWrapRow } from "./RoadMapProcess.styles";

const roadData1 = [
  {
    date: "Scallop Concept"
  },
  { title: "Soft Launch in EU",
    date: "2021",
    flag: "active",
  },
  {
    title: "Scallop Chain & Test Net",
    date: "Jan 2022",
    flag: "future",
  },
  // {
  //   title: "Add more Services and Onboard more users to Beta App",
  //   date: "Feb 2022",
  //   flag: "future",
  // },
];

const roadData2 = [
  {
    title: "Secured another jurisdiction",
    date: "Mar 2022",
    flag: "future",
  },
  {
    title: "Test net V3 & Hello World!",
    date: "May 2022",
    flag: "future",
  },
  {
    title: "Public launch in EU & UK for 800M users",
    date: "June 2022",
    flag: "future",
  },
  {
    title: "Test Net V4",
    date: "July 2022",
    flag: "future",
  },
  
]

const roadData3 = [
  {
    title: "Dev Net with inbuilt KYC & AML",
    date: "Sep 2022",
    flag: "future",    
  },
  {
    title: "Main Net Launch",
    date: "Oct 2022",
    flag: "future",
  },
  {
    title: "Scallop Pay",
    date: "Dec 2022",
    flag: "future",
  },
  {
    title: "Expansion & Growth",
    date: "Q1 2023",
    flag: "future",
  },
]

const RoadMapProcess = () => {
  return (
    <RoadMapProcesstyle>
      <div className="container">
        <RoadMapWrap>
          <RoadMapWrapRow>
            {roadData1.map((data, i) => {
              return (
                <SingleRoad 
                className={
                  data.flag === "future" ? "future" : data.flag === "active" ? "active" : ""
                }
                key={i}>
                  <Title>{data.title}</Title>
                  {data.date && <Month>{data.date}</Month>}
                </SingleRoad>
              )
            })}
          </RoadMapWrapRow>
          <RoadMapWrapRow>
            {roadData2.map((data, i) => {
              return (
                <SingleRoad
                  className={
                    data.flag === "future" ? "future" : data.flag === "active" ? "active" : ""
                  }
                  key={i}
                >
                  <Title>{data.title}</Title>
                  { data.date && <Month>{data.date}</Month>}
                </SingleRoad>
              )
            })}
          </RoadMapWrapRow>
          <RoadMapWrapRow>
            {roadData3.map((data, i) => {
              return (
                <SingleRoad
                  className={
                    data.flag === "future" ? "future" : data.flag === "active" ? "active" : ""
                  }
                  key={i}
                >
                  <Title>{data.title}</Title>
                  {data.date && <Month>{data.date}</Month>}
                </SingleRoad>
              )
            })}
          </RoadMapWrapRow>
        </RoadMapWrap>
      </div>
    </RoadMapProcesstyle >
  );
};

export default RoadMapProcess;
