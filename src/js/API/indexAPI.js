import { renderEmptyArray } from "./serverRequest.js";
import { renderArray } from "./serverRequest.js";
import { fetchData } from "./serverRequest.js";
import { createCard } from "./createCard.js";
import { deleteAllCards } from "./removeCard.js";

const container = document.querySelector('.container');
// запит на сервер
const checkBtn = document.querySelector('.checkArray');
checkBtn.addEventListener("click", fetchData)

// сторення картки
const createCardBtn = document.createElement('button');
createCardBtn.innerText = 'Create Card';
container.append(createCardBtn);
createCardBtn.addEventListener('click', createCard);

// видалення усіх карток
const removeAllCardBtn = document.createElement('button');
removeAllCardBtn.innerText = 'Remove All Cards';
container.append(removeAllCardBtn);
removeAllCardBtn.addEventListener('click', deleteAllCards);