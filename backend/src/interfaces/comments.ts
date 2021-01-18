import { IFilterGeneral } from "./general";

namespace CommentInterfaces {
  export interface ICommentBody {
    _id?: string;
    author?: {
      id: string;
      userName: String;
    };
    post?: string;
    replyId?: string;
    comment?: string;
    deleted?: boolean;
    files?: any;
  }
  export interface IComment extends ICommentBody {
    childs?: any[];
  }
  export interface ICommentFilter extends IFilterGeneral, ICommentBody {}
}
export default CommentInterfaces;
