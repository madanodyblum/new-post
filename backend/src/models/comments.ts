import { Document, Types, model, Schema } from "mongoose";

/**
 * Like facebook we just have one level on comment(s).
 * then I'll use replyId as a parent Id of all childs comments.
 */
export interface CommentDTO extends Document {
  author?: {
    id: Types.ObjectId;
    userName: String;
  };
  entities?: [Types.ObjectId];
  post?: Types.ObjectId;
  replyId?: Types.ObjectId;
  comment?: string;
  deleted?: boolean;
  files?: Types.ObjectId;
}

var commentsSchema = new Schema(
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
    post: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "posts",
    },
    replyId: {
      type: Schema.Types.ObjectId,
      ref: "comments",
    },
    comment: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
      required: true,
    },
    files: [
      {
        type: Schema.Types.ObjectId,
        ref: "attachments",
      },
    ],
  },

  {
    timestamps: true,
  },
);
export default model<CommentDTO>("comments", commentsSchema);
