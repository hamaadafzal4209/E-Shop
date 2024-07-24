import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import shopModel from "../model/shopModel.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import sendToken from "../utils/jwtToken.js";
import sendMail from "../utils/sendMail.js";
import jwt from "jsonwebtoken";

export const createShop = async (req, res, next) => {
  try {
    const { name, email, password, phoneNumber, address, zipCode } = req.body;

    // Check if user with the provided email already exists
    const shopEmail = await shopModel.findOne({ email });
    if (shopEmail) {
      return next(new ErrorHandler("User already exists", 400));
    }

    // Check if file is provided
    if (!req.file) {
      return next(new ErrorHandler("Avatar file is required", 400));
    }

    const image_filename = `${req.file.filename}`;

    const seller = {
      name,
      email,
      password,
      phoneNumber,
      address,
      zipCode,
      avatar: image_filename,
    };

    const activationToken = createActivationToken(seller);

    const activationUrl = `http://localhost:5173/seller/activation/${activationToken}`;

    try {
      await sendMail({
        email: seller.email,
        subject: "Activate your Shop",
        message: `Hello ${seller.name}, please click on the link to activate your shop ${activationUrl}`,
      });
      res.status(200).json({
        success: true,
        message: `please check your email:- ${seller.email} to activate your shop`,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  } catch (error) {
    next(new ErrorHandler("Error creating user", 400));
  }
};

// create activationtoken

const createActivationToken = (seller) => {
  return jwt.sign(seller, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};

// activate shop
export const activateSellerShop = catchAsyncErrors(async (req, res, next) => {
  try {
    const { activation_token } = req.body;

    const seller = jwt.verify(activation_token, process.env.ACTIVATION_SECRET);

    if (!seller) {
      return next(new ErrorHandler("Invalid Token", 400));
    }

    const { name, email, password, avatar, zipCode, address, phoneNumber } =
      seller;

    await shopModel.create({
      name,
      email,
      password,
      zipCode,
      phoneNumber,
      address,
      avatar,
    });

    sendToken(seller, 201, res);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});
