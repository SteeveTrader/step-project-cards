import instance from "./instance.js";


export const fetchData = async () => {  
  try {
    return await instance.get("/");
  } catch(err) {
    console.log('Error', err);
}

};
 



// export function renderEmptyArray() {

//   const existingNotification = document.querySelector('.notificationEmptyArray');
//   if (existingNotification) {
//     return;
//   }

//   const notificationEmptyArray = document.createElement('div');
//   notificationEmptyArray.innerText = "No items have been added";
//   notificationEmptyArray.classList.add('notificationEmptyArray');
//   container.append(notificationEmptyArray);
// }

// export function renderArray(cardsArray) {

// }

