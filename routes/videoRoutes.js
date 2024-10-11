import express from "express";

// import { protect, admin } from "../middlewares/authMiddleware.js";
import {
  createVideo,
  deleteVideo,
  getVideo,
  getVideos,
  updateVideo,
} from "../controllers/videoControllers.js";

const router = express.Router();

router.route("/").get(getVideos).post(createVideo);
router
  .route("/:id")
  .get(getVideo)
  .put(updateVideo)
  .delete(deleteVideo);

export default router;
