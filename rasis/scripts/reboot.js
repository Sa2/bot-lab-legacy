module.exports =  {
  hear : (controller) => {
    controller.hears('reboot', ['direct_message','direct_mention','mention'],(bot,msg) => {
      bot.startConversation(msg, (err, convo) => {
        convo.ask('リブートする?(yes/no)', [
          {
            pattern: bot.utterances.yes,
            callback: (response, convo) => {
              convo.say('Start!');
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
        ])
      });
    });
  }
}