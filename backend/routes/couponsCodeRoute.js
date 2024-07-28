import express from "express";
import { isSeller } from "../middleware/auth.js";
import {
  createCoupon,
  getCoupons,
  deleteCoupon,
} from "../controller/couponCodeController.js";

const couponsCodeRouter = express.Router();

couponsCodeRouter.post("/create-coupon", isSeller, createCoupon);
couponsCodeRouter.get("/get-coupons/:id", isSeller, getCoupons);
couponsCodeRouter.delete("/delete-coupon/:id", isSeller, deleteCoupon);

export default couponsCodeRouter;
