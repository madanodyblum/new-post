import React, { useState } from "react";
import { CommentsNamespace } from "@Components/data/comments";
import ListComments from "./ListComments";
interface IProps {
  postId: string;
}
const Container = ({ postId }: IProps) => {
  const [loadMore, setLoadMore] = useState<boolean>(true);
  const [commentList, setCommentList] = useState<CommentsNamespace.IComment[]>(
    [],
  );
  if (commentList)
    return <ListComments comments={commentList} loadMore={loadMore} />;
  else {
    return <></>;
  }
};
export default React.memo(Container);
