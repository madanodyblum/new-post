import { IUserInfo } from "./general";

declare namespace PostsNamespace {
  interface IMenu {
    title: string;
    url: string;
  }

  interface ITags {
    title: string;
    img?: string;
    url: string;
    _id: string;
  }
  interface ILink {
    img: string;
    url: string;
  }

  interface IHeader {
    userInfo: IUserInfo;
    createdAt: Date;
    menuList: IMenu[];
  }

  interface IPost {
    _id: string;
    tags: ITags[];
    countComments: number;
    content?: string;
    htmlContent?: string;
    linkData: ILink;
  }
  interface IPostPorps {
    header: IHeader;
    postData: IPost;
  }
  interface IProps {
    header: IHeader;
    posts: IPost[];
  }
}
