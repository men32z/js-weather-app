import iconfy from './weather-icons';
import nowFromUtc from './helper';

const view = (() => {
  let weather;

  const temp = () => `
      <span class="temp">${Math.floor(weather.temp)} &deg;${weather.type.toUpperCase()}</span> <br>
      <i class="wi wi-${iconfy(weather.icon)}"></i>  ${weather.main} - ${weather.description} <br>
    `;

  const timeView = () => `
      <span class="location"> ${weather.city} ${weather.country} </span>
      <br> ${nowFromUtc(weather.timezone)}<br>
    `;

  const details = () => `
      <hr>
      <div class="col-4"> Wind <br> ${weather.wind} M/${weather.type === 'c' ? 's' : 'h'} </div>
      <div class="col-4"> Clouds <br> ${weather.clouds} % </div>
      <div class="col-4"> Humidity <br> ${weather.humidity} % </div>
    `;

  const render = (data) => {
    weather = data;
    document.querySelector('#temp').innerHTML = temp();
    document.querySelector('#time').innerHTML = timeView();
    document.querySelector('#details').innerHTML = details();
  };

  return { render };
})();

export default view;
