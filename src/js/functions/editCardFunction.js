import EditForm from '../classes/editForm.js';
import editCardAPI from '../API/editCardAPI.js';
import Modal from '../classes/modal.js';
import CardsData from '../functions/cardsData.js';

let editButtons;

const editCardFunc = () => {
editButtons = document.querySelectorAll('.reserwation__edit-btn');
      editButtons.forEach(button => {
        button.onclick = function () {
          
          let cardContainer = this.closest('.reserwation__card-container');
          let cardId = cardContainer.id;
          let editItem = CardsData.find(item => item.id == cardId);

          const form = new EditForm("Edit this Card", editItem);
          const confirmCallback = async (close) => {
            const body = form.getEditsValues();

            editItem = body;
            console.log(editItem);

            const {
              data
            } = await editCardAPI(cardId, body);
            console.log(CardsData);
            close();
          };

          new Modal(form.getEditElement(), confirmCallback).render();
        };

      });
};

export default editCardFunc;

