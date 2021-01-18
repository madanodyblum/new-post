import React from "react";
import styled from "styled-components";
import { IColor } from "@Components/data/baseStyles";

const Root = styled.div`
  display: flex;
  cursor: pointer;
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  overflow: hidden;
  padding: 5px;
  position: relative;
  display: flex;
`;

const Degree = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  border-right: 1px solid #e4e4e4;
  color: ${IColor.textLight};
`;

const DegreeNumber = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin: 0 5px;
  color: ${IColor.textDark};
`;

const DegreeGrade = styled.div`
  font-size: 13px;
  font-weight: 600;
  top: -10px;
  color: ${IColor.textLight};
  position: relative;

  span {
    padding: 3px;

    &.active {
      color: ${IColor.blue};
    }
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  padding: 10px;
`;

const DetailItem = styled.div`
  color: ${IColor.textGray};
  padding: 0 4px;
`;

const Name = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Value = styled.div`
  font-size: 13px;
  font-weight: 600;
`;

const WeatherCard = () => {
  return (
    <Card>
      <Degree>
        <div>
          <i className="mdi mdi-white-balance-sunny" />
        </div>
        <DegreeNumber>69</DegreeNumber>
        <DegreeGrade>
          <span>C</span>|<span className="active">F</span>
        </DegreeGrade>
      </Degree>
      <Details>
        <DetailItem>
          <Name>Humidity</Name>
          <Value>0%</Value>
        </DetailItem>
        <DetailItem>
          <Name>Precipitation</Name>
          <Value>51%</Value>
        </DetailItem>
        <DetailItem>
          <Name>Wind</Name>
          <Value>14 Km/h</Value>
        </DetailItem>
      </Details>
    </Card>
  );
};

export default WeatherCard;
