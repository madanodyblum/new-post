import { Schema, Types, model, Document } from "mongoose";

const CollectionName = "users";

export interface IUserModel extends Document {
  userName: string;
  name: string;
  lastName: string;
  hash_passWord: string;
  isEmailVerified: boolean;
  email: string;
  deActivated: boolean;
  role: string;
  avatar: string;
  bio: string;
  city: string;
  country: string;
  gender: number;
  birthDay: string;
  token: [
    {
      token: string;
      device: string;
      createdDate: Date;
    },
  ];
}

const UsersSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      maxlength: 40,
      index: true,
      trim: true,
    },
    name: {
      type: String,
      maxlength: 40,
      required: true,
    },
    email: {
      type: String,
      maxlength: 40,
      required: true,
    },
    lastName: {
      type: String,
      maxlength: 40,
      required: true,
    },
    hash_passWord: {
      type: String,
    },

    isEmailVerified: {
      type: Boolean,
      default: true,
    },
    deActivated: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      maxlength: 50,
      default: "user",
    },
    avatar: {
      type: String,
    },
    bio: {
      type: String,
      maxlength: 130,
      default: "",
    },
    city: {
      maxlength: 40,
      type: String,
    },
    country: {
      maxlength: 40,
      type: String,
    },
    gender: {
      type: Number,
      required: true,
    },
    birthDay: {
      type: Date,
      default: "",
    },
    token: [
      {
        token: String,
        device: String,
        createdDate: Date,
      },
    ],
  },
  {
    timestamps: true,
  },
);
UsersSchema.set("timestamps", true);

export default model<IUserModel>(CollectionName, UsersSchema);
