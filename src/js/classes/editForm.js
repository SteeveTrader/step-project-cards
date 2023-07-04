import Form from "./form.js";

export default class EditForm extends Form {
    constructor(title, editItem) {
        super(title);
        this.editButtons = document.querySelectorAll('.reserwation__edit-btn');
        this.editItem = editItem;
        this.keys = Object.keys(this.editItem);
        this.values = Object.values(this.editItem);
    }
    
    editElement() {
        this.additionalInputs = ``;
    
        this.keys.forEach(key => {
            const value = this.values[key];
            this.additionalInputs += `
                <label>
                    ${key}
                    <input type="text" required name="${key}" value="${value}" placeholder="${key}">
                </label>
            `;
        });
    
        console.log(this.additionalInputs);
        this.form.insertAdjacentHTML('beforeend', this.additionalInputs);
    }

    getEditElement() {
        this.editElement();
        return this.form;
    }

}
