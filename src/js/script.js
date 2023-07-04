import Modal from './classes/modal.js';
import SelectDoctor from './classes/selectDoctor.js';
import VisitCardiologist from './classes/visitCardiologist.js';
import VisitDentist from './classes/visitDantist.js';
import VisitTherapist from './classes/visitTherapist.js';
import CardHtml from './classes/CardHtml.js';
import loginFunction from './API/logInFunction.js';
import createCardAPI from './API/createCard.js';
import LoginForm from './classes/LoginForm.js';
import {
  fetchData
} from './API/serverRequest.js';
import cardFilter from "./functions/filter.js";
import checkToken from './functions/checkToken.js';
import CardsData from './functions/cardsData.js';
import deleteCard from './functions/removeCard.js';
import editCard from './functions/cardEditor.js';
import EditForm from './classes/editForm.js';

let editButtons;

const cloneArray = (arr) => {
  CardsData.splice(0, CardsData.length, ...arr);
};

if (localStorage.getItem('token')) {
  if (CardsData !== CardsData.length) {
    fetchData().then((data) => {
      cloneArray(data.data);
      CardsData.forEach(el => {
        const {
          description,
          doctor,
          fullName,
          id,
          purpose,
          urgency
        } = el;
        new CardHtml(purpose, description, urgency, fullName, doctor, id).render();
      });



      editButtons = document.querySelectorAll('.reserwation__edit-btn');
      editButtons.forEach(button => {
        button.onclick = function () {
          
          let cardContainer = this.closest('.reserwation__card-container');
          let cardId = cardContainer.id;
          let editItem = CardsData.find(item => item.id == cardId);
          console.log(editItem);
          // const form = new EditForm("Edit this Card", editItem);
          const confirmCallback = (close) => {

            close();
          };

          new Modal(form.getEditElement(), confirmCallback).render();
        };

      });
      deleteCard();
      editCard();
    });

  }
} else {
  const loginBtn = document.querySelector('.js-login-btn');
  loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const form = new LoginForm("Log In");

    const confirmCallback = async (close) => {
      const body = form.getValues();

      const {
        data
      } = await loginFunction(body);
      localStorage.setItem("token", data);

      const {
        data: resp
      } = await fetchData();
      cloneArray(resp);
      close();
      checkToken();

      CardsData.forEach(el => {
        const {
          description,
          doctor,
          fullName,
          id,
          purpose,
          urgency
        } = el;
        new CardHtml(purpose, description, urgency, fullName, doctor, id).render();
      });

    };

    new Modal(form.getFormElement(), confirmCallback).render();
  });
}


const addElemBtn = document.querySelector('.js-create-elem-btn');
addElemBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const form = new SelectDoctor("Create Visit");

  const confirmCallback = (close) => {
    close();
    checkToken();
  };

  const doctorModal = new Modal(form.getFormElement(), confirmCallback);
  doctorModal.render();

  const modalSelect = document.querySelector('.modal__select');

  modalSelect.addEventListener("change", (event) => {
    event.preventDefault();
    const selectedDoctor = modalSelect.value;
    if (selectedDoctor === 'cardiologist' ||
      selectedDoctor === 'dentist' ||
      selectedDoctor === 'therapist') {
      doctorModal.close();
    }

    if (selectedDoctor === 'cardiologist') {

      const form = new VisitCardiologist("Cardiologist");

      const confirmCallback = async (close) => {
        const body = form.getValues();

        CardsData.push(body);

        const {
          description,
          doctor,
          fullName,
          id,
          purpose,
          urgency
        } = body;
        new CardHtml(purpose, description, urgency, fullName, doctor, id).render();

        console.log(CardsData);
        const {
          data
        } = await createCardAPI(body);

        close();
        checkToken();
      };

      new Modal(form.getFormElement(), confirmCallback).render();
    } else if (selectedDoctor === 'dentist') {
      const form = new VisitDentist("Dentist");

      const confirmCallback = async (close) => {
        const body = form.getValues();

        CardsData.push(body);

        const {
          description,
          doctor,
          fullName,
          id,
          purpose,
          urgency
        } = body;
        new CardHtml(purpose, description, urgency, fullName, doctor, id).render();
        const {
          data
        } = await createCardAPI(body);

        close();
        checkToken();
      };

      new Modal(form.getFormElement(), confirmCallback).render();
    } else if (selectedDoctor === 'therapist') {
      const form = new VisitTherapist("Therapist");

      const confirmCallback = async (close) => {
        const body = form.getValues();

        CardsData.push(body);

        const {
          description,
          doctor,
          fullName,
          id,
          purpose,
          urgency
        } = body;
        new CardHtml(purpose, description, urgency, fullName, doctor, id).render();
        const {
          data
        } = await createCardAPI(body);

        close();
        console.log(CardsData);
        checkToken();
      };

      new Modal(form.getFormElement(), confirmCallback).render();
    }

  });

});

cardFilter();
checkToken();