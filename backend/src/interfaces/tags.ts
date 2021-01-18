import { IFilterGeneral } from "./general";
import { IUserDTO } from "./users";
namespace Tags {
  export interface ITagDTO {
    title: string;
    imgPath?: string;
    userDTO?: IUserDTO;
  }
  export interface IFilterTags extends IFilterGeneral {
    title?: string;
  }
  export interface ITag {
    title: string;
    imgPath: string;
  }
}
export default Tags;
