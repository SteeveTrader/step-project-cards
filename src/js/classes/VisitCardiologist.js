import VisitForm from "./makeVisitForm.js";

export default class VisitCardiologist extends VisitForm {
  constructor(title) {
    super(title);
    
  }

  createElement() {
    // super.createElement();

    // this.form.insertAdjacentHTML('beforeend', this.visitInpputs);   

    this.additionalInputs = `
        <input type="text" required name="age" placeholder="Age">
        <input type="text" required name="blood-press" placeholder="Blood pressure">
        <input type="text" required name="body-index" placeholder="Body Index">
        <input type="text" required name="diseases" placeholder="Сardiovascular diseases">
    `;

    this.form.insertAdjacentHTML('beforeend', this.additionalInputs);

  }
}

