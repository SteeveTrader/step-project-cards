import CardsData from "./cardsData.js";

const container = document.querySelector('.reserwation__container');
const observer = new MutationObserver(() => {
  editCard();
});
const config = { childList: true, subtree: true };
observer.observe(container, config);

export default function editCard() {
  let editButtons = document.querySelectorAll('.reserwation__edit-btn');
  // console.log(editButtons);


  editButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      let cardContainer = this.closest('.reserwation__card-container');
      // let cardId = cardContainer.id;
      console.log(cardContainer.id);
      let editObject = CardsData.find(item => item.id === cardContainer);

      // editObject = new VisitForm(
      //   editObject.purpose,
      //   editObject.description,
      //   editObject.urgency,
      //   editObject.fullName,
      //   editObject.doctor,
      //   editObject.id
      // );
      // console.log(editObject);  
      // editObject.createElement();
      // editObject.renderVisit();

    });
  });
}

