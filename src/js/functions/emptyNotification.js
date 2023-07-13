import CardsData from "./cardsData.js";

export default function emptyNotification() {

  const notificationEmptyArray = document.querySelector(".reserwation__container-empty-array");
  CardsData.length === 0 ? notificationEmptyArray.style.display = "block" : notificationEmptyArray.style.display = "none";
}

