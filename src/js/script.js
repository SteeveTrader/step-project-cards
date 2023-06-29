import Modal from './classes/Modal.js';
import VisitModal from './classes/VisitModal.js';
import VisitForm from './classes/makeVisitForm.js';
import VisitCardiologist from './classes/VisitCardiologist.js';
import VisitDentist from './classes/VisitDantist.js';
import VisitTherapist from './classes/VisitTherapist.js';
import CardHtml from './classes/cardHtml.js';
import loginFunction from './API/logInFunction.js';
import createCardAPI from './API/createCard.js';
import LoginForm from './classes/loginForm.js';

import checkToken from './functions/checkToken.js';
import cardFilter from "./functions/filter.js";

cardFilter();
checkToken();

const loginBtn = document.querySelector('.js-login-btn');
const addElemBtn = document.querySelector('.js-create-elem-btn');

loginBtn.addEventListener("click", () => {
  const form = new LoginForm("Log In");

  const confirmCallback = async (close) => {
    const body = form.getValues();

    const {
      data
    } = await loginFunction(body);
    localStorage.setItem("token", data);
    close();
    checkToken();
  };
  new Modal(form.getFormElement(), confirmCallback).render();

});


addElemBtn.addEventListener("click", () => {

  document.querySelector('.modal-select').addEventListener("change", () => {
    console.log(document.querySelector('.modal-select'));
  });
  

  const form = new VisitForm("Create Visit");
  console.log(form);
  // let newForm;
  // form.select.addEventListener("change", () => {
  //   const selectedDoctor = form.select.value;

  //   if (selectedDoctor === 'cardiologist') {
  //     form = new VisitCardiologist("Cardiologist");
  //     // newForm.createElement();
  //     // console.log(newForm);
  //   } else if (selectedDoctor === 'dentist') {
  //     console.log(selectedDoctor);
  //   } else if (selectedDoctor === 'therapist') {
  //     console.log(form.select.value);
  //   }
  // });


  // console.log(form);
  const confirmCallback = async (close) => {

    const body = form.getValues();
    console.log(body);

    const {
      data
    } = await createCardAPI(body);
    close();
    checkToken();
  };

  new VisitModal(form.getFormElement(), confirmCallback).render();


});