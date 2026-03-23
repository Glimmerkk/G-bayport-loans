import { sendApplicationToTelegram } from "../services/telegramServices.js";
import { applications } from "../store/memory.js";

export const handleApply = async (req, res) => {
  try {
    const data = req.body;

    // generate unique ID
    const applicationId = Date.now().toString();

    // save in memory
    applications[applicationId] = {
      id: applicationId,
      ...data,
      status: "pending",
    };

    // send to telegram
    await sendApplicationToTelegram(applicationId, data);

    res.json({
      success: true,
      applicationId,
      status: "pending",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};