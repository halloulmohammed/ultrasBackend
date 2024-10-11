import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productControllers.js';
// import { protect, admin } from '../middlewares/authMiddleware.js';

router.route('/').get(getProducts).post(createProduct);
router
  .route('/:id')
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;