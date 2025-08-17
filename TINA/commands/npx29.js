const fs = require("fs");
module.exports.config = {
	name: "gali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "gali",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("heda")==0 || event.body.indexOf("হেড়া")==0 || event.body.indexOf("xudi")==0 || event.body.indexOf("চুদি")==0) {
		var msg = {
				body: "গালি দিলে কি হয় শুনুন🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/gali.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😡", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }