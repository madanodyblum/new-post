import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Button } from "../ButtonsStyles";
import TagListItem from "./TagListItem";

const tags = [
  {
    name: "game",
    count: 14,
    isFollowed: false,
  },
  {
    name: "amount",
    count: 20,
    isFollowed: true,
  },
  {
    name: "scared",
    count: 5,
    isFollowed: true,
  },
  {
    name: "combination",
    count: 74,
    isFollowed: false,
  },
  {
    name: "silly",
    count: 59,
    isFollowed: true,
  },
  {
    name: "stopped",
    count: 57,
    isFollowed: false,
  },
  {
    name: "highest",
    count: 63,
    isFollowed: false,
  },
  {
    name: "star",
    count: 65,
    isFollowed: true,
  },
  {
    name: "extra",
    count: 13,
    isFollowed: false,
  },
];

const DEFAULT_LENGTH = 8;

const Root = styled.div``;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 0;
  position: relative;
`;

const TagList = styled.div`
  padding: 15px;
`;

const TagListItemContainer = styled.div`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const ActionArea = styled.div`
  display: flex;
  justify-content: center;
`;

const TagsPanel = () => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const handleShowMore = useCallback(() => {
    setShowAll((showAll) => !showAll);
  }, []);

  return (
    <Root>
      <div className="feeds-title">
        <h2 className="title pink">
          Your Followed Tags
          <i className="mdi mdi-pound" />
        </h2>
      </div>

      <Card>
        <TagList>
          {tags
            ?.slice(0, showAll ? tags.length : DEFAULT_LENGTH)
            .map((tag, index) => {
              return (
                <TagListItemContainer key={index}>
                  <TagListItem
                    tagName={tag.name}
                    count={tag.count}
                    isFollowed={tag.isFollowed}
                  />
                </TagListItemContainer>
              );
            })}
        </TagList>
        <ActionArea>
          {tags.length > DEFAULT_LENGTH && (
            <Button className="btn btn-link-text" onClick={handleShowMore}>
              {showAll ? "See Less" : "See More"}
            </Button>
          )}
        </ActionArea>
      </Card>
    </Root>
  );
};

export default TagsPanel;
