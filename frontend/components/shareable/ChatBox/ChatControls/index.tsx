import React from "react";
import {
  Root,
  AttachButton,
  InputContainer,
  HappyIcon,
  LikeButton,
} from "./style";

const ChatControl = () => {
  return (
    <Root>
      <AttachButton>
        <i className="mdi mdi-image-multiple" />
      </AttachButton>
      <InputContainer>
        <input type="text" placeholder="Aa" />
        <HappyIcon>
          <i className="mdi mdi-emoticon-happy" />
        </HappyIcon>
      </InputContainer>
      <LikeButton>
        <i className="mdi mdi-thumb-up" />
      </LikeButton>
    </Root>
  );
};

export default ChatControl;
