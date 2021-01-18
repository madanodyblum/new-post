import React from "react";
import { HashtagStyle } from "./styles";

const HashTagItem = ({ onHashtagClick, suggestion, isFocused }) => {
  return (
    <HashtagStyle
      onMouseDown={() => onHashtagClick(suggestion)}
      className={isFocused ? "hashtag-suggestion active" : "hashtag-suggestion"}
    >
      {suggestion}
    </HashtagStyle>
  );
};

export default HashTagItem;
