const fs = require("fs");
module.exports.config = {
	name: "npxs15",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs15",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😵‍💫")==0 || event.body.indexOf("😵")==0 || event.body.indexOf("🥹")==0 || event.body.indexOf("🤒")==0) {
		var msg = {
				body: "জীবনে তো সমস্যা আসবেই, তাই বলে তো আর থেমে থাকা চলবে না, just chil প্রিয়!.😄🤟",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs15.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }