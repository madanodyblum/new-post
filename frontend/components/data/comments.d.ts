import { IUserInfo } from "./general";

declare namespace CommentsNamespace {
  interface IComment {
    id: string;
    userAvatar: string;
    content: string;
    emotionsCount: number;
    imgContent: string;
    contentType: "text" | "image";
    lastEmotionEntity: string;
    time: Date;
    timeFunc: Function;
    isLiked: boolean;
  }
  interface IProps {
    userInfo: IUserInfo;
    comments: IComment[];
  }
}
