import Modal from './classes/Modal.js';
import VisitForm from './classes/makeVisitForm.js';
// import VisitCardiologist from './classes/VisitCardiologist.js';
// import VisitDantist from './classes/VisitDantist.js';
// import VisitTherapist from './classes/VisitTherapist.js';
import CardHtml from './classes/cardHtml.js';
import loginFunction from './API/logInFunction.js';
import createCardAPI from './API/createCard.js';
import LoginForm from './classes/loginForm.js';

import checkToken from './functions/checkToken.js';

checkToken();

const cardContainer = document.querySelector(".reserwation__card-container");
const loginBtn = document.querySelector('.js-login-btn');
const addElemBtn = document.querySelector('.js-create-elem-btn');

loginBtn.addEventListener("click", () => {
    const form = new LoginForm("Log In");

    const confirmCallback = async (close) => {
        const body = form.getValues();

        const { data } = await loginFunction(body);
        localStorage.setItem("token", data);
        close();
        checkToken();
    };
    new Modal(form.getFormElement(), confirmCallback).render();

});

let cardsArr = {};

addElemBtn.addEventListener("click", () => {
  const form = new VisitForm("Create Visit");

  const confirmCallback = async (close) => {
    const body = form.getValues();

    const { data } = await createCardAPI(body);
    cardsArr = body;

    // cardsArr.forEach( elem => {
    //   console.log(elem);
    //   let {description, fullname, purpose, urgency, priority} = elem;
    //   console.log(description, fullname, purpose, urgency, priority);
    // });    
    close();
    checkToken();
  };

  new Modal(form.getFormElement(), confirmCallback).render();
 

});

