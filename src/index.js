const weather = (() => {
  let appid = 'a21ef4017ff27a42723559dd93f1f28e';

  const getCelsius = async (location) => {
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${appid}`;
    let response = await fetch(endpoint, {mode: 'cors'});
    return response.json();
  }

  const getFahrenheit = async (location) =>{

  }

  return {getCelsius, getFahrenheit};
})();

weather.getCelsius("Guadalajara").then(res => console.log(res));