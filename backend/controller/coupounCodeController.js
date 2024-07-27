import couponsCodeModel from "../model/coupounCodeModel.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const createCoupounCode = catchAsyncErrors(async (req, res, next) => {
  try {
    const isCoupounCodeExist = await couponsCodeModel.findOne({
      name: req.body.name,
    });

    if (isCoupounCodeExist) {
      return next(new ErrorHandler("Coupoun Code already exists", 404));
    }

    const coupounCode = await couponsCodeModel.create(req.body);

    res.status(201).json({
      success: true,
      coupounCode,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 404));
  }
});

export const getCoupons = catchAsyncErrors(async (req, res, next) => {
  try {
    const couponCodes = await couponsCodeModel.find({ shopId: req.seller.id });
    res.status(201).json({
      success: true,
      couponCodes,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
});

export const deleteCoupons = catchAsyncErrors(async (req, res, next) => {
  try {
    const couponCode = await couponsCodeModel.findByIdAndDelete(req.params.id);

    if (!couponCode) {
      return next(new ErrorHandler("Coupon code dosen't exists!", 400));
    }
    res.status(201).json({
      success: true,
      message: "Coupon code deleted successfully!",
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
});
