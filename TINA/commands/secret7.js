module.exports.config = {
  name: "secretv7",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "RAHUL",
  description: "Love",
  commandCategory: "Picture",
  cooldowns: 0,
  dependencies: {
        "axios": "",y
        "fs-extra": ""
    }
}
module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'pair6.png');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.postimg.cc/fWYH1CrL/pair6-11zon.png", path);
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let pairing_img = await jimp.read(__root + "/pair6.png");
    let pathImg = __root + `/pairing_${one}__${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;

    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));

    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    pairing_img.composite(circleOne.resize(330, 330), 162, 194).composite(circleTwo.resize(330, 330), 785, 194);

    let raw = await pairing_img.getBufferAsync("image/png");

    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);

    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}
module.exports. run = async function({ api, event, args, Users, Threads, Currencies }) {
  const axios = require("axios");
    const fs = require("fs-extra");
    const { threadID, messageID, senderID } = event;
    var tl = ['21%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', "0%", "48%"];
        var tle = tl[Math.floor(Math.random() * tl.length)];
        let dataa = await api.getUserInfo(event.senderID);
        let namee = await dataa[event.senderID].name
        let loz = await api.getThreadInfo(event.threadID);
        var emoji = loz.participantIDs;
        var id = emoji[Math.floor(Math.random() * emoji.length)];

let hemang = ["𝑲𝒚𝒂 𝒕𝒖𝒎𝒏𝒆 𝒌𝒉𝒂𝒏𝒂 𝒌𝒉𝒂𝒚𝒂 𝒅𝒆𝒂𝒓 💝🥀", "𝑱𝒂𝒊 𝑺𝒉𝒓𝒆𝒆 𝑲𝒓𝒊𝒔𝒉𝒏𝒂 🌹🚩💝", "𝑱𝒂𝒊 𝑺𝒉𝒓𝒆𝒆 𝑹𝒂𝒎🚩🚩💝🌷", "𝑹𝒂𝒅𝒉𝒆 𝑹𝒂𝒅𝒉𝒆 🪷🏵️", "𝑹𝒂𝒎 𝑹𝒂𝒎 𝒋𝒊 🚩🌹🌷", "𝑱𝒂𝒊 𝑯𝒐 🥰","𝑱𝒂𝒊 𝑩𝒉𝒐𝒍𝒆𝒏𝒂𝒕𝒉 ❤️🧡💛 ", "𝑳𝒐𝒗𝒆 𝒚𝒐𝒖 𝑫𝒐𝒔𝒕 💚🩵💙","𝑲𝒆𝒔𝒆 𝒉𝒐 𝒕𝒖𝒎 𝒅𝒐𝒔𝒕 💗🌹", "𝑱𝒂𝒊 𝑺𝒉𝒓𝒆𝒆 𝑲𝒓𝒊𝒔𝒉𝒏𝒂 🚩🚩🌷🌹 ", "𝑱𝒂𝒊 𝑺𝒉𝒓𝒆𝒆 𝑹𝒂𝒎 🚩🌺🥀💐🌹", "𝑲𝒆𝒔𝒂 𝒈𝒚𝒂 𝒂𝒂𝒋 𝒌𝒂 𝒅𝒊𝒏 🍂🌻",
"𝑻𝒖𝒎 𝒎𝒆𝒓𝒊 𝒛𝒊𝒏𝒅𝒂𝒈𝒊 𝒌𝒊 𝒔𝒂𝒃𝒔𝒆 𝒌𝒉𝒐𝒐𝒃𝒔𝒖𝒓𝒂𝒕 𝒃𝒂𝒂𝒕 𝒉𝒐, 𝒎𝒆𝒓𝒊 𝒑𝒚𝒂𝒂𝒓𝒊. ❤️", "𝑻𝒆𝒓𝒆 𝒃𝒊𝒏𝒂 𝒎𝒆𝒓𝒆 𝒅𝒊𝒍 𝒌𝒊 𝒅𝒉𝒂𝒅𝒌𝒂𝒏 𝒂𝒅𝒉𝒐𝒐𝒓𝒊 𝒉𝒂𝒊, 𝒋𝒂𝒂𝒏𝒆𝒎𝒂𝒏. 💓", "𝑻𝒖𝒎𝒉𝒂𝒓𝒊 𝒎𝒖𝒔𝒌𝒖𝒓𝒂𝒉𝒂𝒕 𝒔𝒆 𝒉𝒊 𝒎𝒆𝒓𝒊 𝒔𝒖𝒃𝒂𝒉 𝒔𝒂𝒗𝒆𝒓𝒆 𝒌𝒉𝒊𝒍𝒕𝒊 𝒉𝒂𝒊. 😊❤️", "𝑻𝒖𝒎𝒔𝒆 𝒋𝒖𝒅𝒊 𝒉𝒂𝒓 𝒑𝒂𝒍 𝒎𝒆𝒓𝒊 𝒛𝒊𝒏𝒅𝒂𝒈𝒊 𝒌𝒂 𝒔𝒂𝒃𝒔𝒆 𝒉𝒂𝒔𝒆𝒆𝒏 𝒑𝒂𝒍 𝒉𝒂𝒊. 💑", "𝑻𝒖𝒎𝒉𝒂𝒓𝒆 𝒃𝒊𝒏𝒂 𝒎𝒆𝒓𝒊 𝒅𝒖𝒏𝒊𝒚𝒂 𝒂𝒅𝒉𝒐𝒐𝒓𝒊 𝒔𝒊 𝒍𝒂𝒈𝒕𝒊 𝒉𝒂𝒊, 𝒎𝒆𝒓𝒆 𝒚𝒂𝒂𝒓. 💖", "𝑻𝒖𝒎𝒉𝒂𝒓𝒂 𝒔𝒂𝒂𝒕𝒉, 𝒎𝒆𝒓𝒊 𝒌𝒂𝒉𝒂𝒏𝒊 𝒌𝒊 𝒔𝒂𝒃𝒔𝒆 𝒌𝒉𝒐𝒐𝒃𝒔𝒖𝒓𝒂𝒕 𝒄𝒉𝒂𝒏𝒅𝒂𝒏𝒊 𝒉𝒂𝒊. 🌙💏", "𝑻𝒖𝒎𝒉𝒂𝒓𝒊 𝒃𝒂𝒂𝒕𝒆𝒊𝒏 𝒎𝒆𝒓𝒆 𝒅𝒊𝒍 𝒌𝒐 𝒄𝒉𝒉𝒐𝒐 𝒍𝒆𝒕𝒊 𝒉𝒂𝒊𝒏, 𝒑𝒚𝒂𝒂𝒓 𝒎𝒆𝒊𝒏 𝒎𝒂𝒔𝒕𝒊 𝒎𝒆𝒊𝒏. 😍❤️", "𝑻𝒖𝒎𝒉𝒂𝒓𝒊 𝒂𝒂𝒏𝒌𝒉𝒆𝒊𝒏, 𝒎𝒆𝒓𝒊 𝒅𝒖𝒏𝒊𝒚𝒂 𝒌𝒊 𝒔𝒂𝒃𝒔𝒆 𝒑𝒚𝒂𝒂𝒓𝒊 𝒕𝒂𝒔𝒗𝒆𝒆𝒓 𝒉𝒂𝒊. 🌟😘", "𝑻𝒖𝒎𝒔𝒆 𝒑𝒚𝒂𝒂𝒓 𝒌𝒂𝒓𝒏𝒂 𝒎𝒆𝒓𝒊 𝒛𝒊𝒏𝒅𝒂𝒈𝒊 𝒌𝒂 𝒔𝒂𝒃𝒔𝒆 𝒂𝒄𝒉𝒉𝒂 𝒇𝒂𝒊𝒔𝒍𝒂 𝒉𝒂𝒊. 💞", "𝑻𝒖𝒎𝒔𝒆 𝒋𝒖𝒅𝒌𝒂𝒓 𝒎𝒆𝒓𝒊 𝒛𝒊𝒏𝒅𝒂𝒈𝒊 𝒎𝒆𝒊𝒏 𝒓𝒂𝒏𝒈 𝒃𝒉𝒂𝒓 𝒈𝒂𝒚𝒆, 𝒎𝒆𝒓𝒊 𝒋𝒂𝒂𝒏. 🌈❤️","𝑺𝒂𝒃𝒔𝒆 𝒂𝒄𝒉𝒉𝒊 𝒋𝒐𝒅𝒊 "," 𝑻𝒖𝒎𝒉𝒂𝒓𝒆 100 𝒃𝒂𝒄𝒉𝒉𝒆 𝒉𝒐 💖😏","𝑲𝒊𝒕𝒏𝒆 𝒄𝒖𝒕𝒆 𝒍𝒈 𝒓𝒉𝒆 𝒅𝒐𝒏𝒐 💛🧡","𝑻𝒂𝒈𝒅𝒊 𝒋𝒐𝒅𝒊 𝒃𝒏 𝒈𝒂𝒊 💓💖"," 𝑴𝒔𝒕 𝒄𝒐𝒖𝒑𝒍𝒆𝒔 𝒆𝒌𝒅𝒂𝒎 💓","𝑴𝒐𝒕𝒖 𝒐𝒓 𝑷𝒂𝒕𝒍𝒖 𝒌𝒊 𝒋𝒐𝒅𝒊 😹💞","𝑫𝒐𝒏𝒐 𝒎𝒐𝒕𝒆 𝒐𝒓 𝒊𝒏𝒌𝒆 𝒃𝒄𝒉𝒉𝒆 𝒊𝒏𝒔𝒆 𝒃𝒉𝒊 𝒎𝒐𝒕𝒆 😹💛" ,"𝑺𝒅𝒂 𝑺𝒖𝒉𝒂𝒈𝒂𝒏 𝑹𝒉𝒐 💖","𝑻𝒖𝒎𝒉𝒂𝒓𝒊 𝑪𝒓𝒊𝒄𝒌𝒆𝒕 𝒕𝒆𝒂𝒎 𝒃𝒂𝒏𝒆 🤭","𝑻𝒖𝒎𝒉𝒂𝒓𝒆 8 𝑩𝒂𝒄𝒉𝒉𝒆 𝒉𝒐 😗","𝑻𝒖𝒎𝒉𝒂𝒓𝒆 50 𝒃𝒂𝒄𝒉𝒉𝒆 𝒉𝒐 😋","𝑩𝒐𝒍𝒐 𝑹𝒂𝒅𝒉𝒆 𝑹𝒂𝒅𝒉𝒆 💖🚩","𝑩𝒐𝒍𝒐 𝑱𝒂𝒊 𝒔𝒉𝒆𝒆 𝑲𝒓𝒊𝒔𝒉𝒏𝒂 💖🚩","7 𝒋𝒂𝒏𝒎𝒐 𝒌𝒂 𝒚𝒆 𝒓𝒊𝒔𝒕𝒂 𝒉 💗💗","𝑺𝒂𝒔𝒕𝒆 𝑪𝒐𝒖𝒑𝒍𝒆𝒔","𝑫𝒐𝒏𝒐 𝑻𝒉𝒂𝒓𝒌𝒊 𝒉 𝒚𝒆 𝒕𝒐 😏","𝑬𝒌 𝒉𝒂𝒏𝒅𝒔𝒐𝒎𝒆 𝒆𝒌 𝒃𝒆𝒖𝒕𝒊𝒇𝒖𝒍 🥰","𝑨𝒆𝒆 𝑮 𝑶𝒐𝒐 𝑮 𝒌𝒓𝒏𝒆 𝒘𝒂𝒍𝒆 😂💓"," 𝑪𝒉𝒊𝒊𝒊 🤣"," 𝒀𝒆 𝑹𝒊𝒔𝒕𝒂.𝒌𝒚𝒂 𝒌𝒆𝒉𝒍𝒂𝒕𝒂 𝒉 🤭"," 𝑪𝒉𝒊𝒊 𝒀𝒆 𝒌𝒆𝒔𝒂 𝑹𝒊𝒔𝒕𝒂 𝒉 🥹","𝑪𝒉𝒊𝒊 𝑪𝒉𝒊𝒊 𝑻𝒉𝒖𝒖 𝑻𝒉𝒖𝒖 😆","𝑲𝒊𝒕𝒏𝒆 𝒈𝒂𝒏𝒅𝒆 𝒍𝒐𝒈 𝒉 🤣"," 𝑹𝒆𝒂𝒍 𝑩𝑭 𝑮𝑭 𝒂𝒂 𝒈𝒚𝒆 💝"," 𝑻𝒖𝒎𝒉𝒂𝒓𝒊 𝒅𝒐𝒔𝒕𝒊 𝒃𝒂𝒏𝒊 𝒓𝒂𝒉𝒆 💞","𝑻𝒖𝒎𝒉𝒂𝒓𝒊 𝒋𝒐𝒅𝒊 𝒕𝒖𝒕.𝒋𝒂𝒚𝒆 😗","𝑻𝒖𝒎𝒉𝒂𝒓𝒊 𝒋𝒐𝒅𝒊 𝒃𝒂𝒏𝒊 𝒓𝒂𝒉𝒆 🥳","𝑫𝒊𝒗𝒐𝒓𝒄𝒆 𝒉𝒐 𝒋𝒂𝒚𝒆 𝒕𝒖𝒎𝒉𝒂𝒓𝒂 😆","𝑫𝒐𝒏𝒐 𝑩𝒆𝒔𝒕𝒇𝒓𝒊𝒆𝒏𝒅 𝒂𝒂𝒋 𝒆𝒌 𝒔𝒂𝒕𝒉 💓💗"," 𝑲𝒊𝒕𝒏𝒆 𝒂𝒄𝒉𝒉𝒆 𝒃𝒆𝒔𝒕𝒖 𝒃𝒆𝒔𝒕𝒊𝒆 𝒉 💗","𝑨𝒑𝒏𝒊 𝑮𝑭 𝒔𝒆 𝒄𝒉𝒖𝒑𝒂𝒌𝒆 𝒑𝒂𝒊𝒓 𝒑𝒂𝒊𝒓 𝒌𝒓 𝒓𝒉𝒆 𝒉𝒐 😏😏 "," 𝑻𝒖𝒎𝒉𝒂𝒓𝒊 𝒋𝒐𝒅𝒊 7 𝒋𝒂𝒏𝒎𝒐 𝒕𝒂𝒌 𝒄𝒉𝒍𝒆💕","𝑲𝒓𝒍𝒐 𝒅𝒐𝒏𝒐 𝒔𝒆𝒕𝒕𝒊𝒏𝒈 𝒂𝒃🧡","𝑭𝒖𝒍𝒍 𝒔𝒆𝒕𝒕𝒊𝒏𝒈𝒃𝒂𝒛𝒊😋","𝑭𝒖𝒍𝒍 𝑳𝒊𝒏𝒆𝒃𝒂𝒛𝒊😏", "𝑵𝒉𝒊 𝑷𝒂𝒕𝒆𝒈𝒊 𝒚𝒆😁"," 𝑵𝒉𝒊 𝒑𝒂𝒕𝒏𝒆 𝒘𝒂𝒍𝒊 𝒚𝒆😂","𝑻𝒖𝒎 𝒔𝒂𝒅𝒂 𝒔𝒊𝒏𝒈𝒍𝒆 𝑹𝒉𝒐𝒈𝒆😹","🌸 चलो एक दूसरे को चुम्मा देदो जल्दी से _____😝🦋", "𝑪𝒉𝒍𝒐 𝒋𝒂𝒐 𝒂𝒃 𝒃𝒆𝒅𝒓𝒐𝒐𝒎 𝒎 "," 𝑱𝒂𝒐 𝒃𝒆𝒅𝒓𝒐𝒐𝒎 𝒎 𝒎𝒐𝒋 𝒌𝒓𝒐 𝒂𝒃 😏"," 𝑨𝒃 𝒅𝒐𝒏𝒐 𝒃𝒉𝒂𝒈 𝒌 𝒔𝒉𝒂𝒅𝒊 𝒌𝒓𝒍𝒐 😗","𝑻𝒖𝒎 𝒅𝒐𝒏𝒐 𝒑𝒂𝒈𝒂𝒍 𝒉𝒐 𝒆𝒌 𝒅𝒖𝒔𝒓𝒆 𝒌 𝒍𝒊𝒚𝒆 😁","𝑮𝒉𝒖𝒔 𝒋𝒂𝒐 𝒂𝒃 𝒃𝒂𝒕𝒉𝒓𝒐𝒐𝒎 𝒎 🥳","𝑱𝒂𝒐 𝒊𝒔𝒉𝒒 𝒍𝒅𝒂𝒐 😋","𝑹𝒆𝒒𝒖𝒆𝒔𝒕 𝒃𝒉𝒆𝒋𝒐 𝒆𝒌 𝒅𝒖𝒔𝒓𝒆 𝒌𝒐 𝒂𝒃 💝🚩","𝑰𝒏𝒃𝒐𝒙 𝒎 𝒋𝒂𝒐 𝒍𝒐𝒗𝒆𝒃𝒂𝒛𝒊 𝒌𝒓𝒐 💞💓"," 𝑺𝒉𝒂𝒅𝒊 𝒌𝒃 𝒌𝒓 𝒓𝒉𝒆 𝒉𝒐 💝","𝑳𝒈 𝒋𝒂𝒐 𝒌𝒂𝒎 𝒑 🥳","𝑺𝒆𝒕𝒕𝒊𝒏𝒈 𝒌𝒓𝒍𝒐 𝒂𝒃𝒉𝒊 𝒃𝒉𝒊 𝒎𝒐𝒌𝒂 𝒉 💓💖","𝑱𝒘𝒂𝒏 𝒉𝒐 𝒈𝒚𝒆 𝒉𝒐 𝒂𝒃 𝒕𝒐 𝒔𝒉𝒂𝒅𝒊 𝒌𝒓𝒍𝒐 🎉🎊","𝒃𝒂𝒕 𝒄𝒉𝒊𝒕 𝒔𝒖𝒓𝒖 𝒌𝒓𝒐 𝒊𝒏𝒃𝒐𝒙 𝒎 🎂🎁"];
 let sheoran = hemang[Math.floor(Math.random() * hemang.length)];


        let data = await api.getUserInfo(id);
        let name = await data[id].name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});

        var sex = await data[id].gender;
        var gender = sex == 2 ? "Male🧑" : sex == 1 ? "Female👩‍  " : "Tran Duc Bo";
var one = senderID, two = id;
    return makeImage({ one, two }).then(path => api.sendMessage({ body: `💞${namee}\n                   🌺   𝗟𝗼𝘃𝗲   🌺\n💞${name}\n      ✧═══•❁『 ${tle} 』❁•═══✧\n                              `, mentions: arraytag, attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
}
