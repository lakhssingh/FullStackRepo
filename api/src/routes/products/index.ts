import { Router } from "express";
import {
  listProducts,
  getproductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from "./productController";

const router = Router();

router.get("/", listProducts);

router.get("/:id", getproductById);

router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
