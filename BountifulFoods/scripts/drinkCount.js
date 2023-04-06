const drinkCount = localStorage.getItem('formSubmissions');

const drinkAmount = document.querySelector('.numDrinks');
let drinksH3 = document.createElement('h4');
drinksH3.textContent = drinkCount;

drinkAmount.appendChild(drinksH3);