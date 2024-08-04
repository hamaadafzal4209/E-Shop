import express from "express";
import { createOrder,getAllUserOrders,getAllSellerOrders } from "../controller/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/create-order", createOrder);
orderRouter.get("/get-all-orders/:userId", getAllUserOrders);
orderRouter.get("/get-seller-all-orders/:shopId", getAllSellerOrders);

export default orderRouter;
