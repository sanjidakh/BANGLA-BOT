const fs = require("fs");
module.exports.config = {
	name: "npxs14",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs14",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🥴")==0 || event.body.indexOf("😴")==0 || event.body.indexOf("🤧")==0 || event.body.indexOf("🥱")==0) {
		var msg = {
				body: "-~One hug from the right person takes all your stress away! ✨🖤",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs14.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }