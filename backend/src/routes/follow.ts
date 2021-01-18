import { FollowController } from "../controllers";
import { AuthCheck } from "../middlewares";
import { Router } from "express";
const router = Router();

router.post("/follow/followtag", AuthCheck, FollowController.followTag);
router.post("/follow/followUser", AuthCheck, FollowController.followUser);
router.post("/follow/followedTags", AuthCheck, FollowController.followedTags);
router.get("/follow/getFollowers", AuthCheck, FollowController.getFollowers);
router.get(
  "/follow/getFollowingUsers",
  AuthCheck,
  FollowController.getFollowingUsers,
);
router.get(
  "/follow/mostTagsFollowed",
  AuthCheck,
  FollowController.mostTagsFollowed,
);
router.get("/follow/unFollow", AuthCheck, FollowController.unFollow);

export default router;
