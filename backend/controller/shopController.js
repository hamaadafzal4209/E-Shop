import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import shopModel from "../model/shopModel.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import sendMail from "../utils/sendMail.js";
import jwt from "jsonwebtoken";
import sendShopToken from "../utils/ShopToken.js";

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

    sendShopToken(seller, 201, res);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

// login shop
export const shopLogin = catchAsyncErrors(async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorHandler("Please provide the all fields!", 400));
    }

    const user = await shopModel.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorHandler("User doesn't exists!", 400));
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return next(new ErrorHandler("Wrong Cradientials", 400));
    }

    sendShopToken(user, 201, res);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

export const loadShop = catchAsyncErrors(async (req, res, next) => {
  try {
    const seller = await shopModel.findById(req.seller.id);

    if (!seller) {
      return next(new ErrorHandler("Shop not found", 400));
    }

    // console.log("Load Shop - Seller:", seller);

    res.status(200).json({
      success: true,
      seller,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

export const logout = catchAsyncErrors(async (req, res, next) => {
  try {
    res.cookie("seller_token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: "Logout Successful!",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

// get shop info
export const getShopInfo = catchAsyncErrors(async (req, res, next) => {
  try {
    const shop = await shopModel.findById(req.params.id);
    res.status(201).json({
      success: true,
      shop,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});
