import VisitForm from "./visitForm.js";
export default class VisitDentist extends VisitForm {
  constructor(title) {
    super(title);
  }

  createElement() {
    super.createElement();

    this.additionalInputs = `
    <input type="text" required name="doctor"  value="Dentist" disabled="true" placeholder="Dentist">
        <input type="date" required name="lastVisit" placeholder="Last Visit">

    `;

    this.form.insertAdjacentHTML('beforeend', this.additionalInputs);
  }
}
