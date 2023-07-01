import urlCards from "./variables.js";

const checkBtn = document.querySelector('.checkArray');
const container = document.querySelector('.container');
checkBtn.addEventListener("click", fetchData)

export function fetchData() {
  axios.get(urlCards, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': Bearer `${localStorage.getItem('tokenKey')}`
    }
  })
    .then(response => {
      const cardsArray = response.data;
      console.log(cardsArray);
      if (cardsArray.length == 0) {
        renderEmptyArray();
      } else {
        const existingNotification = document.querySelector('.notificationEmptyArray');
        if (existingNotification) {
          existingNotification.remove();
        }
        renderArray(cardsArray);
      }
    })
    .catch(error => {
      if (error.response) {
        console.log(error.message);
      } else {
        console.log(error.message);
      }
    });
}

export function renderEmptyArray() {

  const existingNotification = document.querySelector('.notificationEmptyArray');
  if (existingNotification) {
    return;
  }

  const notificationEmptyArray = document.createElement('div');
  notificationEmptyArray.innerText = "No items have been added";
  notificationEmptyArray.classList.add('notificationEmptyArray');
  container.append(notificationEmptyArray);
}

export function renderArray(cardsArray) {

}