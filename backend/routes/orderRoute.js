import express from 'express';
import { isAuthenticated } from '../middleware/auth';

const orderRouter = express.Router();

orderRouter('create-order', isAuthenticated, createOrder)

export default orderRouter;