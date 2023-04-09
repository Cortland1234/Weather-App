class DayWeatherInformation {
    date;
  
    weatherDataIndex;
    weatherData;
  
    constructor(date) {
      this.date = date;
  
      this.weatherDataIndex = 0;
      this.weatherData = new Array();
  
      this.addHourlyWeatherInformation = this.addHourlyWeatherInformation;
    }
  
    addHourlyWeatherInformation = function(jsonInfo) {
      this.data = new HourlyWeatherInformation(jsonInfo);
      this.weatherData.push(data);
      this.weatherDataIndex++;
    }
}