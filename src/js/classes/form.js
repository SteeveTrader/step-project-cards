export default class Form {
    constructor(title) {
        this.title = title;
        this.form = document.createElement('form');
        this.formTitle = document.createElement('h3');
        this.select = document.createElement('select');
    }

    createElement() {
        this.form.className = 'input-visit-form';
        this.formTitle.innerText = this.title;
        this.form.prepend(this.formTitle);
    }

    getValues() {
        const inputs = this.form.querySelectorAll('input, select');
        const body = {};

        inputs.forEach(input => {
            body[input.name] = input.value;
        });

        return body;
    }

    render() {
        this.createElement();
        document.querySelector(".reserwation").append(this.form);
    }

    getFormElement() {
        this.createElement();
        return this.form;
    }
}

