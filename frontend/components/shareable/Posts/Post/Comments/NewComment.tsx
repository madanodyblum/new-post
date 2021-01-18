import React, { useState } from "react";
import { NewCommentContainer } from "./syles";
import { useForm } from "react-hook-form";
import Progressbar from "@Components/shareable/Progressbar/index";
import { IUserInfo } from "@Components/data/general";
import { Button } from "@Components/shareable/ButtonsStyles";
interface IProps {
  userInfo: IUserInfo;
  postId: string;
}
interface IFile {
  file: Blob;
  name: string;
  imgUrl?: string;
  processValue: number;
}
const NewComment = ({ userInfo, postId }: IProps) => {
  const { register, handleSubmit } = useForm();
  const [fileData, setFileData] = useState<IFile>(null);

  return (
    <NewCommentContainer>
      <div className="user-image">
        <img src={userInfo.avatar} alt={userInfo.fullname} />
      </div>
      <div className="write-input">
        <input
          name="content"
          ref={register}
          type="text"
          placeholder="Write a Comment..."
        />
        <Button className="btn btn-attach emo">
          <i className="mdi mdi-emoticon-happy-outline"></i>
        </Button>
        <Button className="btn btn-attach cam">
          <i className="mdi mdi-camera-outline"></i>
        </Button>
        <Button className="btn btn-attach pic">
          <i className="mdi mdi-image-outline"></i>
        </Button>
      </div>

      {fileData == null && (
        <span className="enter-post">Press Enter to post.</span>
      )}
      {fileData?.processValue > 0 && fileData?.processValue < 100 && (
        <Progressbar width={fileData?.processValue} color="#09B94F" />
      )}
      {fileData?.processValue == 100 && fileData?.imgUrl && (
        <img className="msg-image" src={fileData?.imgUrl}></img>
      )}
    </NewCommentContainer>
  );
};
export default NewComment;
