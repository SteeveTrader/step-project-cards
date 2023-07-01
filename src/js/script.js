import Modal from './classes/Modal.js';
import SelectDoctor from './classes/selectDoctor.js';
import VisitCardiologist from './classes/VisitCardiologist.js';
import VisitDentist from './classes/VisitDantist.js';
import VisitTherapist from './classes/VisitTherapist.js';
import CardHtml from './classes/cardHtml.js';
import loginFunction from './API/logInFunction.js';
import createCardAPI from './API/createCard.js';
import LoginForm from './classes/loginForm.js';
import removeCard from './functions/removeCard.js';
import { fetchData } from './API/serverRequest.js';
import cardsData from './cardsData.js';


import checkToken from './functions/checkToken.js';
import cardFilter from "./functions/filter.js";
import deleteCard from './functions/removeCard.js';
import editCard from './functions/cardEditor.js';


cardFilter();
checkToken();
deleteCard()
editCard();

const loginBtn = document.querySelector('.js-login-btn');
const addElemBtn = document.querySelector('.js-create-elem-btn');

loginBtn.addEventListener("click", (event) => {
 event.preventDefault()

  // editCard function + new funct takeValues (атрибут для input "автозаповнення")

  const form = new LoginForm("Log In");

  const confirmCallback = async (close) => {
    const body = form.getValues();

    const { data } = await loginFunction(body);
    localStorage.setItem("token", data);

    const { data: resp } = await fetchData();
    // cardsData = resp;
    resp.forEach(el => {
      const { description, doctor, fullname, id, purpose, urgency } = el;
      new CardHtml(purpose, description, urgency, fullname, doctor).render();
    });
    close();
    checkToken();
  };
  new Modal(form.getFormElement(), confirmCallback).render();
});



addElemBtn.addEventListener("click", (event) => {
  event.preventDefault()
  const form = new SelectDoctor("Create Visit");


  const confirmCallback = (close) => {

    // if (form.select.)

    // const body = form.getValues();
    // console.log(body);

    // const {
    //   data
    // } = await createCardAPI(body);
    close();
    checkToken();
  };

  new Modal(form.getFormElement(), confirmCallback).render();
  const modalSelect = document.querySelector('.modal__select');

  modalSelect.addEventListener("change", (event) => {
    event.preventDefault()
    const selectedDoctor = modalSelect.value;
    // if (selectedDoctor.value) {
    //   const modal = document.querySelector(".modal__main-container");
    //   console.log(modal);
    //   modal.style.display = "none";
    // }


    // створити змінну яка приймає в себе modalSelect.value та передає 
    // потім як інпут в наступний дочірній клас лікая 
    // а також якщо вона буде мати щначення, то модалка з вибором лікаря закривається 

    if (selectedDoctor === 'cardiologist') {

      const form = new VisitCardiologist("Cardiologist");

      const confirmCallback = async (close) => {

        const body = form.getValues();
        console.log(body);

        const { data } = await createCardAPI(body);

        close();
        checkToken();
      };

      new Modal(form.getFormElement(), confirmCallback).render();

      // newForm.createElement();
      console.log(selectedDoctor);
    } else if (selectedDoctor === 'dentist') {

      const form = new VisitDentist("Dentist");
      // console.log(form);
      console.log(selectedDoctor);
      new Modal(form.getFormElement(), confirmCallback).render();
    } else if (selectedDoctor === 'therapist') {
      const form = new VisitTherapist("Therapist");
      // console.log(form);
      console.log(selectedDoctor);
      new Modal(form.getFormElement(), confirmCallback).render();
    }
  });

});