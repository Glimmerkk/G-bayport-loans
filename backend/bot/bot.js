import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {
  polling: true,
});

bot.on("callback_query", async (query) => {
  const data = query.data;
  const chatId = query.message.chat.id;

  console.log("Callback:", data);

  // 📲 OTP REQUEST
  if (data.startsWith("otp_")) {
    const parts = data.split("_");
    const length = parts[1];
    const id = parts[2];

    await bot.sendMessage(
      chatId,
      `📲 Requesting ${length}-digit OTP for ID: ${id}`
    );
  }

  // ✅ APPROVE APPLICATION
  if (data.startsWith("approve_") && !data.includes("otp")) {
    const id = data.split("_")[1];

    await bot.sendMessage(chatId, `✅ Application Approved: ${id}`);
  }

  // ❌ REJECT APPLICATION
  if (data.startsWith("reject_") && !data.includes("otp")) {
    const id = data.split("_")[1];

    await bot.sendMessage(chatId, `❌ Application Rejected: ${id}`);
  }

  // ✅ APPROVE OTP
  if (data.startsWith("approve_otp_")) {
    const id = data.split("_")[2];

    await bot.sendMessage(chatId, `✅ OTP Approved: ${id}`);
  }

  // ❌ REJECT OTP
  if (data.startsWith("reject_otp_")) {
    const id = data.split("_")[2];

    await bot.sendMessage(chatId, `❌ OTP Rejected: ${id}`);
  }

  // remove loading animation
  bot.answerCallbackQuery(query.id);
});

export default bot;