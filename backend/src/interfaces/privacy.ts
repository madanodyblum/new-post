namespace PrivacyInterfaces {
  export enum EPrivacy {
    onlyMe = 1,
    myFriends = 2,
    someUser = 3,
    public = 4,
  }

  export enum EEntityType {
    posts = 1,
    story = 2,
  }
  export interface IPrivacyBody {
    _id?: string;
    author: {
      id: string;
      userName: string;
    };
    typeEntity: EEntityType;
    entityId: string;
    privacy: PrivacyInterfaces.EPrivacy;
    customUser: string[];
  }
  export interface IFilterBody {
    author?: {
      id?: string;
      userName?: string;
    };
    typeEntity?: EEntityType;
    entityId?: string;
    privacy?: PrivacyInterfaces.EPrivacy;
    customUser?: string[];
  }
}
export default PrivacyInterfaces;
