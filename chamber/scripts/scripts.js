// date //
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;

// last updated //
let lastModified = new Date(document.lastModified);
let fullDate = lastModified.toLocaleString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"});
let time = lastModified.toLocaleString('en-GB', {hour: "2-digit", minute: "2-digit", second: "2-digit"});
let dateTime = `Last Updated: ${fullDate} ${time}`;
document.getElementById("lastModified").innerHTML = dateTime;



// nav //
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;



//copyright//
// document.getElementById("year").innerHTML = new Date().getFullYear();

// Join Banner//

const dayOfWeek = now.getDay();
const meetingTime = document.querySelector("#meeting");

if (dayOfWeek === 1|| dayOfWeek === 2) {
	document.querySelector("#meeting").style.display = "block";
} else{
	document.querySelector("#meeting").style.display = "none";
}