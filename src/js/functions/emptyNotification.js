import CardsData from "./cardsData.js";
CardsData;

export default function emptyNotification() {
  console.log(CardsData.length);
  const notificationEmptyArray = document.querySelector(".reserwation__container-empty-array")
  CardsData.length === 0 ? notificationEmptyArray.style.display = "block" : notificationEmptyArray.style.display = "none";
}

export default function emptyNotification() {
  console.log(CardsData.length);
  const notificationEmptyArray = document.querySelector(".reserwation__container-empty-array")
  CardsData.length === 0 ? notificationEmptyArray.style.display = "block" : notificationEmptyArray.style.display = "none";
}