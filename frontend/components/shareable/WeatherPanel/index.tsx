import React from "react";
import styled from "styled-components";
import TrendListItem from "./WeatherCard";
import { IColor } from "@Components/data/baseStyles";
import WeatherCard from "./WeatherCard";

const Root = styled.div``;

const SubTitle = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${IColor.textLight};
`;

const WeatherPanel = () => {
  return (
    <Root>
      <div className="feeds-title">
        <h2 className="title blue" style={{ marginBottom: 0 }}>
          Weather
          <i className="mdi mdi-weather-partly-cloudy" />
        </h2>
        <SubTitle>City Name</SubTitle>
      </div>

      <WeatherCard />
    </Root>
  );
};

export default WeatherPanel;
