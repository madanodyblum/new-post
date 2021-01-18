import { IFilterGeneral } from "./general";

namespace ReactionInterfaces {
  export enum EReaction {
    like = 1,
    love = 2,
    haha = 3,
    wow = 4,
    sad = 5,
    angry = 6,
  }

  export enum EEntityType {
    post = 1,
    comment = 2,
  }
  export interface IReactionBody {
    id?: string;
    author?: {
      id: string;
      userName: string;
    };
    entityId?: string;
    entityType?: EEntityType;
    reactionType?: EReaction;
  }
  export interface IReactionFilters extends IFilterGeneral, IReactionBody {}
}
export default ReactionInterfaces;
