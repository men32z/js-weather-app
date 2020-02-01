export default class Weather {
  constructor(data, type = 'c'){
    let {
      name:city,
      timezone, main: {temp, humidity},
      weather: [{main, description, id: icon}],
      sys:{country},
      wind: {speed: wind},
      clouds: {all: clouds}
    } = data;
    timezone = timezone / 60 / 60;

    Object.assign(this, {temp, main, description, humidity, wind, clouds, city, country, timezone, icon, type});
  }
}