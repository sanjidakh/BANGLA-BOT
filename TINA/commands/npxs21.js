const fs = require("fs");
module.exports.config = {
	name: "npxs21",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😱",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🍼")==0 || event.body.indexOf("🔪")==0 || event.body.indexOf("😮")==0 || event.body.indexOf("🍁")==0) {
		var msg = {
				body: "যদি ভালো হতে চাও তবে সর্বপ্রথম তুমি মিথ্যা বলা ছেড়ে দাও🍁🍼😱",
				attachment: fs.createReadStream(__dirname + `/noprefix/bristi.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😮", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }