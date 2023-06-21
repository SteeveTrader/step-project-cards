import VisitForm from "./VisitForm.js";

export default class VisitCardiologist extends VisitForm {
  constructor() {
    super();
    this.age = document.createElement("input");
    this.pressure = document.createElement("input");
    this.bodyIndex = document.createElement("input");
    this.disease = document.createElement("input");
    this.comments = document.createElement("input");
  }

  createElements() {
    super.createElements();

    this.age.setAttribute("name", "age");
    this.pressure.setAttribute("name", "bp");
    this.bodyIndex.setAttribute("name", "bi");
    this.disease.setAttribute("name", "disease");
    this.comments.setAttribute("name", "comments");

    this.age.className.add("visit-options");
    this.age.placeholder = "Вік";
    this.age.required = true;
    this.visitWrapper.insertAdjacentElement("beforeend", this.age);

    this.pressure.className.add("visit-options");
    this.pressure.placeholder = "Кров`яний тиск";
    this.pressure.required = true;
    this.visitWrapper.insertAdjacentElement("beforeend", this.pressure);

    this.bodyIndex.className.add("visit-options");
    this.bodyIndex.placeholder = "ІМТ";
    this.bodyIndex.required = true;
    this.visitWrapper.insertAdjacentElement("beforeend", this.bodyIndex);

    this.disease.className.add("visit-options");
    this.disease.placeholder = "Захворбвання";
    this.disease.required = true;
    this.visitWrapper.insertAdjacentElement("beforeend", this.disease);

    this.comments.classList.add("visit-options");
    this.icomments.placeholder = "Комментарі";
    this.visitWrapper.insertAdjacentElement("beforeend", this.comments);
  }
};
