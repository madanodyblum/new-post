import { useCallback, useState } from "react";
import { Button } from "../ButtonsStyles";
import { CreatePostStyle } from "./styles";
import { useModal } from "../Modal/useModal";
import useDialog from "@Hooks/useDialog";
import CreatePostDialog from "@Components/shareable/CreatePostDialog";
export default () => {
  const { isShown, toggle } = useModal();

  const { openDialog } = useDialog(CreatePostDialog);

  const handleDialog = useCallback(() => {
    openDialog({});
  }, []);

  return (
    <>
      <CreatePostStyle>
        <div className="inner">
          <div className="cs-header">
            <div className="user-image">
              <img src="images/user-img/user-img-1.png" alt="user-name" />
            </div>
            <div className="user-input modalCreatePost" onClick={handleDialog}>
              <span>What's on your mind, LXSX?</span>
            </div>
          </div>
          <div className="cs-body">
            <div className="send-photo">
              <Button className="btn-send icon-green">
                <i className="mdi mdi-image-multiple"></i>Photo/Video
              </Button>
            </div>
          </div>
        </div>
      </CreatePostStyle>
   
    </>
  );
};
