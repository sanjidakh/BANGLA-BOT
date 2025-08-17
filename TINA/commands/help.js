module.exports.config = {
	name: "help2",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "JRT",
	description: "Help Menu",
	commandCategory: "Công cụ",
	usages: "[Tên module]",
	cooldowns: 5,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 30
	}
};
/* *
module.exports.languages = {
	"en": {
		"moduleInfo": " ",
		"helpList": ' 📛পাবলিক কিছু  কমান্ড লিস্ট📛\n\n📛「 1 」|| /info - বট ক্রিয়েটর এর ইনফো দেখুন🏷️\n📛「 2 」|| /bn - বাংলা ভয়েজ জেনারেট করুন🤖\n📛「 3 」|| /music - ইউটুবের সকল গান শুনুন📱\n📛「 4 」|| /ai - OpenAi চ্যাটবট যেকোনো কিছু জেনে নিতে পারেন♻️\n📛「 5 」|| /beluga - এটি লিখে যেকোনো কিছু বলতে পারেন🖥️\n📛「 6 」|| /hug - Hug পিকচার জেনারেট করবে🧍‍♂️🧍‍♀️\n📛「 7 」|| /mark - জুকারবার্গ meme বানান🤡\n📛「 8 」|| /zuck - জুকারবার্গ meme বানান🤡\n📛「 9 」|| /kiss - মেনশন দিয়ে চুম্মা চুম্মি😘😁\📛「 10 」|| /time - আজকের তারিখ বার সাল দেখায়⌚\n📛「 11 」|| /adbot user box admin - বক্স | আইডি | এডমিন লোকাল ইনফু🗽\n📛「 12 」|| /video -  ইউটুব ভিডিও দেখাবে📱\n📛「 13 」|| /uid - যেকোনো fb id এর uid কোড বের করুন⚕️\n📛「 14 」|| /pompom - গ্লুওয়াল পমপম দেখাবে🍼\n📛「 15 」|| /girl - রেনডম গার্ল পিকচার দেখুন😁\n📛「 16 」|| /sadvid - Sad ভিডিও দেখতে পারবে😿\n📛「 17 」|| /happy - Couple Status ভিডিও দেখুন🥰\n📛「 18 」|| /gojol - ইসলামিক গজল শুনুন🕌\n📛「 19 」|| /surah - ইসলামিক সূরা শুনুন🕌 📛「 19 」|| /hadis - Comming soon \n📛「 20 」|| /আমল - comming soon \n📛「 21 」|| /fbcover - ফেসবুক কভার make করে💟 \📛「 22 」|| /coverpic - comming soon 🤤\n\n 📛   লোগো মেক কামান্ড লিস্ট   📛\n\n📛「 23 」|| /agun - আগুন লেখার সাথে নিজের নাম লিখুন🔥\n 📛「 24 」|| /horror - horror লেখার সাথে নিজের নাম লিখুন☠️\n📛「 25 」|| /bujli - bijli এর সাথে নাম লিখে ৫মিনিট অপেক্ষ করুন🥲\n📛「 26 」|| /flower - flower লিখে নিজের নাম লিখুন🌸\n 📛「 27 」|| /harry - harry লিখে নিজের নাম লিখুন👽\n📛「 28 」|| /mew - রেনডম বিড়াল পিকচার😺\n📛「 29 」|| /hack - এটি লিখে মেনশন দিন\n📛「 30 」|| /logo - comming soon😊\n\n\n 🔰 For more update 🔰\n Admin : Whatsapp: 01750079773\nAdmin Fb: www.facebook.com/itz.T4NV1R.papa \n🔴comming soon new commands & update 🔴\n',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
}

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports.run = function({ api, event, args, getText }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	if (!command) {
		const command = commands.values();
		var group = [], msg = "";
		for (const commandConfig of command) {
			if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
			else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
		}
		
		return api.sendMessage(msg + getText("helpList", commands.size, prefix), threadID, async (error, info) =>{
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 1000));
				return api.unsendMessage(info.messageID);
			} else return;
		});

	}

	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
      }