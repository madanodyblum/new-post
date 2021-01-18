import { IFilterGeneral } from "./general";

namespace EntityInterfaces {
  export enum RefType {
    Post = 1,
    Comment = 2,
  }
  export enum EntityType {
    User = 1,
    Tag = 2,
  }
  export enum EntityFilter {
    Popular = 1,
    TextSearch = 2,
  }
  export interface IEntity {
    id: string;
    entityType: EntityType;
    url: string;
    title: string;
    offset?: number;
    length?: number;
    refType?: RefType;
    refId?: string;
  }

  export interface IFilterEntity extends IFilterGeneral {
    refType?: RefType;
    refId?: string;
    _id?: string;
    entityType?: EntityType;
    title?: string;
    id?: string;
    entityFilterType?: EntityFilter;
  }
}
export default EntityInterfaces;
