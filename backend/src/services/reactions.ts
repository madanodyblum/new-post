import { IResultService, Status } from "../interfaces/general";
import ReactionInterfaces from "../interfaces/reaction";
import { LoggerService } from "../logger";
import ReactionModel, { IReactionDTO } from "../models/reaction";
import { Types } from "mongoose";

/**
 * DONE - 1.Add reaction
 * DONE - 2.Delete reaction
 * DONE - 5.Update reaction
 * DONE - 3.Get reactions for posts or comments
 * DONE - 4.Get count of posts and comments reactions
 *
 */
const ReactionService = {
  addReaction: async (
    data: ReactionInterfaces.IReactionBody
  ): Promise<IResultService<IReactionDTO>> => {
    try {
      const newReact = new ReactionModel({
        ...data,
      });
      await newReact.save();

      LoggerService.silly(`reaction was created.`);
      return {
        data: newReact,
        status: Status.ok,
      };
    } catch {
      return {
        status: Status.hasError,
      };
    }
  },
  deleteReaction: async ({
    id,
    author,
  }: ReactionInterfaces.IReactionBody): Promise<IResultService<any>> => {
    try {
      await ReactionModel.deleteOne({
        _id: new Types.ObjectId(id),
        author: {
          id: new Types.ObjectId(author.id),
          
        },
      }).exec();

      LoggerService.silly(`reaction was deleted.`);
      return {
        status: Status.ok,
      };
    } catch (e) {
      LoggerService.error(
        `error was occured on delete reaction. message: ${e}`
      );
      return {
        status: Status.hasError,
      };
    }
  },
  updateReaction: async ({
    _id,
    reactionType,
    author,
  }: IReactionDTO): Promise<IResultService<IReactionDTO>> => {
    try {
      const updatedData = await ReactionModel.findOneAndUpdate(
        {
          _id,
          author: {
            id: new Types.ObjectId(author.id),
          },
        },
        { $set: { reactionType: reactionType } },
        { new: true }
      ).exec();

      LoggerService.silly(`reaction was updated.`);
      return {
        data: updatedData,
        status: Status.ok,
      };
    } catch (e) {
      LoggerService.error(
        `error was occured on update reaction. message: ${e}`
      );
      return {
        status: Status.hasError,
      };
    }
  },
  getCountReaction: async ({
    entityId,
  }: ReactionInterfaces.IReactionFilters): Promise<IResultService<number>> => {
    try {
      const countData = await ReactionModel.countDocuments({
        entityId: new Types.ObjectId(entityId),
      }).exec();

      return {
        data: countData,
        status: Status.ok,
      };
    } catch (e) {
      LoggerService.error(
        `error was occured on get count of reactions. message: ${e}`
      );
      return {
        status: Status.hasError,
      };
    }
  },
  getGroupByReaction: async ({
    count,
    skip,
    entityId,
    reactionType,
  }: ReactionInterfaces.IReactionFilters): Promise<IResultService<any>> => {
    try {
      let match: any = {
        entityId,
      };
      if (reactionType) {
        match.reactionType = reactionType;
      }

      const reactionData = await ReactionModel.aggregate([
        {
          $match: { ...match },
        },
        {
          $group: {
            _id: {
              id: "$entityId",
              reactionType: "$reactionType",
            },
          },
        },
        { $limit: count },
        { $skip: skip },
      ]);

      return {
        data: reactionData,
        status: Status.ok,
      };
    } catch (e) {
      LoggerService.error(
        `error was occured on get count of reactions. message: ${e}`
      );
      return {
        status: Status.hasError,
      };
    }
  },
  getReactions: async ({
    count,
    skip,
    entityId,
    reactionType,
  }: ReactionInterfaces.IReactionFilters): Promise<IResultService<any>> => {
    try {
      let match: any = {
        entityId,
      };
      if (reactionType) {
        match.reactionType = reactionType;
      }

      const reactionData = await ReactionModel.find({ ...match })
        .skip(skip)
        .limit(count)
        .exec();

      return {
        data: reactionData,
        status: Status.ok,
      };
    } catch (e) {
      LoggerService.error(
        `error was occured on get count of reactions. message: ${e}`
      );
      return {
        status: Status.hasError,
      };
    }
  },
};
export default ReactionService;
