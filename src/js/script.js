import Modal from './classes/Modal.js';
import Visit from './classes/Visit.js';
import CardHtml from './classes/cardHtml.js';

const cardContainer = document.querySelector(".reserwation__card-container");


  const modal = new Modal();
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.appendChild(modal.render());

    const visit = new Visit();
    const visitFormContainer = document.getElementById('visitForm');
    const visitFormHTML = visit.render().outerHTML;
    visitFormContainer.innerHTML = visitFormHTML;

new CardHtml('Sick', 'lkdafldkmsldkfmlsmf', 'High', 'Jhon Doe', 'Stan Smith').render();
new CardHtml('Sick', 'lkdafldkmsldkfmlsmf', 'High', 'Jhon Doe', 'Stan Smith').render();
new CardHtml('Sick', 'lkdafldkmsldkfmlsmf', 'High', 'Jhon Doe', 'Stan Smith').render();
new CardHtml('Sick', 'lkdafldkmsldkfmlsmf', 'High', 'Jhon Doe', 'Stan Smith').render();

