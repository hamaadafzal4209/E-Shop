import express from "express";
import { isSeller } from "../middleware/auth.js ";
import {
  createCoupounCode,
  getCoupons,
  deleteCoupons,
} from "../controller/coupounCodeController.js";

const coupunsCodeRouter = express.Router();

coupunsCodeRouter.post("create-coupoun", isSeller, createCoupounCode);
coupunsCodeRouter.get("get-coupons/id", isSeller, getCoupons);
coupunsCodeRouter.delete("delete-coupons/id", isSeller, deleteCoupons);

export default coupunsCodeRouter;
