
//Here we get the location of the temp and windspeed in the document
const currentTemp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDescription = document.querySelector("figcaption")
const WindSpeed = document.querySelector("#windspeed");
const windChill = document.querySelector("#windchill");

const url = 'https://api.openweathermap.org/data/2.5/weather?q=pocatello&units=imperial&appid=a8930c8dd9a517e77e622d9c4dbffd90';

async function apiFetch() {
    try {
      const response = await fetch(url); 
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherDescription.textContent = desc;

    WindSpeed.textContent = `${weatherData.wind.speed.toFixed(0)}`;
  

//These 2 lines of code convert the <span> into just text and then turn the vue into a number
const windSpeed = parseFloat(weatherData.wind.speed.toFixed(0));
const temp = parseFloat(weatherData.main.temp.toFixed(0));

//equation to get the windchill 
let windChillAmount = 35.74 + (0.6215 * temp) - (35.75 * (windSpeed ** 0.16)) +(0.4275 * temp * (windSpeed ** 0.16));

//if statement to set boundaries on the windchill. the temp needs to be 50 or less and the windspeed needs to be mroe than 3mph
if(temp<=50 && windSpeed > 3.0){
    windChill.innerText = `${windChillAmount.toFixed(0)} ºF`;
}else{
    windChill.innerText = "N/A";
}
  };
