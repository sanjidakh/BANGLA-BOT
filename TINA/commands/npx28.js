const fs = require("fs");
module.exports.config = {
	name: "song",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "brazil",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Brazil")==0 || event.body.indexOf("Brasil")==0 || event.body.indexOf("Neymar")==0 || event.body.indexOf("ব্রাজিল")==0) {
		var msg = {
				body: "ব্রাজিল মানেই আগুন🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/brazil.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }