export default class WeatherService {
  constructor(){
    this.appid = 'a21ef4017ff27a42723559dd93f1f28e';
    this.endpoint = 'https://api.openweathermap.org/data/2.5/weather';
  }
  async getWeather(units, location){
    let response = await fetch(`${this.endpoint}?q=${location}&units=${units}&APPID=${this.appid}`, {mode: 'cors'});
    return response.json();
  }

  async getCelsius(location){
    return await this.getWeather('Metric', location);
  }

  async getFahrenheit(location){
    return await this.getWeather('Imperial', location);
  }
}