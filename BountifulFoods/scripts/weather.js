const currentTemp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDescription = document.querySelector("figcaption")
const humidity = document.querySelector("#humidity")
const forecastDiv = document.querySelector("#forecast")

const currentUrl = 'https://api.openweathermap.org/data/2.5/weather?q=carlsbad&units=imperial&appid=a8930c8dd9a517e77e622d9c4dbffd90&cnt=';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=carlsbad&units=imperial&appid=a8930c8dd9a517e77e622d9c4dbffd90&cnt=';

async function apiFetch(days, callback, url) {
    try {
      const response = await fetch(url + days); 
      if (response.ok) {
        const data = await response.json();
        callback(data);
        console.log(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  apiFetch(1, displayResults, currentUrl);
  
//The daily forecast is a paid subscription
  apiFetch(17, forecastDisplay, forecastUrl);


  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    humidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}<strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherDescription.textContent = desc;

    const temp = parseFloat(weatherData.main.temp.toFixed(0));
    const humid = weatherData.main.humidity;
  }


  function forecastDisplay(data){
    function displayday(forecast){
      console.log(forecast.dt_txt);
      const forecastDate = new Date(forecast.dt_txt);
      const dateStr = `${forecastDate.toLocaleDateString('en-US', { weekday: 'short' })}, ${forecastDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
  
      const highTemp = forecast.main.temp_max.toFixed(0);
      const lowTemp = forecast.main.temp_min.toFixed(0);
  
  
      const forecastItem = document.createElement('li');
      forecastItem.textContent = `${dateStr} ${highTemp}ºF / ${lowTemp}ºF`;
      forecastDiv.appendChild(forecastItem);
    }
    displayday(data.list[0]);
    displayday(data.list[8]);
    displayday(data.list[16]);
  }
    



