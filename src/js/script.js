import Modal from './classes/Modal.js';
import VisitForm from './classes/VisitForm.js';
import VisitCardiologist from './classes/VisitCardiologist.js';
import VisitDantist from './classes/VisitDantist.js';
import VisitTherapist from './classes/VisitTherapist.js';
import CardHtml from './classes/cardHtml.js';
import loginFunction from './API/logInFunction.js';
import LoginForm from './classes/loginForm.js';
import Form from './classes/form.js';
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
        console.log(data);
        localStorage.setItem("token", data);
        close();
        checkToken();
    };
    new Modal(form.getFormElement(), confirmCallback).render();

});

// addElemBtn.addEventListener("click", () => {
//   // const form = new VisitForm("Add Visit");


// });

// submitbtnAddElem.addEventListener("click", () => {

//   // фунція яка збирає дані з форми пушить в масив + вдправка даних на сервер 

//   // потім повертає всі картки з сервера і в serverRewuest функція 
//   // renderEmptyArray() перевіряє чи пустий масив і відмальовує інформацію на сайті або 
//   // або виконує на локальний масив.forEach(elem => {
//   //   new CardHtml("Less", "jhdsfkjdlfsdl", "Hot", "Jhon Doe", "Stan Smith").render();
//   // });

  

//   // new Modal(form.getFormElement(), confirmCallback).render();

// });