/**
 * DONE - 1. Add comment
 * DONE - 2. Delete Comment
 * DONE - 3. Edit Comment
 * DONE - 4. Get Comments for each posts with filter options
 * DONE - 6. Reply comment
 * DONE - 7. Get comment(s) with reply
 */

import { IResultService } from "../interfaces/general";
import { LoggerService } from "../logger";
import CommentModel, { CommentDTO } from "../models/comments";
import { Schema, Types } from "mongoose";
import CommentInterfaces from "../interfaces/comments";

const CommentService = {
  addComment: async (
    commentData: CommentInterfaces.ICommentBody,
  ): Promise<IResultService<CommentDTO>> => {
    try {
      const comment = await new CommentModel({ ...commentData }).save();
      return { status: 1, data: comment };
    } catch (e) {
      LoggerService.error(
        `add comment --- error occured on ${commentData.comment}`,
      );
      return { status: 2, message: e };
    }
  },
  deleteComment: async ({
    _id,
    author,
  }: CommentInterfaces.ICommentBody): Promise<IResultService<CommentDTO>> => {
    try {
      await CommentModel.findOneAndUpdate(
        {
          _id: _id,
          author: {
            id: new Types.ObjectId(author.id),
            userName: author.userName,
          },
        },
        { $set: { deleted: true } },
      ).exec();
      return { status: 1 };
    } catch (e) {
      LoggerService.error(`delete comment --- error occured on ${_id}`);
      return { status: 2, message: e };
    }
  },
  editComment: async (
    commentData: CommentInterfaces.ICommentBody,
  ): Promise<IResultService<CommentDTO>> => {
    try {
      let updateData: any = {};
      if (commentData.comment) updateData.comment = commentData.comment;
      if (commentData.files) updateData.files = commentData.files;
      await CommentModel.findOneAndUpdate(
        {
          _id: commentData._id,
          author: {
            id: new Types.ObjectId(commentData.author.id),
            userName: commentData.author.userName,
          },
        },
        { $set: { ...updateData } },
      );
      return { status: 1 };
    } catch (e) {
      LoggerService.error(
        `update comment --- error occured on ${commentData.comment}`,
      );
      return { status: 2, message: e };
    }
  },
  getComments: async (
    commentData: CommentInterfaces.ICommentFilter,
  ): Promise<any> => {
    /**
     * The scenario of get comments by post-id or comment-id.
     * if we filter the comments by post-id then will show comments of post.
     * if we filter the comments by reply-id then will show comments that reply to this id.
     * we get newest comment that reply to comment.
     */
    return await CommentModel.find(
      {
        _id: commentData._id,
        deleted: false,
        author: {
          id: new Types.ObjectId(commentData.author.id),
          userName: commentData.author.userName,
        },
        comment: { $in: [commentData.comment] },
        post: new Types.ObjectId(commentData.post),
        replyId: new Types.ObjectId(commentData.replyId),
      },
      async (
        err,
        result,
      ): Promise<IResultService<CommentInterfaces.IComment[]>> => {
        if (err) {
          LoggerService.error(
            `get comments --- error occured on ${commentData.comment}`,
          );
          return { status: 2 };
        }
        let comments: CommentInterfaces.IComment[] = [];

        let ids: Types.ObjectId[] = [];

        result?.map((x) => {
          ids.push(x._id);
        });
        const allChilds = await CommentModel.find({
          replyId: { $in: ids },
        })
          .limit(5)
          .populate("files")
          .exec();
        let tempComment: CommentInterfaces.IComment = {};
        result?.map((x) => {
          tempComment = {};
          tempComment = {
            author: { id: x.author.id.toString(), userName: x.author.userName },
            _id: x._id,
            comment: x.comment,
            files: x.files,
            post: x.post.toString(),
            replyId: x.replyId.toString(),
          };
          const childs = allChilds.filter((y) => y.replyId === x._id);
          tempComment.childs = childs;
          comments.push(tempComment);
        });
        return { status: 1, data: comments };
      },
    )
      .populate("files")
      .limit(commentData.count)
      .skip(commentData.skip)
      .exec();
  },
};
export default CommentService;
