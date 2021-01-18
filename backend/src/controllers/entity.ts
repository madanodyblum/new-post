/**
 * DONE 1. add entity
 * DONE 2. Get eneties for post(s).
 * DONE 3. Get entities for comment(s).
 * DONE 4. Update entity for post or comment.
 * TODO 5. Delete entity from post or comment.
 */
import { EntityService } from "../services";
import { Request, Response } from "express";
import EntityInterfaces from "../interfaces/entity";
const addEntity = async (req, res: Response) => {
  if (!req.user || req.user === undefined) {
    return res.status(400).json({
      status: 2,
      message: "Invalid User",
    });
  }
  const { body } = req;

  const { status, data, message } = await EntityService.addBulk({ ...body });

  return res.status(status === 1 ? 200 : 400).send({ status, data, message });
};
const getEntites = async (req, res: Response) => {
  if (!req.user || req.user === undefined) {
    return res.status(400).json({
      status: 2,
      message: "Invalid User",
    });
  }
  const { params } = req;

  const { status, data, message } = await EntityService.getEntities({
    refId: params.refId,
    refType: params.refType == EntityInterfaces.RefType.Post ? 1 : 2,
  });

  return res.status(status === 1 ? 200 : 400).send({ status, data, message });
};

const updateEntites = async (req, res: Response) => {
  if (!req.user || req.user === undefined) {
    return res.status(400).json({
      status: 2,
      message: "Invalid User",
    });
  }
  
  const { body } = req;
  const refType = parseInt(EntityInterfaces.RefType[body.refType]);
  const { status, data, message } = await EntityService.updateEntity(
    {
      refId: body.refId,
      refType: refType,
    },
    { ...body.entityData },
  );

  return res.status(status === 1 ? 200 : 400).send({ status, data, message });
};

const deleteEntity = async (req, res: Response) => {
  if (!req.user || req.user === undefined) {
    return res.status(400).json({
      status: 2,
      message: "Invalid User",
    });
  }
  const { params } = req;
  const { status, data, message } = await EntityService.deleteEntity({
    _id: params.id,
    ...params,
  });
  return res.status(status === 1 ? 200 : 400).send({ status, data, message });
};

export default {
  addEntity,
  getEntites,
  updateEntites,
  deleteEntity,
};
