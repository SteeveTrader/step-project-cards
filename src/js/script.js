import Modal from './classes/modal.js';
import SelectDoctor from './classes/selectDoctor.js';
import VisitCardiologist from './classes/visitCardiologist.js';
import VisitDentist from './classes/visitDantist.js';
import VisitTherapist from './classes/visitTherapist.js';
import CardHtml from './classes/cardHtml.js';
import loginFunction from './API/logInFunction.js';
import createCardAPI from './API/createCard.js';
import LoginForm from './classes/loginForm.js';
import fetchData from './API/serverRequest.js';
import cardFilter from "./functions/filter.js";
import checkToken from './functions/checkToken.js';
import CardsData from './functions/cardsData.js';
import deleteCard from './functions/removeCard.js';
import editCardFunc from './functions/editCardFunction.js';
import emptyNotification from './functions/emptyNotification.js';



const cloneArray = (arr) => {

  CardsData.splice(0, CardsData.length, ...arr);

};

if (localStorage.getItem('token')) {


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
      deleteCard();
      editCardFunc();
      emptyNotification();
    });
  }
 else {
  

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
emptyNotification();
    };

    new Modal(form.getFormElement(), confirmCallback).render();

    
  });
}


const addElemBtn = document.querySelector('.js-create-elem-btn');
addElemBtn.addEventListener("click", (event) => {
  event.preventDefault();
  emptyNotification();
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
        
       
        const {
          data
        } = await createCardAPI(body);


        CardsData.push(data);

        const {
          description,
          doctor,
          fullName,
          id,
          purpose,
          urgency
        } = data;
        
        new CardHtml(purpose, description, urgency, fullName, doctor, id).render();

        deleteCard();
        editCardFunc();
        close();
        checkToken();
        emptyNotification();
      };
      
      new Modal(form.getFormElement(), confirmCallback).render();
    } else if (selectedDoctor === 'dentist') {
      const form = new VisitDentist("Dentist");

      const confirmCallback = async (close) => {
        const body = form.getValues();

       
        const {
          data
        } = await createCardAPI(body);
        CardsData.push(data);
        



        const {
          description,
          doctor,
          fullName,
          id,
          purpose,
          urgency
        } = data;

        new CardHtml(purpose, description, urgency, fullName, doctor, id).render();
        deleteCard();
        editCardFunc();
        emptyNotification();
        close();
        checkToken();
      };

      new Modal(form.getFormElement(), confirmCallback).render();
    } else if (selectedDoctor === 'therapist') {
      const form = new VisitTherapist("Therapist");

      const confirmCallback = async (close) => {
        const body = form.getValues();

       
        const {
          data
        } = await createCardAPI(body);
        CardsData.push(data);


        const {
          description,
          doctor,
          fullName,
          id,
          purpose,
          urgency
        } = data;
        new CardHtml(purpose, description, urgency, fullName, doctor, id).render();

        deleteCard();
        editCardFunc();
        close();
        checkToken();
        emptyNotification();
      };

      new Modal(form.getFormElement(), confirmCallback).render();
    }
  });
});

deleteCard();
editCardFunc();
cardFilter();
checkToken();



