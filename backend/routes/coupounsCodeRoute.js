import express from 'express';
import { isSeller } from '../middleware/auth.js ';
import { createCoupounCode } from '../controller/coupounCodeController.js';

const coupunsCodeRouter = express.Router();

coupunsCodeRouter.post("create-coupoun", isSeller,createCoupounCode)

export default coupunsCodeRouter;