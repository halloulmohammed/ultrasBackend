import express from "express";

import {
  getArticles,
  createArticle,
  updateArticle,
  addLike,
  removeLike,
  addComment,
  removeComment,
  addReply,
  removeReply,
  likeComment,
  removeCommentLike,
  getArticle,
  deleteArticle,
} from "../controllers/articleControllers.js";
// import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(getArticles).post(createArticle);
router.route("/:id").get(getArticle).put(updateArticle).delete(deleteArticle);

router.put("/like/:id", addLike);
router.put("/removeLike/:id", removeLike);
router.put("/addComment/:id", addComment);
router.put("/removeComment/:id", removeComment);
router.put("/likeComment/:id", likeComment);
router.put("/removeCommentLike/:id", removeCommentLike);
router.put("/addReply/:id", addReply);
router.put("/removeReply/:id", removeReply);

export default router;
