const rand = require('../../helper/random.js');
const wearherClient = require('../../client/weather.js');
const fetch = require('node-fetch');
const CITY_ID = 130010  // 東京
const FORECAST_API = "http://weather.livedoor.com/forecast/webservice/json/v1?city="
const AREA_FORECAST_URL = "http://weather.livedoor.com/area/forecast/1310400"

const dayType = [
  '今日',
  '明日',
  '明後日'
]

const prefixReplies = [
  "の天気にゃ？ちょっと待っててにゃ！",
  "も天気にな〜れ…にゃ！",
  "の天気を調べてくるにゃ！",
  "の天気をご所望にゃのかにゃ？",
  "の天気を仲間と一緒に探してくるにゃ！",
]


module.exports = {
  hear : (controller) => {
    controller.hears('(.*)天気',['direct_message','direct_mention','mention'],(bot,msg) => {
      day = 0;
      if (/今日|きょう/.test(msg.text)) day = 0;
      if (/明日|あす|あした/.test(msg.text)) day = 1;
      if (/明後日|あさって/.test(msg.text)) day = 2;
      
      location = '東京'

      // reply prefix
      bot.reply(msg, dayType[day] + prefixReplies[rand.getRandomArbitary(0, prefixReplies.length)]);

      url = FORECAST_API+CITY_ID;

      wearherClient.fetchWeather().then(
        function(weatherData) {
          forecast = weatherData.forecasts[day]
          tmp = forecast.temperature
          min_tmp = tmp.min ? `${tmp.min.celsius} ℃` : "？"
          max_tmp = tmp.max ? `${tmp.max.celsius} ℃` : "？"
          tmp_text = `最低 / 最高気温は ${min_tmp} / ${max_tmp} なのにゃ`
          text = `${forecast.dateLabel}の${location}の天気は「${forecast.telop}」ですにゃ！\n${tmp_text}\n ${AREA_FORECAST_URL}`
          bot.reply(msg, text);
        }
      ).catch (
        e => bot.reply(msg, 'ごめんにゃ。天気わかんなかったにゃ。。許してほしいにゃん！')
      )
    });
  }
}
