class HourlyWeatherInformation {
    time = "";
    date = "";
  
    // Main infromation
    actual_tmp = "";
    feels_like_tmp = "";
    temp_min = "";
    temp_max = "";
    pressure = "";
    humidity = "";
    temp_kf = "";
    temp_convert = "";
    temp_fah = "";
    format_date = "";
  
    // Weather information
    weather_id = "";
    weather_main = "";
    weather_description = "";
    weather_icon = "";
  
    // Clouds
    clouds = "";
  
    // Wind
    wind_speed = "";
    wind_deg = "";
    wind_gust = "";
  
    // Misc information
    visibility = "";
    pop = "";
    portionOfDay = ""; // "d" - day, "n" - night
  
    constructor(jsonData) {
      this.ProcessTime(jsonData);
  
      this.actual_tmp = jsonData.main.temp;
      this.temp_convert = (this.actual_tmp - 273.15) * 9/5 + 32; // Converting temp to F
      this.temp_fah = Math.round(this.temp_convert);
      this.feels_like_tmp = jsonData.main.feels_like;
      this.temp_min = jsonData.main.temp_min;
      this.temp_max = jsonData.main.temp_max;
      this.pressure = jsonData.main.pressure;
      this.humidity = jsonData.main.humidity;
      this.temp_kf = jsonData.main.temp_kf;
  
      this.weather_id = jsonData.weather[0].id;
      this.weather_main = jsonData.weather[0].main;
      this.weather_description = jsonData.weather[0].description;
      this.weather_icon = jsonData.weather[0].icon;
  
      this.clouds = jsonData.clouds.all;
  
      this.wind_speed = jsonData.wind.speed;
      this.wind_deg = jsonData.wind.deg;
      this.wind_gust = jsonData.wind.gust;
  
      this.visibility = jsonData.visibility;
      this.pop = jsonData.pop;
      this.portionOfDay = jsonData.sys.pod;
    }
  
    ProcessTime(jsonData) {
      this.time = jsonData.dt_txt.split(" ")[1].split(":")[0];

      this.date = jsonData.dt_txt.split(" ")[0];

      var dateObject = new Date(this.date).toString(); //converting this.date to JS date obj
      var splitDate = dateObject.split(" "); //splitting date obj
      this.format_date = splitDate[1] + " " + splitDate[2] + ", " + splitDate[3]; //reformatting date
  
      if (this.time > 12) {
        this.time = (this.time - 12).toString() + " PM";
      } else if (this.time == 0) {
        this.time = "12 AM";
      } else {
        this.time = this.time.toString() + " AM";
      }
    }
  }