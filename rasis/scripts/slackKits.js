const greeting = require(__dirname + '/command/app/greeting.js');
const weather = require(__dirname + '/command/app/weather.js');
const reboot = require(__dirname + '/reboot.js');
const release = require(__dirname + '/release.js');
const callAndResponse = require(__dirname + '/callAndResponse.js');

module.exports = {
  hear : (controller) => {
    greeting.hear(controller);
    weather.hear(controller);
    // reboot.hear(controller);
    // release.hear(controller);
    // callAndResponse.hear(controller);
  }
}
