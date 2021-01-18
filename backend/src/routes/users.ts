import { UserController } from "../controllers";
import { Router } from "express";
import { AuthCheck } from "../middlewares";
const router = Router();
router.post("/users/signup", UserController.signUp);
router.post("/users/signin", UserController.signIn);
router.post("/users/signout", UserController.signOut);
router.post("/users/setbio", AuthCheck, UserController.setBio);
router.get("/users/getuserprofile", AuthCheck, UserController.getUserProfile);
router.post(
  "/users/updateuserprofile",
  AuthCheck,
  UserController.updateUserProfile,
);
router.post("/users/deactiveuser", AuthCheck, UserController.deActiveUser);
router.post("/users/activeuser", AuthCheck, UserController.activeUser);
router.post(
  "/users/updateuseravatar",
  AuthCheck,
  UserController.updateUserAvatar,
);
router.post("/users/updatepassword", AuthCheck, UserController.updatePassword);
router.post("/users/usercount", AuthCheck, UserController.signIn);
router.get("/users/usersearch", AuthCheck, UserController.searchUser);
export default router;
