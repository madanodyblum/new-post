import PrivacyInterfaces from "../interfaces/privacy";
import { Schema, model, Document, Types } from "mongoose";
/**
 * NOTE - when the privacyType!=Public-Privacy then I'ld to lookup in Privacy collenction for privacy of post.
 *
 */
const CollectionName = "posts";
export interface IPostDTO extends Document {
  author: {
    id: Types.ObjectId;
    userName?: string;
  };
  deleted: boolean;
  text: string;
  entities: Types.ObjectId[];
  textFormat: object;
  files: Types.ObjectId[];
  privacyType: PrivacyInterfaces.EPrivacy;
  isReported: boolean;
  privactId: Types.ObjectId;
}

const PostSchema = new Schema(
  {
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
    deleted: {
      type: Boolean,
      default: false,
      required: true,
    },
    text: {
      type: String,
      default: "",
      required: true,
    },
    entities: [
      {
        type: Schema.Types.ObjectId,
        ref: "entites",
      },
    ],
    textFormat: {
      type: Object,
    },
    files: [
      {
        type: Schema.Types.ObjectId,
      },
    ],
    isReported: {
      type: Boolean,
    },
    privacyType: {
      type: Number,
      enum: PrivacyInterfaces.EPrivacy,
      required: true,
    },
    privactId: {
      type: Schema.Types.ObjectId,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);
export default model<IPostDTO>(CollectionName, PostSchema);
