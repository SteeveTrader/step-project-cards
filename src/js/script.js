import Modal from './classes/Modal.js';
import VisitForm from './classes/VisitForm.js';
import VisitCardiologist from './classes/VisitCardiologist.js';
import VisitDantist from './classes/VisitDantist.js';
import VisitTherapist from './classes/VisitTherapist.js';
import Visit from './classes/Visit.js';
import CardHtml from './classes/cardHtml.js';
import loginFunction from './API/logInFunction.js';
import LoginForm from './classes/loginForm.js';
import Form from './classes/form.js';
import checkToken from './functions/checkToken.js';

checkToken();

const cardContainer = document.querySelector(".reserwation__card-container");
const loginBtn = document.querySelector('.js-login-btn');
const addElemBtn = document.querySelector('.js-create-elem-btn');


  // const modal = new Modal();
  // const modalContainer = document.getElementById('modalContainer');
  // modalContainer.appendChild(modal.render());

  //   const visit = new Visit();
  //   const visitFormContainer = document.getElementById('visitForm');
  //   const visitFormHTML = visit.render().outerHTML;
  //   visitFormContainer.innerHTML = visitFormHTML;

  loginBtn.addEventListener("click", () => {
    const form = new LoginForm("Login");

    const confirmCallback = async (close) => {
        const body = form.getValues();
        const { data } = await loginFunction(body);
        console.log(data);
        localStorage.setItem("token", data);
        close();
        checkToken();
    };

    new Modal(form.getFormElement(), confirmCallback).render();

});