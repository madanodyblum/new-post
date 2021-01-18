import { IResultService, Status } from "../interfaces/general";
import { LoggerService } from "../logger";
import FollowModel, { FollowDTO } from "../models/follow";
import { Types } from "mongoose";
import FollowInterface from "../interfaces/follow";
/**
 * ِDONE - Follow Tag
 * ِDONE - Follow User
 * DONE - Unfollow Tag
 * DONE - UnFollow User
 * DONE - Get followers users
 * DONE - Get following users
 * DONE - Get followed  tags
 * DONE - Get most followed tags
 */
const FollowService = {
  followTag: async (
    data: FollowInterface.IFollowBody,
  ): Promise<IResultService<FollowDTO>> => {
    try {
      const user = await FollowModel.findOne({
        user: {
          id: new Types.ObjectId(data.user.id),
          userName: data.user.userName,
        },
        followersHashtags: {
          id: new Types.ObjectId(data.followerHashTags.id),
          title: data.followerHashTags.title,
        },
      }).exec();

      if (user) {
        LoggerService.silly("this hashtag was followed");
        return {
          status: Status.exited,
        };
      } else {
        const newFollowTag = new FollowModel({
          user: {
            id: new Types.ObjectId(data.user.id),
            userName: data.user.userName,
          },
          followersHashtags: {
            id: new Types.ObjectId(data.followerHashTags.id),
            title: data.followerHashTags.title,
          },
        });
        await newFollowTag.save();
      }
      LoggerService.silly(`Following tag data is created or updated`);
      return { status: 1 };
    } catch (e) {
      LoggerService.error(e);
      return { status: 2, message: e };
    }
  },
  followUser: async (
    data: FollowInterface.IFollowBody,
  ): Promise<IResultService<any>> => {
    try {
      const user = await FollowModel.findOne({
        user: {
          id: new Types.ObjectId(data.user.id),

          userName: data.user.userName,
        },
        followersUser: {
          id: new Types.ObjectId(data.followerUser.id),
          userName: data.followerUser.userName,
        },
      }).exec();

      if (user) {
        LoggerService.silly("this user was followed");
        return {
          status: Status.exited,
        };
      } else {
        const newFollowTag = new FollowModel({
          user: {
            id: new Types.ObjectId(data.user.id),
            userName: data.user.userName,
          },
          followersUser: {
            id: new Types.ObjectId(data.followerUser.id),
            userName: data.followerUser.userName,
          },
        });
        await newFollowTag.save();
      }
      LoggerService.silly(`Following tag data is created or updated`);
      return { status: 1 };
    } catch (e) {
      LoggerService.error(e);
      return { status: 2, message: e };
    }
  },
  unFollowTagAndUser: async ({
    _id,
    user,
  }: FollowInterface.IFollowBody): Promise<IResultService<any>> => {
    try {
      await FollowModel.findOneAndDelete({
        _id: new Types.ObjectId(_id),
        user: {
          id: new Types.ObjectId(user.id),
          userName: user.userName,
        },
      }).exec();
      LoggerService.silly(`Following tag data was deleted`);
      return { status: 1 };
    } catch (e) {
      LoggerService.error(e);
      return { status: 2, message: e };
    }
  },
  //follow me
  getFollowersUsers: async ({
    followerUser,
  }: FollowInterface.IFollowFilter): Promise<IResultService<FollowDTO[]>> => {
    const userFilter = {
      id: new Types.ObjectId(followerUser.id),
      userName: followerUser.userName,
    };
    try {
      const users = await FollowModel.find({
        followersUser: userFilter,
      })
        .select("user")
        .exec();
      LoggerService.silly(`get followers users`);
      return {
        status: 1,
        data: users,
      };
    } catch (e) {
      LoggerService.error(`following users: ${e}`);
      return {
        status: 2,
        message: e,
      };
    }
  },
  // users that I ware follow them
  getFollowingUsers: async ({
    user,
  }: FollowInterface.IFollowFilter): Promise<IResultService<FollowDTO[]>> => {
    try {
      const users = await FollowModel.find({
        user: {
          id: new Types.ObjectId(user.id),
          userName: user.userName,
        },
        followersUser: { $ne: null },
      })
        .select("followersUser")
        .exec();
      LoggerService.silly(`get following users`);
      return {
        status: 1,
        data: users,
      };
    } catch (e) {
      LoggerService.error(`following users: ${e}`);
      return {
        status: 2,
        message: e,
      };
    }
  },
  getFollowedTags: async ({
    user,
  }: FollowInterface.IFollowFilter): Promise<IResultService<FollowDTO[]>> => {
    try {
      const users = await FollowModel.find({
        user: {
          id: new Types.ObjectId(user.id),
          userName: user.userName,
        },
        followersHashtags: { $ne: null },
      })
        .select("followersHashtags")
        .exec();
      LoggerService.silly(`get following users`);
      return {
        status: 1,
        data: users,
      };
    } catch (e) {
      LoggerService.error(`following users: ${e}`);
      return {
        status: 2,
        message: e,
      };
    }
  },
  getMostFollowedTags: async ({
    count,
    skip,
  }: FollowInterface.IFollowFilter): Promise<IResultService<FollowDTO[]>> => {
    try {
      const mostFollowed = await FollowModel.aggregate([
        {
          $project: {
            _id: 0,
            followersUser: 0,
            followersHashtags: 1,
          },
        },
        {
          $group: {
            _id: {
              id: "$followersHashtags",
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
      LoggerService.silly("get most followed tags");
      return { status: 1, data: mostFollowed };
    } catch (e) {
      LoggerService.error(e);
      return { status: 2, message: e };
    }
  },
};
export default FollowService;
