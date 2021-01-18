import React from "react";
import styled from "styled-components";
import { IColor } from "@Components/data/baseStyles";
const Root = styled.div`
  display: flex;
  cursor: pointer;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 5px;
  vertical-align: middle;

  margin-right: 10px;
`;

const Content = styled.div`
  overflow: hidden;
`;

const Title = styled.h4`
  font-size: 14px;
  margin-bottom: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${IColor.textGray};

  &:hover {
    color: ${IColor.blue}
  }
`;

const SubTitle = styled.span`
  color: ${IColor.textLight};
  font-size: 12px;
  font-weight: 500;
`;

type Props = {
  imgUrl: string;
  title: string;
  commentsCount: string | number;
};
const TrendListItem: React.FC<Props> = (props: Props) => {
  const { imgUrl, title, commentsCount } = props;
  return (
    <Root>
      <Img src={imgUrl} alt="" />
      <Content>
        <Title>{title}</Title>
        <SubTitle>{commentsCount} Comments</SubTitle>
      </Content>
    </Root>
  );
};

export default TrendListItem;
