const axios = require('axios');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const TTS2_API_URL = 'https://nexalo-api.vercel.app/api/tts2';

module.exports.config = {
  name: "tts2",
  version: "1.0",
  hasPermission: 0,
  credits: "RAHAT🌹",
  countDown: 5,
  adminOnly: false,
  description: "Generate text-to-speech audio from your input text 🎙️",
  commandCategory: "AI Media",
  guide: "{pn}tts2 [your text] - Generate an audio file based on your input text",
  usePrefix: true
};

module.exports.run = async function({ api, event, args }) {
  const { threadID, messageID } = event;

  try {
    // Extract the user input text from args
    const userText = args.join(' ').trim();
    if (!userText) {
      return api.sendMessage("⚠️ Please provide some text to convert to speech!", threadID, messageID);
    }

    // Construct the API URL
    const apiUrl = `${TTS2_API_URL}?text=${encodeURIComponent(userText)}`;

    // Create a temporary file path for the audio
    const tempDir = path.join(__dirname, '..', '..', 'temp');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
    const fileName = `tts2_${crypto.randomBytes(8).toString('hex')}.mp3`;
    const filePath = path.join(tempDir, fileName);

    // Download the audio from the API
    const response = await axios.get(apiUrl, {
      responseType: 'stream',
      timeout: 10000
    });

    // Verify the content type to ensure it's an audio file
    const contentType = response.headers['content-type'];
    if (!contentType || !contentType.startsWith('audio/')) {
      throw new Error("API response is not an audio file");
    }

    // Save the audio file to a temporary location
    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    // Check if the file is empty
    const stats = fs.statSync(filePath);
    if (stats.size === 0) throw new Error("Downloaded audio file is empty");

    // Send the audio file to the user
    const msg = {
      body: `🎙️ Text-to-Speech audio generated successfully for the text: "${userText}"`,
      attachment: fs.createReadStream(filePath)
    };

    await new Promise((resolve, reject) => {
      api.sendMessage(msg, threadID, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });

    // Delete the temporary file after sending
    fs.unlinkSync(filePath);
  } catch (err) {
    console.error("[TTS2 Command Error]", err.message);
    api.sendMessage(`⚠️ Error: ${err.message}`, threadID, messageID);
  }
};
