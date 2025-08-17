  const fs = require("fs");
module.exports.config = {
	name: "বন্ধু",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "friend",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bhondu")==0 || event.body.indexOf("koliza")==0 || event.body.indexOf("friend")==0 || event.body.indexOf("বন্ধু")==0) {
		var msg = {
				body: "বন্ধুকে নিয়ে কিছু কথা😍",
				attachment: fs.createReadStream(__dirname + `/noprefix/friend.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }