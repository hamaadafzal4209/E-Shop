import coupounsCodeModel from "../model/coupounCodeModel.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const createCoupounCode = catchAsyncErrors(async (req, res, next) => {
  try {
    const isCoupounCodeExist = await coupounsCodeModel.findOne({
      name: req.body.name,
    });

    if (isCoupounCodeExist) {
      return next(new ErrorHandler("Coupoun Code already exists", 404));
    }

    const coupounCode = await coupounsCodeModel.create(req.body);

    res.status(201).json({
      success: true,
      coupounCode,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 404));
  }
});
