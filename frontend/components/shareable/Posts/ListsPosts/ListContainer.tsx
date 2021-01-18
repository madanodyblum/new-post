import { PostsNamespace } from "@Components/data/post";
import React from "react";
import ListView from "./ListView";
const ListViewContainer = ({ header, posts }: PostsNamespace.IProps) => {
  return <ListView header={header} posts={posts} />;
};

export default ListViewContainer;
