/**
 * DONE 1. add entity
 * DONE 2. Get eneties for post(s).
 * DONE 3. Get entities for comment(s).
 * DONE - 4. Update entity for post or comment.
 * DONE - 5. Delete entity from post or comment.
 * NOTE this service should done in best approch.
 */

import EntityInterfaces from "../interfaces/entity";
import { IResultService, Status } from "../interfaces/general";
import EntityModel, { IEntity } from "../models/entity";
import { Types } from "mongoose";
import { LoggerService } from "../logger";
const EntityService = {
  add: async (
    entityData: EntityInterfaces.IEntity,
  ): Promise<IResultService<IEntity>> => {
    try {
      const newEntity = new EntityModel({
        ...entityData,
      });
      const entity = await newEntity.save();
      LoggerService.silly(
        `entity created ${entityData.id} --- ${entityData.refId}`,
      );
      return {
        data: entity,
        status: Status.ok,
      };
    } catch (e) {
      LoggerService.error(
        `error occured on ${entityData.id} --- ${entityData.refId}`,
      );
      return { status: 2 };
    }
  },
  addBulk: async (
    entityData: EntityInterfaces.IEntity[],
  ): Promise<IResultService<any>> => {
    return EntityModel.collection
      .insertMany(entityData, { ordered: false })
      .then((x) => {
        return {
          data: x.insertedIds,
          status: Status.ok,
        };
      })
      .catch((x) => {
        return {
          status: Status.hasError,
        };
      });
  },
  getEntities: async ({
    refType,
    refId,
  }: EntityInterfaces.IFilterEntity): Promise<IResultService<IEntity[]>> => {
    try {
      const getData = await EntityModel.find({
        refType: refType,
        refId: new Types.ObjectId(refId),
      }).exec();
      return {
        status: 1,
        data: getData,
      };
    } catch (e) {
      return {
        message: e,
        status: 2,
        data: [],
      };
    }
  },
  updateEntity: async (
    { refId, refType }: EntityInterfaces.IFilterEntity,
    entityToUpdata: EntityInterfaces.IEntity[],
  ): Promise<IResultService<IEntity>> => {
    try {
      await EntityModel.deleteMany({
        refId: new Types.ObjectId(refId),
        refType: refType,
      }).exec();
      LoggerService.silly(`entities are deleted ${refId} --- ${refType}`);
      await EntityService.addBulk(entityToUpdata);
      LoggerService.silly(`entities are created ${refId} --- ${refType}`);
      return { status: 1 };
    } catch {}
    return { status: 2 };
  },
  deleteEntity: async ({
    refId,
    refType,
    _id,
  }: EntityInterfaces.IFilterEntity): Promise<IResultService<any>> => {
    // NOTE - if _id is null it will be delete all entites of post or comment filtered
    try {
      let match: any = {};
      if (_id) {
        match._id = new Types.ObjectId(_id);
      }
      if (refId) {
        match.refId = new Types.ObjectId(refId);
      }
      if (refType) {
        match.refType = refType;
      }
      await EntityModel.deleteMany({ ...match }).exec();
      LoggerService.silly(`all entites are deleted  ${refId} --- ${refType}`);
    } catch (e) {
      LoggerService.error(`error has been occred in  ${refId} --- ${refType}`);
      LoggerService.error(e);
    }
    return {
      status: 1,
    };
  },
};
export default EntityService;
