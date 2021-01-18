export interface IUserDTO {
  _id?: string;
  userName?: string;
  name?: string;
  lastName?: string;
  birthDay?: Date;
  password?: string;
  email?: string;
  city?: string;
  country?: string;
  gender?: number;
  avatar?: string;
  perviuosPassword?: string;
  bio?: string;
  device?: string;
  token?: string;
  searchText?: string;
}
export interface IToken {
  _id: string;
  token: string;
  device: string;
  createdDate: Date;
}
export interface IUser {
  _id: string;
  name: string;
  lastName: string;
  birthDay: string;
  userName: string;
  hash_passWord?: string;
  email: string;
  city: string;
  country: string;
  gender: number;
  token?: string;
}
export interface IAuthUser {
  _id: string;
  userName: string;
}
