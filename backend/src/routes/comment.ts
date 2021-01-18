import { TagController } from "../controllers";
import { Router } from "express";
import { AuthCheck } from "../middlewares";
const router = Router();
router.post("comments/addcomment", AuthCheck, TagController.addNewTag);
router.delete(
  "comments/deletecomment/{id}",
  AuthCheck,
  TagController.addNewTag,
);
router.put("comments/editcomment", AuthCheck, TagController.addNewTag);
router.post("comments/replycomment", AuthCheck, TagController.addNewTag);
router.get("comments/getcomment", AuthCheck, TagController.addNewTag);

export default router;
