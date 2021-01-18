import { IFilterGeneral } from "./general";

namespace FollowInterface {
  export interface IFollowBody {
    _id?: string;
    user?: {
      id: string;
      userName: string;
    };
    followerUser?: {
      id: string;
      userName: string;
    };
    followerHashTags?: {
      id: string;
      title: string;
    };
  }
  export interface IFollow {
    user: {
      id: string;
      userName: string;
    };
    followersUser?: {
      id: string;
      userName: string;
    };
    followersHashtags?: {
      id: string;
      title: string;
    };
    createdAt?: Date;
    updatedAt?: Date;
  }
  export interface IFollowFilter extends IFilterGeneral, IFollowBody {}
}
export default FollowInterface;
