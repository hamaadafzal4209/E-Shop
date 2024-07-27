import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import eventModel from "../model/eventModel.js";
import shopModel from "../model/shopModel.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const createEvent = catchAsyncErrors(async (req, res, next) => {
  try {
    const { shopId } = req.body;
    console.log("Received Shop ID:", shopId);
    const shop = await shopModel.findById(shopId);

    if (!shop) {
      return next(new ErrorHandler("Invalid shop Id", 400));
    }

    const files = req.files;
    const imageUrls = files.map((file) => `${file.filename}`);

    const eventData = {
      ...req.body,
      images: imageUrls,
      shop: shop._id,
    };

    console.log(eventData);

    const event = await eventModel.create(eventData);

    res.status(201).json({
      success: true,
      event,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});
