import { Schema, Types, model, Document } from "mongoose";

const COLLECTION = "attachments";
export interface AttachmentDTO extends Document {
  title: string;
  path: string;
  type: string;
  author: {
    id: Types.ObjectId;
    userName: string;
  };
  fileType: string;
  fileSize: number;
  deleted: boolean;
  contentType: string;
}
var attachmentSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  path: {
    type: String,
    required: false,
  },
  fileType: {
    type: String,
    required: true,
  },
  author: {
    id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    userName: {
      type: String,
    },
  },
  contentType: String,
  fileSize: Number,
  deleted: Boolean,
});

export default model<AttachmentDTO>(COLLECTION, attachmentSchema);
