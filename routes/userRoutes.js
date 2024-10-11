import express from "express";
// import {  protect } from "../middlewares/authMiddleware.js";
import { deleteUser, getUserById, getUserProfile, getUsers, login, register, updateUserProfile } from "../controllers/userControllers.js";


const router = express.Router();

router.route('/').get(getUsers)
router.route('/login').post(login)
router.route('/register').post(register)
router
  .route('/profile')
  .get(getUserProfile)
  .put(updateUserProfile)

router
  .route('/:id')
  .delete( deleteUser)
  .get(getUserById)





export default router;
