import express from "express";
import { handleApply } from "../controllers/applyController.js";

const router = express.Router();

router.post("/", handleApply);

export default router;