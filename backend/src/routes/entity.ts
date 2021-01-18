import { EntityController } from "../controllers";

import { Router } from "express";
import { AuthCheck } from "../middlewares";
/**
 * TODO 1. add entity
 * TODO 2. Get eneties for post(s).
 * TODO 3. Get entities for comment(s).
 * TODO 4. Update entity for post or comment.
 * TODO 5. Delete entity from post or comment.
 */
const router = Router();
router.post("/entites/new", AuthCheck, EntityController.addEntity);
router.delete("/entites/delete", AuthCheck, EntityController.deleteEntity);
router.get("/entites/getentites", AuthCheck, EntityController.getEntites);
router.put("/entities/update", AuthCheck, EntityController.updateEntites);
export default router;
