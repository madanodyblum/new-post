import { IFilterGeneral } from "./general";

declare namespace ReactionInterfaces {
  export enum EReaction {
    like = 1,
    love = 2,
    haha = 3,
    wow = 4,
    sad = 5,
    angry = 6,
  }

  interface IReactionBody {
    author?: {
      id?: string;
      userName?: string;
    };
    entityId?: string;
    reactionType?: EReaction;
  }
  interface IReactionFilters extends IFilterGeneral, IReactionBody {}
}
