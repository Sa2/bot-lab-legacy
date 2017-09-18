const rand = require('../../helper/random.js');
const textData = require('../../data/textData.js');

const replies = [
  "大事なことにゃ！",
  "このマインドセットを忘れちゃだめにゃ！"
]

const listen = '(.*)マインドセット|大事な言葉|キーワード'

module.exports = {
  hear : (controller) => {
    controller.hears(listen,['direct_message','direct_mention','mention'],(bot,msg) => {
      mindsets = textData.getMindsetText();
      mindset = mindsets[rand.getRandomArbitary(0, mindsets.length)]
      reply = `${replies[rand.getRandomArbitary(0, replies.length)]}\n
      「${mindset}」`;
      bot.reply(msg, reply);
    });
  }
}