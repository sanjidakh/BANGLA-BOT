const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "caption",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Islamick Cyber Chat",
  description: "bot Captain",
  commandCategory: "caption",
  usages: "caption",
  cooldowns: 5,
};
module.exports.run = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["___♡💜\n\n“তুমি যদি চাও আল্লাহ তোমার পছন্দের বস্তুটি দিবেন\n তাহলে তুমি ও আল্লাহর পছন্দের কাজটি করো।”\nইন শা আল্লাহ। <3___(♡💜🪄࿐\n\n— ইমাম আহমাদ ইবনে হাম্বল রাহিমাহুল্লাহ", "\n›⎯͢⎯⃝🩷💙\n\n➪প্রতিদিন আমাদের এমন ভাবে 
কাটানো উচিত।যেন আজ 
আমাদের জীবনের শেষ 😭
দিন🧭___(♡🪄࿐\n\n    <3___(♡🩷\n🪄࿐","\n -!💚🌺𖡦\n\n\n\n____۵ღ༎📜
𝐍𝐨𝐭𝐡𝐢𝐧𝐠 𝐢𝐬 𝐩𝐨𝐬𝐬𝐢𝐛𝐥𝐞 𝐰𝐢𝐭𝐡𝐨𝐮𝐭 𝐀𝐥𝐥𝐚𝐡.✨🖤\n\n– আল্লাহ'র প্রতি আস্থা আর বিশ্বাস আপনাকে সাফল্যের পথ দেখাবে , ইনশাআল্লাহ।🧡🌼\n\n\n\n-!💚🌺𖡦","\n__আল্লাহর রহমত থেকে নিরাশ হওয়া যাবে না!” আল্লাহ অবশ্যই তোমাকে ক্ষমা করে দিবেন☺️🌻\nসুরা যুমাহ্ আয়াত ৫২..৫৩💙🌸
-!", "\n_____কলি না হলে \nফুল হত না।।_____🌺🌺🌺\n\n_______নদী না হলে
সাগর হত না।।_____🌊\n\n______মন না হলে,,\nভালোবাসা হত না..______❤️❤️\n\n🕋🕋____আর রাসূল (সাঃ) না হলে \n              দুনিয়া হত না_____🕋🕋\n\nসুবহানাল্লাহ 💚💚💚💚💚", "\n─༅༎•🌺🌸༅༎•─\n\n𝗬𝗼𝘂 𝗙𝗲𝗲𝗹 𝗔𝘀 𝗕𝗲𝗮𝘂𝘁𝗶𝗳𝘂𝗹 𝗦𝗮𝗰𝗿𝗲𝗱 𝗔𝘀 \n𝗠𝘆 𝗦𝗲𝗰𝗿𝗲𝘁 𝗪𝗼𝗿𝘀𝗵𝗶𝗽-🖤🦋\n\n     -আপনি আমার গোপন ইবাদতে'র মতো
 সুন্দর পবি'ত্র প্রিয় অনুভূতি-🌻💚  🌺 \n\n─•༅༎🦋🌺༎༅•","\n🖤🦋____নামাজে'ই প্রকৃত শান্তি!!!🖤🥀\n__😘 ❝ইসলাম ধর্ম আছে বলেই পৃথিবীটা এতো সুন্দর❞🖤🥀\n\n_____ আলহামদুলিল্লাহ🖤", "\n ( •દ•̩̥ ) 𝐓𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞( •દ•̩̥ )\n\n\nপাপ করলে যদি নোটিফিকেশন আসতো\n\nতাহলে আমরা বুঝতে পারতাম\n২৪ ঘন্টায় কয়টা পাপ করলাম\nআল্লাহ আমাদেরকে হেফাজত করুক।\n\n🧡✨আমিন✨💛", "\n _┏╮/╱ 💔\n╰💔•••••••𝗔𝘀𝘀𝗮𝗹𝗮𝗺𝘂 𝗔𝗹𝗮𝗶𝗸𝘂𝗺
╱/ ╰┛! 🙂❤️ ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎●\n__শুকরিয়া জানাই ঐ রবের প্রতি যিনি ঘুম নামক মৃত্যু থেকে জাগিয়ে আবার সকাল দেখান🤍🌸🌺\n-\n আলহামদুলিল্লাহ 🤗❤️‍🩹 🌸\n🌺🌺\n💗🥰","\nহঠাৎ একদিন মৃত্যুর ফেরেশতা এসে বলবে ফেরার সময় তো হয়ে এলো চলো এবার যাওয়া যাক!\n\nکُلُّ نَفۡسٍ ذَآئِقَۃُ الۡمَوۡتِ ؕ\nকুল্লু নাফছিন যা-ইকাতুল মাউত\n\n[প্রতিটি প্রাণী মৃত্যুর স্বাদ গ্রহণ করবে]\n(সুরা আল ইমরান১৮৫)🤍🌼", "\n💜༎💜༎💜༎💜༎💜༎💜༎💜༎❝-࿐\n\n✨°নামাজ༎❝-࿐\n✨শব্দটা༎ছোট༎হলেও༎ক্ষমতা༎অসীম༎❝-࿐\n\n💜༎💜༎💜༎💜༎💜༎💜༎💜༎❝-࿐","\nღ࿐🦋\n\nღ__তোমরা মিথ্যা থেকে বেঁচে থাকো। কেননা মিথ্যা (মানুষকে) পাপের দিকে নিয়ে যায় আর পাপ জাহান্নাম পর্যন্ত পৌঁছে দেয় ࿐✨🍒\n\n-বুখারী ও মুসলিম🖤🌸",".\n\n🖤🦋____নামাজেই প্রকৃত শান্তি!!!🖤🥀\n__😘 ❝ইসলাম ধর্ম আছে বলেই পৃথিবীটা এতো সুন্দর❞🖤🥀\n\n _____ আলহামদুলিল্লাহ🖤\n\n.","\n🦋𝙅𝙪𝙨𝙩 𝙬𝙖𝙞𝙩𝙞𝙣𝙜 𝙛𝙤𝙧 𝙩𝙝𝙚 𝙩𝙞𝙢𝙚, 𝗢𝗻𝗲 𝗗𝗮𝘆
.✨🌺𝐈𝐍𝐒𝐇𝐀𝐋𝐋𝐀𝐇💛\n\n  - শুধু মাত্র সময়ের অপেক্ষা\n°-আমি যাব একদিন পবিত্র মক্কায় হজ করতে 💖✨\n\nইনশাআল্লাহ😌༎.!🌸","\n>🐰✨:)>(🧡🦋🙂\n ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎●━━•রাব্বির হাম-হুমা কামা\n         ---• 🤗🥀●━━•༅রাব্বায়ানী ছাগীরাহ্ ༅---•☺️\n  ༅༎পৃথীবির সকল বাবা-মাকে তুমি ভালো রেখো খোদাლ࿐💔🌼","\n __আল্লাহর রহমত থেকে নিরাশ হওয়া যাবে না! আল্লাহ অবশ্যই তোমাকে ক্ষমা করে দিবেন☺️🌻\nসুরা যুমাহ্ আয়াত ৫২..৫৩💙🌸-!","\nঅতীতটা তো ভীষণ কালো পাপের আঁধারে   \n  ঘেরা নতুন দিনের সংকল্প হোক , রবের  \n  দিকে ফেরা ।\n\n🍂🍂●⁠_⁠_⁠_   আমিন _⁠__⁠●🍂🍂","\n𝗖𝗮𝘁 𝗶𝘀 𝘀𝗮𝗰𝗿𝗲𝗱 𝗮𝗻𝗶𝗺𝗮𝗹.🦋🌻\n\n𝗜𝘁 𝗶𝘀 𝗳𝗼𝗿𝗯𝗶𝗱𝗱𝗲𝗻 𝘁𝗼 𝗱𝗶𝗿𝗲𝗰𝘁𝗹𝘆 𝗸𝗶𝗹𝗹, 𝘁𝗼𝗿𝘁𝘂𝗿𝗲 𝗼𝗿 𝘀𝘁𝗮𝗿𝘃𝗲 𝗮 𝗰𝗮𝘁. 𝗧𝗵𝗲𝗿𝗲𝗳𝗼𝗿𝗲 𝗜 𝘄𝗶𝗹𝗹 𝗴𝗼 𝘁𝗼 𝗵𝗲𝗹𝗹.\n\n(𝗠𝘂𝘀𝗹𝗶𝗺 5745)🌸","\n❝ ᭄᭄•✿•࿐\n🌺𝐀𝐥-𝐐𝐮𝐫𝐚𝐧🌺 𝐎𝐧𝐥𝐲 𝐭𝐡𝐞\n 𝐬𝐨𝐥𝐮𝐭𝐢𝐨𝐧 𝐨𝐟 𝐭𝐡𝐨𝐮𝐬𝐚𝐧𝐝 𝐩𝐫𝐨𝐛𝐥𝐞𝐦....& 𝐀 𝐫𝐞𝐚𝐥 𝐦𝐮𝐬𝐥𝐢𝐦 𝐜𝐚𝐧'𝐭 𝐢𝐦𝐚𝐠𝐢𝐧𝐞 𝐚 𝐝𝐚𝐲 𝐰𝐢𝐭𝐡𝐨𝐮𝐭 𝐫𝐞𝐚𝐝𝐢𝐧𝐠 𝐀𝐥-𝐐𝐮𝐫𝐚𝐧...!!🖤🥀\n\n❥━༊❝#𝐀𝐥_𝐐𝐮𝐫𝐚𝐧•🖤","\n__𝗚𝗼 𝗯𝗮𝗰𝗸 𝘁𝗼 𝗔𝗟𝗟𝗔𝗛--!!🤗💫\n-𝗚𝗼𝗼𝗱 𝗳𝗼𝗿𝘁𝘂𝗻𝗲 𝘄𝗶𝗹𝗹 𝗿𝗲𝘁𝘂𝗿𝗻 𝘁𝗼 𝘆𝗼𝘂-!🖤🌸\n\n__তুমি! তোমার! রবের! দিকে! ফিরে! যাও.!!🌼\n__সফলতা! তোমার! দিকে!  ফিরবে.!!💗","\n︵ 💚🥀\n  •─────মন ভালো করার দোয়া-!!🌸\n\n الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالِ❤️😊","\n ︵🕊️\n\n ___ღ-:আল্লাহ'র উপর ভরসা যত\n মজবুত হবে,  জীবনে হতাশা তত কমে আসবে। ༎۵۵༊🌸🌻☘️\n\n﻿ ︵🕊️","\nরাসুল (সাঃ) বলেছেন..!\n\n__তুমি যাকে সত্যিকারে ভালোবাসবে তার সাথে জান্নাতে দেখা করতে পারবে..!!\n\n-প্রথম দেখাতেই 70 বছর কেটে যাবে তার সাথে..♡🩷🪄\n\n...( সুবাহানআল্লাহ )..", "\n.\n\n◑  ➪ইসলাম মানে শান্তি 🌸..!✍️🌸\n\n..","\n অবশ্যই তুমি পাবে যা হারিয়েছো \n   তার চেয়ে উত্তম কিছু ❤️❣️\n\n    (সূরা আনফালঃ৭০)","\n★\n\n- যা আছে আলহামদুলিল্লাহ🖤🥀\n\n- আর যা নেই হবে একদিন\nইনশাআল্লাহ🤍🤲\n\n ★", "\n🦋࿐\n\nহীরার চেয়েও দামি\nহযরত মুহাম্মদ (সাঃ) এর মুখের বাণী🫰🖤\n\n🦋࿐\nসুবহানাল্লাহ-🖤🥀", "\nযাকে ভালোবাসলে কোন Loss নেই তিনি হলেন।\n- হযরত মুহাম্মাদ (সাঃ),,, সুবহানাল্লাহ 🥰😇🥀", "\n- পৌঁছে দাও কালেমার দাওয়াত!🌸🌺\n\n🌸 لَا اِلَهَ اِلَّا اللهُ مَحَمَّدُ رَّسُوْلُ الله(ﷺ)__🥰🌺\n- লা ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসুলুল্লাহ (সাঃ)-🥰🌸", "\n-ভাগ্যিস একজন ‘রব’ আছেন নয়তো এই ভারী দীর্ঘশ্বাসগুলোর খবর কে রাখতেন...🙂🖤🥀\n\n\n_আলহামদুলিল্লাহ_", "\n•\n\n- ফুলের মত সুন্দর হোক প্রতিট| মুসলম|নের হৃদয়-||😊🌸🖤\n\n•", "\n°\n\n     ღ༎'তুমি ফিরে যাও আল্লাহ'র দিকে°࿐\n   ༉༎সৌভাগ্য ফিরে আসবে তুমার দিকে!!😊\n\n °", "\n─༅༎•🌺🌸༅ •─\n ─༅༎•🌺🌸༅༎•─ \n যদি তুমি তোমার কথা গুলো আল্লাহ্ কে জানাতে চাও তবে নামাজ পড়💚🌺\n\nযদি তুমি আল্লাহর কথাগুলো জানতে চাও তবে কোরআন পড়📖    ─༅༎•🌺🌸༅༎•─\n\n •─༅༎•🌺🌸༅༎•─","\n•︵🦋🌸ღ۵༎ \n___Assalamulaikum \n°\n-পাহাড়ের উপর দাঁড়িয়ে︵❝།།\nシ︎ আকাশ যতটা কাছে মনে হয়..! ☁ 😍🥀\n\n─༅༎•─ আকাশ ততোটা কাছে নয়..!😥㋛︎☻︎\n\n🌺🌼 ঠিক ---- 🍀\n༎❞⋆◯ তেমনি কিছু মানুষকে \n ︵ლ🌺 যতটা আপন মনে করা হয়..! 🙃-------------🦋\n\n🍂🍒 আসলে সে মানুষ গুলা ততোটা আপন নয়..!! 💔🥺\n°এক মাত্রো আপন জিনি তিনি হলেন আল্লাহ\n\n──۵㋛︎༊༎༊༎﹏㋛︎!🙃🍂"\n┏╮/╱\n╰️❥☆••\n╱/╰┛\n\n🍁࿐চিরস্থায়ী কি জানেন༒࿐͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌\n༄আপনার সুন্দর ব্যবহার!!🍁!!࿐͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌\n\n!࿐͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌🍁যেটা মৃত্যুর পরও সবার সৃতিতে থাকবে🥰❁ཻ͜͡ღ᭄\n\n", "\n︵🦋🤍 \n\n___ღ༎  I wish 🥳😘\n\n★\n★\n★\n★\n★,🌺🌼🥀মৃত্যুর কয়েক সেকেন্ড আগে যেন প্রত্যেকটা\nমুসলমানের মুখের\nউচ্চারিত হয় !😇\n\n🥀লা ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসূলুল্লাহ ( সঃ )😌\n\nআমিন🤲🤲🤗😙-ღ-࿐🦋\n\n🥰🥰🥰", "\n─༅༎•🦋💫,,\n\༄-দিন শেষে আযানের মধুর ধ্বনিতে-!!\n-এক গ্লাস পানিই বলে দেয়-🍺!!\n-ইসলাম কতটা শান্তির࿐🤗✨\n\n༎•─🧡🌸!!,,,,,,🥀❤️", "\n_____✵♡︎\n\n\n___কি হবে  এত  মানুষের প্রিয় হয়ে__🦋🌻\n\n __যদি আল্লাহ  প্রিয় না হতে পারি__🙂🦋\n\n\n_____✵♡︎", "\n- ৮০ বছরের গোনাহ মাফের দোয়া❤\n\n- আল্লাহুম্মা সল্লি আলা মুহাম্মাদিনিন নাবিউল উম্মি\n ওয়ালা আলিহি ওয়াসাল্লিম তাসলিমা’🕋\n\n- আমিন🌺 Best Your Timeline.!😊", "\__হে আমার আল্লাহ তুমি কবরে থাকা মানুষ গুলর সাজা কমিয়ে দাউ - জারা মারা যাচ্ছেন তাদের কে জান্নাতুল ফেরদৌসের নসিব করো__আমিন-🥺🤲!", "\n༆𝐃𝐨𝐧𝐭 𝐍𝐞𝐞𝐝 𝐀𝐧𝐲 𝐀𝐭𝐭𝐢𝐭𝐮𝐝𝐞 𝐂𝐚𝐩𝐭𝐢𝐨𝐧 𝐄𝐱𝐩𝐫𝐞𝐬𝐬ᰔ࿐......!!😇\n\n- তুমি সফল না হলে কেউ-ই  তোমার ব্যার্থতার গল্প শুনবে না...!🥱🥀🍁\n\n\n___<💚🌼🍒>___", "\n°\n\n___💖🦋𝗟𝗲𝘁 𝘁𝗵𝗲 𝗺𝗮𝗻 𝗶𝗻 𝗬𝗼𝘂𝗿 𝗜𝗺𝗮𝗴𝗶𝗻𝗮𝘁𝗶𝗼𝗻 𝗯𝗲 𝗬𝗼𝘂𝗿𝘀🤍\n\n — দুনিয়ার সব কিছুই বদলাতে পারে, কিন্তু মায়ের ভালবাসা কখনো বদলাবার নয়..!!___🌼💚\n🖤🌺", "\n︵🌻🖤༉\n\n- পৃথিবীতে সবাই তোমাকে ভালোবাসবে\n সেই ভালোবাসার মাঝে যে কোনো প্রয়োজন লুকিয়ে থাকে....!!!\n-কিন্তু একজন ব্যক্তি কোনো প্রয়োজন ছাড়াই তোমাকে ভালোবাসবে সে হলো মা !ღ༎🙂🙂", "\n°\n\n___💖🦋𝗟𝗲𝘁 𝘁𝗵𝗲 𝗺𝗮𝗻 𝗶𝗻 𝗬𝗼𝘂𝗿 𝗜𝗺𝗮𝗴𝗶𝗻𝗮𝘁𝗶𝗼𝗻 𝗯𝗲 𝗬𝗼𝘂𝗿𝘀🤍\n\n— আপনার কল্পনায় থাকা ️মানুষ টা আপনার হোক___🌼💚\n\n🖤🌺", "\n︵🌻🖤༉\n\n- কারো বিরক্তের কারণ হওয়ার চেয়ে🙃\n\n~একাকীত্বে হারিয়ে যাওয়া অনেক ভালো !ღ༎🙂🙂", "\n- আমার একাকীত্বের সময় গুলোতে..!🙁🌸\n\n- কাউকে পাশে পাইনি.!😪💔\n\nআল্লাহ কে ছাড়া...!!🤗", "\nツ࿐❝༆ ভাগ্যিস চেহারাটা খারাপ ツ࿐🙂\n ╭•┄┅═══❁🌺❁═ ╰•┄┅═══❁🌺❁═══┅ 🌻🌸🍀ツ না হলে কতো মেয়ে যে ࿐\n❝ —-__—- আমার প্রেমে হাবুডুবু খাইতো ツ࿐😂😂", "\n ____ 😇😌😇_____\n___তোর চোখের ইশারায় ___😇💞☺\nদোলেমনে আলো রং___☺🥰❣\nতোকেই পেতে তাই এই মন আনমোনা সারাক্ষণ ____💞☺💝", "\n___তুই তাকালে মেঘের পালে উঠে গাঙ্গশীল___😇🥰😌____তোর ইশারা, দিচ্ছে সাড়া হৃদয় সুখের অন্তহীন____☺🥰❤", "\n______😇😇💞_____\nতুমি আকাশের মাঝে বিশলতার উপমা______❣❣❣","•♥️\n\nপ্রতিদিনই সুন্দর হবে যখন \nতুমি ফজরের নামাজ দিয়ে\n                           দিনটা শুরু করবে 🤲🕋\n      #ইনশাআল্লাহ \n\n•♥️","🦋🍀\nツ●───༊᭄࿐❥\n😊:)সময় বদলায় কিন্তু কিছু অনুভূতি বদলায় না🥀 🖤ツ●───༊᭄࿐❥","༊࿐\n •—»✨𝐌 𝐇 𝐁𝐃✨«—•\n╭•┄┅════❁🌺❁════┅┄•╮\n\n𝄞━━❝জান্নাতের নেটওয়ার্ক হলো ইসলাম,❤⃞⃝࿐\n\n❥━༊༎সিম হলো ঈমান❤⃞⃝࿐\n\n●───༉༆বোনাস হলো রমযান,❤⃞⃝࿐\n\n❥❀┈•💛🌻রিচার্জ হলো নামাজ,❤⃞⃝࿐\n\n○──₪࿐আর হেল্প লাইন হলো\nকোরআন❤⃞⃝࿐ 🙂"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "love bot") || (event.body.toLowerCase() == "love bot")) {
     return api.sendMessage("Hmm... Bot is too shy to love the bot admin :))", threadID);
   };

    if ((event.body.toLowerCase() == "oh bot") || (event.body.toLowerCase() == "oh bot")) {
     return api.sendMessage("Hurry, I have to serve other boxes :)", threadID);
   };

    if ((event.body.toLowerCase() == "does bot love you") || (event.body.toLowerCase() == "bot loves you")) {
     return api.sendMessage("Hi, Bot loves you more than me, love bot <3", threadID);
   };

   if ((event.body.toLowerCase() == "dog bot") || (event.body.toLowerCase() == "dog bot")) {
     return api.sendMessage("What dog just talked bad about me, want to die😠", threadID);
   };

   if ((event.body.toLowerCase() == "dmm bot") || (event.body.toLowerCase() == "dmm bot")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };

   if ((event.body.toLowerCase() == "cursing cmm") || (event.body.toLowerCase() == "undercover cmm")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };

  if ((event.body.toLowerCase() == "bsvv nha mng") || (event.body.toLowerCase() == "bsvv nha mng")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "btvv nha mng") || (event.body.toLowerCase() == "btvv nha mng")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hi ae") || (event.body.toLowerCase() == "hi ae")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };


   if ((event.body.toLowerCase() == "tt go mng") || (event.body.toLowerCase() == "tt go mng")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "let's go") || (event.body.toLowerCase() == "let's go")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "tt mng oi") || (event.body.toLowerCase() == "tt mng oi")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
     return api.sendMessage("️Sleep well <3 Wish you all super nice dreams <3", threadID);
   };

   if ((event.body.toLowerCase() == "tt go mn") || (event.body.toLowerCase() == "tt go mn")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop over")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
     return api.sendMessage("️ that's very commendable hihi :>", threadID);
   };

   if ((event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "dm bot")) {
     return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };

   if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
     return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
   };

   if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
     return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
