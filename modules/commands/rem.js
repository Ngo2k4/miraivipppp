module.exports.config = {
  name: "rem",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kadeer",
  description: "Hแบงu Gรกi Rem",
  commandCategory: "Edit-IMG",
  usages: "๐๐๐ข๐ญ-๐๐ฆ๐ ",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apirem.khoahoang3.repl.co').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `๐ธ๐ฅ๐ฒ๐บ ๐ป๐ฒฬ <๐ฏ\n๐ธ๐ฆ๐ผฬฬ ๐ฎฬ๐ป๐ต ๐ต๐ถ๐ฒฬฃฬ๐ป ๐ฐ๐ผฬ: ${count} ๐ฎฬ๐ป๐ต`,
            attachment: fs.createReadStream(__dirname + `/cache/rem.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/rem.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/rem.${ext}`)).on("close", callback);
      })
}