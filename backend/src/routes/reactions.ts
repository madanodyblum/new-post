import { ReactionController } from "../controllers";
import { Router } from "express";
import { AuthCheck } from "../middlewares";
/**
 * TODO - 1.Add reaction
 * TODO - 2.Delete reaction
 * TODO - 5.Update reaction
 * TODO - 3.Get reactions for posts or comments
 * TODO - 4.Get count of posts and comments reactions
 */

const router = Router();
router.post("/reactions/new", AuthCheck, ReactionController.addReaction);
router.post("/reactions/delete", AuthCheck, ReactionController.deleteReaction);
router.post("/reactions/update", AuthCheck, ReactionController.updateReaction);
router.get(
  "/reactions/getReactions",
  AuthCheck,
  ReactionController.getReactions,
);
router.get(
  "/reactions/getReactionCount",
  AuthCheck,
  ReactionController.getReactionsCount,
);

export default router;
