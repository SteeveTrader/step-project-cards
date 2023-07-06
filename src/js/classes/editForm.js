import Form from "./form.js";

export default class EditForm extends Form {
  constructor(title, editItem) {
    super(title);
    this.editItem = editItem;
    this.keys = Object.keys(this.editItem);
    this.values = Object.values(this.editItem);
  }

  editElement() {
    this.additionalInputs = '';

    this.keys.forEach((key, index) => {
      const value = this.values[index];
      if (key === 'id') {
        this.additionalInputs += `
          <p name="${key}" value="${value}">ID: ${value}</p>
        `;
      } else {
        this.additionalInputs += `
          <label>
            ${key}
            <input type="text" required name="${key}" value="${value}" placeholder="${key}">
          </label>
        `;
      }
    });

    this.form.insertAdjacentHTML('beforeend', this.additionalInputs);
  }

  getEditElement() {
    this.editElement();
    return this.form;
  }
}
  
