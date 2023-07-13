import Form from "./form.js";

export default class VisitForm extends Form {
    constructor(title) {
        super(title);
        // this.select = document.createElement('select');
        this.additionalContainer = document.createElement('div');

        this.visitInpputs = `
            <form class="mainVisitInfo">
                <h4> Patient info </h4>
                
                <input type="text" required name="purpose" placeholder="Purpose">
                
                <input type="text" required name="description" placeholder="Description">
                
                <select name="urgency" required id="urgency">
                    <option value="">Urgency of Visit</option>
                    <option value="normal">Normal</option>
                    <option value="priority">Priority</option>
                    <option value="urgent">Urgent</option>
                </select>
                
                <input type="text" required name="fullName" placeholder="Full Name"> 
            `;
    }

    createElement() {
        super.createElement();

        this.form.insertAdjacentHTML('beforeend', this.visitInpputs);   

    }



    renderVisit() {
        this.createElement();
        document.querySelector(".reserwation").prepend(this.form);
    }

}


