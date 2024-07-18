import ErrorHandler from "../utils/ErrorHandler.js";
import userModel from "../model/userModel.js";

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

    // Create new user
    const newUser = await userModel.create(user);

    res.status(201).json({
      success: true,
      newUser,
    });
    console.log(newUser);
  } catch (error) {
    next(new ErrorHandler("Error creating user", 500));
  }
};
