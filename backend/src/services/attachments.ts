import _ from "lodash";
import { IResultService, Status } from "../interfaces/general";
import AttachmentModel, { AttachmentDTO } from "../models/attachments";
import { LoggerService } from "../logger";
import AttachmentInterface from "../interfaces/attachment";

/**
 * DONE - 1.Add file
 * DONE - 2.Get file
 * DONE - 3.Delete file
 */
const AttachmentsService = {
  addFile: async (
    fileData: AttachmentInterface.IAttachmentBody,
  ): Promise<IResultService<AttachmentDTO>> => {
    try {
      const newFile = new AttachmentModel({ ...fileData });
      await newFile.save();

      LoggerService.silly(`file was created.`);
      return {
        status: 1,
        data: newFile,
      };
    } catch (e) {
      LoggerService.error(`create file : ${e}`);
      return {
        status: Status.hasError,
        message: e,
      };
    }
  },
  getFile: async ({
    _id,
  }: AttachmentInterface.IAttachmentBody): Promise<
    IResultService<AttachmentDTO>
  > => {
    try {
      const getFile = await AttachmentModel.findOne({ _id }).exec();

      LoggerService.silly(`file data was loaded.`);
      return {
        status: 1,
        data: getFile,
      };
    } catch (e) {
      LoggerService.error(`error occured on load file data. message: ${e}`);
      return {
        status: Status.hasError,
        message: e,
      };
    }
  },
  deleteFile: async ({
    _id,
  }: AttachmentInterface.IAttachmentBody): Promise<
    IResultService<AttachmentDTO>
  > => {
    try {
      await AttachmentModel.deleteOne({ _id }).exec();

      LoggerService.silly(`file is deleted.`);
      return {
        status: 1,
      };
    } catch (e) {
      LoggerService.error(`error occured on delete file. message: ${e}`);
      return {
        status: Status.hasError,
        message: e,
      };
    }
  },
  updateFile: async (
    fileData: AttachmentDTO,
  ): Promise<IResultService<AttachmentDTO>> => {
    try {
      const updateResult = await AttachmentModel.findOneAndUpdate(
        { _id: fileData._id },
        fileData,
      ).exec();
      if (updateResult.isModified) {
        LoggerService.silly(`file was updated.`);
        return {
          status: 1,
        };
      } else {
        return {
          status: Status.hasError,
          data: updateResult,
        };
      }
    } catch (e) {
      LoggerService.error(`create file error: ${e}`);
      return {
        status: Status.hasError,
        message: e,
      };
    }
  },
};
export default AttachmentsService;
