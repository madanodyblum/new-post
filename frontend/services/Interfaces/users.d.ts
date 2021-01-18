namespace UserNamespace {
  interface ILogin {
    userName: string;
    password: string;
    device: string;
  }
  interface ISignUp extends ILogin {
    name: string;
    lastName: string;
    email: string;
    birthDay?: Date;
    city?: string;
    country?: string;
    gender?: number;
    avatar?: string;
  }
  interface IBio {
    bio: string;
  }
  interface IForgotPassword {
    password: string;
    perviuosPassword: string;
  }
  interface IUserDTO extends ISignUp, IForgotPassword {
    _id?: string;
  }
  interface IUser {
    _id?: string;
    name?: string;
    lastName?: string;
    birthDay?: string;
    userName?: string;
    email?: string;
    city?: string;
    country?: string;
    gender?: number;
    token?: string;
    avatar?: string;
  }
  interface IUserSearch extends IUser {
    link?: string;
  }
  interface IFilter {
    _id?: string;
    name?: string;
    lastName?: string;
    birthDay?: string;
    userName?: string;
    email?: string;
    city?: string;
    country?: string;
    gender?: number;
    searchText?: string;
  }
}
