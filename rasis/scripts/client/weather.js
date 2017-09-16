const fetch = require('node-fetch');
const CITY_ID = 130010  // 東京
const FORECAST_API = "http://weather.livedoor.com/forecast/webservice/json/v1?city="
const AREA_FORECAST_URL = "http://weather.livedoor.com/area/forecast/1310400"

module.exports = {
  fetchWeather: async () => {
    weatherData = {};
    url = FORECAST_API+CITY_ID;

    var weatherData = await fetch(url)
    return weatherData.json()
    
  }
}
