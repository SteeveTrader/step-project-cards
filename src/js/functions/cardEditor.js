

export default function deleteCard(filteredArray) {

  let editButtons = document.querySelectorAll('.reserwation__edit-btn');

  editButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      let cardContainer = this.closest('.reserwation__card-container');
      // cardContainer.remove();
      console.log(cardContainer);
      const editObject = filteredArray.find(item => item.id === cardContainer);
      filteredArray.splice(deleteObject, 1);
      console.log(filteredArray);
      return filteredArray
    });
  });

}