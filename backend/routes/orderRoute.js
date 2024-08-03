import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import { createOrder } from "../controller/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/create-order", isAuthenticated, createOrder);

export default orderRouter;
