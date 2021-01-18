import { PostsNamespace } from "@Components/data/post";
import React from "react";
import Post from "./Post";
interface IProps {
  posts: PostsNamespace.IPost;
}
const PostContainer = ({ posts }: IProps) => {
  return <Post {...posts}></Post>;
};
export default PostContainer;
