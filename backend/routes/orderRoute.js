import express from "express";
import { createOrder,getAllUserOrders } from "../controller/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/create-order", createOrder);
orderRouter.get("/get-all-orders/:userId", getAllUserOrders);

export default orderRouter;
