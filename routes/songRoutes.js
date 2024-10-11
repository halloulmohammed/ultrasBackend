import express from "express";

// import { protect, admin } from "../middlewares/authMiddleware.js";
import { createSong, deleteSong, getSong, getSongs, updateSong } from "../controllers/songControllers.js";

const router = express.Router();

router.route("/").get(getSongs).post(createSong);
router
  .route("/:id")
  .get(getSong)
  .put(updateSong)
  .delete(deleteSong);

export default router;
