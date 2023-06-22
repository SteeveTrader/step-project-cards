import VisitForm from "./Visit.js";
export default class VisitDantist extends VisitForm {
  constructor() {
    super();
    this.date = document.createElement("input");
    this.comments = document.createElement("input");
  }

  createElements() {
    super.createElements();
    this.date.setAttribute("name", "data");
    this.date.classList.add("visit-options");
    this.date.required = true;
    this.date.placeholder = "Дата останнього візиту";
    this.date.name = "lastVisit";
    this.visitWrapper.insertAdjacentElement("beforeend", this.inputDate);

    this.comments.classList.add("visit-options");
    this.ccomments.placeholder = "Комментарі";
    this.comments.name = "comments";
    this.visitWrapper.insertAdjacentElement("beforeend", this.comments);
  }
};