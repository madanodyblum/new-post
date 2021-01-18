/**
 * DONE 1. Add tags
 * TODO 2. Get tags
 * TODO 3. Get popular tags with count
 * TODO 4. Search tags with count
 * TODO 5. Get top trending tags
 */

import { TagService } from "../services";
import { Response, Request } from "express";
import _ from "lodash";
import EntityInterfaces from "../interfaces/entity";
const addNewTag = async (req, res: Response) => {
  if (!req.user || req.user === undefined) {
    return res.status(400).json({
      status: 2,
      message: "Invalid User",
    });
  }
  const { body } = req;
  const { status, data, message } = await TagService.addBulkTags({ ...body });
  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
const getTags = async (req, res: Response) => {
  if (!req.user || req.user === undefined) {
    return res.status(400).json({
      status: 2,
      message: "Invalid User",
    });
  }
  const { body } = req;
  const { status, data, message } = await TagService.getTags({ ...body });
  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
const getEntityTags = async (req, res: Response) => {
  if (!req.user || req.user === undefined) {
    return res.status(400).json({
      status: 2,
      message: "Invalid User",
    });
  }
  const { body } = req;
  const {
    count,
    skip,
    entityFilterType,
    title,
  }: EntityInterfaces.IFilterEntity = body;

  const { status, data, message } = await TagService.getEntityTags({
    count,
    skip,
    entityFilterType,
    title,
  });

  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
export default {
  addNewTag,
  getTags,
  getEntityTags,
};
