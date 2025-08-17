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
	if (event.body.indexOf("💞")==0 || event.body.indexOf("💛")==0 || event.body.indexOf("🧡")==0 || event.body.indexOf("👀")==0) {
		var msg = {
				body: "মনে রাখবেন, অন্যের দিকে আঙ্গুল তুললে, নিজের দিকে কিন্তু তিনটি আঙ্গুল ঘুরে থাকে💔🥰😍",
				attachment: fs.createReadStream(__dirname + `/noprefix/simanto5.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }