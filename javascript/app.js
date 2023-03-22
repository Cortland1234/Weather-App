const API_KEY = `14951c93f3d11e8ac8bed96dd90e8bc7`;

onload = () => {

};

function processRequest() {
  const data = document.getElementById('locationInput').value;
  line = data.split(",");

  // If is a state
  if (isNaN(line[0])) {
    console.log("is city, state");
    info = getGeoLoationByCity(line[0], line[1]);
  } else {
    console.log("is zipcode");
    info = getGeoLoationByZipcode(line[0]);
  }
}

async function  getGeoLoationByCity(
  cityName,
  stateName,
  countryCode = "US",
  limit = 1
) {
  locationRequest = encodeURIComponent(`${cityName},${stateName},${countryCode}`.trim());
  url = `http://api.openweathermap.org/geo/1.0/direct?q=${locationRequest}limit=${limit}&appid=${API_KEY}`;
  return await fetchLocationData(url);
};

async function getGeoLoationByZipcode(zipcode, countryCode = "US") {
  url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},${countryCode}&appid=${API_KEY}`;
  return await fetchLocationData(url);
}

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

  if(data.length== 1){
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
  
  WeatherInformation(data);
}

const WeatherInformation = (data) => {

  function getDate(line, index){
    data.list[index].dt_txt.split(" ")[0];
  }

  weatherInfomrationCollection = new Array();
  dailyInformation = new Array();
  count = data.list.length;
  prevDate = data.list[0].dt_txt.split(" ")[0];

  for(var i = 0; i < count; i++){
    currentDate = data.list[i].dt_txt.split(" ")[0];

    if(prevDate != currentDate){
        prevDate = currentDate;
        weatherInfomrationCollection.push(dailyInformation);
        console.log(dailyInformation);
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

}