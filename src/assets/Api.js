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
    // console.log(result);
    let data = {
      id: result.id,
      name: result.name,
      date: weatherDate(),
      temp: Math.round(result.main.temp),
      humidity: result.main.humidity,
      wind: result.wind.speed,
      desc: result.weather[0].main
    };
    callback(data);
  });
};

// export const getForecast= (id) => {

// };
