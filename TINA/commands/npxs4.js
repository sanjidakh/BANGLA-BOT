const fs = require("fs");
module.exports.config = {
	name: "npxs4",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs4",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😏")==0 || event.body.indexOf("🥳")==0 || event.body.indexOf("🤩")==0 || event.body.indexOf("🥸")==0) {
		var msg = {
				body: "-পরিস্থিতিটা শিকার করে নাও. আর হাসি মুখে এগিয়ে যাও..🥀❤️☺️😍",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs4.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }