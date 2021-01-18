import { Schema, Types, model, Document } from "mongoose";

const CollectionName = "tags";

export interface ITags extends Document {
  title: string;
  imgPath: string;

  createdAt?: Date;
  updatedAt?: Date;
}
const TagsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    imgPath: String,
  },
  {
    timestamps: true,
  },
);
TagsSchema.set("timestamps", true);
export default model<ITags>(CollectionName, TagsSchema);
