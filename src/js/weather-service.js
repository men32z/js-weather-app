export default class WeatherService {
  constructor() {
    this.appid = 'a21ef4017ff27a42723559dd93f1f28e';
    this.endpoint = 'https://api.openweathermap.org/data/2.5/weather';
  }

  async getWeather(units, location) {
    try {
      const response = await fetch(`${this.endpoint}?q=${location}&units=${units}&APPID=${this.appid}`, { mode: 'cors' });
      const result = await response.json();
      if (result.cod !== 200) throw new Error('something is wrong, try another city');
      return result;
    } catch (e) {
      return { error: e };
    }
  }

  async getCelsius(location) {
    const temp = await this.getWeather('Metric', location);
    return temp;
  }

  async getFahrenheit(location) {
    const temp = await this.getWeather('Imperial', location);
    return temp;
  }
}
