import orderModel from "../model/orderModel.js";
import productModel from "../model/productModel.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const createOrder = catchAsyncErrors(async(req,res,next) => {
    try {
        // 
    } catch (error) {
        return next(new ErrorHandler(error.message,500));
    }
})