import { TagService } from "../services";
import { Tags } from "../interfaces/tags";
import EntityInterfaces from "../interfaces/entity";
export const Query = {
  tagsFilter: async ({ count, skip, title }: Tags.IFilterTags) => {
    return await TagService.getTags({ count, skip, title });
  },
  getPopularTags: async ({
    count,
    skip,
    title,
    entityFilterType,
  }: EntityInterfaces.IFilterEntity) =>
    TagService.getEntityTags({
      count,
      skip,
      title,
      entityFilterType,
    }),
};

export const Mutation = {
  addTag: async ({ imgPath, title }: Tags.ITag) =>
    TagService.addTags({ imgPath, title }),
};
export default {
  Query,
  Mutation,
};
