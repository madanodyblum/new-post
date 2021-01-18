/**
 *  DONE - Follow Tag
 *  DONE - Follow User
 *  DONE - Unfollow Tag
 *  DONE - UnFollow User
 *  DONE - Get followers users
 *  DONE - Get following users
 *  DONE - Get followed  tags
 *  DONE - Get most followed tags
 */

import { Response, Request } from "express";
import { FollowService } from "../services";
const followTag = async (req, res: Response) => {
  if (!req.user || req.user === undefined) {
    return res.status(400).json({
      status: 2,
      message: "Invalid User",
    });
  }
  const { body } = req;

  if (!body.followersHashtags) {
    return res.status(400).send({
      status: 2,
      message: "followerHashTags is Required",
    });
  }
  const { status, data, message } = await FollowService.followTag({
    ...body,
    user: req.user,
  });

  return res.status(status === 1 ? 200 : 400).send({ status, data, message });
};
const followUser = async (req, res: Response) => {
  if (!req.user || req.user === undefined) {
    return res.status(400).json({
      status: 2,
      message: "Invalid User",
    });
  }
  const { body } = req;

  if (!body.followerUser) {
    return res.status(400).send({
      status: 2,
      message: "followerUser is Required",
    });
  }
  const { status, data, message } = await FollowService.followUser({
    ...body,
    user: req.user,
  });

  return res.status(status === 1 ? 200 : 400).send({ status, data, message });
};
const unFollow = async (req, res: Response) => {
  if (!req.user || req.user === undefined) {
    return res.status(400).json({
      status: 2,
      message: "Invalid User",
    });
  }
  const { query } = req;

  const { id } = query;

  const { status, data, message } = await FollowService.unFollowTagAndUser({
    _id: id.toString(),
    user: req.user,
  });

  return res.status(status === 1 ? 200 : 400).send({ status, data, message });
};

const getFollowers = async (req, res: Response) => {
  if (!req.user || req.user == null || req.user == undefined) {
    return res.status(401).send();
  }
  const { status, data, message } = await FollowService.getFollowersUsers({
    followerUser: { ...req.user },
  });
  return res.status(status == 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
const getFollowingUsers = async (req, res: Response) => {
  if (!req.user || req.user == null || req.user == undefined) {
    return res.status(401).send();
  }
  const { status, data, message } = await FollowService.getFollowersUsers({
    user: { ...req.user },
  });
  return res.status(status == 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
const followedTags = async (req, res: Response) => {
  if (!req.user || req.user == null || req.user == undefined) {
    return res.status(401).send();
  }
  const { status, data, message } = await FollowService.getFollowedTags({
    user: { ...req.user },
  });
  return res.status(status == 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
const mostTagsFollowed = async (req, res: Response) => {
  if (!req.user || req.user == null || req.user == undefined) {
    return res.status(401).send();
  }
  const { params } = req;

  const { status, data, message } = await FollowService.getMostFollowedTags({
    ...params,
  });
  return res.status(status == 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
export default {
  followTag,
  followUser,
  unFollow,
  getFollowers,
  getFollowingUsers,
  followedTags,
  mostTagsFollowed,
};
