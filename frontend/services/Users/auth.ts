import { Http } from "../Http/index";
const prefixUrl = `${process.env.APP_URL}/users`;
const Auth = {
  signUp: async (
    userBody: UserNamespace.ISignUp,
  ): Promise<GlobalNamespace.IResultService<UserNamespace.IUser>> => {
    let response: GlobalNamespace.IResultService<UserNamespace.IUser>;
    try {
      response = await Http.Request({
        methodType: "post",
        url: `${prefixUrl}/signup`,
        payload: userBody,
        needAuth: false,
      });
    } catch (e) {
      response = {
        status: 2,
        message: e,
      };
    }
    return response;
  },
  signIn: async ({
    userName,
    password,
    device,
  }: UserNamespace.ILogin): Promise<
    GlobalNamespace.IResultService<UserNamespace.IUser>
  > => {
    let response: GlobalNamespace.IResultService<UserNamespace.IUser>;
    try {
      response = await Http.Request({
        methodType: "post",
        url: `${prefixUrl}/signin`,
        payload: { userName, password, device },
        needAuth: false,
      });
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      response = {
        status: 2,
        message: e,
      };
    }
    return response;
  },
  signOut: async (
    device: string,
  ): Promise<GlobalNamespace.IResultService<UserNamespace.IUser>> => {
    let response: GlobalNamespace.IResultService<UserNamespace.IUser>;
    try {
      response = await Http.Request({
        methodType: "post",
        url: `${prefixUrl}/signout`,
        payload: { device },
        needAuth: true,
      });
    } catch (e) {
      response = {
        status: 2,
        message: e,
      };
    }
    return response;
  },
};
export default Auth;
