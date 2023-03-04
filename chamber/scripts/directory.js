const gridbutton = document.querySelector("#gridBtn");
const listbutton = document.querySelector("#listBtn");
const display = document.querySelector("article");


gridbutton.addEventListener("click", () => {
	display.classList.add("directoryGrid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("directoryGrid");
}

const url = 'json/directory.json';


async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    displaybusinesses(data.businesses);
  }
  
  getBusinessData();

  function displaybusinesses(businesses){
    const cards = document.querySelector('div.cards');


    businesses.forEach((business) => {
        let card = document.createElement('section');
        card.setAttribute('class', 'business');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('a');

        h2.textContent = `${business.name}`;
        portrait.setAttribute('src', business.image);
        portrait.setAttribute('alt', `business logo for ${business.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200px');
        address.textContent = `${business.address}`;
        phone.textContent =`${business.phone}`;
        website.textContent=`${business.website}`;
        website.href=business.website;



        card.appendChild(h2);  
        card.appendChild(portrait);     
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(website);
        
        

        cards.appendChild(card);
    }
    )
  }
