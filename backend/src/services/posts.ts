import EntityInterfaces from "../interfaces/entity";
import { IResultService, Status } from "../interfaces/general";
import { LoggerService } from "../logger";
import PostModel, { IPostDTO } from "../models/posts";
import { EntityService } from ".";
import { TagService } from ".";
import PrivacyModel from "../models/privacy";
import { Types } from "mongoose";
import PrivacyInterfaces from "../interfaces/privacy";
import PostInterfaces from "../interfaces/posts";
/**
 * DONE - 1. Create post(s)
 * DONE - 2. Edit created post(s)
 * DONE - 3. Delete created post(s)
 * DONE - 4. Get group posts of user
 * DONE - 5. Report issue on the post(s)
 * DONE - 6. Get Reported list of post(s)
 * TODO - 7. Get timeline post(s)
 * DONE - 8. Filter Post(s)
 * TODO - 9. Get Posts for freinds
 * TODO - 10. Get Posts with privacy filter
 * TODO - 11.
 *
 */
const PostService = {
  createPost: async ({
    author,
    text,
    entities,
    textFormat,
    files,
    privacyType,
    customUser,
  }: PostInterfaces.IPostBody): Promise<IResultService<IPostDTO>> => {
    /**
     * Create Post scenario:
     * if has mentioned user, first we create post and then create entity for this post and finally add entity _id to post.
     * if has hashtag, first create/get hashtag from tag collection and then use create post --> create entity --> get _id entity and update the post.
     */
    try {
      // SECTION create or get tags.
      const filterTags = entities?.filter((x) => x.entityType === 2);
      let tagEntites: EntityInterfaces.IEntity[] = [];
      filterTags?.map(async (tag) => {
        const tagData = await TagService.addTags({
          title: tag.title,
          imgPath: "",
        });
        const { data, status } = tagData;
        if (status == Status.ok)
          tagEntites.push({
            id: data._id,
            entityType: 2,
            title: tag.title,
            url: tag.url,
            offset: tag.offset,
            length: tag.length,
            refType: EntityInterfaces.RefType.Post,
          });
      });

      // SECTION Create Post.
      const newPost = new PostModel({
        author,
        text,
        textFormat,
        files,
        privacyType,
      });

      await newPost.save();

      // SECTION Create privacy
      const privacy = await PrivacyModel.create({
        author: author,
        customUser: customUser.map((x) => new Types.ObjectId(x)),
        entityId: newPost._id,
        privacy: privacyType,
        typeEntity: PrivacyInterfaces.EEntityType.posts,
      });

      // SECTION Get mentioned user.
      let userEntities: EntityInterfaces.IEntity[] = entities?.filter(
        (x) => x.entityType == 1,
      );

      // SECTION Create tag entites
      tagEntites = tagEntites.map((item) => (item.refId = newPost._id));
      const tagEntitiesSaved = await EntityService.addBulk(tagEntites);

      // SECTION Create user entites
      userEntities = userEntities.map((item) => {
        item.refId = newPost._id;
        item.refType = EntityInterfaces.RefType.Post;
        return item;
      });
      const userEntitiesSaved = await EntityService.addBulk(userEntities);

      // SECTION Add entities ids for post
      let entitiesIds: any = [];
      tagEntitiesSaved.data.map((item) => entitiesIds.push(item));
      userEntitiesSaved.data.map((item) => entitiesIds.push(item));

      await PostModel.findOneAndUpdate(
        { _id: newPost._id },
        { $set: { entities: entitiesIds, privactId: privacy._id } },
      ).exec();
      LoggerService.silly(`post is created. ${newPost._id}`);
      return { status: Status.ok };
    } catch (e) {
      LoggerService.error(`error has occured on createing post. error: ${e}`);
      return { status: Status.hasError };
    }
  },
  editPost: async ({
    text,
    entities,
    textFormat,
    files,
    privacyType,
    customUser,
    _id,
    author,
  }: PostInterfaces.IPostBody): Promise<IResultService<IPostDTO>> => {
    /**
     * Create Post scenario:
     * if has mentioned user, first we create post and then create entity for this post and finally add entity _id to post.
     * if has hashtag, first create/get hashtag from tag collection and then use create post --> create entity --> get _id entity and update the post.
     */
    try {
      // SECTION create or get tags.
      const filterTags = entities?.filter((x) => x.entityType === 2);
      let tagEntites: EntityInterfaces.IEntity[] = [];
      filterTags?.map(async (tag) => {
        const tagData = await TagService.addTags({
          title: tag.title,
          imgPath: "",
        });
        const { data, status } = tagData;
        if (status == Status.ok)
          tagEntites.push({
            id: data._id,
            entityType: 2,
            title: tag.title,
            url: tag.url,
            offset: tag.offset,
            length: tag.length,
            refType: EntityInterfaces.RefType.Post,
          });
      });

      // SECTION Get Post and update post data.

      const postData = await PostModel.findOne({
        _id,
        author: {
          id: new Types.ObjectId(author.id),
          userName: author.userName,
        },
      }).exec();

      // SECTION Update privacy.
      await PrivacyModel.findOneAndUpdate(
        {
          entityId: postData._id,
        },
        {
          $set: {
            customUser: customUser.map((item) => new Types.ObjectId(item)),
            privacy: privacyType,
          },
        },
      );

      // SECTION Delete prev. entites and add new entities.
      await EntityService.deleteEntity({
        refId: postData._id,
        refType: EntityInterfaces.RefType.Post,
      });

      // SECTION Get mentioned user.
      let userEntities: EntityInterfaces.IEntity[] = entities?.filter(
        (x) => x.entityType == 1,
      );

      // SECTION Create tag entites
      tagEntites = tagEntites.map((item) => {
        item.refId = postData._id;
        return item;
      });
      const tagEntitiesSaved = await EntityService.addBulk(tagEntites);

      // SECTION Create user entites
      userEntities = userEntities.map((item) => {
        item.refId = postData._id;
        item.refType = EntityInterfaces.RefType.Post;
        return item;
      });
      const userEntitiesSaved = await EntityService.addBulk(userEntities);

      // SECTION Add entities ids for post
      let entitiesIds: any = [];
      tagEntitiesSaved.data.map((item) => entitiesIds.push(item));
      userEntitiesSaved.data.map((item) => entitiesIds.push(item));

      await PostModel.findOneAndUpdate(
        { _id: postData._id },
        {
          $set: {
            entities: entitiesIds,
            files: files.map((item) => new Types.ObjectId(item)),
            text: text,
            textFormat: textFormat,
            privacyType: privacyType,
          },
        },
      ).exec();
      LoggerService.silly(`post is updated. ${_id}`);
      return { status: Status.ok };
    } catch (e) {
      LoggerService.error(`error has occured on createing post. error: ${e}`);
      return { status: Status.hasError };
    }
  },
  deletePost: async (
    _id: string,
    author: {
      id: string;
      userName: string;
    },
  ): Promise<IResultService<any>> => {
    try {
      await PostModel.deleteOne({
        _id: new Types.ObjectId(_id),
        author: {
          id: new Types.ObjectId(author.id),
          userName: author.userName,
        },
      }).exec();
      LoggerService.silly(`Post --- ${_id} --- was deleted.`);
      return {
        status: Status.ok,
      };
    } catch (e) {
      LoggerService.error(`Delete post --- ${_id} has an error${e}.`);
      return {
        status: Status.hasError,
        message: e,
      };
    }
  },
  reportPost: async (
    _id: Types.ObjectId,
    isReported: boolean,
  ): Promise<IResultService<any>> => {
    try {
      await PostModel.findByIdAndUpdate(
        { _id },
        { $set: { isReported: isReported } },
      ).exec();
      LoggerService.silly(`Post --- ${_id} --- was reported.`);
      return {
        status: Status.ok,
      };
    } catch (e) {
      LoggerService.error(`Report post --- ${_id} has an error${e}.`);
      return {
        status: Status.hasError,
        message: e,
      };
    }
  },
  getReportedList: async (): Promise<IResultService<IPostDTO[]>> => {
    try {
      const listReported = await PostModel.find({ isReported: true }).exec();

      return {
        status: Status.ok,
        data: listReported,
      };
    } catch (e) {
      LoggerService.error(`Get reported post list ${e}.`);
      return {
        status: Status.hasError,
        message: e,
      };
    }
  },
  getPostOfUser: async ({
    author,
    count,
    deleted,
    entity,
    isReported,
    privacyType,
    skip,
    text,
  }: PostInterfaces.IPostFilter): Promise<IResultService<IPostDTO[]>> => {
    try {
      let match: any = {};
      if (author) {
        match.author = {
          id: new Types.ObjectId(author),
        };
      }
      if (deleted) {
        match.deleted = deleted;
      }

      if (entity) {
        match.entity = entity;
      }
      if (isReported) {
        match.isReported = isReported;
      }
      if (privacyType) {
        match.privacyType = privacyType;
      }
      const listPosts = await PostModel.find({
        ...match,
        text: { $regex: text, $options: "i" },
      })
        .limit(count)
        .skip(skip)
        .exec();

      return {
        status: Status.ok,
        data: listPosts,
      };
    } catch (e) {
      LoggerService.error(`Get reported post list ${e}.`);
      return {
        status: Status.hasError,
        message: e,
      };
    }
  },
  getTimelinePosts: async ({
    count,
    skip,
  }: PostInterfaces.IPostFilter): Promise<IResultService<IPostDTO[]>> => {
    // this function have to convert to get post of user(s) which the current user follow them.
    try {
      let match: any = {};

      match.privacyType = PrivacyInterfaces.EPrivacy.public;
      const listPosts = await PostModel.find({
        ...match,
      })
        .limit(count)
        .skip(skip)
        .exec();

      return {
        status: Status.ok,
        data: listPosts,
      };
    } catch (e) {
      LoggerService.error(`Get reported post list ${e}.`);
      return {
        status: Status.hasError,
        message: e,
      };
    }
  },
};

export default PostService;
