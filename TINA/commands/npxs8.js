const fs = require("fs");
module.exports.config = {
	name: "npxs8",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs8",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("💧")==0 || event.body.indexOf("🥀")==0 || event.body.indexOf("🌺")==0 || event.body.indexOf("🌸")==0) {
		var msg = {
				body: "-সম্পর্কটা কিছুদিনের হলেও তাকে ছাড়া প্রতিটা মুহূর্ত খুব শূন্য লাগে । 😅💔",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs8.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }