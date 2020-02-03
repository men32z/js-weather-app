import WeatherService from './weather-service';
import Weather from './weather';
import {view} from './view';

const search = (() => {

  let celsius, fahrenheit;
  let type = true;
  let weather = new WeatherService();

  let search = async (query) => {
      let cs = await weather.getCelsius(query);
      let fh = await weather.getFahrenheit(query);

      if(!cs.error && !fh.error){
        celsius = new Weather(cs);
        fahrenheit = new Weather(fh,'f');
        view.render(celsius);
      } else {
        throw cs.error || fh.error;
      }
  };

  const toggle = ()=> {
    if(celsius && fahrenheit && celsius.temp){
      type = !type;
      view.render(type ? celsius : fahrenheit);
    }
  };

  return {search, toggle};
})();

export default search;
