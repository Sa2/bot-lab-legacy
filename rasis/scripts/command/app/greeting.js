const rand = require('../../helper/random.js');

const callReplies = [
  "にゃ？",
  "にゃっ！",
  "にゃん"
]


module.exports = {
  hear : (controller) => {
    controller.hears('ゆず',['direct_message','direct_mention','mention'],(bot,msg) => {
      
      bot.reply(msg, callReplies[rand.getRandomArbitary(0, callReplies.length)]);
    });
  }
}