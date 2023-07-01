import VisitForm from "./makeVisitForm.js";
export default class VisitDentist extends VisitForm {
  constructor(title) {
    super(title);
  }

  createElements() {
    super.createElements();

    this.additionalInputs = `
        
        <input type="date" required name="lastVisit" placeholder="Last Visit">

    `;

    this.form.insertAdjacentHTML('beforeend', this.additionalInputs);
  }
}
