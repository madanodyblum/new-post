import { Router } from "express";
import TagRouter from "./tags";
import PostRouter from "./posts";
import CommentRouter from "./comment";
import UserRouter from "./users";
import FilesRouter from "./attachments";
import EntityRouter from "./entity";
import ReactionRouter from "./reactions";
import FollowRouter from "./follow";
/**
 * DONE - Tag
 * DONE - Post
 * DONE - Comment
 * DONE - Reaction
 * TODO - Story
 * DONE - Follow
 * DONE - Entity
 * DONE - Attachment
 * DONE - User(s)
 */

const router = Router();
router.use(TagRouter);
router.use(PostRouter);
router.use(EntityRouter);
router.use(CommentRouter);
router.use(FollowRouter);
router.use(UserRouter);
router.use(FilesRouter);
router.use(ReactionRouter);
export default router;
