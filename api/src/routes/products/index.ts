import { Router } from "express";
import {
  listProducts,
  getproductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from "./productController.js";

import { validateData } from "../../middlewares/validationMiddleware.js";

import {
  createProductSchema,
  updateProductSchema,
} from "../../db/productsSchema.js";
import { verifyToken, verifySeller } from "../../middlewares/authMiddleware.js";

const router = Router();

router.get("/", listProducts);
router.get("/:id", getproductById);
router.post(
  "/",
  verifyToken,
  verifySeller,
  validateData(createProductSchema),
  createProduct
);
router.put(
  "/:id",
  verifyToken,
  verifySeller,
  validateData(updateProductSchema),
  updateProduct
);
router.delete("/:id", verifyToken, verifySeller, deleteProduct);

export default router;
