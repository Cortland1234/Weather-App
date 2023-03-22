class WeatherCollection {
    weatherInfoCollection;
  
    constructor(json) {
      this.count = json.list.length;
      this.date = this.getDateInformation(json, 0);
  
      this.weatherInfoCollection = [];
      var dayweatherCollectionInfo = [];
  
      for (var i = 0; i < this.count; i++) {
        this.currentDate = this.getDateInformation(json, i);
  
        if (this.currentDate != this.date) {
          // We are processing the following days weather information.
          // We push the collection of infomration from the last <x> days
          // into the main list and reset the days weather information and
          // continue.
          this.date = this.currentDate;
          this.weatherInfoCollection.push(this.dayweatherCollectionInfo);
          var dayweatherCollectionInfo = DayWeatherInformation(date);
        }
  
        this.data = this.getWeatherInformation(json, i);
        dayweatherCollectionInfo.addHourlyWeatherInformation(this.data);
        
      }
    }
  
    getDateInformation(jsonInfo, index) {
      return jsonInfo.list[index].dt_txt.split(" ")[0];
    }
  
    getWeatherInformation(json, index) {
      return json.list[index];
    }
}