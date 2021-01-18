export enum Status {
  ok = 1,
  hasError = 2,
  exited = 3,
  userNotExited = 4,
  passwordInvalid = 5,
  emailNotVerifid = 6,
  inActiveUser = 7,
}

export interface IFilterGeneral {
  count?: number | 20;
  skip?: number;
  offset?: number;
}
export interface IResultService<T> {
  data?: T;
  status: Status;
  message?: any;
}
