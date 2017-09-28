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
    controller.hears('Bye',['direct_message','direct_mention','mention'],(bot,msg) => {
      
      byeText = 'この業界は狭いものです。\nどこかでお会いするかもしれません。\nその時はまたよろしくお願いします。\nSee you again!!';
      bot.reply(msg, byeText);
    });
  }
}