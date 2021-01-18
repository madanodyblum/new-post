import { PostsNamespace } from "@Components/data/post";
import { IUserInfo } from "@Components/data/general";
import PostCard from "../Post/index";
import React from "react";

const ListView = ({ posts, header }: PostsNamespace.IProps) => {
  return (
    <div className="inner">
      {posts?.map((item, index) => {
        return <PostCard key={index} postData={item} header={header} />;
      })}
    </div>
  );
};

export default ListView;
