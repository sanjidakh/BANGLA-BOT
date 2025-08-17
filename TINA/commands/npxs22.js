const fs = require("fs");
module.exports.config = {
	name: "npxlove1099",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🥰",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("👨‍👨‍👧‍👧")==0 || event.body.indexOf("👩‍⚕️")==0 || event.body.indexOf("🧑‍🦳")==0 || event.body.indexOf("👨‍🚒")==0 || event.body.indexOf("👅")==0 || event.body.indexOf("🤐")==0 || event.body.indexOf("👄")==0 ||
event.body.indexOf("🤲")==0 || event.body.indexOf("🫶")==0) {
		var msg = {
				body: "😍যে মানুষ নিজেকে প্রকাশ করতে পারে না তখন ভেবে নিতে হবে যে সে ভিতরে ভিতরে মারা যাচ্ছে।🤍",
				attachment: fs.createReadStream(__dirname + `/noprefix/music8.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🧜‍♂️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }