import conversationModel from "../model/conversationModel.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const createNewConversation = catchAsyncErrors(
  async (req, res, next) => {
    try {
      const { groupTitle, userId, sellerId } = req.body;

      const isConversationExist = await conversationModel.findOne({
        groupTitle,
      });

      if (isConversationExist) {
        const conversation = isConversationExist;
        res.status(201).json({
          success: true,
          conversation,
        });
      } else {
        const conversation = await conversationModel.create({
          members: [userId, sellerId],
          groupTitle: groupTitle,
        });

        res.status(201).json({
          success: true,
          conversation,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error.message), 500);
    }
  }
);

// get seller conversations
export const getAllSellerConversation = catchAsyncErrors(
  async (req, res, next) => {
    try {
      const conversations = await conversationModel
        .find({
          members: {
            $in: [req.params.id],
          },
        })
        .sort({ updatedAt: -1, createdAt: -1 });

      res.status(201).json({
        success: true,
        conversations,
      });
    } catch (error) {
      return next(new ErrorHandler(error), 500);
    }
  }
);
