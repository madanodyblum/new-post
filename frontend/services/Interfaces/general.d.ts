namespace GlobalNamespace {
  export enum Status {
    ok = 1,
    hasError = 2,
    exited = 3,
    userNotExited = 4,
    passwordInvalid = 5,
    emailNotVerifid = 6,
    inActiveUser = 7,
  }
  interface IResultService<T> {
    data?: T;
    status: Status;
    message?: any;
  }
  interface IBodyRequest {
    methodType: Method;
    url: string;
    params?: any;
    payload?: any;
    needAuth?: boolean;
    formData?: any;
  }
}
