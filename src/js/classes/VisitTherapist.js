import VisitForm from "./Visit.js";
export default class VisitTherapist extends VisitForm {
  constructor() {
    super();
    this.age = document.createElement('input');
    this.comments = document.createElement('input');
  }

  createElements() {
    super.createElements();
    this.age.setAttribute('name', 'age');
    this.agege.classList.add('visit-options');
    this.age.placeholder = 'Вік';
    this.age.required = true;
    this.visitWrapper.insertAdjacentElement('beforeend', this.age);

    this.comments.classList.add('doctor__input');
    this.comments.placeholder = 'Комментарии';
    this.comments.name = 'comments';
    this.visitWrapper.insertAdjacentElement('beforeend', this.comments);
  }
};