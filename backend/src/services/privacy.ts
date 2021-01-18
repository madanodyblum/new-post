import PrivacyInterfaces from "../interfaces/privacy";
import { IResultService, Status } from "../interfaces/general";
import { LoggerService } from "../logger";
import PrivacyModel, { IPrivacy } from "../models/privacy";
/**
 * DONE - 1. Add privacy
 * DONE - 2. Edit Privacy
 * DONE - 3. Get Privacy
 */
const PrivacyServices = {
  addPrivacy: async (
    privacyData: PrivacyInterfaces.IPrivacyBody,
  ): Promise<IResultService<IPrivacy>> => {
    try {
      const newPrivacy = new PrivacyModel({ ...privacyData });

      await newPrivacy.save();
      LoggerService.silly(`new privacy was created.`);
      return {
        data: newPrivacy,
        status: Status.ok,
      };
    } catch (e) {
      LoggerService.error(`error has occured on add new privacy. error:${e}`);
      return {
        message: e,
        status: Status.hasError,
      };
    }
  },
  editPrivacy: async ({
    _id,
    customUser,
    privacy,
  }: PrivacyInterfaces.IPrivacyBody): Promise<IResultService<any>> => {
    try {
      let update: any = {
        privacy,
      };
      if (customUser?.length > 0) {
        update.customUser = customUser;
      }
      await PrivacyModel.findOneAndUpdate({ _id }, update).exec();
      LoggerService.silly(`privacy was udated.`);
      return {
        status: Status.ok,
      };
    } catch (e) {
      LoggerService.error(
        `error has occured on update privacy data. error:${e}`,
      );
      return {
        message: e,
        status: Status.hasError,
      };
    }
  },
  getPrivacy: async ({
    entityId,
    _id,
  }: PrivacyInterfaces.IPrivacyBody): Promise<IResultService<IPrivacy>> => {
    try {
      let match: any = {};
      if (_id) {
        match._id = _id;
      }
      if (entityId) {
        match.entityId = entityId;
      }
      const privacyData = await PrivacyModel.findOne(match).exec();
      return {
        data: privacyData,
        status: Status.ok,
      };
    } catch (e) {
      LoggerService.error(`error has occured on get privacy data. error:${e}`);
      return {
        message: e,
        status: Status.hasError,
      };
    }
  },
};
export default PrivacyServices;
