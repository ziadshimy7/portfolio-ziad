import express from "express";
import { sendEmail } from "../controllers/sendEmailController.js";
const router = express.Router();
router.post("/", sendEmail);
export default router;
