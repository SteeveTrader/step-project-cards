import Modal from "./Modal.js";

export default class VisitModal extends Modal {
    constructor(elem, confirmFunction) {
        super(elem, confirmFunction);
        this.select = document.createElement('select');
      }

    createElements() {
        super.createElements();
        this.select.className = 'modal-select';
        this.select.setAttribute("name", "doctor");
        const options = `
                <option value="" selected="">Chose a doctor</option>
                <option value="cardiologist">Cardiologist</option>
                <option value="dantist">Dantist</option>
                <option value="therapist">Therapist</option>
        `;

        this.select.innerHTML =  options;
        this.modalContentWrapper.prepend(this.select);
    }
    
}