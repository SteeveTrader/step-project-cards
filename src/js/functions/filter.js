import CardHtml from '../classes/CardHtml.js';
import deleteCard from '../functions/removeCard.js';
import CardsData from "../script.js";


export default function cardFilter() {


  

  const searchBtn = document.querySelector('.filterBtn');
  searchBtn.addEventListener('click', filterArray);

  function filterArray(event) {
    event.preventDefault();
    const doctor = document.getElementById('doctorFilter').value;
    const fullName = document.getElementById('fullNameFilter').value.trim().toLowerCase();
    const urgency = document.getElementById('urgencyFilter').value;
    const description = document.getElementById('description').value.trim().toLowerCase();

    const filteredArray = CardsData.filter(item => {
      if (doctor && item.doctor !== doctor) {
        return false;
      }
      if (fullName && !item.fullName.toLowerCase().includes(fullName)) {
        return false;
      }
      if (urgency && item.urgency !== urgency) {
        return false;
      }
      if (description && !item.description.toLowerCase().includes(description)) {
        return false;
      }
      return true;
    });

    displayResults(filteredArray);
    deleteCard(filteredArray);
    cardEditor(CardsData);
  }

  function displayResults(filteredArray) {
    const cardsBody = document.querySelectorAll('.reserwation__card-container');
    cardsBody.forEach(elem => elem.remove())
    // console.log(filteredArray);
    filteredArray.forEach(({ purpose, description, urgency, fullName, doctor, id }) => {
      const filterCard = new CardHtml(purpose, description, urgency, fullName, doctor, id);
      filterCard.createElement();
      filterCard.render();
    });
  }

}



