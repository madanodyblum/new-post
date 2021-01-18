import React from "react";
import { Root, CloseButton, Text } from "./style";

type Props = {
  onClose: () => void;
  text: string;
};
const ChatReply: React.FC<Props> = (props: Props) => {
  const { text, onClose = () => {} } = props;
  return (
    <Root>
      <CloseButton onClick={onClose}>
        <i className="mdi mdi-close" />
      </CloseButton>
      <Text>{text}</Text>
    </Root>
  );
};

export default ChatReply;
