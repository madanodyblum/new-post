/**
 * DONE - 1.Add reaction
 * DONE - 2.Delete reaction
 * DONE - 5.Update reaction
 * DONE - 3.Get reactions for posts or comments
 * DONE - 4.Get count of posts and comments reactions
 */

import { ReactionService } from "../services";
import { Request, Response } from "express";
import ReactionInterfaces from "../interfaces/reaction";
const addReaction = async (req, res: Response) => {
  if (!req.user || req.user == null || req.user == undefined) {
    return res.status(401).send();
  }
  const { body } = req;
  const { status, data, message } = await ReactionService.addReaction({
    ...body,
    author: req.user,
  });

  return res.status(status === 1 ? 200 : 400).send({ status, data, message });
};
const deleteReaction = async (req, res: Response) => {
  if (!req.user || req.user == null || req.user == undefined) {
    return res.status(401).send();
  }
  const { params } = req;
  const { status, data, message } = await ReactionService.deleteReaction({
    id: params.id,
    author: req.user.id,
  });

  return res.status(status === 1 ? 200 : 400).send({ status, data, message });
};
const updateReaction = async (req, res: Response) => {
  if (!req.user || req.user == null || req.user == undefined) {
    return res.status(401).send();
  }
  const { body } = req;
  const { status, data, message } = await ReactionService.updateReaction({
    ...body,
    author: req.user,
  });

  return res.status(status === 1 ? 200 : 400).send({ status, data, message });
};
const getReactions = async (req, res: Response) => {
  if (!req.user || req.user == null || req.user == undefined) {
    return res.status(401).send();
  }
  const { params } = req;
  const { status, data, message } = await ReactionService.getReactions({
    count: parseInt(params.count),
    entityId: params.entityId,
    skip: parseInt(params.skip),
    author: req.user,

    reactionType:
      params.reactionType === ReactionInterfaces.EEntityType.post ? 1 : 2,
  });

  return res.status(status === 1 ? 200 : 400).send({ status, data, message });
};

const getReactionsCount = async (req, res: Response) => {
  if (!req.user || req.user == null || req.user == undefined) {
    return res.status(401).send();
  }
  const { params } = req;
  const { status, data, message } = await ReactionService.getCountReaction({
    entityId: params.entityId,
  });

  return res.status(status === 1 ? 200 : 400).send({ status, data, message });
};

export default {
  addReaction,
  deleteReaction,
  updateReaction,
  getReactions,
  getReactionsCount,
};
