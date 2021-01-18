import ReactionInterfaces from "../interfaces/reaction";
import { Document, Types, model, Schema } from "mongoose";
// This reaction schema will be have all reactions of user for each comment and posts.
// The entityId is for mongodb id of post or comment.

export interface IReactionDTO extends Document {
  author: {
    id: Types.ObjectId;
    userName?: string;
  };
  entityType: number;
  entityId: Types.ObjectId;
  reactionType: Number;
}
var reactionShema = new Schema(
  {
    author: {
      id: { type: Types.ObjectId, required: true, ref: "users" },
      userName: {
        type: String,
        required: true,
      },
    },

    // It can be comment id or post id
    entityId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    entityType: {
      type: Number,
      enum: ReactionInterfaces.EEntityType,
      required: true,
    },
    // emoji id
    reactionType: {
      type: Number,
      enum: ReactionInterfaces.EReaction,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IReactionDTO>("reactions", reactionShema);
