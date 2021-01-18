import React from "react";
import styled from "styled-components";
import TrendListItem from "./TrendListItem";
import { IColor } from "@Components/data/baseStyles";

const trends = [
  {
    imgUrl: "images/70x70.png",
    title: "work quietly variety jar every",
    commentsCount: 63,
  },
  {
    imgUrl: "images/70x70.png",
    title: "torn sitting news fifteen honor between",
    commentsCount: 94,
  },
  {
    imgUrl: "images/70x70.png",
    title: "missing distant look later threw frozen use",
    commentsCount: 63,
  },
  {
    imgUrl: "images/70x70.png",
    title: "well person joy fine gentle force glad...",
    commentsCount: 98,
  },
  {
    imgUrl: "images/70x70.png",
    title: "cook interest joined airplane",
    commentsCount: 36,
  },
  {
    imgUrl: "images/70x70.png",
    title: "asleep term who",
    commentsCount: 98,
  },
];

const Root = styled.div``;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 0;
  position: relative;
`;

const TrendList = styled.div`
  padding: 15px;
`;

const TrendListItemContainer = styled.div`
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

const SubTitle = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${IColor.textLight};
`;

const TrendPanel = () => {
  return (
    <Root>
      <div className="feeds-title">
        <h2 className="title orange" style={{ marginBottom: 0 }}>
          Trend
          <i className="mdi mdi-trending-up" />
        </h2>
        <SubTitle>in the world</SubTitle>
      </div>

      <Card>
        <TrendList>
          {trends.map((trend, index) => {
            return (
              <TrendListItemContainer key={index}>
                <TrendListItem
                  imgUrl={trend.imgUrl}
                  title={trend.title}
                  commentsCount={trend.commentsCount}
                />
              </TrendListItemContainer>
            );
          })}
        </TrendList>
      </Card>
    </Root>
  );
};

export default TrendPanel;
