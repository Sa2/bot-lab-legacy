const cmd = require(__dirname + '/cmd.js');
const rand = require(__dirname + '/helper/random.js');

const simpleReplies = {
  "who are you?" : "I'm new house's child!",
  "myne" : "myne!",
  "hi" : "hi"
}

const nameReplies = [
  "にゃ？",
  "にゃっ！",
  "にゃん"
]

module.exports = {
  hear : (controller) => {
    for (const key in simpleReplies) {
      controller.hears(key, ['direct_message','direct_mention','mention'],(bot,msg) => {
        bot.reply(msg, simpleReplies[key]);
      }); 
    };
    controller.hears('hello',['direct_mention', 'mention'],function(bot, msg) {
      bot.api.users.info({user: msg.user}, (error, response) => {
        let {name, real_name} = response.user;
        bot.reply(msg, '<@'+msg.user+'> Hello! ' + name);
      })
    });
    controller.hears('whois',['direct_message','direct_mention','mention'],(bot,msg) => {
      bot.reply(msg, cmd.run('hostname'));
    });
    controller.hears('cmd (.*)',['direct_message','direct_mention','mention'],(bot,msg) => {
      bot.reply(msg, cmd.execute(msg.match[1]));
    });
  }
}