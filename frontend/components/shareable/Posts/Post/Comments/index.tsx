import React from "react";
import ListComments from "./List/Container";
import NewComment from "./NewComment";

const CommentBox = ({ postId, userInfo }) => {
  return (
    <>
      <ListComments postId={postId} />
      <NewComment postId={postId} userInfo={userInfo} />
    </>
  );
};
export default CommentBox;
