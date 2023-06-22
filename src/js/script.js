import Modal from './classes/Modal.js';
import Visit from './classes/Visit.js';
import CardHtml from './classes/cardHtml.js';
import { cardsArray } from "./API/serverRequest.js";
import { renderEmptyArray } from "./API/serverRequest.js";
import { renderArray } from "./API/serverRequest.js";
import { fetchData } from "./API/serverRequest.js";
import { createCard } from "./API/createCard.js";
import { deleteAllCards } from "./API/removeCard.js";
// const cardContainer = document.querySelector(".reserwation__card-container");

// Запрос на сервер
const checkBtn = document.querySelector('.check');
checkBtn.addEventListener("click", () => {
  !cardsArray.length && fetchData()
});

// Создание карты
const createCardBtn = document.querySelector('.createCard');
createCardBtn.addEventListener('click', createCard);

// Удаление всех карт
const removeAllCardBtn = document.querySelector('.removeAllCards');
removeAllCardBtn.addEventListener('click', deleteAllCards);



// const modal = new Modal();
// const modalContainer = document.getElementById('modalContainer');
// modalContainer.appendChild(modal.render());

const visit = new Visit();
const visitFormContainer = document.getElementById('visitForm');
const visitFormHTML = visit.render().outerHTML;
visitFormContainer.innerHTML = visitFormHTML;

// new CardHtml('Sick', 'lkdafldkmsldkfmlsmf', 'High', 'Jhon Doe', 'Stan Smith').render();
// new CardHtml('Sick', 'lkdafldkmsldkfmlsmf', 'High', 'Jhon Doe', 'Stan Smith').render();
// new CardHtml('Sick', 'lkdafldkmsldkfmlsmf', 'High', 'Jhon Doe', 'Stan Smith').render();
// new CardHtml('Sick', 'lkdafldkmsldkfmlsmf', 'High', 'Jhon Doe', 'Stan Smith').render();



