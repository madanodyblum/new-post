import EntityInterfaces from "../interfaces/entity";
import { IResultService, Status } from "../interfaces/general";
import Tags from "../interfaces/tags";
import EntityModel, { IEntity } from "../models/entity";
import TagModel, { ITags } from "../models/tags";
/**
 * Done 1. Add tags
 * Done 2. Get tags
 * Done 3. Get popular tags with count
 * Done 4. Search tags with count
 * TODO 5. Get top trending tags
 */
const TagService = {
  addTags: async ({
    imgPath,
    title,
  }: Tags.ITag): Promise<IResultService<ITags>> => {
    try {
      const tag = await TagModel.findOneAndUpdate(
        { title },
        { imgPath, title },
        { new: true, upsert: true },
      );

      return {
        data: tag,
        status: 1,
      };
    } catch (e) {
      return {
        message: e.toString(),
        status: Status.hasError,
      };
    }
  },
  addBulkTags: async (tags: Tags.ITag[]): Promise<IResultService<ITags[]>> => {
    return Promise.all(
      tags.map(({ title, imgPath }) => {
        return TagModel.findOneAndUpdate(
          { title },
          { imgPath, title },
          { new: true, upsert: true },
        )
          .then((x) => {
            return x;
          })
          .catch((x) => {
            return null;
          });
      }),
    )
      .then((x) => {
        return {
          status: 1,
          data: x,
        };
      })
      .catch((x) => {
        return {
          status: 2,
          message: x,
        };
      });
  },
  getTags: async ({
    count,
    skip,
    title,
  }: Tags.IFilterTags): Promise<IResultService<ITags[]>> => {
    try {
      const tags = await TagModel.find({ title })
        .limit(count)
        .skip(skip)
        .exec();
      return {
        status: 1,
        data: tags,
      };
    } catch (e) {
      return {
        status: Status.hasError,
        message: e.toString(),
      };
    }
  },
  getEntityTags: async ({
    count,
    skip,
    entityFilterType,
    title,
  }: EntityInterfaces.IFilterEntity): Promise<IResultService<IEntity[]>> => {
    try {
      //https://stackoverflow.com/questions/47724519/how-to-find-most-common-value-for-specific-categories-in-mongodb
      //https://docs.mongodb.com/manual/reference/operator/aggregation/project/

      let match: any = {
        entityType: EntityInterfaces.EntityType.Tag,
      };
      if (entityFilterType == 2) {
        match.title = title;
      }
      const popularTags = await EntityModel.aggregate([
        {
          $project: {
            id: 1,
            entityType: 1,
            _id: 0,
            title: 1,
            url: 1,
          },
        },
        {
          $match: { ...match },
        },
        {
          $group: {
            _id: {
              id: "$id",
            },
            count: {
              $sum: 1,
            },
          },
        },
        {
          $sort: {
            "_id.id": 1,
            count: -1,
          },
        },

        { $limit: count },
        { $skip: skip },
      ]).exec();
      return {
        status: 1,
        data: popularTags,
      };
    } catch (e) {
      return {
        status: 1,
        message: e.toString(),
        data: [],
      };
    }
  },
};
export default TagService;
