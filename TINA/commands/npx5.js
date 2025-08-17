const fs = require("fs");
module.exports.config = {
	name: "MrTomXxX",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "simanto",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("MrTomXxX")==0 || event.body.indexOf("mrtomxxx")==0 || event.body.indexOf("Mrtomxxx")==0 || event.body.indexOf("Mrtom")==0) {
		var msg = {
				body: "༻𝐎𝐖𝐍𝐄𝐑:- ☞𝐑𝐚𝐭𝐮𝐥 𝐇𝐚𝐬𝐬𝐚𝐧☜ ༺ ༒𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 〠𝐌𝐫𝐓𝐨𝐦𝐗𝐱𝐗〠.༒ ༒𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝༒:- ☞ www.facebook.com/MrTomXxX ☜ ༻𝘠𝘰𝘶𝘵𝘶𝘣𝘦 𝘭𝘪𝘯𝘬༺:- ☞ https://youtube.com/@MrT0mX ☜֎𝘍𝘰𝘳 𝘈𝘯𝘺 𝘒𝘪𝘯𝘥 𝘖𝘧 𝘏𝘦𝘭𝘱 𝘫𝘰𝘪𝘯 𝘞𝘱 𝘎𝘳𝘰𝘶𝘱֍:-☞ https://chat.whatsapp.com/Hog9Xpbgz9cK7EpfUKaHnC ☜ ֎𝘊𝘰𝘯𝘵𝘢𝘤𝘵 𝘔𝘦 𝘖𝘯 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱֍ :-  ☞+8801581712206 ☜",
				attachment: fs.createReadStream(__dirname + `/noprefix/mrt.jpg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }