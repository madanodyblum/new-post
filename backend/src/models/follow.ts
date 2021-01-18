import { Schema, Types, model, Document } from "mongoose";
const CollectionName = "followers";

export interface FollowDTO extends Document {
  user: {
    id: Types.ObjectId;

    userName: string;
  };
  followersUser?: {
    id: Types.ObjectId;
    userName: string;
  };
  followersHashtags?: {
    id: Types.ObjectId;
    title: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}
const FollowSchema = new Schema(
  {
    user: {
      id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "users",
      },
      userName: {
        type: String,
      },
    },
    followersUser: {
      id: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      userName: {
        type: String,
      },
    },
    followersHashtags: {
      id: {
        type: Schema.Types.ObjectId,
        ref: "tags",
      },
      title: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  },
);
export default model<FollowDTO>(CollectionName, FollowSchema);
