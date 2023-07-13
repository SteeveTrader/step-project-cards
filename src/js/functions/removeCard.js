import CardsData from "./cardsData.js";
import removeCardAPI from "../API/removeCardAPI.js";
import emptyNotification from "./emptyNotification.js";

export default function deleteCard() {
  let deleteButtons = document.querySelectorAll('.reserwation__delete-btn');

  deleteButtons.forEach(function (button) {

    button.onclick = function () {
      let cardContainer = this.closest('.reserwation__card-container');

      const deleteObject = CardsData.find(item => item.id === cardContainer);
      CardsData.splice(deleteObject, 1);

      removeCardAPI(cardContainer.id);
      cardContainer.remove();
      emptyNotification();
    };
});
};

