import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from '../constants/config';

export async function sendToTelegram(formData, lang) {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        console.error('Telegram bot token or chat ID not configured');
        return false;
    }

    const message = `
🔔 *New Contact Message*

👤 *Name:* ${formData.name || 'Not provided'}
📧 *Email:* ${formData.email || 'Not provided'}
📱 *Phone:* ${formData.phone || 'Not provided'}
💬 *Telegram:* ${formData.telegram || 'Not provided'}

📝 *Message:*
${formData.message || 'No message'}

🌐 *Language:* ${lang}
⏰ *Time:* ${new Date().toLocaleString()}
  `;

    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'Markdown',
            }),
        });

        if (!response.ok) {
            throw new Error('Telegram API error');
        }

        return true;
    } catch (error) {
        console.error('Error sending to Telegram:', error);
        return false;
    }
}