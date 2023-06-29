import VisitForm from "./makeVisitForm.js";
export default class VisitTherapist extends VisitForm {
    constructor() {
        super();
        this.age = document.createElement('input');
        this.comments = document.createElement('input');
    }
    
    createElements() {
        super.createElements();

        this.additionalInputs = `
            <input type="number" required name="dateOfBirth" placeholder="Date of Birth">
    
        `;
    
        this.form.insertAdjacentHTML('beforeend', this.additionalInputs);
    }    
}
