import PrivacyInterfaces from "../interfaces/privacy";
import { Schema, model } from "mongoose";
const CollectionName = "stories";

const StorySchema = new Schema(
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
    },
    coverImage: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    textFormat: {
      type: Object,
    },
    linkUrl: {
      type: String,
    },
    privacy: {
      type: Number,
      enum: PrivacyInterfaces.EPrivacy,
      required: true,
      default: 4,
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
export default model(CollectionName, StorySchema);
