import iconfy from './weather-icons';
export const view = (()=>{
  let weather;

  const temp = () => {
    return `
      <span class="temp">${Math.floor(weather.temp)} &deg;C</span> <br>
      <i class="wi wi-${iconfy(weather.icon)}"></i>  ${weather.main} - ${weather.description} <br>
    `;
  };

  const render = (data)  => {
    weather = data;
    document.querySelector('#temp').innerHTML = temp();
  };

  return {render};
})();