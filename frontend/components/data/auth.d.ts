namespace AuthInterface {
  export enum ErrorValidation {
    Username = "username",
    Password = "password",
    Email = "email",
    RePassword = "repassword",
    Gender = "gender",
    None = "none",
    Name = "name",
    Lastname = "lastname",
    Country = "country",
    City = "city",
  }
  export interface IAuthForm {
    childern?: any;
    kindForm?: "Login" | "SignUp";
  }
  export interface IAuthGenral {
    handleChange?: any;
    handleSubmit?: Func<A>;
    validation?: IErrorProps;
  }
  export interface IErrorProps {
    message: string;
    error: ErrorValidation;
  }
  export interface ILoginProps extends IAuthGenral {
    username: string;
    password: string;
  }

  export interface ISignUpProps extends IAuthGenral {
    name: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    rePassword: string;
    gender: "Male" | "Female";
    agreeRols: boolean;
    isAcceptILegal: boolean;
  }
}
export default AuthInterface;
