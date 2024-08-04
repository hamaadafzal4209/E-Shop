import express from "express";
import multer from "multer";
import { createProduct, getAllShopProducts,deleteShopProduct, getAllProducts,createReview } from "../controller/productController.js";
import { isAuthenticated, isSeller } from "../middleware/auth.js";

const productRouter = express.Router();

// image upload engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

// product routes
productRouter.post("/create-product", upload.array("images"), createProduct);
productRouter.get("/get-all-shop-products/:id", getAllShopProducts)
productRouter.delete("/delete-shop-products/:id",isSeller, deleteShopProduct)
productRouter.get("/get-all-products", getAllProducts)
productRouter.get("/create-new-review",isAuthenticated, createReview)

export default productRouter;
