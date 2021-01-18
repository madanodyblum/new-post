import Header from "./Header";
import PostContainer from "./PostContainer";
import { CardFeed } from "./styles";
import CommentBox from "./Comments/index";
import { PostsNamespace } from "@Components/data/post";
export default ({ header, postData }: PostsNamespace.IPostPorps) => {
  return (
    <CardFeed>
      <div className="card-inner">
        <Header {...header} />
        <PostContainer posts={postData} />
        <CommentBox postId={postData._id} userInfo={header.userInfo} />
      </div>
    </CardFeed>
  );
};
