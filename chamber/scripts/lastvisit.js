
const visits = document.querySelector(".visitor");

let today = Date.now();
let lastVisited = localStorage.getItem("dateVisited");

if (lastVisited !== 0) {
    localStorage.setItem("dateVisited", today);
    difference = today - lastVisited;
    daysBetweenVisits = Math.round(difference / 86400000);
}
else{
    daysBetweenVisits = "Welcome to the page!";
}


visits.textContent = daysBetweenVisits;