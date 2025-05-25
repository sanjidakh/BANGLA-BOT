module.exports.config = {
    name: "image",
    aliases: ["image", "photo"],
    version: "1.1.0",
    hasPermission: 2,
    permission: 2,
    credits: "RAHAT",
    description: "Process image with various options",
    prefix: 2,
    commandCategory: "prefix",
    usages: "",
    cooldowns: 10,
    dependencies: {}
};

module.exports.run = async function ({ api, event }) {
    const axios = require("axios");

    if (event.type !== "message_reply") 
        return api.sendMessage("❌ You must reply to a photo.", event.threadID, event.messageID);

    if (!event.messageReply.attachments || event.messageReply.attachments.length === 0) 
        return api.sendMessage("❌ You must reply to a photo.", event.threadID, event.messageID);

    if (event.messageReply.attachments[0].type !== "photo") 
        return api.sendMessage("⚠️ This is not an image.", event.threadID, event.messageID);

    const imageUrl = event.messageReply.attachments[0].url;

    try {
        
        const imgbbRes = await axios.post("https://nayan-apis-server.vercel.app/api/imgbb", {
            image: imageUrl
        }, { headers: { "Content-Type": "application/json" } });

        if (!imgbbRes.data || !imgbbRes.data.imageUrl) 
            return api.sendMessage("❌ Failed to upload image to ImgBB.", event.threadID, event.messageID);

        const uploadedUrl = imgbbRes.data.imageUrl;
        
        
        const optionsMessage = `
📸 **Choose an option:**
1️⃣ Upscale
2️⃣ Enhance
3️⃣ Remove Text
4️⃣ Remove Watermark
5️⃣ Get Text (OCR)

🔹 Reply with 1, 2, 3, 4, or 5.
        `;
        return api.sendMessage(optionsMessage, event.threadID, (error, info) => global.client.handleReply.push({
            type: 'reply',
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            uploadedUrl
        }), event.messageID);

    } catch (err) {
        console.error("Image Processing Error:", err);
        api.sendMessage("❌ An error occurred while processing the image.", event.threadID, event.messageID);
    }
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
    const axios = require("axios");

    const uploadedUrl = handleReply.uploadedUrl;
    api.unsendMessage(handleReply.messageID);

    try {
        let apiUrl;
        let actionType = "";

        switch (event.body) {
            case "1":
                apiUrl = `http://65.109.80.126:20392/nayan/upscale?url=${uploadedUrl}`;
                actionType = "Upscaled";
                break;
            case "2":
                apiUrl = `http://65.109.80.126:20392/nayan/enhanced?url=${uploadedUrl}`;
                actionType = "Enhanced";
                break;
            case "3":
                apiUrl = `http://65.109.80.126:20392/nayan/rmtext?url=${uploadedUrl}`;
                actionType = "Text Removed";
                break;
            case "4":
                apiUrl = `http://65.109.80.126:20392/nayan/rmwtmk?url=${uploadedUrl}`;
                actionType = "Watermark Removed";
                break;
            case "5":
                apiUrl = `http://65.109.80.126:20392/nayan/ocr?url=${uploadedUrl}`;
                actionType = "Extracted Text";
                break;
            default:
                return api.sendMessage("❌ Invalid option. Please reply with 1, 2, 3, 4, or 5.", event.threadID, event.messageID);
        }

        const res = await axios.get(apiUrl);
        console.log(res.data);

        if (event.body === "5") {
            
            if (res.data.error || !res.data.text) {
                return api.sendMessage("❌ Failed to extract text from the image.", event.threadID, event.messageID);
            }
            const extractedText = res.data.text.trim();
            return api.sendMessage(`✅ **Extracted Text:**\n\n${extractedText}`, event.threadID, event.messageID);
        } else {
            
            const processedImage = res.data.upscaled || res.data.enhanced_image || res.data.removed_text_image || res.data.watermark_removed_image;
            if (!processedImage) {
                return api.sendMessage(`❌ Failed to process the image.`, event.threadID, event.messageID);
            }

            const imgData = (await axios.get(processedImage, { responseType: "stream" })).data;

            api.setMessageReaction("✔️", event.messageID, () => {}, true);
            return api.sendMessage({
                body: `✔️ **${actionType} Image**`,
                attachment: imgData
            }, event.threadID, event.messageID);
        }

    } catch (err) {
        console.error("HandleReply Error:", err);
        api.setMessageReaction("❌", event.messageID, () => {}, true);
        return api.sendMessage("❌ An error occurred while processing the image.", event.threadID, event.messageID);
    }
};
