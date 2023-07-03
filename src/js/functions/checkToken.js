import CardsData from "./cardsData.js";
import CardHtml from "../classes/CardHtml.js";

const checkToken = () => {
    const token = localStorage.getItem('token');

    if (token) {
        const loginBtn = document.querySelector('.js-login-btn');
        const createElemBtn = document.querySelector('.js-create-elem-btn');

        loginBtn.style.display = 'none';
        createElemBtn.style.display = 'inline';

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
            console.log(CardsData);
          });

        // if localstorage token === true  => CardsData.forEach(el.......
        // Отримати з сервера і відмалювати всю інфу
    }
};

export default checkToken;
