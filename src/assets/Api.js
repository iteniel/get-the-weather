import $ from 'jquery';

const apiKey = "965c36b07d83419863e9892ab4f7ee68";
const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

const weatherDate = () => {
  let jsDate = new Date();
  let month = jsDate.getMonth();
  let day = jsDate.getDate();

  return  months[month] + " " + day;
};

export const getWeather = (id, callback) => {
  let url = "http://api.openweathermap.org/data/2.5/weather?id=" + id + "&units=metric&appid=" + apiKey;

  $.getJSON(url, function (result) {
    let data = {
      id: result.id,
      name: result.name,
      date: weatherDate(),
      temp: Math.round(result.main.temp),
      humidity: result.main.humidity,
      wind: result.wind.speed,
      desc: result.weather[0].main
    };
    // TODO error handling    
    callback(data);
  });
};

export const getDetailedWeather = (id, callback) => {
  let url = "http://api.openweathermap.org/data/2.5/weather?id=" + id + "&units=metric&appid=" + apiKey;
  
  $.getJSON(url, function (result) {
    let data = {
      id: result.id,
      name: result.name,
      date: weatherDate(),
      temp: Math.round(result.main.temp),
      tempMin: Math.round(result.main.temp_min),
      tempMax: Math.round(result.main.temp_max),
      humidity: result.main.humidity,
      pressure: result.main.pressure,
      clouds: result.clouds.all,
      wind: result.wind.speed,
      windDeg: result.wind.deg,
      descShort: result.weather[0].main,
      descLong: result.weather[0].description,
      coord: result.coord
    };
    // TODO error handling
    callback(data);
  });
};  

const formatForecastDate = (str) => {
  let date = str.split(" ")[0].split("-");
  return months[parseInt(date[1]) -1] + " " + parseInt(date[2]);
  
};

export const getForecast = (id , callback) => {
  let url = "http://api.openweathermap.org/data/2.5/forecast?id=" + id + "&units=metric&appid=" + apiKey;

  $.getJSON(url, function (result) {
    let data = {
      temperature: [],
      humidity: [],
      wind: [],
      weather: []
    };

    let filter =  result.list[0].dt_txt.split(" ")[1];

    result.list.map((listData) => {
      if (listData.dt_txt.indexOf(filter) > -1) {
        let currentDate = formatForecastDate(listData.dt_txt);
        let currentTemperature = { date: currentDate, temperature: Math.round(listData.main.temp) };
        let currentHumidity = { date: currentDate, humidity: listData.main.humidity };
        let currentWind = { date: currentDate, wind: listData.wind.speed };
        let currentWeather = { date: currentDate, weather: listData.weather[0].description};
        data.temperature.push(currentTemperature);
        data.humidity.push(currentHumidity);
        data.wind.push(currentWind);
        data.weather.push(currentWeather);
      }
    });
    // TODO error handling
    callback(data);
  });

};
