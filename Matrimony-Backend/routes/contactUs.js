import express from "express";
import {
  contactSupport,
  contactWedding,
  contactTravel,
} from "../controllers/contactUs.js";

const router = express.Router();

router.post("/", contactSupport);
router.post("/wedding", contactWedding);
router.post("/travel", contactTravel);

export default router;
