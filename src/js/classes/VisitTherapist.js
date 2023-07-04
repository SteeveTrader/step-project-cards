import VisitForm from "./visitForm.js";
export default class VisitTherapist extends VisitForm {
    constructor(title) {
        super(title);
    }
    
    createElement() {
        super.createElement();

        this.additionalInputs = `
            <input type="text" required name="doctor"  value="Therapist" disabled="true" placeholder="Therapist">
            <input type="number" required name="dateOfBirth" placeholder="Date of Birth">
    
        `;
    
        this.form.insertAdjacentHTML('beforeend', this.additionalInputs);
    }    
}
