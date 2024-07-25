// shopRoute.js
import express from "express";
import multer from "multer";
import {
  activateSellerShop,
  createShop,
  loadShop,
  shopLogin,
} from "../controller/shopController.js";
import { isSeller } from "../middleware/auth.js"; 
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
shopRouter.post("/seller/activation", activateSellerShop);
shopRouter.post("/login-shop", shopLogin);
shopRouter.get("/getSeller", isSeller, loadShop);

export default shopRouter;