import Modal from './classes/Modal.js';
import SelectDoctor from './classes/selectDoctor.js';
import VisitCardiologist from './classes/VisitCardiologist.js';
import VisitDentist from './classes/VisitDantist.js';
import VisitTherapist from './classes/VisitTherapist.js';
import CardHtml from './classes/CardHtml.js';
import loginFunction from './API/logInFunction.js';
import createCardAPI from './API/createCard.js';
import LoginForm from './classes/LoginForm.js';
import { fetchData } from './API/serverRequest.js';
import cardFilter from "./functions/filter.js";
import checkToken from './functions/checkToken.js';
import loginButtonClick from './functions/cardsData.js';
cardFilter();
checkToken();

const loginBtn = document.querySelector('.js-login-btn');
const addElemBtn = document.querySelector('.js-create-elem-btn');
loginBtn.addEventListener("click", loginButtonClick);

// const loginBtn = document.querySelector('.js-login-btn');
// const addElemBtn = document.querySelector('.js-create-elem-btn');

// loginBtn.addEventListener("click", async () => {
//   const form = new LoginForm("Log In");

//   const confirmCallback = async (close) => {
//     const body = form.getValues();

//     const { data } = await loginFunction(body);
//     localStorage.setItem("token", data);

//     const { data: resp } = await fetchData();
//     const cloneArray =[...resp];
//     console.log(cloneArray);

//     cloneArray.forEach(el => {
//       const { description, doctor, fullname, id, purpose, urgency } = el;
//       let card = new CardHtml(purpose, description, urgency, fullname, doctor);
//       card.render();
//     });
//     close();
//     checkToken();
//   };

//   new Modal(form.getFormElement(), confirmCallback).render();
// });

addElemBtn.addEventListener("click", () => {
  const form = new SelectDoctor("Create Visit");

  const confirmCallback = async (close) => {
    const selectedDoctor = form.getSelectedDoctor();

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
    } else if (selectedDoctor === 'dentist') {
      const form = new VisitDentist("Dentist");

      const confirmCallback = async (close) => {
        const body = form.getValues();
        console.log(body);

        const { data } = await createCardAPI(body);
        close();
        checkToken();
      };

      new Modal(form.getFormElement(), confirmCallback).render();
    } else if (selectedDoctor === 'therapist') {
      const form = new VisitTherapist("Therapist");

      const confirmCallback = async (close) => {
        const body = form.getValues();
        console.log(body);

        const { data } = await createCardAPI(body);
        close();
        checkToken();
      };

      new Modal(form.getFormElement(), confirmCallback).render();
    }

    close();
    checkToken();
  };

  new Modal(form.getFormElement(), confirmCallback).render();
});