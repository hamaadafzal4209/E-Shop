import express from "express";
import multer from "multer";
import { createEvent ,getAllEvents} from "../controller/eventController.js";

const eventRouter = express.Router();

// image upload engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

// event routes
eventRouter.post("/create-event", upload.array("images"), createEvent);
eventRouter.get("/get-all-shop-events/:id", getAllEvents)

export default eventRouter;
