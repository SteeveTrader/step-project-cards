
// у функцію треба передвавати головний array замість filteredArray

export default function deleteCard(filteredArray) {

  let deleteButtons = document.querySelectorAll('.reserwation__delete-btn');

  deleteButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      let cardContainer = this.closest('.reserwation__card-container');
      cardContainer.remove();
      const deleteObject = filteredArray.find(item => item.id === cardContainer);
      filteredArray.splice(deleteObject, 1);
      console.log(filteredArray);
      return filteredArray
    });
  });
  
}

