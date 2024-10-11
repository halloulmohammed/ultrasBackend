import express from "express";

// import { admin } from "../middlewares/authMiddleware.js";
import { createPhoto, deletePhoto, getPhoto,getPhotos, updatePhoto,addLike, removeLike, addComment, removeComment, addReply, removeReply, likeComment, removeCommentLike } from "../controllers/photoControllers.js";

const router = express.Router();

router.route("/").get(getPhotos).post( createPhoto);
router
  .route("/:id")
  .get(getPhoto)
  .put( updatePhoto)
  .delete( deletePhoto);
router.put("/like/:id", addLike);
router.put("/removeLike/:id", removeLike);
router.put("/addComment/:id", addComment);
router.put("/removeComment/:id", removeComment);
router.put("/addReply/:id", addReply);
router.put("/removeReply/:id", removeReply);
router.put("/likeComment/:id", likeComment);
router.put("/removeCommentLike/:id", removeCommentLike);

export default router;
