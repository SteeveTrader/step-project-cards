import VisitForm from "../classes/makeVisitForm.js"
import array from "../API/testArray.js";

export default function editCard(array) {
  let editButtons = document.querySelectorAll('.reserwation__edit-btn');
  console.log(editButtons);
  editButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      let cardContainer = this.closest('.reserwation__card-container');
      let cardId = cardContainer.id;
      // console.log(cardContainer);
      let editObject = array.find(item => item.id === parseInt(cardId));
      editObject = new VisitForm(
        editObject.purpose,
        editObject.description,
        editObject.urgency,
        editObject.fullName,
        editObject.doctor,
        editObject.id
      );
      console.log(editObject);  
      editObject.createElement();
      editObject.renderVisit();
    });
  });
}

