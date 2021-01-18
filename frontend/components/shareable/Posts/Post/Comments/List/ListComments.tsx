import React, { useCallback, useState } from "react";
import { ListContainer } from "../syles";
import CommentItem from "./CommentItem";
import { CommentsNamespace } from "@Components/data/comments";
interface IProps {
  comments: CommentsNamespace.IComment[];
  loadMore: boolean;
}
const ListComments = ({ comments, loadMore }: IProps) => {
  const timerFunc = useCallback((time: Date) => {
    let dateDiff = new Date().getTime() - time.getTime();
    return new Date(dateDiff);
  }, comments);
  return (
    <ListContainer>
      {loadMore && (
        <div className="more-comments">
          <a href="#">View 7 more comments</a>
        </div>
      )}
      <div className="comments-list">
        {comments?.map((item, index) => {
          return <CommentItem {...item} timeFunc={timerFunc} key={index} />;
        })}
      </div>
    </ListContainer>
  );
};
export default React.memo(ListComments);
