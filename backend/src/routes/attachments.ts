import { AttachmentController } from "../controllers";
import { Router } from "express";
import { AuthCheck } from "../middlewares";
const router = Router();
router.post("/files/upload", AuthCheck, AttachmentController.uploadFile);
router.get("/files/download/:id", AuthCheck, AttachmentController.downloadFile);
router.delete("/files/delete/:id", AuthCheck, AttachmentController.deleteFile);

export default router;
