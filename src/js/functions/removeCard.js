import CardsData from "./cardsData.js";
import removeCardAPI from "../API/removeCardAPI.js";

// const container = document.querySelector('.reserwation__container');
// const observer = new MutationObserver(() => {
//   deleteCard();
// });
// const config = {
//   childList: true,
//   subtree: true
// };
// observer.observe(container, config);

export default function deleteCard() {
  let deleteButtons = document.querySelectorAll('.reserwation__delete-btn');

  deleteButtons.forEach(function (button) {

    //зміна на onklick 
    button.addEventListener('click', function (event) {
      event.preventDefault();
      let cardContainer = this.closest('.reserwation__card-container');

      const deleteObject = CardsData.find(item => item.id === cardContainer);
      CardsData.splice(deleteObject, 1);

      removeCardAPI(cardContainer.id);
      cardContainer.remove();
    });
  });
}

