import { urlCards, TOKEN } from "./variables.js";
import { cardsArray } from "./serverRequest.js";

export function createCard() {
  axios.post(urlCards, {
    id: null,
    doctor: 'Кардиолог',
    visitIssue: 'цель визита',
    visitDiscription: 'краткое описание визита',
    visitPrority: 'выпадающее поле - срочность',
    fullName: 'ФИО',
    bloodPreasure: 'обычное давление',
    bodyIndex: 'индекс массы тела',
    history: 'перенесенные заболевания сердечно-сосудистой системы',
    age: 23,
    lastVisit: 'дата последнего посещения',
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`
    }
  })
    .then(response => {
      cardsArray.push(response.data.id);
console.log(cardsArray);
    })
    .catch(error => {
      console.log(error);
    });
}