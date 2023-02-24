const API_KEY = `14951c93f3d11e8ac8bed96dd90e8bc7`;

// Gettings temperature and weather for city
const getTemp = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=${city}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data));
}

// Setting the text for the city, temp, and weather params
const setText = (id, text) => {
    document.getElementById(id).innerText = text;
}

// Use setText to map API data to weather params
const displayTemp = temperature => {
    console.log(temperature);

    //Converting Celsius to Fahrenheit
    tempConvert = (temperature.main.temp * 1.8) + 32;
    tempToInt = Math.round(tempConvert);
    fahrenheit = tempToInt + " °F";

    setText('city', temperature.name);
    setText('temp', fahrenheit);
    setText('weather', temperature.weather[0].main);

    // Weather icon settings 
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('image-icon');
    imgIcon.setAttribute('src', url);
}
