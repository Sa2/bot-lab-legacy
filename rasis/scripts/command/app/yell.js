const rand = require('../../helper/random.js');
const musicData = require('../../data/musicData.js');

const callReplies = [
  "大丈夫！ぜったい大丈夫にゃ！",
  "これで元気だすにゃ！",
  "ボクがついてるにゃ！"
]

const listen = '(.*)もうムリ|もうダメ|限界|つらい|疲れた|辛い|嫌だ|イヤだ|理不尽'

module.exports = {
  hear : (controller) => {
    controller.hears(listen,['direct_message','direct_mention','mention'],(bot,msg) => {
      yellMusics = musicData.getYellMusic();
      console.log(musicData);
      console.log(yellMusics);
      musicInfo = yellMusics[rand.getRandomArbitary(0, yellMusics.length)]
      yell = `${callReplies[rand.getRandomArbitary(0, callReplies.length)]}\n
      ${musicInfo.title}/${musicInfo.artist}\n
      ${musicInfo.url}`;
      bot.reply(msg, yell);
    });
  }
}