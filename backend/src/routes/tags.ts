import { TagController } from "../controllers";
import { Router } from "express";
import { AuthCheck } from "../middlewares";
const router = Router();
router.post("tags/addNewTag", AuthCheck, TagController.addNewTag);
router.get("tags/getEntityTags", AuthCheck, TagController.getEntityTags);
router.get("tags/getTags", AuthCheck, TagController.getTags);

export default router;
