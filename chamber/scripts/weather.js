
//Here we get the location of the temp and windspeed in the document
const tempLocation = document.querySelector("#temp");
const windSpeedLocation = document.querySelector("#windspeed");
const windChill = document.querySelector("#windchill");


//These 2 lines of code convert the <span> into just text and then turn the vue into a number
const temp = parseFloat(tempLocation.textContent);
const windSpeed = parseFloat(windSpeedLocation.textContent);

//equation to get the windchill 
let windChillAmount = 35.74 + (0.6215 * temp) - (35.75 * (windSpeed ** 0.16)) +(0.4275 * temp * (windSpeed ** 0.16));

//if statement to set boundaries on the windchill. the temp needs to be 50 or less and the windspeed needs to be mroe than 3mph
if(temp<=50 && windSpeed > 3.0){
    windChill.innerText = `${windChillAmount.toFixed(0)} ºF`;
}else{
    windChill.innerText = "N/A";
}
