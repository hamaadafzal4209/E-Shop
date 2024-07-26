import express from "express";
import multer from "multer";
import { createProduct } from "../controller/productController.js";

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

export default productRouter;
