import React from "react";
import styled from "styled-components";
import { IColor } from "@Components/data/baseStyles";
import { Follow, UnFollow } from "@Components/shareable/common";

const Root = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex-grow: 1;
`;

const TagName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #474747;

  cursor: pointer;
  
  span {
    font-size: 12px;
    margin-left: 5px;
    color: ${IColor.textLight};
  }

  &:hover {
      color: ${IColor.blue}
  }
`;

const Right = styled.div``;

type Props = {
  tagName: string;
  count: string | number;
  isFollowed: boolean;
};
const TagListItem: React.FC<Props> = (props: Props) => {
  const { tagName, count, isFollowed } = props;
  return (
    <Root>
      <Left>
        <TagName>
          #{tagName}
          <span>({count})</span>
        </TagName>
      </Left>
      <Right>
        {isFollowed ? <Follow>Follow</Follow> : <UnFollow>Unfollow</UnFollow>}
      </Right>
    </Root>
  );
};

export default TagListItem;
