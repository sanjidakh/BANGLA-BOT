  const fs = require("fs");
module.exports.config = {
	name: "vaibon",
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
	if (event.body.indexOf("vai")==0 || event.body.indexOf("ভাই")==0 || event.body.indexOf("বোন")==0 || event.body.indexOf("bon")==0) {
		var msg = {
				body: "ভাই বোন🥰😍",
				attachment: fs.createReadStream(__dirname + `/noprefix/vaibon.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }