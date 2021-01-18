import { IToken, IUser, IUserDTO } from "../interfaces/users";
import { IResultService, Status } from "../interfaces/general";
import UserModel, { IUserModel } from "../models/users";
import { PasswordService } from ".";
import { AuthService } from ".";
import { LoggerService } from "../logger";
import { Schema, Types } from "mongoose";
// TODO - validate email state
const UsersService = {
  SignUp: async (userInput: IUserDTO): Promise<IResultService<IUser>> => {
    try {
      const userData = await UserModel.findOne({
        userName: userInput.userName,
      }).exec();
      if (userData) {
        return {
          status: Status.exited,
        };
      } else {
        const pass = await PasswordService.doHash(userInput.password);
        const user = new UserModel({ ...userInput, hash_passWord: pass });
        const newUser: any = await user.save();
        if (newUser) {
          //TODO check if password is returned or not
          const userData: IUser = {
            _id: newUser._id,
            ...newUser._doc,
          };

          delete userData.hash_passWord;
          return {
            status: Status.ok,
            data: userData,
          };
        } else {
          return {
            status: Status.hasError,
          };
        }
      }
    } catch (e) {
      LoggerService.error(`error on signUp user error: ${e}`);
      return {
        status: Status.hasError,
        message: e,
      };
    }
  },
  SignIn: async (userInput: IUserDTO): Promise<IResultService<IUser>> => {
    try {
      const user = await UserModel.findOne({
        userName: userInput.userName,
      }).exec();
      console.log('22', userInput.userName);
      if (user) {
        const passwordValid = await PasswordService.doCompare(
          userInput.password,
          user.hash_passWord
        );
        //invalid password
        if (!passwordValid) {
          return {
            status: Status.passwordInvalid,
          };
        }

        //Email not verfied
        if (!user.isEmailVerified) {
          return {
            status: Status.emailNotVerifid,
          };
        }

        // InActive user
        if (user.deActivated) {
          return {
            status: Status.inActiveUser,
          };
        }
        const token = await AuthService.generateToken(
          user._id,
          user.userName,
          userInput.device
        );
        if (token == null) {
          LoggerService.error(`token can't be generated for user ${user._id}`);
          return {
            status: Status.hasError,
            message: "token can't be generated",
          };
        }
        let doc: IUser = user["_doc"];
        doc.token = token;
        delete doc.hash_passWord;
        return {
          data: doc,
          status: Status.ok,
        };
      }

      return {
        status: Status.userNotExited,
      };
    } catch (e) {
      LoggerService.error(`error on SignIn user error: ${e}`);
      return {
        status: Status.hasError,
        message: e,
      };
    }
  },
  addToken: async ({
    _id,
    createdDate,
    device,
    token,
  }: IToken): Promise<IResultService<IUser>> => {
    try {
      console.log(device);
      const user = await UserModel.updateOne(
        { _id: new Types.ObjectId(_id) },
        {
          $push: {
            token: {
              createdDate,
              device,
              token,
            },
          },
        }
      ).exec();
      if (user) {
        return {
          status: 1,
        };
      }
    } catch (e) {
      return {
        status: Status.hasError,
        message: e,
      };
    }
  },

  signOut: async ({
    _id,
    token,
    device,
  }: IUserDTO): Promise<IResultService<IUser>> => {
    const user = await UserModel.updateOne(
      { _id: new Types.ObjectId(_id) },
      { $pull: { token: { token, device } } }
    ).exec();
    if (user) {
      return {
        status: 1,
      };
    }
    return {
      status: Status.hasError,
    };
  },

  setBio: async ({
    _id,
    bio,
  }: Pick<IUserDTO, "_id" | "bio">): Promise<IResultService<IUser>> => {
    const user = await UserModel.updateOne(
      { _id: _id },
      { $set: { bio: bio } }
    ).exec();
    if (user) {
      return {
        status: 1,
      };
    }
    return {
      status: Status.hasError,
    };
  },
  getUserProfile: async (
    userInput: IUserDTO
  ): Promise<IResultService<IUser>> => {
    const user = await UserModel.findOne({ _id: userInput._id }).exec();

    return {
      data: {
        ...user,
        token: null,
      },
      status: 1,
    };
  },
  updateUserProfile: async (
    userInput: IUserDTO
  ): Promise<IResultService<IUser>> => {
    let updateData: IUserDTO = {
      ...userInput,
    };
    delete updateData.password;
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: userInput._id },
      { updateData }
    ).exec();
    if (updatedUser) {
      return {
        status: 1,
      };
    }
    return {
      status: Status.hasError,
    };
  },
  deActiveUser: async (
    userInput: Pick<IUserDTO, "_id">
  ): Promise<IResultService<IUser>> => {
    const deActiveUser = await UserModel.findOneAndUpdate(
      { _id: userInput._id },
      { $set: { deActiveUser: true } }
    ).exec();

    if (deActiveUser) {
      return {
        status: 1,
      };
    }
    return {
      status: Status.hasError,
    };
  },
  activeUser: async (userInput: IUserDTO): Promise<IResultService<IUser>> => {
    const activeUser = await UserModel.findOneAndUpdate(
      { _id: userInput._id },
      { $set: { deActivated: false } }
    ).exec();
    if (activeUser) {
      return {
        status: 1,
      };
    }
    return {
      status: Status.hasError,
    };
  },
  updateUserAvatar: async (
    userInput: IUserDTO
  ): Promise<IResultService<IUser>> => {
    const userUpdated = await UserModel.findOneAndUpdate(
      { _id: userInput._id },
      { $set: { avatar: userInput.avatar } }
    ).exec();
    if (userUpdated) {
      return {
        status: 1,
      };
    }
    return {
      status: Status.hasError,
    };
  },
  updatePassword: async (
    userInput: IUserDTO
  ): Promise<IResultService<IUser>> => {
    const user = await UserModel.findOne({ _id: userInput._id }).exec();
    if (user) {
      const passwordValidate = await PasswordService.doCompare(
        userInput.perviuosPassword,
        user.hash_passWord
      );

      if (passwordValidate) {
        const hashPassword = await PasswordService.doHash(userInput.password);
        await UserModel.findOneAndUpdate(
          { _id: userInput._id },
          { $set: { hash_passWord: hashPassword } }
        );
        return {
          status: 1,
        };
      } else {
        return {
          status: Status.passwordInvalid,
        };
      }
    }
    return {
      status: Status.userNotExited,
    };
  },
  userCount: async (): Promise<IResultService<{ count: number }>> => {
    const count = await UserModel.count({}).exec();

    return {
      data: { count: count },
      status: Status.ok,
    };
  },
  userSearch: async ({
    searchText,
  }: IUserDTO): Promise<IResultService<IUserModel[]>> => {
    try {
      if (searchText.length == 0) {
        return {
          status: 2,
          message: "'SearchText' should be have a value",
        };
      }
      const listUser = await UserModel.find({
        $or: [
          {
            userName: { $regex: searchText, $options: "i" },
          },
          {
            name: { $regex: searchText, $options: "i" },
          },
          {
            lastName: { $regex: searchText, $options: "i" },
          },
        ],
      })
        .select("name lastName userName _id")
        .limit(10)
        .exec();

      return {
        status: 1,
        data: listUser,
      };
    } catch (e) {
      LoggerService.error(`error occured on 'userSearch' error message: ${e}`);
      return {
        message: e,
        status: Status.hasError,
      };
    }
  },
};
export default UsersService;
