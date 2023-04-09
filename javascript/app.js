const API_KEY = `14951c93f3d11e8ac8bed96dd90e8bc7`;

onload = () => {

};

function processRequest() {
  const data = document.querySelector('.search-bar').value;
  console.log(data);

  info = getLocationByCity(data);
}

async function  getLocationByCity(cityName) {
  limit = 1;
  url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${API_KEY}`;

  document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + cityName + "')";
  return await fetchLocationData(url);
};

async function fetchLocationData(url) {
  console.log(`Request to: ${url}: successful`);
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }
  
  const data = await response.json();
  console.log(data);
  // Geolocation by city, state is returned as an array and the lat lon is stored as an array so if it is the length of 1

  if(data.length == 1){
    console.log("Lat: ", data[0].lat);
    console.log("Log: ", data[0].lon);
    fetchWeatherData(data[0].lat, data[0].lon);
  }else{
    console.log("Lat: ", data.lat);
    console.log("Log: ", data.lon);
    fetchWeatherData(data.lat, data.lon);
  }

}

// Gettings temperature and weather for city
async function fetchWeatherData(latitude, longitude) {
  const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
  console.log(url);


  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  const data = await response.json();
  console.log(`Request to: ${url}: successful`);
  
  const WeatherInformation = WeatherInfoData(data);
  console.log(WeatherInformation);
  displayWeatherInformation(WeatherInformation);
}

function WeatherInfoData(data) {

  weatherInfomrationCollection = new Array();
  dailyInformation = new Array();
  count = data.list.length;
  prevDate = data.list[0].dt_txt.split(" ")[0];

  for(var i = 0; i < count; i++){
    currentDate = data.list[i].dt_txt.split(" ")[0];

    if(prevDate != currentDate){
        prevDate = currentDate;
        weatherInfomrationCollection.push(dailyInformation);
        //console.log(dailyInformation);
        dailyInformation = [];
        dailyInformation = new Array();
    }

    dailyinfo = new HourlyWeatherInformation(data.list[i]);
    dailyInformation.push( dailyinfo );
  }
  return weatherInfomrationCollection;
}

// Use setText to map API data to weather params
function displayWeatherInformation(WeatherCollectionInformation) {
  count = WeatherCollectionInformation.length;
  // WeatherCollectionInformation:
  // 4 days long (length 4), each with 8 seperate hour reports for every 3 hours in a 24 hour day. 
  
  //Demo of first day:
  var dayOne = WeatherCollectionInformation[0];

  count = dayOne.length;

  console.log(dayOne[0].format_date);
  console.log(dayOne[0].temp_fah);
  console.log(dayOne[0].weather_description);
  console.log(dayOne[0].weather_icon);
  console.log(dayOne[0].wind_speed);

  document.querySelector(".hourly-container").style.display = "inline-block";
  document.querySelector(".time").innerHTML = ""; //This clears any previous inputs and prevents stacking

  document.querySelector(".weather").classList.remove("loading");
  document.querySelector('.date').innerHTML = "Weather for " + dayOne[0].format_date;
  document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + dayOne[0].weather_icon + ".png";
  document.querySelector(".temp").innerHTML = dayOne[0].temp_fah + "° F";
  document.querySelector(".weather-desc").innerHTML = dayOne[0].weather_description + "<br>";
  document.querySelector(".wind").innerHTML = "Winds Up To " + dayOne[0].wind_speed + " MPH";

  document.querySelector(".title").innerHTML = "Weather Throughout Today" + "<br>";

  for( var i = 0; i < 4; i++) {
    document.querySelector(".time").innerHTML += dayOne[i].time + ":<br>" + dayOne[i].temp_fah + '° F' + "<br>";
  }

}