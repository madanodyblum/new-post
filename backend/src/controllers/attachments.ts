import _ from "lodash";
import { AttachmentService } from "../services";
import Busboy from "busboy";
import path from "path";
import fs from "fs-extra";
import { AttachmentDTO } from "../models/attachments";
import { IResultService } from "../interfaces/general";
import { Response, Request } from "express";
import AttachmentInterface from "../interfaces/attachment";
const uploadFile = async (req, res) => {
  let busboy = new Busboy({
    headers: req.headers,
    limits: {
      files: 1,
      fileSize: 100 * 1024 * 1024, // 100mb limit
    },

    limits: {
      files: 5,
      master
      fileSize: 100 * 1024 * 1024, // 100mb limit
    },
  });

  let object: AttachmentInterface.IObjectUpload = {};

  let error;

  if (_.isUndefined(req.user))
    return res.status(401).send({ status: 2, message: "Invalid id" });
  object.id = req.user.id;
  const attachment_temp = await AttachmentService.addFile({
    author: {
      id: object.id,
      userName: req.user.userName,
    },
    title: "filename",
    fileType: "object.folder",
  });
  if (attachment_temp.status != 1) {
    return res.status(500).send(attachment_temp);
  }
  let attachment: AttachmentDTO = attachment_temp.data;
  busboy.on("file", function (fieldname, file, filename, encoding, mimetype) {
    if (
      mimetype.indexOf("image/") === -1 &&
      mimetype.indexOf("video/") === -1 &&
      mimetype.indexOf("text/") === -1 &&
      mimetype.indexOf("audio/mpeg") === -1 &&
      mimetype.indexOf("audio/mp3") === -1 &&
      mimetype.indexOf("audio/wav") === -1 &&
      mimetype.indexOf("application/x-zip-compressed") === -1 &&
      mimetype.indexOf("application/pdf") === -1 &&
      //  Office Mime-Types
      mimetype.indexOf("application/msword") === -1 &&
      mimetype.indexOf(
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ) === -1 &&
      mimetype.indexOf("application/vnd.ms-excel") === -1 &&
      mimetype.indexOf(
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ) === -1
    ) {
      error = {
        status: 500,
        message: "Invalid File Type",
      };

      return file.resume();
    }

    const savePath = path.join(__dirname, "../../public/uploads/");
    let bytes = 0;
    file.on("data", function (data) {
      bytes = bytes + data.length;
    });
    file.on("end", () => {
      object.fileSize = bytes;
    });

    if (!fs.existsSync(savePath)) fs.ensureDirSync(savePath);
    object._idfile = attachment_temp.data._id;
    object.ext = path.extname(filename);

    const savePathTemp = path.join(
      "public/uploads/",
      object._idfile + object.ext,
    );

    object.filePath = path.join(savePath, object._idfile + object.ext);
    file.pipe(fs.createWriteStream(object.filePath));
    object.title = filename;
    object.type = fieldname;
    object.contenttype = mimetype;
    object.pathdownload = savePathTemp;
  });

  busboy.on("finish", async function () {
    if (error) return res.status(error.status).send(error.message);
    if (!fs.existsSync(object.filePath)) {
      await AttachmentService.deleteFile({ _id: attachment_temp.data._id });
      return res.status(500).send("File failed to save to disk");
    }
    if (
      _.isUndefined(object.type) ||
      _.isUndefined(object.title) ||
      _.isUndefined(object.fileSize) ||
      _.isUndefined(object.ext)
    ) {
      fs.unlinkSync(object.filePath);
      await AttachmentService.deleteFile({ _id: attachment_temp.data._id });
      return res.status(500).send("Invalid Form Data");
    }

    attachment.title = object.title;
    attachment.fileSize = object.fileSize;
    attachment.fileType = object.ext;
    attachment.contentType = object.contenttype;
    attachment.path = object.pathdownload;
    const updateResult = await AttachmentService.updateFile(attachment);

    if (updateResult.status == 1) {
      delete attachment.path;
      let resultData: IResultService<AttachmentDTO> = {
        status: 1,
        data: attachment,
      };
      return res.status(200).send(resultData);
    }
    let resultData: IResultService<AttachmentDTO> = {
      status: 2,
    };
    return res.status(500).send(resultData);
  });
  req.pipe(busboy);
};
const downloadFile = async (req, res) => {
  var id = req.params.id;
  console.log(req.params);
  if (_.isUndefined(id)) {
    return res.status(400).json({
      status: 2,
      message: "Invalid id",
    });
  }

  const fileData = await AttachmentService.getFile({ _id: id });
  const { data, status } = fileData;
  if (_.isUndefined(data)) {
    return res.status(400).json({
      status: 2,
      message: "Invalid id",
    });
  }

  var savePath = path.join(__dirname, "../../public/uploads/");
  var savepathtemp = path.join(savePath, data._id + data.fileType);
  var stat = fs.statSync(savepathtemp);

  res.writeHead(200, {
    "Content-Type": data.contentType,
    "Content-Length": stat.size,
  });

  var readStream = fs.createReadStream(savepathtemp);
  // We replaced all the event handlers with a simple call to readStream.pipe()
  readStream.pipe(res);
};

const deleteFile = async (req, res: Response) => {
  var id = req.params.id;
  if (_.isUndefined(id)) {
    return res.status(400).json({
      status: 2,

      message: "Invalid id",
    });
  }

  if (_.isUndefined(req.user)) {
    return res.status(400).json({
      status: false,
      message: "Invalid id",
    });
  }
  const { status, message } = await AttachmentService.deleteFile({ _id: id });
  if (status == 1) {
    return res.status(200).send({
      status: 1,
    });
  } else {
    return res.status(500).send({
      status: 2,
      message: message,
    });
  }
};
export default { uploadFile, downloadFile, deleteFile };
