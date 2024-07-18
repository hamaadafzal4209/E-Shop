import ErrorHandler from "../utils/ErrorHandler.js";
import userModel from "../model/userModel.js";
import jwt from "jsonwebtoken";
import sendMail from "../utils/sendMail.js";

export const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if user with the provided email already exists
    const userEmail = await userModel.findOne({ email });
    if (userEmail) {
      return next(new ErrorHandler("User already exists", 400));
    }

    // Check if file is provided
    if (!req.file) {
      return next(new ErrorHandler("Avatar file is required", 400));
    }

    const image_filename = `${req.file.filename}`;

    const user = {
      name,
      email,
      password,
      avatar: image_filename,
    };

    const activationToken = createActivationToken(user);

    const activationUrl = `http://localhost:8000/activation/${activationToken}`;

    try {
        await sendMail({
            email: user.email,
            subject: "Activate your account",
            message: `Hello ${user.name}, please click on the link to activate your account ${activationUrl}`
        })
        res.status(200).json({
            success: true,
            message: `please check your email:- ${user.email} to activate your account`
        })
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  } catch (error) {
    next(new ErrorHandler("Error creating user", 400));
  }
};

// create activationtoken

const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};

// activate user
