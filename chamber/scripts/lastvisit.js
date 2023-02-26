//Here  I store my variables for everything that I plan on using. 
const visits = document.querySelector(".visitor");

let today = Date.now();
let lastVisited = localStorage.getItem("dateVisited");

//This checks if the site has been visited or ntot and then calculates the days between visits
if (lastVisited !== 0) {
    localStorage.setItem("dateVisited", today);
    difference = today - lastVisited;
    daysBetweenVisits = Math.round(difference / 86400000);
}
else{
    daysBetweenVisits = "Welcome to the page!";
}


visits.textContent = daysBetweenVisits;