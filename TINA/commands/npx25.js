const fs = require("fs");
module.exports.config = {
	name: "sad",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "vai",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Kosto")==0 || event.body.indexOf("কষ্ট")==0 || event.body.indexOf("মন খারাপ")==0 || event.body.indexOf("Mood Off")==0) {
		var msg = {
				body: "আমি রাতুল এর বট আমি বুঝতে পারছি আপনার মন খারপ তাই গানটি আপনার জন্য ধন্যবাদ 💔🙋‍♂️🥰😍",
				attachment: fs.createReadStream(__dirname + `/noprefix/kosto.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }