import { Router } from "express";
import {
  listProducts,
  getproductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from "./productController";

import { validateData } from "../../middlewares/validationMiddleware";

import {
  createProductSchema,
  updateProductSchema,
} from "../../db/productsSchema";

const router = Router();

router.get("/", listProducts);
router.get("/:id", getproductById);
router.post("/", validateData(createProductSchema), createProduct);
router.put("/:id", validateData(updateProductSchema), updateProduct);
router.delete("/:id", deleteProduct);

export default router;
