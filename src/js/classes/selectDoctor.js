import Form from "./form.js";

export default class SelectDoctor extends Form {
    constructor(title) {
        super(title);
        this.select = document.createElement('select');

    }
    createElement() {
        super.createElement();

        this.select.className = 'modal__select';
        this.select.setAttribute("name", "doctor");
        const options = `
                <option value="" selected="">Chose a doctor</option>
                <option value="cardiologist">Cardiologist</option>
                <option value="dentist">Dentist</option>
                <option value="therapist">Therapist</option>
        `;

        this.select.innerHTML =  options;
        this.form.append(this.select);
    }

}