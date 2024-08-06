import express from "express";
import { createNewConversation,getAllSellerConversation } from "../controller/conversationController.js";
import { isSeller } from "../middleware/auth.js";

const conversationRouter = express.Router();

conversationRouter.post("/create-new-conversation", createNewConversation);
conversationRouter.get("/get-all-conversation-seller/:id", isSeller,getAllSellerConversation)

export default conversationRouter;
