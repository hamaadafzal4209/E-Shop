import errorHandler from "../middleware/error.js";
import userModel from "../model/userModel.js";
import bcrypt from "bcryptjs";

export const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  const userEmail = await userModel.findOne({ email });

  if (userEmail) {
    return next(new errorHandler("User already exists", 400));
  }

  const image_filename = `${req.file.filename}`;

  const hashedPassword = bcrypt.hash(password, 10);

  const user = {
    name,
    email,
    password: hashedPassword,
    avatar: image_filename,
  };

  res.json(user);
};
