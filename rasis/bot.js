const Botkit = require('botkit');
const slackKits = require(__dirname + '/scripts/slackKits.js');

if (!process.env.slack_private_bot_token) {
	console.log('Error: Specify token in environment');
	process.exit(1);
}

const controller = Botkit.slackbot({
	debug: false
});

controller.spawn({
	token: process.env.slack_private_bot_token
}).startRTM((err) => {
	if (err) {
		throw new Error(err);
	}
});

controller.hears('help', ['direct_message','direct_mention','mention'],(bot,message) => {
  const usage = `
\`\`\`
Usage: @bot <command> [args]
    require mention
Common commands:
    help                           help
	cmd        [command]           execute shell command
	whereis                        hostname
	release
	reboot

\`\`\`
`
  bot.reply(message,usage);
});

slackKits.hear(controller);
