import EntityInterfaces from "./entity";
import { IFilterGeneral } from "./general";
import PrivacyInterfaces from "./privacy";

namespace PostInterfaces {
  export interface IPostBody {
    author: {
      id: string;
      userName: string;
    };

    customUser?: string[];
    deleted?: boolean;
    text: string;
    entities?: [
      {
        id: string;
        entityType: EntityInterfaces.EntityType;
        url: string;
        title: string;
        offset: number;
        length: number;
      },
    ];
    textFormat?: object;
    files?: string[];
    privacyType: PrivacyInterfaces.EPrivacy;
    isReported?: boolean;
    _id?: string;
  }
  export interface IPostFilter extends IFilterGeneral {
    author?: string;
    deleted?: boolean;
    text?: string;
    entity?: {
      id?: string;
      entityType?: EntityInterfaces.EntityType;
      title?: string;
    };
    privacyType?: PrivacyInterfaces.EPrivacy;
    isReported?: boolean;
  }
}
export default PostInterfaces;
