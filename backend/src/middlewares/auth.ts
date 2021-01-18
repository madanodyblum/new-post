import { AuthService } from "../services";
import { LoggerService } from "../logger";
import { Response, Request, NextFunction } from "express";

export default async (req, res: Response, next: NextFunction) => {
  //get the token from the header if present
  let token = req.headers["x-access-token"] || req.headers["authorization"];

  //if no token found, return response (without going to the next middelware)
  if (!token) {
    LoggerService.error("Access denied. No token provided.");
    return res.status(401).send({
      status: 2,
      message: "Access denied. No token provided.",
    });
  }
  token = token.toString().replace("Bearer", "").trim();
  try {
    //if can verify the token, set req.user and pass to next middleware
    const decoded = await AuthService.validateToken(token.toString());
    console.log(decoded);

    if (!decoded) {
      LoggerService.error("Invalid token.");
      return res.status(401).send({
        data: {
          message: "Invalid token.",
        },
      });
    }
    req.user = {
      id: decoded._id,
      userName: decoded.userName,
    };

    next();
  } catch (ex) {
    LoggerService.error(`Invalid token error: ${ex}`);

    return res.status(401).send("Invalid token.");
  }
};
