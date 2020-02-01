import WeatherService from './js/weather-service';
import Weather from './js/weather';
import {view} from './js/view';

let celsius, fahrenheit;
let type = true;
let weather = new WeatherService();

function search(){
  let query = document.querySelector('#search-text').value;

  weather.getCelsius(query).then(res => {
    celsius = new Weather(res);
    view.render(celsius);
  });

  weather.getFahrenheit(query).then(res => {
    fahrenheit = new Weather(res,'f');
  });
}

document.querySelector('#temp').addEventListener('click', () => {
  if(celsius && fahrenheit && celsius.temp){
    type = !type;
    view.render(type ? celsius : fahrenheit);
  }
});

document.querySelector('#search').addEventListener('click', () => search);
document.querySelector("#search-text").addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
   event.preventDefault();
   search();
  }
});