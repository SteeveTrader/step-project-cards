import Modal from './classes/Modal.js';
import SelectDoctor from './classes/selectDoctor.js';
import VisitCardiologist from './classes/VisitCardiologist.js';
import VisitDentist from './classes/VisitDantist.js';
import VisitTherapist from './classes/VisitTherapist.js';
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


let cloneArray = [];
if (localStorage.getItem('token')) {
  
  // const { data: resp } = await fetchData();
  // cloneArray = [...resp];

  // CardsData.splice(0, CardsData.length, ...cloneArray);
  CardsData.forEach(el => {
    const { description, doctor, fullname, id, purpose, urgency } = el;
    new CardHtml(purpose, description, urgency, fullname, doctor, id).render();
  })
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

      const { data: resp } = await fetchData();
      cloneArray = [...resp];
      close();
      checkToken();

      CardsData.splice(0, CardsData.length, ...cloneArray);

      CardsData.forEach(el => {
        const { description, doctor, fullname, id, purpose, urgency } = el;
        new CardHtml(purpose, description, urgency, fullname, doctor, id).render();
      });

    };

    new Modal(form.getFormElement(), confirmCallback).render();
  });
}

cardFilter();
checkToken();
editCard();



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

checkToken();
deleteCard(CardsData);