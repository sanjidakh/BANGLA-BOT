/** THIS FULL BOT COMMAND FILE AND ALL API CREATE BY 𝐊𝐡𝐚𝐧 𝐑𝐚𝐡𝐮𝐥 𝐑𝐊 DONT CHINGE THE MY ANY CODE 🤙🖤📿  **/
module.exports.config = {
    name: "naturalv7",
    version: "1.0.0",
    hasPermission: 0,
    credits: "RAHAT",
    description: "Natural🥰",
    usePrefix: true,
    commandCategory: "Khan Rahul RK",
    usages: "Natural Video 7",
    cooldowns: 5,
    dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["...!✨🤍🌸🍂\n\n\n⚊ফুলের আলাদা কোন ক্যাপশন হয় না\n ফুলের ক্যাপশন তার সৌন্দর্যই। ❯ 🦋🩷🪽\n\n\n...!✨🤍🌸🍂"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.imgur.com/qkWLIcB.mp4",
"https://i.imgur.com/LxgMw4v.mp4",
"https://i.imgur.com/gFikegj.mp4",
"https://i.imgur.com/joGj9PK.mp4",
"https://i.imgur.com/M2IAXUW.mp4",
"https://i.imgur.com/BZmbdqq.mp4", 
"https://i.imgur.com/7zGi8qk.mp4",
"https://i.imgur.com/Bxxxhx7.mp4",
"https://i.imgur.com/y48JOJ4.mp4",
"https://i.imgur.com/9Tp7DLu.mp4",

];
     var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
