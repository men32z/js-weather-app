import WeatherService from './js/weather-service';
import Weather from './js/weather';
import {view} from './js/view';

//let weather = new WeatherService();
//weather.getCelsius("Guadalajara").then(res => console.log(JSON.stringify(res)));
//getFahrenheit
let celsius = new Weather({"coord":{"lon":-103.33,"lat":20.67},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":18.04,"feels_like":16.48,"temp_min":17,"temp_max":20,"pressure":1022,"humidity":55},"visibility":9656,"wind":{"speed":1.87,"deg":209},"clouds":{"all":75},"dt":1580495146,"sys":{"type":1,"id":7128,"country":"MX","sunrise":1580477408,"sunset":1580517789},"timezone":-21600,"id":4005539,"name":"Guadalajara","cod":200});
//let fahrenheit = new Weather({"coord":{"lon":-103.33,"lat":20.67},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":18.04,"feels_like":16.48,"temp_min":17,"temp_max":20,"pressure":1022,"humidity":55},"visibility":9656,"wind":{"speed":1.87,"deg":209},"clouds":{"all":75},"dt":1580495146,"sys":{"type":1,"id":7128,"country":"MX","sunrise":1580477408,"sunset":1580517789},"timezone":-21600,"id":4005539,"name":"Guadalajara","cod":200});

view.render(celsius);