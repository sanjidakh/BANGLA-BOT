const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot2",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "RAHAT",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Yah This Bot creator :Khan Rahul RK  link => https://www.facebook.com/khan.rahulrk","আজ ফাগুনি😊পূণিমা রাতে 🎤🎤Next line 🙈 🎤🙈😁🥱"," –একদিন সব হবে إن شاء الله. !!♡🤍,","°^ ইসকিয়ুস মি! amar boss ke dekhsen 🥹😪°^" ,"এত্ত ডাকিস কেন বিয়ে করায় দিব","আমার বস আমাকে ঠিক করতেছে ডাক দিয়েন না।🥹","এত্ত বট বট কইরেন না সবাই কে বলে দিব আপনি খারাপ","আমার কলিজা আসলেই ভালো","আহা জালাইও না আমাকে","এত্ত গ্রুপ এ আছি কেউ I Love you বলে নাহ","এই জীবন রেখে কি লাভ যদি আমি তোমাকে বিয়ে করায় দিতে না পারি","সব সময় ফাজলামি ভালো লাগে না","আমার বস  এর গফ নাই।","I LOVE YOU JAN","আমিও বিদেশ যাব","তোমাকে আমার রাইতে ভালো লাগে","তোমার মনটা আমারে দিয়া দাও🙈","ভালবাসি তোমাকে","inbox ইনবক্স এ চলে আসো গু","এত্ত ভালবাসা কই রাখি","বেশি bot Bot করলে leave নিবো কিন্তু😒😒 ","শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺","etto jalale তোমার আম্মুকে ke bole diboh😒","এতো ডেকো না,প্রেম এ পরে যাবো তো🙈","Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋","বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑","হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?","এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬","I love you janu🥰","আরে Bolo আমার জান ,কেমন আছো?😚 ","Bot বলে অসম্মান করলি,😰😿","Hop beda😾,Queen বল Shehzadi Queen😼","চুপ থাক ,নাই তো তোর দাত তুলে দিবো কিন্তু","Bot না , জানু বল জানু 😘 ","বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে  আছি😋"," এতো ডাকিস কেন🤬","আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 ","আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒","হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘","দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣","তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 ","আমাকে ডেকো না,আমি ব্যাস্ত আছি","কি হলো , মিস্টেক করচ্ছিস নাকি🤣","বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏","কালকে দেখা করিস তো একটু 😈","হা বলো, শুনছি আমি 😏","আর কত বার ডাকবি ,শুনছি তো","হুম বলো কি বলবে😒","বলো কি করতে পারি তোমার জন্য","আমি তো অন্ধ কিছু দেখি না🐸 😎","Bot না জানু,বল 😌" , "বলো জানু 🌚","তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒","হুম জান তোমার গালে উম্মাহ😑😘","আহ শুনা আমার তোমারে আমি রাইতে ভালোবাসি😇😘","jang hanga korba😒😬","হুম জান তোমার ঠোঁট এ উম্মমাহ😷😘" , "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰","আমাকে এতো না ডেকে কল দাও🫡" , "মিস হিউ কলিজা" , "আমাকে বিয়া করবা" , "আমি কি একবার বলছি আমি নির দু'শ" , "তখন আমার আবেগ কাজ করছিল বিবেক না😟" , "Moye Moye Moye" , "তোমাকে চাই শুধু তোমাকে চাই" , "আসো একটা এরো টিম আপ প্লে করি🥰" , "আপনাকে আমার ভালো লাগে🫢" , "তোমার voice টা অনেক সুন্দর গু কলিজা🫢" , "আমার কথা তোমার Family কে বলো না😟" , "চল আজকে আমরা বিয়া করি"," আমি এখন বিয়া করতে যাইবো ডাকিস না","মেরি জান বলো","অল্প বয়স এ পাকিয়া গেছে","Im Going To Sylhet","lucca tumi","-ডাক্তার বলছে প্রেমের প্রস্তাব না পেলে আমি নাকি বাঁচবো না🥺","সুখ নয় দুঃখে আমি খুশি, সুখটা তাদের দিও আল্লাহ যাদের আমি ভালোবাসি,!","𝐈 𝐋𝐨𝐯𝐞 𝐘𝐨𝐮 ইগনোর করিস না তুই পড়ছোস মানে তোরেই বলছি!","খুজতে হলে ভালো মনের মানুষ খুজো, সব কিছু 𝗽𝗲𝗿𝗳𝗲𝗰𝘁 খুজতে গেলে ভালোবাসাটাই পাবে না……💔" , "আমি তোমার সাথে সারাজীবন সিঙ্গেল থাকতে চাই 🥺❤️","মন যেখানে পরিষ্কার গোসল করা সেখানে বিলাসিতা।" , "→স্বার্থ শেষ তো বদনাম শুরু 🙂","★° নক দিও, আমিও তোমাকে পছন্দ করি।!!🌚🫶           ★°","যদি propos করি 😁 তাহলে কি Accept করবা?🙈","যদি 𝙆𝙖𝙧𝙊 সাথে খারাপ আচরণ করে থাকি তাহলে ✃𝙞 𝙇𝙤𝙫𝙀 𝙮𝙤𝙐🥺","তেলাপোকার মতো GF লাগবে জুতার বাড়ি মারলেও যেন উড়ে এসে জরিয়ে ধরে!🙂","─༅༎শূন‍্য বিকেলে পূর্ন্য তুমি..!🍒 💚তোমার হাসিতে মুগ্ধ আমি😊","মানসিক শান্তি না থাকলে.!-পুরো দুনিয়াটাই অন্ধকার লাগে..","𝗟𝗶𝗳𝗲 𝗶𝘀 𝗮 𝘀𝘁𝗼𝗿𝘆 𝗼𝗳 𝗶𝗺𝗽𝗲𝗿𝗳𝗲𝗰𝘁𝗶𝗼𝗻𝘀!🖤            —🤫জীবন মানেই অপূর্ণতার গল্প!🖤😇","-পুরুষের সৌন্দর্য সফলতায়-!🖤🌸","কি জিগাবি জিগা? সব মি'ছা কথা কমু!🙂","কালো মানুষ ছবিতেই সুন্দর 🥰☺️🤍","Unmarried আছি, knock দিতে পারো!😒","জয় বাংলা শেখ হাসিনার।  খেতা বালিশ সামলা 😆😆","oii আসো ঝগরা করি জিতলে তুমি আমার হারলে আমি তোমার","বিশ্বাস আর ভালোবাসা ঠিক থাকলে FB এর Rls ও পূর্ণতা পায়","Hey there 👋","♛ -- সবার বিয়ের ফুল ফুটে গেছে..😌🌺-- আমার টা মনে হয় কলি অবস্থায়...🌱🍃🤣  ~ছাগলে খেয়ে ফেলেছে.😂🐐🐐🤣","___😽🌹ღ۵࿐❥一༊ বিছানায় হিসু করে দেওয়ার পর🙊 মেয়ে টি😻Facebook a স্ট্যাটাস দিলো বিপদ কখনো বলে আসে না।🥀😌🐸༉🥰彡","~•ভাবছিফেসবুকে♡°•একটা পোস্ট,করমু°•▪~°~•কিন্তু°~•♡▪°•করমু না°•☆°~•☆কারণ°~•♡°~•আসকে আমার মন ভালো°~○☆নেই°~•☆☆▪,😩🐸","__টয়লেটে বসে ও আমি ক‍্যাপশন দিতে পারি 🐸__আর তোরা খাটে শুয়ে ও-রিএক্ট দিতে পারছ না😡😡___মুরগির দুধ-খাইয়া মরে যা সব👉😎","এই শহরের বাজারে তেল ,কাচা মরিচ,মাছ,মাংস, ডিম,ইত্যাদি প্রায় সব কিছু পাওয়া যায় 🙂কিন্তু বউ পাওয়া যায় না 😭","I love you__অর্থ আমি তোমাকে ভালোবাসি🥴এমন নতুন নতুন 😇ইংরেজি শিখতে হলে,,😊 I love you 2 বলে আমার পাশে থাকো-💁‍♂️☺️","🥀🙄彡━ღ❛ওরস্যালাইন কি সারাজীবন ওর ই থাকবো,🐸কোনদিন কি আমার হইবো না,━🥺😟🙄🐸","😍ઊ⃝🥀আর নয় হতাশা😌ೋ⃝🥀😇௺⃝🥀আর নয় ব্যার্থতা😉༃⃟🥀❀⎯⎯⎯আসো আমার ইনবক্সে 😍༊⃟🥀আর বলো ⎯⎯⎯ ❀ 😍༊⃟🥀আই লাভ ইউ🥰༂⃝🥀😇དྷ⃟🥀আর জিতে নাও আমাকে😍ྫྷ⃝🥀","-🐸সিহ ইউ নট ফোর মাইন্ডヅ-ডু ইউ লাভ মি!!-🙄🙊ヅ🤦●───༆🤦- তেমন কিছু বলিনাই ❞🥴💔______দেখলাম তোমরা পড়তে পারো কিনা 😒😒💝","চা থেকে কফি ☕ কফি থেকে বার্গার 🍔 আপনার ওপর ক্রাশ খেয়ে 🥰 আমার জীবন ছারকার 😁🖤💔🥀,ওগো তুমি কই","♦️-I love you বিক্রি করতে আসছি-🙃🍁-!তুমি চাইলে অর্ডার দিতে পারো ডেলিভারি -🥵-চার্জ চুম্মাহ-🥵💋","I wish🥰🙂- কোনো একদিন ভীষন ঝড় হবে😎🌴🌴 তুই উড়ে এসে আমার কোলে পড়বি😁😂🙈","-🍀বুকে চিন চিন করছে হায়.☘️.\❤️❝ Gf.নাইGf.চাই.❞.......💔☘️// \☘️আমরা দু জন দুজনারি☘️#\ //🍃£ফেসবুকের দু নিয়ায় °🍃..!// \🍃 : তুমি মেসেজ দিলে হায়*.🍃}\ //🍀❝মুবাইল হ্যাং হয়ে যায়*🍀🥺.°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°","একমাত্র টাকা ছাড়া আসলে জীবনে কোন কিছু সুখী লাগবে না।","কাশফু'লে মু*তে আসলাম -🥱💦🥵","তাবিজ কইরা হইলেও প্রেম এক্কান করমুই..🤭😇😇😇","চাইয়া থাকস কেন কি কবি ক -🌚🐸🔪","সুতোয় বাঁধা জীবন ছেড়ে পালাবি কোথায়।","রাত জেগে আছি কেউ মেসেজ দিবে বলে, ভুলে গেছি আমার তো কেউ নেই।","মায়া বড়ই অদ্ভুত জিনিস।","অর্ধেক খাট, অর্ধেক কম্বল ভাড়া দেওয়া হবে🙂","উপার্জন করবেন যত-//এই সমাজে উপযুক্ত হবেন তত-//","-যেহেতু তুমি সিঙ্গেল তাই./🙂মানবতার খাতিরে 𝗜 𝗟𝗼𝘃𝗲 𝗬𝗼𝘂./🙂👀","আমায় বিয়া করবানি🤤🐰","_পাওয়ার চেয়ে ধরে রাখা কঠিন-//🩷🪽","কি সুন্দর আমার জীবন-/🙂 শখের বয়সে মাথা ভর্তি ডিপ্রেশন-/🥀","এই শহরে বেঁচে থাকতে হলে মায়া ত্যাগ করতে হবে-🙂ლ࿐","ইচ্ছে গুলো খুবই অল্প🍁কিন্তু প্রতিটা ইচ্ছাতে না পাওয়ার গল্প!🥀😇","আসলে গরিব তো🤧🤧তাই কোনো মেয়েকে দেখে ক্রাশ খাই না🥺","জামাই ছাড়া এতিম মেয়ে গুলা কোথায়! তোমরা সারা দাও..!!🤭🥴🐸","ভুলে যাও Ex কে নক দাও আমাকে 😌🌚","-যারে দেহি তারেই ভাল্লাগে..!🙈-মনে হয় রুচি বাড়ছে..😀😋","^নক না দিলে আইডি খুলছস ক্যান°!😾ননসেন্স বেডি.আর বেডা.!🥲🥀","-শূন্য বিকেলে পূর্ন তুমি!🥰 -তোমার হাসিতে মুগ্ধ আমি.😇","মা হিসাবে সব নারী ই সেরা.!-🩷🪽","যার মনে আমি নাই🍒তার মনে কুত্তায় মুইতা দিক..!!😏🐸🍒","কখনও মেয়েদের সাথে ইনবক্সে কথা বলি নাই ___!! 🙂🙂","খোঁজ নেয়া মানুষটা আজ নিখোঁজ!🌸","-মায়ের হাসি তুলনাহীন____!!😽☺️","__অর্থের কাছে স্বপ্ন অসহায়..!💚🌿","একটা ভাঙা'চুরা  𝐠𝐟 চাই....! 🥺🫶","-♡তোমার মায়ায় পড়ে গেছি!🩷🌺 -♡","—বেডী  মানুষের মন অনেক বড় ১৩২ জিবি র‍্যাম-|♡(🙂🤝🏻.)","⎯͢⎯⃝🌼-চরিত্র যতটা পবিত্র_ব্যক্তিত্ব ততটাই সুন্দর⎯͢♡🖤🩷","• ___ ক..আমি তোর🫵 কী লাগি!> 🔪😾•","দিনশেষে একজন থাকুক😌তবে সম্পূর্ণ আমারই থাকুক ❤️☺️🦋","•⎯͢⎯⃝🗣️উক্তি আর যুক্তি তে জীবন চলে না বাস্তব তা চায় অর্থ•⎯͢⎯⃝💰","° ___শয়তান বেডা আর বেডি বল ভালোবাসি 🙈😁","❥︎ ইস কেউ যদি বলতো বড্ড ভালোবাসি তোমায়-♡︎___🌺🌸︵🦋💔","(🤰)-এই বেডির সর্বনাশ কে করলো_🙂 Mention","_তুমি সেই পূর্ণতা আমার অনুভবে🖤🌸","★ মন ডা খালি বেডি বেডি করে_//🥺💔★🤪🤪🤪","মানুষ মায়ার কারিগর, 😅 মায়া বাড়িয়ে হারিয়ে যায় 🙂","বাহিরটা হাঁসলেও ভেতরটা ক্ষয় গুছিয়ে গল্প বলা যায় অনুভূতি নয়","𝗜 𝗟𝗼𝘃𝗲 𝗬𝗼𝘂 😻🙈 Ummmmma😘😘 ৬ তানি করলাম 🐸🤣","•Apu অর্থ bow ধন্যবাদ..!🐸🙂•","__রিলেশনের বাজারে আমি এক 𝐒𝐢𝐧𝐠𝐥𝐞  শিশু_😕","•__ মন মেজাজ ঠিক নাই I love You🥺🐸•","°.. সব নষ্টের মূল 😒..এই শালা ☞📱°",];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "love you bot") || (event.body.toLowerCase() == "love u bot")) {
     return api.sendMessage("আমার বস Khan Rahul RK কোন মেয়ের সাথে কথা বল", threadID);
   };

    if ((event.body.toLowerCase() == "ummah bot") || (event.body.toLowerCase() == "bot ummah")) {
     return api.sendMessage("লুচ্চা চুম্মা চুম্মি করোস কেন🥵", threadID);
   };

    if ((event.body.toLowerCase() == "i love u bot") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("আমাকে না আমার CREATOR Khan Rahul RK  কে ভালোবাসো😻🥀", threadID);
   };

   if ((event.body.toLowerCase() == "baler bot") || (event.body.toLowerCase() == "fuck bot") || (event.body.toLowerCase() == "heda bot")) {
     return api.sendMessage("কিরে আমাকে গালি দেস কেনো তোকে কিন্তু বেন করে দিমু😠 + Khan Rahul RK ke bole diboh ", threadID);
   };

   if ((event.body.toLowerCase() == "kiss bot") || (event.body.toLowerCase() == "bot kiss me")) {
     return api.sendMessage("আমি ভালো তুমি পঁচা😌", threadID);
   };

   if ((event.body.toLowerCase() == "bot koi") || (event.body.toLowerCase() == "bot koi")) {
     return api.sendMessage("এই তো আমি এখানে🙋‍♂️", threadID);
   };

  if ((event.body.toLowerCase() == "bsvv nha mng") || (event.body.toLowerCase() == "bsvv nha mng")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "kiss you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("https://i.imgur.com/59gU9jA.jpg", threadID);
   };

   if ((event.body.toLowerCase() == "meye") || (event.body.toLowerCase() == "মাইয়া মানুষ")) {
     return api.sendMessage("দামি মেকাপ করে ফর্সা হইবা আর বিয়ের পরে বাচ্চা কালো হলে বলবা যে বাবার মতো হইছে [ইয়ারকি পাইছো]", threadID);
   };

   if ((event.body.toLowerCase() == "club code nnc") || (event.body.toLowerCase() == "hi ae")) {
     return api.sendMessage("Hello dear, have a nice day 2546156❤️", threadID);
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

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `🤖Dear,『${name}』\n\n💌${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
