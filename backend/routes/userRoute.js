import express from "express";
import {
  activateUser,
  createUser,
  getUser,
  loginUser,
  Logout,
} from "../controller/userController.js";
import multer from "multer";
import { isAuthenticated } from "../middleware/auth.js";
const userRouter = express.Router();

// image upload engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

userRouter.post("/create-user", upload.single("file"), createUser);
userRouter.post("/activation", activateUser);
userRouter.post("/login", loginUser);
userRouter.get("/getuser", isAuthenticated, getUser);
userRouter.get("/logout", isAuthenticated, Logout);

export default userRouter;
