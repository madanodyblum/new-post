/**
 * DONE - 1. Create post(s)
 * DONE - 2. Edit created post(s)
 * DONE - 3. Delete created post(s)
 * DONE - 4. Get group posts of user
 * TODO - 5. Report issue on the post(s)
 * DONE - 6. Get Reported list of post(s)
 * TODO - 7. Get timeline post(s)
 * DONE - 8. Filter Post(s)
 * TODO - 9. Get Posts for freinds
 * TODO - 10. Get Posts with privacy filter
 */
import { PostService } from "../services";
import { Request, Response } from "express";
import PostInterfaces from "../interfaces/posts";
const createPost = async (req, res: Response) => {
  if (!req.user || req.user === undefined) {
    return res.status(400).json({
      status: 2,
      message: "Invalid User",
    });
  }
  const { body } = req;
  const {
    text,
    entities,
    textFormat,
    files,
    privacyType,
    customUser,
  }: PostInterfaces.IPostBody = body;
  const { status, data, message } = await PostService.createPost({
    author: req.user,
    text,
    entities,
    textFormat,
    files,
    privacyType,
    customUser,
  });
  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};

const editPost = async (req, res: Response) => {
  if (!req.user || req.user === undefined) {
    return res.status(400).json({
      status: 2,
      message: "Invalid User",
    });
  }
  const { body } = req;
  const {
    text,
    entities,
    textFormat,
    files,
    privacyType,
    customUser,
    _id,
  }: PostInterfaces.IPostBody = body;
  const { status, data, message } = await PostService.editPost({
    author: req.user,
    text,
    entities,
    textFormat,
    files,
    privacyType,
    customUser,
    _id,
  });
  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};

const deletePost = async (req, res: Response) => {
  if (!req.user || req.user === undefined) {
    return res.status(400).json({
      status: 2,
      message: "Invalid User",
    });
  }
  const { params } = req;
  const { id } = params;
  const { status, data, message } = await PostService.deletePost(id, req.user);
  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
const getPostOfUser = async (req, res: Response) => {
  if (!req.user || req.user === undefined) {
    return res.status(400).json({
      status: 2,
      message: "Invalid User",
    });
  }
  const { params } = req;
  const {
    count,
    deleted,
    entity,
    isReported,
    privacyType,
    skip,
    text,
  }: PostInterfaces.IPostFilter = params;
  const { status, data, message } = await PostService.getPostOfUser({
    author: req.user.id,
    count,
    deleted,
    entity,
    isReported,
    privacyType,
    skip,
    text,
  });
  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
const getReportedPost = async (req, res: Response) => {
  if (!req.user || req.user === undefined) {
    return res.status(400).json({
      status: 2,
      message: "Invalid User",
    });
  }
  const { params } = req;
  const {
    count,
    deleted,
    entity,
    isReported,
    privacyType,
    skip,
    text,
  }: PostInterfaces.IPostFilter = params;
  const { status, data, message } = await PostService.getReportedList();
  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
export default {
  createPost,
  editPost,
  deletePost,
  getPostOfUser,
  getReportedPost,
};
