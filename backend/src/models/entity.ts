import EntityInterfaces from "../interfaces/entity";
import { Schema, Types, Document, model } from "mongoose";

export interface IEntity extends Document {
  // id of tag or user id
  id: Types.ObjectId;
  entityType: EntityInterfaces.EntityType;
  url: string;
  title: string;
  offset: number;
  length: number;
  refType: number;
  refId: Types.ObjectId;

  createdAt: Date;
  updatedAt: Date;
}
var entitySchema = new Schema(
  {
    id: Schema.Types.ObjectId,
    entityType: {
      type: Number,
      enum: EntityInterfaces.EntityType,
      required: true,
    },
    url: String,
    title: String,
    offset: Number,
    length: Number,
    refType: {
      type: Number,
      enum: EntityInterfaces.RefType,
      required: true,
    },
    refId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model<IEntity>("entities", entitySchema);
