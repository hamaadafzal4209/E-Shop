import express from "express";
import multer from "multer";
import { createProduct, getAllShopProducts } from "../controller/productController.js";

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

export default productRouter;
