import React from "react";
import { Root, IconButton, Badge } from "./style";

const MessageButton = () => {
  return (
    <Root>
      <IconButton>
        <i className="mdi mdi-account-multiple-outline" />
      </IconButton>
      <Badge>
        <span>3</span>
      </Badge>
    </Root>
  );
};

export default MessageButton;
