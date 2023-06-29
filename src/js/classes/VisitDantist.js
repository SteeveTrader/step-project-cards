import VisitForm from "./makeVisitForm.js";
export default class VisitDentist extends VisitForm {
  constructor() {
    super();
    this.date = document.createElement("input");
    this.comments = document.createElement("input");
  }

  createElements() {
    super.createElements();

    this.additionalInputs = `
        <input type="date" required name="lastVisit" placeholder="Last Visit">

    `;

    this.form.insertAdjacentHTML('beforeend', this.additionalInputs);
  }
}
