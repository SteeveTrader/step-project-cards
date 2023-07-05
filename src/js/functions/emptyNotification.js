import CardsData from "./cardsData.js";


export default function emptyNotification() {
  const notificationEmptyArray = document.createElement("div");
  notificationEmptyArray.classList.add("empty")
  notificationEmptyArray.innerText = " No items added";
  if (!notificationEmptyArray.contains) {
    
  }


  CardsData.length == 0 ? document.getElementById('modalContainer').append(notificationEmptyArray) : notificationEmptyArray.remove();

}
