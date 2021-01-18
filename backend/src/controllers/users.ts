/**
 * DONE - SignUp
 * DONE - SignIn
 * DONE - setBio
 * DONE - getUserProfile
 * DONE - updateUserProfile
 * DONE - deActiveUser
 * DONE - activeUser
 * DONE - updateUserAvatar
 * DONE - updatePassword
 * DONE - userCount
 */

import { UserService } from "../services";
import { Request, Response } from "express";
import { IUserDTO } from "../interfaces/users";
import _ from "lodash";
const signUp = async (req, res: Response) => {
  const { body } = req;
  const newUser: IUserDTO = body;
  if (_.isUndefined(newUser.userName))
    return res
      .status(400)
      .send({ status: 2, message: "userName is required." });
  if (_.isUndefined(newUser.password))
    return res
      .status(400)
      .send({ status: 2, message: "password is required." });
  if (_.isUndefined(newUser.name))
    return res.status(400).send({ status: 2, message: "name is required." });
  if (_.isUndefined(newUser.email))
    return res.status(400).send({ status: 2, message: "email is required." });

  const { status, data, message } = await UserService.SignUp({ ...newUser });
  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
const signIn = async (req, res: Response) => {
  const { body } = req;
  const { userName, password, device }: IUserDTO = body;
  if (_.isUndefined(userName))
    return res
      .status(400)
      .send({ status: 2, message: "userName is required." });
  if (_.isUndefined(password))
    return res
      .status(400)
      .send({ status: 2, message: "password is required." });
  const { status, data, message } = await UserService.SignIn({
    userName,
    password,
    device,
  });
  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
const setBio = async (req, res: Response) => {
  const { body } = req;
  const { bio }: Pick<IUserDTO, "bio"> = body;
  if (_.isUndefined(bio))
    return res.status(400).send({ status: 2, message: "Bio is required." });
  const { status, data, message } = await UserService.setBio({
    bio,
    _id: req.user.id,
  });
  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
const getUserProfile = async (req, res: Response) => {
  const { status, data, message } = await UserService.getUserProfile({
    _id: req.user.id,
  });
  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
const updateUserProfile = async (req, res: Response) => {
  const { body } = req;
  const newUser: IUserDTO = body;

  const { status, data, message } = await UserService.updateUserProfile({
    ...newUser,
  });
  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
const deActiveUser = async (req, res: Response) => {
  const { params } = req;
  const { status, data, message } = await UserService.deActiveUser({
    _id: params.id,
  });
  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
const activeUser = async (req, res: Response) => {
  const { params } = req;
  const { status, data, message } = await UserService.activeUser({
    _id: params.id,
  });
  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
const updateUserAvatar = async (req, res: Response) => {
  const { body } = req;
  const { avatar }: IUserDTO = body;
  const { status, data, message } = await UserService.updateUserAvatar({
    avatar,
    _id: req.user.id,
  });
  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
const updatePassword = async (req, res: Response) => {
  const { body } = req;
  const { password, perviuosPassword }: IUserDTO = body;
  const { status, data, message } = await UserService.updatePassword({
    password,
    perviuosPassword,
    _id: req.user.id,
  });
  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
const userCount = async (req, res: Response) => {
  const { status, data, message } = await UserService.userCount();
  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
const signOut = async (req, res: Response) => {
  const { params } = req;
  const { device } = params;
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  const { status, data, message } = await UserService.signOut({
    _id: req.user.id,
    token,
    device,
  });
  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
const searchUser = async (req, res: Response) => {
  const { query } = req;
  const { searchText } = query;
  console.log(query);
  const { status, data, message } = await UserService.userSearch({
    searchText,
  });
  return res.status(status === 1 ? 200 : 400).send({
    status,
    data,
    message,
  });
};
export default {
  signUp,
  signIn,
  setBio,
  getUserProfile,
  updateUserProfile,
  deActiveUser,
  searchUser,
  activeUser,
  updateUserAvatar,
  updatePassword,
  userCount,
  signOut,
};
