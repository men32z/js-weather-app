import WeatherService from './weather-service';
import Weather from './weather';
import view from './view';

const search = (() => {
  let celsius; let
    fahrenheit;
  let type = true;
  const weather = new WeatherService();

  const search = async (query) => {
    const cs = await weather.getCelsius(query);
    const fh = await weather.getFahrenheit(query);

    if (!cs.error && !fh.error) {
      celsius = new Weather(cs);
      fahrenheit = new Weather(fh, 'f');
      view.render(celsius);
    } else {
      throw cs.error || fh.error;
    }
  };

  const toggle = () => {
    if (celsius && fahrenheit && celsius.temp) {
      type = !type;
      view.render(type ? celsius : fahrenheit);
    }
  };

  return { search, toggle };
})();

export default search;
