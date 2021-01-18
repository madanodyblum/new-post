/**
 * DONE - 1. Add comment
 * DONE - 2. Delete Comment
 * DONE - 3. Edit Comment
 * DONE - 4. Get Comments for each posts with filter options
 * DONE - 6. Reply comment
 * DONE - 7. Get comment(s) with reply
 */
import { CommentService } from "../services";
import { Response, Request } from "express";
const addComment = async (req, res: Response) => {
  if (!req.user || req.user === undefined) {
    return res.status(400).json({
      status: 2,
      message: "Invalid User",
    });
  }
  const { body } = req;

  const newCommentResult = await CommentService.addComment({
    ...body,
    author: req.user,
  });

  return res
    .status(newCommentResult.status === 1 ? 200 : 400)
    .send({ ...newCommentResult });
};
const deleteComment = async (req, res: Response) => {
  if (!req.user || req.user === undefined) {
    return res.status(400).json({
      status: false,
      data: {
        message: "Invalid User",
      },
    });
  }
  const { query } = req;

  const deleteCommentResult = await CommentService.deleteComment({
    _id: query.id.toString(),
    author: { ...req.user },
  });
  return res
    .status(deleteCommentResult.status === 1 ? 200 : 400)
    .send({ ...deleteCommentResult });
};
const editComment = async (req, res: Response) => {
  if (!req.user || req.user === undefined) {
    return res.status(400).json({
      status: false,
      data: {
        message: "Invalid User",
      },
    });
  }
  const { body } = req;

  const editCommentResult = await CommentService.editComment({
    ...body,
    author: { ...req.user },
  });
  return res
    .status(editCommentResult.status === 1 ? 200 : 400)
    .send({ ...editCommentResult });
};
const replyComment = async (req, res: Response) => {
  if (!req.user || req.user === undefined) {
    return res.status(400).json({
      status: false,
      data: {
        message: "Invalid User",
      },
    });
  }
  const { body } = req;

  const replyCommentResult = await CommentService.addComment({
    ...body,
    author: req.user,
  });
  return res
    .status(replyCommentResult.status === 1 ? 200 : 400)
    .send({ ...replyCommentResult });
};
const getComments = async (req, res: Response) => {
  if (!req.user || req.user == undefined) {
    return res.status(400).json({
      status: false,
      data: {
        message: "Invalid User",
      },
    });
  }
  const { body } = req;

  const replyCommentResult = await CommentService.getComments({ ...body });
  return res
    .status(replyCommentResult.status === 1 ? 200 : 400)
    .send({ ...replyCommentResult });
};

export default {
  addComment,
  deleteComment,
  editComment,
  replyComment,
  getComments,
};
