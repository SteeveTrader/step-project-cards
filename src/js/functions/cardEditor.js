import CardsData from "./cardsData.js";

export default function editCard() {
  let editButtons = document.querySelectorAll('.reserwation__edit-btn');

  editButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      let cardContainer = this.closest('.reserwation__card-container');

      let cardId = cardContainer.id;
      let editObject = CardsData.find(item => item.id == cardId);
      const reserwationContainer = document.querySelector(".reserwation")
      const modalEditContainer = document.createElement('div');
      const modalEditCloseBtn = document.createElement('button');
      const modalEditConfirmBtn = document.createElement('button');

      modalEditContainer.innerText = "Редагування візиту";
      modalEditContainer.classList.add("modalEditContainer");
      reserwationContainer.append(modalEditContainer);
    // console.log(editObject);
      for (let key in editObject) {
        if (key == 'id') {
          continue;
        }

        if (key == 'doctor') {
          const keyValue = document.createElement("select");
          keyValue.setAttribute("name", "doctor");
          keyValue.classList.add("modal__select");
          keyValue.innerHTML = `
            <option value="" selected="">Chose a doctor</option>
            <option value="cardiologist">Cardiologist</option>
            <option value="dentist">Dentist</option>
            <option value="therapist">Therapist</option>
          `;
          modalEditContainer.append(keyValue);

        } else if (key == 'urgency') {
          const keyValue = document.createElement("select");
          keyValue.setAttribute("name", "urgency");
          keyValue.setAttribute("id", "urgency");
          keyValue.innerHTML = `
            <option value="">Urgency of Visit</option>
            <option value="normal">Normal</option>
            <option value="priority">Priority</option>
            <option value="urgent">Urgent</option>
          `;
          modalEditContainer.append(keyValue);

        } else {
          const keyValue = document.createElement("input");
          keyValue.setAttribute("name", `${key}`)
          keyValue.value = `${editObject[key]}`;
          modalEditContainer.append(keyValue);
        }
      }

      modalEditCloseBtn.innerText = 'Скасувати';
      modalEditCloseBtn.addEventListener('click', function () {
        modalEditContainer.remove();
      });
      modalEditContainer.insertAdjacentElement("beforeend", modalEditCloseBtn);
      

      modalEditConfirmBtn.innerText = 'Зберегти';
      modalEditContainer.insertAdjacentElement("beforeend", modalEditConfirmBtn);
      modalEditConfirmBtn.addEventListener('click', function () {
        const inputs = document.querySelectorAll('input');
        const names = document.querySelectorAll('input[name]');
        inputs.forEach(function (input) {
          console.log(input.getAttribute('name') + ': ' + input.value);
        });
      });



    });
  });
}

