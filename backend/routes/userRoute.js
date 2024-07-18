import express from "express";
import { createUser } from "../controller/userController.js";
import multer from "multer";
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

export default userRouter;