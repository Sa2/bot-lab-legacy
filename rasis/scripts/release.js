const cmd = require(__dirname + '/cmd.js');
module.exports = {
  hear : (controller) => {
    controller.hears('release', ['direct_message','direct_mention','mention'],(bot,msg) => {
      bot.startConversation(msg, (err, convo) => {
        convo.ask('リリースする?(yes/no)', [
          {
            pattern: bot.utterances.yes,
            callback: (response, convo) => {
              convo.say(cmd.run('hostname'));
              convo.next();
            }
          },
          {
            pattern: bot.utterances.no,
            callback: (response, convo) => {
              convo.say('Quit!');
              convo.next();
            }
          },
          {
            default: true,
            callback: (response, convo) => {
              convo.say("Please type of 'yes' or 'no'.");
              convo.repeat();
              convo.next();
            }
          }
        ]);
      });
    });
  }
}