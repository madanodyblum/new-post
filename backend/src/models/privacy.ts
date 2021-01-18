import PrivacyInterfaces from "../interfaces/privacy";
import { Schema, Types, model, Document } from "mongoose";

/**
 * NOTE - This collection is for check the privacy of post(s)/story.
 */
const CollectionName = "privies";

export interface IPrivacy extends Document {
  author: {
    id: Types.ObjectId;
    userName: string;
  };
  typeEntity: PrivacyInterfaces.EEntityType;
  entityId: Types.ObjectId;
  privacy: PrivacyInterfaces.EPrivacy;
  customUser: Types.ObjectId[];
}
const PrivacySchema = new Schema(
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

    typeEntity: {
      type: Number,
      enum: PrivacyInterfaces.EEntityType,
      required: true,
    },
    entityId: {
      type: Schema.Types.ObjectId,
      unique: true,
      required: true,
    },
    privacy: {
      type: Number,
      enum: PrivacyInterfaces.EPrivacy,
      required: true,
      default: 1,
    },
    customUser: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  {
    timestamps: true,
  },
);
export default model<IPrivacy>(CollectionName, PrivacySchema);
