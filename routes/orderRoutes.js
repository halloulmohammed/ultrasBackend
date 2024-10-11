import express from "express";
const router = express.Router();
import {
  createOrder,
  getMyOrders,
  getOrderById,
  getOrders,
} from "../controllers/orderControllers.js";
// import {  admin } from '../middlewares/authMiddleware.js';

router.route("/").post(createOrder).get(getOrders);
router.route("/mine").get(getMyOrders);
router.route("/:id").get(getOrderById);

export default router;
