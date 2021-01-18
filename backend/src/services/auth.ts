import { IAuthUser } from "../interfaces/users";
import jwt from "jsonwebtoken";
import { UserService } from ".";
const secretKey = "UtVbIVIA6nanVp8xccbouhIvl5ugAqkK";
const AuthService = {
  generateToken: async (_id, userName, device): Promise<string> => {
    let token = await jwt.sign(
      {
        _id,
        userName,
      },
      secretKey,
      { expiresIn: "1d" },
    );

    const { status } = await UserService.addToken({
      _id,
      device,
      token,
      createdDate: new Date(),
    });

    if (status != 1) {
      token = null;
    }
    return token;
  },
  validateToken: async (token: string): Promise<IAuthUser> => {
    const decoded = jwt.verify(token, secretKey);
    if (decoded) {
      const { userName, _id }: any = decoded;
      return { userName, _id };
    } else {
      return null;
    }
  },
  // TODO - Renew token
  renewToken: async ({ token, _id }) => {},
};
export default AuthService;
