import express from "express";
import { login, completeProfile } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);

router.put("/completeprofile", completeProfile);

export default router;
