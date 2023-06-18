import Modal from './classes/Modal.js';
import Visit from './classes/Visit.js';


  const modal = new Modal();
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.appendChild(modal.render());

    const visit = new Visit();
    const visitFormContainer = document.getElementById('visitForm');
    const visitFormHTML = visit.render().outerHTML;
    visitFormContainer.innerHTML = visitFormHTML;