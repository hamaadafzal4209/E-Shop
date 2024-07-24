import express from "express";
import multer from "multer";
import {
  activateSellerShop,
  createShop,
} from "../controller/shopController.js";
const shopRouter = express.Router();

// image upload engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

shopRouter.post("/create-shop", upload.single("file"), createShop);
shopRouter.post("/shop/activation", activateSellerShop);

export default shopRouter;  