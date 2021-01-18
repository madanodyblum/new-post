import React, { useCallback, useState } from "react";
import { Button } from "../ButtonsStyles";
import CreatePostView from "./CreatePostView";
import Dialog from "../Dialog";
import ChoosePublic from "./ChoosePublic";
import { Header, Content, Footer, CreatePostContainer } from "./style";

type Props = {
  open: boolean;
  popDialog: () => void;
};

const CreatePostDialog: React.FC<Props> = (props: Props) => {
  const { open = true, popDialog } = props;
  const [showChoose, setShowChoose] = useState(false);

  const onClose = useCallback(() => {
    popDialog();
  }, [popDialog]);

  const handleBack = useCallback(() => {
    setShowChoose(!showChoose);
  }, [showChoose]);

  return (
    <Dialog {...{ open, onClose }}>
      <CreatePostContainer active={!showChoose}>
        <Header>
          <span className="close" onClick={onClose}>
            <i className="mdi mdi-close"></i>
          </span>
          <h2>Create Post</h2>
        </Header>
        <Content>
          <CreatePostView showChoosePublic={handleBack} />
        </Content>
        <Footer>
          <Button className="btn-default">Post</Button>
        </Footer>
      </CreatePostContainer>

      <ChoosePublic active={showChoose} onBack={handleBack} />
    </Dialog>
  );
};

export default CreatePostDialog;
