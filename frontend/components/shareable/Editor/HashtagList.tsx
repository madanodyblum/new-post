import React from "react";
import HashtagItem from "./HashtagItem";

const HashtagList = ({
  onHashtagClick,
  focusedHashtagIndex,
  suggestions,
  style,
}) => {
  const listItems = suggestions?.map((suggestion, index) => (
    <HashtagItem
      key={index}
      suggestion={suggestion}
      onHashtagClick={onHashtagClick}
      isFocused={focusedHashtagIndex === index}
    />
  ));

  return <div style={style}>{listItems}</div>;
};

export default HashtagList;
